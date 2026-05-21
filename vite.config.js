import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/blog-site/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
  resolve: {
    alias: {
      '@jest/globals': fileURLToPath(new URL('./src/testUtils/jestGlobalsShim.js', import.meta.url)),
    },
  },
})
