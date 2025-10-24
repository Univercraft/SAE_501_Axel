// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Remplacez 'SAE_501_Axel' par le nom exact de votre repository GitHub
  base: process.env.NODE_ENV === 'production' ? '/SAE_501_Axel/' : '/'
})
