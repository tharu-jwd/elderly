import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const rateLimitMap = new Map();

function rateLimit(ip: string, limit: number = 10, windowMs: number = 60000) {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip).filter((time: number) => time > windowStart);

  if (requests.length >= limit) {
    return false;
  }

  requests.push(now);
  rateLimitMap.set(ip, requests);
  return true;
}

export default withAuth(
  async function middleware(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? '127.0.0.1';

    // Rate limiting for API routes
    if (req.nextUrl.pathname.startsWith('/api/')) {
      if (!rateLimit(ip, 100, 60000)) {
        // 100 requests per minute
        return new NextResponse('Too Many Requests', { status: 429 });
      }
    }

    // Rate limiting for auth endpoints (stricter)
    if (req.nextUrl.pathname.startsWith('/api/auth/')) {
      if (!rateLimit(ip + '-auth', 20, 60000)) {
        // 20 auth requests per minute
        return new NextResponse('Too Many Requests', { status: 429 });
      }
    }

    const response = NextResponse.next();

    // Security headers
    response.headers.set('X-DNS-Prefetch-Control', 'off');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // HSTS in production
    if (process.env.NODE_ENV === 'production') {
      response.headers.set(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload'
      );
    }

    // CSP
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://accounts.google.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://accounts.google.com;
      frame-src https://accounts.google.com;
    `
      .replace(/\s+/g, ' ')
      .trim();

    response.headers.set('Content-Security-Policy', csp);

    return response;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Public routes
        if (
          pathname.startsWith('/auth/') ||
          pathname === '/' ||
          pathname.startsWith('/api/auth/')
        ) {
          return true;
        }

        // Protected routes require authentication
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public/).*)'],
};
