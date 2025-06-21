// Post-build script to replace the service worker with our custom implementation
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📝 Running post-build script to fix service worker...');

// Path to our custom background script implementation
const customBackgroundPath = path.join(__dirname, 'background-bundle.js');
const distFolder = path.join(__dirname, 'dist');

// Read our custom background script
if (!fs.existsSync(customBackgroundPath)) {
  console.error('❌ Custom background script not found at:', customBackgroundPath);
  process.exit(1);
}

const customBackgroundContent = fs.readFileSync(customBackgroundPath, 'utf8');

// Create a new service worker that doesn't rely on imports
// We need to ensure the Gemini API is properly initialized
const newServiceWorkerContent = `// Service worker for Text-Enhancer (AI-powered) extension
// Auto-generated from background-bundle.js

${customBackgroundContent}

// Initialize the service worker
console.log('Text-Enhancer service worker initialized');`;


// Write the new service worker directly to the dist folder
try {
  fs.writeFileSync(path.join(distFolder, 'service-worker.js'), newServiceWorkerContent);
  console.log('✅ Created custom service worker in dist folder');
  
  // Update the manifest.json to point to our custom service worker
  const manifestPath = path.join(distFolder, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    // Update the background script reference
    if (manifest.background) {
      manifest.background.service_worker = 'service-worker.js';
      // Remove type: module if it exists
      delete manifest.background.type;
      
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      console.log('✅ Updated manifest.json to use custom service worker');
    } else {
      console.error('❌ No background section found in manifest.json');
    }
  } else {
    console.error('❌ manifest.json not found in dist folder');
  }
} catch (error) {
  console.error('❌ Error updating service worker:', error);
}

// --- Copy content.js and background.js to dist/ ---
const filesToCopy = ['content.js', 'background.js'];
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distFolder, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${file} to dist/`);
  } else {
    console.warn(`⚠️  ${file} not found in project root, not copied.`);
  }
});

console.log('✅ Post-build script completed successfully');
