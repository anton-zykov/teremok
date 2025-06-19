import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@/assets': path.resolve('.', 'src/assets'),
      '@/core': path.resolve('.', 'src/core'),
      '@/components': path.resolve('.', 'src/components'),
      '@/domains': path.resolve('.', 'src/domains'),
      '@/hooks': path.resolve('.', 'src/hooks'),
      '@/pages': path.resolve('.', 'src/pages'),
      '@/styles': path.resolve('.', 'src/styles'),
      '@/types': path.resolve('.', 'src/types'),
      '@/utils': path.resolve('.', 'src/utils'),
    },
  },
});
