import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 'https://mern-orcin.vercel.app/',
    proxy: {
      '/api': {
        target: 'https://mern-app-60nb.onrender.com/',
        changeOrigin: true,
      }
    }
  }
})
