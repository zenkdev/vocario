import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  server: {
    open: true,
    port: 3000,
  },

  define: {
    __APP_NAME__: JSON.stringify(process.env.npm_package_name),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
    },
    dir: './src',
  },
});
