// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ab "@/..." se import kar sakte ho
    },
  },
  server: {
    host: true, // network pe bhi access milega (0.0.0.0)
    port: 3000, // apna custom port
  },
})
