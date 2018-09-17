const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey');
const dictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lexion-app.firebaseio.com'
});

var db = admin.database();

function UploadWord(dictionaryKey, word, index) {
  // A word entity.
  var wordEntity = { ...word, dictionaryKey };

  // Get a key for a new word.
  var newWordKey = `${dictionaryKey}_${index}`;

  // Write the new word's data in the word list.
  var updates = {};
  updates['/wordList/' + newWordKey] = wordEntity;

  return db.ref().update(updates);
}

function UploadDictionary(dictionary) {
  // A dictionary entity.
  var dictionaryEntity = { name: dictionary.name, totalWords: dictionary.words.length };

  // Get a key for a new dictionary.
  var newDictionaryKey = dictionary.id; //db.ref().child('dictionaryList').push().key;

  // Write the new dictionary's data in the dictionary list.
  var updates = {};
  updates['/dictionaryList/' + newDictionaryKey] = dictionaryEntity;

  return db
    .ref()
    .update(updates)
    .then(_ => {
      const promises = dictionary.words.map((word, index) => UploadWord(newDictionaryKey, word, index));
      return Promise.all(promises);
    });
}

function UploadDb() {
  const promises = dictionaries.map(UploadDictionary);
  return Promise.all(promises);
}

UploadDb()
  .then(() => {
    console.info('Firebase database successfully uploaded');
    process.exit(0);
  })
  .catch(reason => {
    console.error('Firebase database upload error:', reason);
    process.exit(0);
  });
