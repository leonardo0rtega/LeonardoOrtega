import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/leo-portafolio/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
