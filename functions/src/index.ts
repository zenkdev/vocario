import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import buildCors from 'cors';
import { parse } from 'path';

import sendFile from './sendFile';
import writeToFile from './writeToFile';
import textToSpeech, { audioEncodingFromExt } from './textToSpeech';
import { createText, isCompleted, trimLeft } from './utils';

// The Firebase Admin SDK to access the Firebase Realtime Database.

admin.initializeApp();

// CORS Express middleware to enable CORS Requests.
const cors = buildCors({ origin: true });

export const statisticsOnWrite = functions.database.onValueWritten('/statistics/{uid}/{wordId}', async ({ params, data }) => {
  const { uid } = params;
  const before = data.before && data.before.val();
  const after = data.after && data.after.val();

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
    res.status(403).send('Forbidden!').end();
    return;
  }

  // Enable CORS using the `cors` express middleware.
  cors(req, res, async () => {
    // param starts with slash
    const param = trimLeft(req.params['0'], '/');

    if (!param) {
      res.status(404).end();
      return;
    }

    const { name: word, ext } = parse(param);
    const ensureExt = ext || '.mp3';
    const filename = `synthesize/${word}${ensureExt}`;

    try {
      // Create a bucket
      const bucket = admin.storage().bucket();

      const [files] = await bucket.getFiles({ maxResults: 1, prefix: filename });
      const exists = files.find(({ name }) => name === filename);
      if (exists) {
        res.header('x-file-exists', 'true');
        await sendFile(res, exists);
        return;
      }

      const snapshot = await admin.database().ref(`word/${word}`).once('value');
      const payload = snapshot.val();
      if (!payload) {
        res.status(404).end();
        return;
      }

      const file = bucket.file(filename);
      const audioEncoding = audioEncodingFromExt(ensureExt);
      const audioContent = await textToSpeech(createText(payload), audioEncoding);
      await writeToFile(file, audioContent);

      res.header('x-file-exists', 'false');
      await sendFile(res, file);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e);
      res
        .status(500)
        .contentType('text/plain')
        .send(e.message || String(e))
        .end();
    }
  });
});
