import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Doorkey/', // ✨ Add this line, replacing 'doorkey' with your repo name
})