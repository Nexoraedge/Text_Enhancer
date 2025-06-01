// Script to generate basic icon files for the extension
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a simple SVG icon
function createSvgIcon(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size/8}" fill="#1a73e8" />
  <text x="${size/2}" y="${size/2 + size/10}" 
        font-family="Arial, sans-serif" 
        font-size="${size/2}" 
        font-weight="bold" 
        fill="white" 
        text-anchor="middle" 
        dominant-baseline="middle">G</text>
  <path d="M${size*0.25} ${size*0.65} L${size*0.4} ${size*0.8} L${size*0.75} ${size*0.4}" 
        stroke="white" 
        stroke-width="${size/16}" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round" />
</svg>`;
}

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '../../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Create icons of different sizes
const sizes = [16, 48, 128];
sizes.forEach(size => {
  const iconPath = path.join(iconsDir, `icon${size}.png`);
  
  // For simplicity, we'll just write SVG content to the files
  // In a real scenario, you would convert SVG to PNG using a library like sharp
  const svgContent = createSvgIcon(size);
  fs.writeFileSync(iconPath, svgContent);
  
  console.log(`Created icon: ${iconPath}`);
});

console.log('Icons created successfully!');
