// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
/* eslint-disable import/prefer-default-export */
import * as functions from 'firebase-functions';

admin.initializeApp();

const COUNT_TO_COMPLETE = 3;
const isEmpty = <T>(value: Array<T> | undefined): boolean => value == null || !Array.isArray(value) || value.length === 0;
const isCompleted = (occurs?: string[]): boolean => !isEmpty(occurs) && (occurs as string[]).length > COUNT_TO_COMPLETE;

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

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
      .ref(`dictionaryList/${dictionaryId}`)
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
