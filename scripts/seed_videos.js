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

const targetDir = 'C:\\Users\\dell\\OneDrive\\Desktop\\hadarah_vids';

async function seedVideos() {
  if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(targetDir);
  const videoFiles = files.filter(file => ['.mp4', '.webm', '.mov'].includes(path.extname(file).toLowerCase()));

  console.log(`Found ${videoFiles.length} videos to upload...`);

  // We'll give videos a negative order number so they show up at the very top of the gallery!
  let count = -10; 
  let successCount = 0;

  for (const file of videoFiles) {
    const filePath = path.join(targetDir, file);
    const destination = `portfolio/${file}`;

    try {
      console.log(`Uploading video ${file}...`);
      
      // Upload to Storage
      await bucket.upload(filePath, {
        destination: destination,
        metadata: {
          cacheControl: 'public, max-age=31536000',
          contentType: 'video/mp4', 
        },
      });

      // Construct public URL
      const firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(destination)}?alt=media`;

      // Save to Firestore
      await db.collection('portfolio').add({
        fileName: file,
        url: firebaseUrl,
        createdAt: FieldValue.serverTimestamp(),
        order: count 
      });

      console.log(`Successfully processed ${file}`);
      successCount++;
      count++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  console.log(`\nFinished uploading ${successCount} videos!`);
}

seedVideos().catch(console.error);
