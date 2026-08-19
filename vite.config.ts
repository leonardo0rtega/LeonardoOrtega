import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site } from './src/config/site'

function htmlMetadata() {
  return {
    name: 'html-metadata',
    transformIndexHtml(html) {
      return html
        .replace(/@@SITE_URL@@/g, site.url)
        .replace(/@@OG_IMAGE@@/g, site.ogImage)
    },
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/LeonardoOrtega/' : '/',
  build: {
    outDir: 'docs',
  },
  plugins: [react(), htmlMetadata()],
}))
