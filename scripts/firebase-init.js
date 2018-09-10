const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey');
const dictionaries = require('./dictionaries');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lexion-app.firebaseio.com'
});

var db = admin.database();
var ref = db.ref('/dictionaryList');
ref.once('value', function(snapshot) {
  const val = snapshot.val();
  if (val) {
    console.log(val);
  } else {
    dictionaries.forEach(dictionary => {
      const totalWords = dictionary.words.length;
      const dbSet = {
        ...dictionary,
        totalWords
      };
      ref.push().set(dbSet);
    });
  }
});
