import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@locals": path.resolve(__dirname, "./src/locals"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  server: {
    // Proxy configuration for development file uploads
    proxy: {
      '/api/file-upload': {
        target: 'https://tmpfiles.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/file-upload/, '/api/v1/upload'),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.log('Proxy error:', err);
          });
        }
      }
    }
  }
});
