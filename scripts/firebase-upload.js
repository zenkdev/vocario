const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const getDictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vocario.firebaseio.com',
});

const db = admin.database();

function defaultTo(value, defaultValue) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return defaultValue;
  }
  return value;
}

async function getStatistics() {
  const snapshot = await db.ref(`statistics`).once('value');
  const statistics = {};
  snapshot.forEach(payload => {
    payload.forEach(value => {
      const { dictionaryId, isCompleted, occurs } = value.val();
      const ensureIsCompleted = defaultTo(isCompleted, Array.isArray(occurs) && occurs.length > 3);
      if (ensureIsCompleted) {
        const dictionary = statistics[dictionaryId] || {};
        const count = dictionary[payload.key] || 0;
        dictionary[payload.key] = count + 1;
        statistics[dictionaryId] = dictionary;
      }
    });
  });
  return statistics;
}

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
  const entity = { ...rest, wordsCount: words.length };
  const updates = {
    [`/dictionary/${id}`]: entity,
  };
  await db.ref().update(updates);
  return Promise.all(words.map((word, index) => uploadWord(id, word, index)));
}

async function upload() {
  const statistics = await getStatistics();
  const dictionaries = await getDictionaries();
  return Promise.all(
    dictionaries.map(dictionary => {
      const wordsCompleted = statistics[dictionary.id];
      if (wordsCompleted !== undefined) {
         
        dictionary.wordsCompleted = wordsCompleted;
      }
      return uploadDictionary(dictionary);
    }),
  );
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
