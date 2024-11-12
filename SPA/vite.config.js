import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    open: true
  },
  test: {
    coverage: {
      reporter: ["text", "html",]
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js',
  }
})
