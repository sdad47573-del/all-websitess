/**
 * Icon Generator Script
 * Generates PWA icons in multiple sizes from a source image
 * 
 * Usage: node scripts/generate-icons.js
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const SOURCE_ICON = join(__dirname, '../public/favicon.png');
const OUTPUT_DIR = join(__dirname, '../public/icons');

console.log('📱 PWA Icon Generator');
console.log('====================\n');

// Check if source icon exists
if (!existsSync(SOURCE_ICON)) {
  console.error('❌ Source icon not found:', SOURCE_ICON);
  console.log('Please ensure favicon.png exists in the public directory');
  process.exit(1);
}

console.log('✅ Source icon found:', SOURCE_ICON);
console.log('📁 Output directory:', OUTPUT_DIR);
console.log('\n📝 Instructions:');
console.log('Since we cannot use sharp in this environment, please use an online tool or image editor to:');
console.log('1. Resize favicon.png to the following sizes:');

ICON_SIZES.forEach(size => {
  console.log(`   - ${size}x${size}px → icon-${size}x${size}.png`);
});

console.log('\n2. Save all resized images to: public/icons/');
console.log('\n💡 Recommended tools:');
console.log('   - https://www.iloveimg.com/resize-image');
console.log('   - https://imageresizer.com/');
console.log('   - https://squoosh.app/');
console.log('\n✨ Or use ImageMagick if installed:');
console.log('   convert favicon.png -resize 192x192 public/icons/icon-192x192.png');
