import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Proxy /api to the Express backend so the site works through a single port
// (e.g. a VS Code dev tunnel on 5173) without exposing port 5000.
const apiProxy = {
  '/api': { target: 'http://localhost:5000', changeOrigin: true },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.devtunnels.ms'],
    proxy: apiProxy,
  },
  preview: {
    allowedHosts: ['.devtunnels.ms'],
    proxy: apiProxy,
  },
})
