import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: null // Disable PostCSS since we're not using it
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  server: {
    port: 5173,
    open: true
  }
})
