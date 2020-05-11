const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vocabionic.firebaseio.com',
  storageBucket: 'gs://vocabionic.appspot.com',
});

// Get the Storage service for the default app
const defaultStorage = admin.storage();

async function getFiles() {
  const bucket = defaultStorage.bucket();
  const [files] = await bucket.getFiles();
  console.table(
    files.map(({ name, metadata }) => {
      const { contentType, size, cacheControl, etag, timeCreated: created, updated } = metadata;
      return { name, size, created, updated, etag, contentType, cacheControl };
    }),
  );
}

getFiles()
  .then(() => {
    process.exit(0);
  })
  .catch(reason => {
    console.error('Firebase getFiles error:', reason);
    process.exit(1);
  });
