const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey');
const dictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lexion-app.firebaseio.com'
});

new Promise(resolve => {
  var db = admin.database();
  var dictionaryListRef = db.ref('/dictionaryList');
  var wordListRef = db.ref('/wordList');
  dictionaryListRef.once('value', function(snapshot) {
    const val = snapshot.val();
    if (val) {
      console.log(val);
    } else {
      let dictionaryCount = 0;
      dictionaries.forEach(dictionary => {
        const dictionaryVal = { name: dictionary.name, totalWords: dictionary.words.length };
        dictionaryListRef.push().then(data => {
          data.set(dictionaryVal).then(() => {
            let wordCount = 0;
            dictionary.words.forEach(word => {
              const wordVal = { ...word, duid: data.key };
              wordListRef
                .push()
                .set(wordVal)
                .then(() => {
                  wordCount++;
                  if (dictionary.words.length === wordCount) {
                    dictionaryCount++;
                    if (dictionaries.length === dictionaryCount) {
                      resolve();
                    }
                  }
                });
            });
          });
        });
      });
    }
  });
}).then(() => {
  console.log('Firebase database successefuly updated.');
  process.exit(0);
});
