import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: {
        background: resolve(__dirname, 'background.js'),
        content: resolve(__dirname, 'content.js'),
      },
      name: 'text-enhancer',
      fileName: (format, entryName) => `${entryName}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
