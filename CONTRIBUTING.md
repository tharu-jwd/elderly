# Contributing to Elderly

Thank you for your interest in contributing to ElderCare Connect! This platform handles sensitive healthcare data, so we maintain strict security and quality standards.

## Getting Started

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

## Security First

**CRITICAL**: This platform handles sensitive healthcare data. Every contribution must prioritize security.

### Security Requirements

- Input validation using Zod schemas
- SQL injection prevention (Prisma only)
- XSS protection compliance
- Authentication/authorization checks
- Rate limiting implementation
- Secure error handling (no sensitive data exposure)
- OWASP Top 10 compliance

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


### Before Contributing

1. Review [SECURITY.md](./SECURITY.md)
2. Understand our security architecture
3. Test security implications of your changes
4. Never commit secrets or sensitive data

## Contribution Workflow

### 1. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Develop

#### Code Style

- Follow existing TypeScript patterns
- Use strict type checking
- Implement comprehensive error handling
- Add input validation for all user inputs

#### Testing Requirements

- Unit tests for all new functions
- Integration tests for API endpoints
- E2E tests for user workflows
- Security validation tests

#### Documentation

- Update README if adding features
- Document API changes
- Include security considerations
- Add inline documentation for complex logic

### 3. Pre-Commit Checklist

Before committing, ensure:

```bash
# Code quality
npm run lint          # Fix all linting issues
npm run type-check    # Pass TypeScript checks
npm run format        # Format code consistently

# Testing
npm run test:unit     # Pass all unit tests
npm run test:e2e      # Pass E2E tests (if applicable)

# Security
npm audit             # No high/critical vulnerabilities
npm run build         # Successful production build
```

### 4. Pull Request 

1. **Create PR** against `main` branch
2. **Tick out the PR template** reflecting the changes made 
3. **Ensure CI pipeline passes** (all checks green)
4. **Request review** from maintainers
5. **Address feedback** and await the merge from us
   
#### PR Requirements Template

- [ ] Descriptive title and summary
- [ ] Test coverage maintained/improved
- [ ] Documentation updated
- [ ] Security impact assessment
- [ ] No breaking changes (or properly documented)
- [ ] Links back to issue using `Fixes #issuenum`

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

## Testing Guidelines

### Unit Tests

```bash
npm run test:unit
```

- Test all business logic
- Mock external dependencies
- Cover edge cases and error conditions
- Maintain 80%+ coverage

### Integration Tests

```bash
npm run test:integration
```

- Test API endpoints end-to-end
- Validate authentication flows
- Test database interactions
- Verify security middleware

### E2E Tests

```bash
npm run test:e2e
```

- Test complete user workflows
- Validate UI interactions
- Test across multiple browsers
- Include accessibility checks

## Security Contributions

### Vulnerability Reports

**DO NOT** report security vulnerabilities through GitHub issues.

Email: elderlybyforlo@gmail.com

Include:

- Detailed vulnerability description
- Steps to reproduce
- Potential impact assessment
- Suggested mitigation (if known)

### Security Enhancements

When contributing security improvements:

1. Research industry best practices
2. Consider healthcare compliance requirements
3. Test thoroughly in isolated environment
4. Document security implications
5. Request security team review

## Code Review Process

### For Contributors

- Respond to feedback within 48 hours
- Make requested changes promptly
- Test changes thoroughly
- Keep PRs focused and atomic

### For Reviewers

- Review within 72 hours
- Check security implications
- Verify test coverage
- Validate documentation updates
- Test locally when needed

## Contribution Areas

### High Priority

- Security enhancements
- Accessibility improvements
- Performance optimizations
- Healthcare compliance features

### Medium Priority

- UI/UX improvements
- Additional API endpoints
- Integration features
- Monitoring enhancements

### Documentation

- API documentation
- Security guides
- Deployment instructions
- User guides

## What Not to Contribute

- Code that compromises security
- Features without proper testing
- Breaking changes without discussion
- Functionality that violates healthcare privacy
- Dependencies with known vulnerabilities

## Getting Help

- **General questions**: Open a GitHub discussion
- **Bug reports**: Create an issue with reproduction steps
- **Feature requests**: Open an issue with detailed requirements
- **Security concerns**: Email our team directly

## Issue Guidelines

### Bug Reports

Include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots/logs (sanitized of sensitive data)

### Feature Requests

Include:

- Problem statement
- Proposed solution
- Alternative considerations
- Security implications
- Healthcare compliance considerations

## Quick Commands

```bash
# Development
npm run dev              # Start development server
npm run db:studio        # Open database admin

# Quality Assurance
npm run lint            # Check code style
npm run type-check      # TypeScript validation
npm run test            # Run all tests
npm run format          # Format code

# Database
npm run db:migrate      # Apply migrations
npm run db:reset        # Reset database
npm run db:seed         # Seed test data

# Production
npm run build           # Production build
docker-compose up       # Start with Docker
```

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for significant contributions
- GitHub contributor insights

---

**Together, we're building a secure platform that helps vulnerable populations access quality care. Every contribution matters.**
