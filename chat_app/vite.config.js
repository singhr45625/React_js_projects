import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Default is 'js'
    include: /\.(jsx|js)$/, // Apply to both .js and .jsx files
  },
});