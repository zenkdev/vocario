const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey');
const dictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lexion-app.firebaseio.com'
});

var db = admin.database();
var dictionaryListRef = db.ref('/dictionaryList');
var wordListRef = db.ref('/wordList');

function UploadWord(dictionaryKey, word) {
  return new Promise((resolve, reject) => {
    wordListRef
      .push()
      .set({ ...word, dictionaryKey })
      .then(_ => resolve())
      .catch(reason => reject(reason));
  });
}

function UploadDictionary(dictionary) {
  return new Promise((resolve, reject) => {
    dictionaryListRef.push().then(
      dictionaryRef => {
        dictionaryRef.set({ name: dictionary.name, totalWords: dictionary.words.length }).then(
          () => {
            const promises = dictionary.words.map(word => UploadWord(dictionaryRef.key, word));
            Promise.all(promises)
              .then(_ => resolve())
              .catch(reason => reject(reason));
          },
          reason => reject(reason)
        );
      },
      reason => reject(reason)
    );
  });
}

function UploadDb() {
  return new Promise((resolve, reject) => {
    dictionaryListRef.once('value', function(snapshot) {
      const val = snapshot.val();
      if (val) {
        console.error(val);
        reject(val);
        return;
      }

      const promises = dictionaries.map(UploadDictionary);
      Promise.all(promises)
        .then(_ => resolve())
        .catch(reason => reject(reason));
    });
  });
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
