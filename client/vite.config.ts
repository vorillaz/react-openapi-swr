/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    testTimeout: 10000,
    include: ['src/__tests__/**/*.ts', 'src/__tests__/**/*.tsx'],
    environmentMatchGlobs: [['__tests__/**', 'jsdom']],
    setupFiles: ['src/lib/setup-tests.tsx'],
    globals: true,
    environment: 'jsdom',
    mockReset: true,
    restoreMocks: true,
  },
});
