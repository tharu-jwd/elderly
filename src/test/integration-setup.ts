import { beforeAll, afterAll } from 'vitest';

// Set test database URL if not provided
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'postgresql://postgres:test@localhost:5432/elderly_test';
}

// Global test setup for integration tests
beforeAll(async () => {
  // Any global setup can go here
});

afterAll(async () => {
  // Any global cleanup can go here
});
