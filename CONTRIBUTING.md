# Contributing to Elderly

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

### Before Contributing

1. Review [SECURITY.md](./SECURITY.md)
2. Understand our security architecture
3. Test security implications of your changes
4. Never commit secrets or sensitive data

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

## Development Commands

### Code Quality

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

### Testing

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# All tests
npm run test
```

### Database

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

### Docker

```bash
# Development
docker-compose up --build

# Production build
docker build -t elderly .
docker run -p 3000:3000 elderly
```

## Contribution Workflow

**Note**: As a small team project, forking is not required. Work directly on feature branches in the main repository.

### 1. Create Feature Branch

Always create new branches from the latest main branch:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Development Standards

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

### 4. Commit Standards

#### Commit Message Format

```
type(scope): description

Examples:
feat(auth): add account lockout mechanism
fix(api): resolve rate limiting bypass
security(middleware): implement CSP headers
```

### 5. Pull Request Standards

**Important**: Each PR should address only ONE issue. If you need to work on multiple issues, create separate PRs.

#### PR Title Format

Mention the addressing issue at the end in ()

```
feat: add caregiver verification system (fixes #123)
fix: resolve authentication timeout issue (fixes #456)
security: implement rate limiting (fixes #789)
```

#### PR Description Format

Include:

- **Summary**: Brief description of changes
- **Security Impact**: Assessment of security implications if any
- **Testing**: Comprehensive testing checklist
- **Breaking Changes**: Document any breaking changes
- **Issue Reference**: Mention the addressing issue `Fixes #issueno` at the end

Then tick the checklist provided below.

- [ ] Descriptive title with issue reference
- [ ] Comprehensive description
- [ ] Documentation updated
- [ ] Test coverage maintained/improved
- [ ] Security impact assessment
- [ ] No breaking changes (or properly documented)
- [ ] Link to issue using `Fixes #123`

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

## Getting Help

- **General questions**: Open a GitHub discussion
- **Bug reports**: Create an issue with reproduction steps
- **Feature requests**: Open an issue with detailed requirements
- **Security concerns**: Email our team directly

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for significant contributions
- GitHub contributor insights

---

**We're building a secure platform that helps vulnerable populations access quality care. Every contribution matters.**
