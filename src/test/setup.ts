import { beforeAll, afterAll, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

beforeAll(() => {
  // Setup test environment
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  // Cleanup test environment
});
