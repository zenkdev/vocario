import * as buildCors from 'cors';
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import { TextToSpeechClient } from '@google-cloud/text-to-speech';

admin.initializeApp();

// CORS Express middleware to enable CORS Requests.
const cors = buildCors({ origin: true });

const COUNT_TO_COMPLETE = 3;
const isEmpty = <T>(value: Array<T> | undefined): boolean => value == null || !Array.isArray(value) || value.length === 0;
const isCompleted = (occurs?: string[]): boolean => !isEmpty(occurs) && (occurs as string[]).length > COUNT_TO_COMPLETE;
const trimLeft = (str: string | null | undefined, trimChar = ' '): string | null | undefined => {
  if (str == null) {
    return str;
  }
  let trim = str;
  while (trim.length > 0 && trim.substring(0, 1) === trimChar) {
    trim = trim.substring(1);
  }
  return trim;
};

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
      const snapshot = await admin
        .database()
        .ref(`word/${word}`)
        .once('value');

      const value = snapshot.val();
      if (!value) {
        return res.status(404).end();
      }

      const { text } = value;

      // Creates a client
      const client = new TextToSpeechClient();
      // Construct the request
      const request = {
        input: { text },
        // Select the language and SSML voice gender (optional)
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' as const },
        // select the type of audio encoding
        audioConfig: { audioEncoding: 'MP3' as const },
      };

      // Performs the text-to-speech request
      const [response] = await client.synthesizeSpeech(request);

      return res
        .status(200)
        .contentType('mp3')
        .attachment(`${word}.mp3`)
        .send(response.audioContent)
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
