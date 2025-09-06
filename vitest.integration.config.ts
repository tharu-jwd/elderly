import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    setupFiles: ['./src/test/setup.ts', './src/test/integration-setup.ts'],
    include: ['**/integration/**/*.test.ts', '**/*.integration.test.ts'],
    exclude: ['**/node_modules/**', '**/e2e/**', '**/playwright/**'],
    testTimeout: 30000,
    hookTimeout: 30000,
    passWithNoTests: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
