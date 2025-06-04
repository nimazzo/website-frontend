import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        lockscreen: path.resolve(__dirname, 'lockscreen/index.html'),          // e.g. /
        homepage: path.resolve(__dirname, 'homepage/index.html'),      // e.g. /home
      }
    }
  }
})
