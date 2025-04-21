import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@components': path.resolve(__dirname, './src/components'),
      '@locals': path.resolve(__dirname, './src/locals'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@sections': path.resolve(__dirname, "./src/sections")
    },
  },
})
