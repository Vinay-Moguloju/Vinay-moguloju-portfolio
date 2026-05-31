import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@webservices': path.resolve(__dirname, './src/webservices'),
      '@dataservices': path.resolve(__dirname, './src/dataservices'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
