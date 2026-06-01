import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// Custom URL in the browser; bind to 127.0.0.1 so Vite starts without DNS lookup on the hostname.
const devHost = 'localhost.vinaykumar-portfolio.com'
const devPort = 5173
const devUrl = `http://${devHost}:${devPort}/`

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: devPort,
    strictPort: true,
    open: devUrl,
    hmr: {
      host: devHost,
      port: devPort,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
      '@app': path.resolve(rootDir, 'src/app'),
      '@webservices': path.resolve(rootDir, 'src/webservices'),
      '@dataservices': path.resolve(rootDir, 'src/dataservices'),
      '@styles': path.resolve(rootDir, 'src/styles'),
      // Trailing-slash form so subpaths like @styles/global.css resolve reliably
      '@styles/': `${path.resolve(rootDir, 'src/styles')}/`,
    },
  },
})
