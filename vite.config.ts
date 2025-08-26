// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Puerto para el frontend
    strictPort: true, // Si está ocupado, falla en vez de elegir otro
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Tu backend en Bun/Express
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 3001, // Puerto en modo preview (opcional, distinto del dev)
  },
})
