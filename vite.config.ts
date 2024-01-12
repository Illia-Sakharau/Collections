import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@atoms': path.resolve(__dirname, 'src/components/1-atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/2-molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/3-organisms'),
      '@layouts': path.resolve(__dirname, 'src/components/4-layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});
