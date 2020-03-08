import * as buildCors from 'cors';
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import sendFile from './sendFile';
import textToSpeech from './textToSpeech';
import { createText, isCompleted, trimLeft } from './utils';
import writeToFile from './writeToFile';

admin.initializeApp();

// CORS Express middleware to enable CORS Requests.
const cors = buildCors({ origin: true });

export const statisticsOnWrite = functions.database.ref('/statistics/{uid}/{wordId}').onWrite(async (snapshot, context) => {
  const { uid } = context.params;
  const before = snapshot.before && snapshot.before.val();
  const after = snapshot.after && snapshot.after.val();

  let dictionaryId = '';
  let occursBefore = [];
  let occursAfter = [];
  if (before) {
    dictionaryId = before.dictionaryId;
    occursBefore = before.occurs;
  }
  if (after) {
    dictionaryId = after.dictionaryId;
    occursAfter = after.occurs;
  }

  if (isCompleted(occursAfter) !== isCompleted(occursBefore)) {
    const addition = isCompleted(occursAfter) && !isCompleted(occursBefore) ? 1 : -1;

    await admin
      .database()
      .ref(`dictionary/${dictionaryId}`)
      .transaction(data => {
        if (data) {
          const { wordsCompleted, ...rest } = data;
          if (wordsCompleted == null) {
            return { wordsCompleted: { [uid]: addition }, ...rest };
          }
          const count = (wordsCompleted && uid && wordsCompleted[uid]) || 0;
          if (count + addition > 0) {
            wordsCompleted[uid] = count + addition;
          } else {
            delete wordsCompleted[uid];
          }
          return { wordsCompleted, ...rest };
        }
        return data;
      });
  }
});

export const synthesize = functions.https.onRequest((req, res) => {
  if (req.method !== 'GET') {
    return res
      .status(403)
      .send('Forbidden!')
      .end();
  }

  // Enable CORS using the `cors` express middleware.
  return cors(req, res, async () => {
    // word param starts with slash
    const word = trimLeft(req.params['0'], '/');

    if (!word) {
      return res.status(404).end();
    }

    try {
      // Create a bucket
      const bucket = admin.storage().bucket();

      // Create a filename to 'synthesize/word.mp3'
      const filename = `synthesize/${word}.mp3`;

      const [files] = await bucket.getFiles({ maxResults: 1, prefix: filename });
      const exists = files.find(({ name }) => name === filename);
      if (exists) {
        return sendFile(res, exists);
      }

      const snapshot = await admin
        .database()
        .ref(`word/${word}`)
        .once('value');

      const payload = snapshot.val();
      if (!payload) {
        return res.status(404).end();
      }

      const audioContent = await textToSpeech(createText(payload));

      const file = bucket.file(filename);

      await writeToFile(file, audioContent);

      return res
        .status(200)
        .contentType('mp3')
        .attachment(`${word}.mp3`)
        .send(audioContent)
        .end();
    } catch (e) {
      return res
        .status(500)
        .contentType('text/plain')
        .send(e.message || String(e))
        .end();
    }
  });
});
