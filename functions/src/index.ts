// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
/* eslint-disable import/prefer-default-export */
import * as functions from 'firebase-functions';

admin.initializeApp();

const COUNT_TO_COMPLETE = 3;

function isEmpty<T>(value: Array<T> | undefined): boolean {
  return value == null || !Array.isArray(value) || value.length === 0;
}

const isCompleted = ({ occurs }: { occurs?: string[] }): boolean => !isEmpty(occurs) && (occurs as string[]).length > COUNT_TO_COMPLETE;

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Listens for new data by /statistics/:uid/:wordId and updates
// properties of the dictionary /dictionaryList/:dictionaryId
export const updateWordsCompleted = functions.database.ref('/statistics/{uid}/{wordId}').onWrite(async (snapshot, context) => {
  // Grab the current value of what was written to the Realtime Database.
  const { occurs: occursBefore } = snapshot.before.val();
  const { dictionaryId, occurs: occursAfter } = snapshot.after.val();
  const { uid } = context.params;

  if (isCompleted({ occurs: occursAfter }) && !isCompleted({ occurs: occursBefore })) {
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    await admin
      .database()
      .ref(`dictionaryList/${dictionaryId}`)
      .transaction(data => {
        if (data) {
          const { wordsCompleted, ...rest } = data;
          if (wordsCompleted == null) {
            return { wordsCompleted: { [uid]: 1 }, ...rest };
          }
          const count = (wordsCompleted && uid && wordsCompleted[uid]) || 0;
          wordsCompleted[uid] = count + 1;
          return { wordsCompleted, ...rest };
        }
        return data;
      });
  }
});
