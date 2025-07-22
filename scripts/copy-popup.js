// Copy popup HTML into dist folder after Vite build
import { mkdirSync, copyFileSync } from 'fs';



try {
  copyFileSync('public/manifest.json', 'dist/manifest.json');
  mkdirSync('dist/popup', { recursive: true });
  copyFileSync('public/popup.html', 'dist/popup.html');
  console.log('Popup HTML copied to dist/popup');
} catch (err) {
  console.error('Failed to copy popup HTML:', err);
  process.exitCode = 1;
}
