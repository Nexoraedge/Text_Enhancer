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
        popup: resolve(__dirname, 'src/popup/main.jsx'),
      },
      name: 'text-enhancer',
      fileName: (format, entryName) => entryName === 'popup' ? 'popup/popup.js' : `${entryName}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep the original name for assets like CSS files
          if (assetInfo.name === 'style.css') {
            return 'src/popup/style.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
