// Build script for the Gemini Text Enhancer Chrome Extension
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Building Gemini Text Enhancer Chrome Extension...');

try {
  // Step 1: Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Step 2: Run the build
  console.log('🔨 Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 3: Copy placeholder icons if they're empty
  console.log('🖼️ Checking icons...');
  const iconSizes = [16, 48, 128];
  const iconDir = path.join('dist', 'icons');
  
  if (!fs.existsSync(iconDir)) {
    fs.mkdirSync(iconDir, { recursive: true });
  }

  iconSizes.forEach(size => {
    const iconPath = path.join(iconDir, `icon${size}.png`);
    const stats = fs.statSync(iconPath);
    
    // If icon file is empty (0 bytes), create a simple colored square
    if (stats.size === 0) {
      console.log(`📝 Creating placeholder icon for size ${size}...`);
      
      // We'll use a simple HTML canvas to create a basic icon
      // This would normally be done with a graphics library, but for simplicity
      // we'll just create a placeholder file with some content
      fs.writeFileSync(iconPath, 'PLACEHOLDER_ICON');
      console.log(`✅ Created placeholder for icon${size}.png`);
    }
  });

  console.log('✅ Build completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Open Chrome and go to chrome://extensions');
  console.log('2. Enable "Developer mode" in the top-right corner');
  console.log('3. Click "Load unpacked" and select the dist folder');
  console.log('4. The extension should now be installed and ready to use');
  console.log('5. Set your Gemini API key in the extension popup');
  console.log('6. Use Ctrl+G on any webpage to enhance text in input fields');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
