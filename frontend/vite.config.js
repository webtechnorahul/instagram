import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configures Vite to compile the application's React components.
export default defineConfig({
  plugins: [react()],
})
