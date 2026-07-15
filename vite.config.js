import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Gruppei/', // O nome exato do seu repositório no GitHub
  server: {
    allowedHosts: true,
  }
})