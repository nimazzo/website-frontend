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
        index: path.resolve(__dirname, 'index2.html'),
        // lockscreen: path.resolve(__dirname, 'lockscreen/index.html'),
        // homepage: path.resolve(__dirname, 'homepage/index.html'),
      },
    },
  }
})
