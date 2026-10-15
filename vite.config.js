import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
base: '/gym_workout/',


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
