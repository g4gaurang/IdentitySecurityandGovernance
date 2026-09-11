import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base supports GitHub Pages project-site subdirectory hosting.
export default defineConfig({
  plugins: [react()],
  base: './',
})
