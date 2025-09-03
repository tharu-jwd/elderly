## Summary

Brief description of changes made in this PR.

## Related Issue

<!-- IMPORTANT: Each PR must address only ONE issue. Multiple issues require separate PRs. -->

Fixes #

## PR Title Format Verification

<!-- Verify your PR title follows the required format -->

**Required Format:** `type: description (fixes #issue-number)`

Examples:

- `feat: add caregiver verification system (fixes #123)`
- `fix: resolve authentication timeout issue (fixes #456)`
- `security: implement rate limiting (fixes #789)`

- [ ] PR title follows the required format above

## Changes Made

<!-- List specific changes with checkboxes -->

- [ ] Added new feature X
- [ ] Updated component Y
- [ ] Fixed bug in Z

## Security Impact

<!-- REQUIRED: This platform handles sensitive healthcare data. Assess security implications. -->

- [ ] No security implications
- [ ] Security enhancements included
- [ ] Potential security concerns (describe below)

**Security Details:**

**Security Requirements Checklist:**

- [ ] Input validation using Zod schemas
- [ ] SQL injection prevention (Prisma only)
- [ ] XSS protection compliance
- [ ] Authentication/authorization checks
- [ ] Rate limiting implementation
- [ ] Secure error handling (no sensitive data exposure)
- [ ] OWASP Top 10 compliance

## Pre-Commit Quality Checks

<!-- REQUIRED: All must pass before submitting PR -->

**Code Quality:**

- [ ] `npm run lint` - All linting issues fixed
- [ ] `npm run type-check` - TypeScript checks pass
- [ ] `npm run format` - Code formatted consistently

**Security:**

- [ ] `npm audit` - No high/critical vulnerabilities
- [ ] `npm run build` - Production build succeeds

## Testing

<!-- REQUIRED: Comprehensive testing checklist -->

**Unit & Integration Tests:**

- [ ] `npm run test:unit` - All unit tests pass
- [ ] Unit tests added/updated for new functionality
- [ ] Integration tests pass locally

**End-to-End Testing:**

- [ ] `npm run test:e2e` - E2E tests pass (if applicable)
- [ ] E2E tests cover new user workflows
- [ ] Manual testing completed

**Security Testing:**

- [ ] Security validation tests included
- [ ] Input validation tested with edge cases
- [ ] Authentication/authorization flows tested

## Breaking Changes

<!-- Check one -->

- [ ] No breaking changes
- [ ] Breaking changes (describe below and update migration guide)

**Breaking Change Details:**

## Type of Change

<!-- Check all that apply -->

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Security enhancement
- [ ] Performance improvement
- [ ] Documentation update
- [ ] Refactoring (no functional changes)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)

## Development Standards Compliance

<!-- Verify adherence to contribution standards -->

**Code Style:**

- [ ] Follows existing TypeScript patterns
- [ ] Uses strict type checking
- [ ] Implements comprehensive error handling
- [ ] Adds input validation for all user inputs

**Documentation:**

- [ ] README updated (if adding features)
- [ ] API changes documented
- [ ] Security considerations included
- [ ] Inline documentation for complex logic

## Screenshots (if applicable)

<!-- Add screenshots for UI changes -->

## Comprehensive Checklist

<!-- ALL boxes must be checked before requesting review -->

**Code Quality & Standards:**

- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Code is commented where necessary
- [ ] TypeScript strict mode compliance
- [ ] No new linting errors introduced

**Testing & Validation:**

- [ ] Tests added that prove fix is effective or feature works
- [ ] New and existing unit tests pass locally
- [ ] Test coverage maintained or improved
- [ ] Security validation completed

**Documentation & Communication:**

- [ ] Documentation updated (README, API docs, etc.)
- [ ] Security implications assessed and documented
- [ ] Breaking changes properly documented (if any)

**Healthcare Platform Requirements:**

- [ ] Healthcare compliance considerations addressed
- [ ] Performance impact assessed
- [ ] Accessibility considerations addressed
- [ ] Privacy protection measures verified

**Issue Management:**

- [ ] Links to exactly ONE issue using `Fixes #123`
- [ ] Issue requirements fully addressed
- [ ] No scope creep beyond the linked issue

## Additional Notes

<!-- Any additional information for reviewers -->

---

**Security Notice:** This platform handles sensitive healthcare data. Every change must maintain enterprise-grade security standards and comply with healthcare privacy regulations.
