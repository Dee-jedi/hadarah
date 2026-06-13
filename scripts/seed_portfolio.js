const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const fs = require('fs');
const path = require('path');

// 1. Initialize Firebase Admin
const serviceAccount = require('../hadarah-4a298-firebase-adminsdk-fbsvc-29d1e4e115.json');

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'hadarah-4a298.firebasestorage.app'
});

const db = getFirestore();
const bucket = getStorage().bucket();

const targetDir = 'C:\\Users\\dell\\OneDrive\\Desktop\\hadarah_images';

async function seed() {
  if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(targetDir);
  const imageFiles = files.filter(file => ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(path.extname(file).toLowerCase()));
  
  // Sort files so gal_1 comes before gal_2 (numeric sort)
  imageFiles.sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '')) || 0;
    const numB = parseInt(b.replace(/\D/g, '')) || 0;
    return numA - numB;
  });

  console.log(`Found ${imageFiles.length} images to upload...`);

  let count = 0;
  for (const file of imageFiles) {
    const filePath = path.join(targetDir, file);
    const destination = `portfolio/${file}`;

    try {
      console.log(`Uploading ${file} (${count + 1}/${imageFiles.length})...`);
      
      // Upload to Storage
      await bucket.upload(filePath, {
        destination: destination,
        metadata: {
          cacheControl: 'public, max-age=31536000',
          contentType: 'image/jpeg', // Assuming jpeg for photos
        },
      });

      // We use the predictable Firebase Storage URL format
      // This guarantees the image loads perfectly on the frontend without relying on complex IAM public permissions
      const firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(destination)}?alt=media`;

      // Save to Firestore
      await db.collection('portfolio').add({
        fileName: file,
        url: firebaseUrl,
        createdAt: FieldValue.serverTimestamp(),
        order: count // Keeping the numeric order
      });

      count++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  console.log(`\nFinished seeding ${count} images into Storage and Firestore!`);
}

seed().catch(console.error);
