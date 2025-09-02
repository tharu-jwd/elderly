# Elderly

Enterprise-grade elderly care platform connecting elders with verified caregivers. Built with security-first principles and OWASP Top 10 compliance.

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript (strict mode)
- **UI**: Bootstrap 5+ with React Bootstrap components
- **Database**: Prisma ORM with PostgreSQL (production) / SQLite (development)
- **Authentication**: NextAuth.js with Google OAuth
- **Containerization**: Docker + Docker Compose
- **Testing**: Jest/Vitest + React Testing Library + Playwright
- **CI/CD**: GitHub Actions with comprehensive security scanning

## Project Structure

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

## Additional Documentation

- [API Documentation](./docs/api.md)
- [Security Implementation](./docs/security.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guidelines](./docs/contributing.md)

## Support

For issues, questions, or contributions, please open an issue in the GitHub repository.

---
