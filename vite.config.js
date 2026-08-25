import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // React core in its own chunk – cached aggressively
          'vendor-react': ['react', 'react-dom'],
          // Lucide icons separated – only loaded once
          'vendor-icons': ['lucide-react'],
        }
      }
    },
    // Warn for chunks > 200KB
    chunkSizeWarningLimit: 200
  }
})
