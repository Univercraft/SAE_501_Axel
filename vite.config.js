// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Remplacez 'nom-du-repo' par le nom de votre repository GitHub
  base: process.env.NODE_ENV === 'production' ? 'SAE_501_Axel' : '/'
})