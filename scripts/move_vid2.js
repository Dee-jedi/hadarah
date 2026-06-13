const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../hadarah-4a298-firebase-adminsdk-fbsvc-29d1e4e115.json');

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function moveVid() {
  const snapshot = await db.collection('portfolio').where('fileName', '==', 'vid_2.mp4').get();
  if(!snapshot.empty) {
    // 45 means it will appear roughly after the first 45 photos, so the user has to scroll down to discover it!
    await snapshot.docs[0].ref.update({ order: 45 });
    console.log('Successfully moved vid_2.mp4 to appear in the middle of the gallery!');
  } else {
    console.log('Could not find vid_2.mp4');
  }
}

moveVid().catch(console.error);
