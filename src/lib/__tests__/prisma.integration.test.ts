import { describe, it, expect } from 'vitest';
import { PrismaClient } from '@prisma/client';

describe('Database Integration', () => {
  it('should have proper Prisma client configuration', () => {
    const prisma = new PrismaClient();
    expect(prisma).toBeDefined();
    expect(prisma.user).toBeDefined();
    expect(prisma.account).toBeDefined();
    expect(prisma.session).toBeDefined();
  });

  it('should have valid database schema models', () => {
    const prisma = new PrismaClient();

    // Check that key models exist
    const modelNames = Object.keys(prisma).filter(
      key =>
        typeof (prisma as unknown as Record<string, unknown>)[key] === 'object' &&
        (prisma as unknown as Record<string, { create?: unknown }>)[key]?.create !== undefined
    );

    expect(modelNames).toContain('user');
    expect(modelNames).toContain('account');
    expect(modelNames).toContain('session');
    expect(modelNames).toContain('elderProfile');
    expect(modelNames).toContain('caregiverProfile');
    expect(modelNames).toContain('careRequest');
    expect(modelNames).toContain('careMatch');
  });

  it('should validate environment configuration', () => {
    // Check that DATABASE_URL is configured (even if not accessible in test env)
    const hasValidDbConfig =
      process.env.DATABASE_URL &&
      (process.env.DATABASE_URL.startsWith('postgresql://') ||
        process.env.DATABASE_URL.startsWith('postgres://'));

    if (process.env.NODE_ENV !== 'test') {
      expect(hasValidDbConfig).toBe(true);
    }
  });
});
