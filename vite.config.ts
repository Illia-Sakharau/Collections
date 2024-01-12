import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@atoms': path.resolve(__dirname, 'src/components/1-atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/2-molecules'),
      '@organism': path.resolve(__dirname, 'src/components/3-organism'),
      '@layouts': path.resolve(__dirname, 'src/components/4-layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});
