const fs = require('fs');
const path = require('path');

// The exact path you provided for your images folder
const targetDir = 'C:\\Users\\dell\\OneDrive\\Desktop\\hadarah_images';

if (!fs.existsSync(targetDir)) {
  console.error(`Directory not found: ${targetDir}`);
  console.error('Please make sure the folder exists exactly at this path.');
  process.exit(1);
}

const files = fs.readdirSync(targetDir);
let count = 1;

console.log('Starting image rename process...');

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  
  // Only target actual image files
  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
    const oldPath = path.join(targetDir, file);
    const newName = `gal_${count}${ext}`;
    const newPath = path.join(targetDir, newName);
    
    // Only rename if it doesn't already have the target name
    if (file !== newName) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${newName}`);
    } else {
      console.log(`Skipped: ${file} (already properly named)`);
    }
    
    count++;
  }
});

console.log(`\nSuccessfully processed ${count - 1} images!`);
