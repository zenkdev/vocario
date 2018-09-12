const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey');
const dictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lexion-app.firebaseio.com'
});

var db = admin.database();

function UploadDictionary(dictionary) {
  // A dictionary entity.
  var dictionaryListEntity = { name: dictionary.name, totalWords: dictionary.words.length };
  var dictionaryEntity = { ...dictionaryListEntity, words: dictionary.words };

  // Get a key for a new Dictionary.
  var newPostKey = dictionary.id; //db.ref().child('dictionaryList').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/dictionaryList/' + newPostKey] = dictionaryListEntity;
  updates['/dictionary/' + newPostKey] = dictionaryEntity;

  return db.ref().update(updates);
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
