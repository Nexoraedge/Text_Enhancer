// Copy popup HTML into dist folder after Vite build
import { mkdirSync, copyFileSync } from 'fs';
import { dirname } from 'path';


try {
  copyFileSync('public/manifest.json', 'dist/manifest.json');
  mkdirSync('dist/popup', { recursive: true });
  copyFileSync('src/popup/index.html', 'dist/popup/index.html');
  console.log('Popup HTML copied to dist/popup');
} catch (err) {
  console.error('Failed to copy popup HTML:', err);
  process.exitCode = 1;
}
