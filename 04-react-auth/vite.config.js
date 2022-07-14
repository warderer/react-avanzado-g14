import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // #1 Añado el Path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // #2 Configuraba el Alias para mis carpetas
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
