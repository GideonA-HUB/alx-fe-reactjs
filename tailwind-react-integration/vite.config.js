// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Added Tailwind Vite plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Tailwind plugin included
  ],
})
