# ElderCare Connect

Enterprise-grade elderly care platform connecting elders with verified caregivers. Built with security-first principles and OWASP Top 10 compliance.

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript (strict mode)
- **UI**: Bootstrap 5+ with React Bootstrap components
- **Database**: Prisma ORM with PostgreSQL (production) / SQLite (development)
- **Authentication**: NextAuth.js with Google OAuth
- **Containerization**: Docker + Docker Compose
- **Testing**: Jest/Vitest + React Testing Library + Playwright
- **CI/CD**: GitHub Actions with comprehensive security scanning

## Quick Start

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

### Development Setup

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd elderly
npm install
```

2. **Set up environment variables:**

```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Start with Docker (Recommended):**

```bash
docker-compose up --build
```

4. **Or start locally:**

```bash
npm run db:migrate
npm run dev
```

5. **Access the application:**

- Application: http://localhost:3000
- Database Studio: `npm run db:studio`

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   ├── auth/              # Authentication pages
│   └── dashboard/         # User dashboards
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                  # Utilities and configurations
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Database client
│   └── validations.ts    # Zod schemas
├── types/                # TypeScript type definitions
└── test/                 # Test utilities
```

## Testing

```bash
# Run all tests
npm test

# Unit tests with coverage
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

## Database

```bash
# Generate Prisma client
npx prisma generate

# Create migration
npm run db:migrate

# Reset database
npm run db:reset

# Open database studio
npm run db:studio
```

## Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run type-check

# Format code
npm run format

# Check formatting
npm run format:check
```

## Docker

### Development

```bash
docker-compose up --build
```

### Production

```bash
docker build -t elderly-care .
docker run -p 3000:3000 elderly-care
```

## User Roles

### Elder (Care Recipient)

- Create care requests
- Browse and select caregivers
- Manage medical information
- Emergency contacts management

### Caregiver

- Browse care requests
- Apply for care opportunities
- Manage availability
- Track earnings

### Admin

- User verification
- Platform oversight
- Analytics and reporting

## Authentication

- **NextAuth.js** with JWT strategy
- **Google OAuth** integration
- **Credentials-based** authentication
- **Account lockout** after 5 failed attempts (15-minute lockout)
- **Strong password requirements**

## Security Implementation

## Security Features

- **Enterprise-level security** with zero tolerance for vulnerabilities
- **OWASP Top 10 compliance** - all vulnerabilities addressed
- **Input validation & sanitization** on ALL endpoints with Zod
- **SQL injection prevention** with Prisma parameterized queries
- **XSS protection** with Content Security Policy headers
- **CSRF protection** enabled
- **Rate limiting** on all API endpoints
- **Secure session management** (httpOnly, secure, sameSite cookies)
- **Data encryption** at rest and in transit (TLS 1.3 minimum)
- **Security headers** (HSTS, X-Frame-Options, X-Content-Type-Options)
- **Account lockout** after failed login attempts
- **Password security** (bcrypt hashing, strong password requirements)

### Input Validation

All API endpoints use Zod schemas for validation:

- `loginSchema` - Email and password validation
- `registerSchema` - Registration with role selection
- `elderProfileSchema` - Elder profile information
- `caregiverProfileSchema` - Caregiver profile information

### Rate Limiting

- **API routes**: 100 requests per minute
- **Auth endpoints**: 20 requests per minute
- **IP-based tracking** with in-memory store

### Security Headers

Implemented in `middleware.ts` and `next.config.ts`:

- Content Security Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security (production)
- X-XSS-Protection

## Deployment

### Environment Variables (Production)

```bash
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="secure-secret-key"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

### CI/CD Pipeline

GitHub Actions automatically:

- Runs security scans (CodeQL, npm audit, Snyk)
- Executes full test suite
- Checks code quality (ESLint, TypeScript)
- Builds Docker image
- Validates deployment readiness

## Monitoring & Observability

- **Error tracking** ready (Sentry integration points)
- **Performance monitoring** with Next.js analytics
- **Database monitoring** with Prisma
- **Security event logging**

### Branch Protection

- No direct pushes to `main`
- Require PR reviews
- All status checks must pass
- Up-to-date branch required

## 📚 Additional Documentation

- [API Documentation](./docs/api.md)
- [Security Implementation](./docs/security.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guidelines](./docs/contributing.md)

## 📞 Support

For issues, questions, or contributions, please open an issue in the GitHub repository.

---
