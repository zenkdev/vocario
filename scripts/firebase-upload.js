/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const getDictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vocabionic.firebaseio.com',
});

const db = admin.database();

function uploadWord(dictionaryId, word, index) {
  // A word entity.
  const entity = { ...word, dictionaryId };

  // Get a key for a new word.
  const key = `${dictionaryId}_${index}`;

  // Write the new word's data in the word list.
  const updates = {
    [`/word/${key}`]: entity,
  };

  return db.ref().update(updates);
}

async function uploadDictionary({ id, words, ...rest }) {
  // A dictionary entity.
  const entity = { ...rest, wordsCount: words.length };

  // Write the new dictionary's data in the dictionary list.
  const updates = {
    [`/dictionary/${id}`]: entity,
  };

  await db.ref().update(updates);
  return Promise.all(words.map((word, index) => uploadWord(id, word, index)));
}

async function upload() {
  const dictionaries = await getDictionaries();
  return Promise.all(dictionaries.map(uploadDictionary));
}

upload()
  .then(() => {
    console.info('Firebase database successfully uploaded');
    process.exit(0);
  })
  .catch(reason => {
    console.error('Firebase database upload error:', reason);
    process.exit(1);
  });
