import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import { Observable } from 'rxjs';
import { Dictionary, Word } from '../../models';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class StatProvider {
  public dictionaryStatRef: firebase.database.Reference;
  public wordStatRef: firebase.database.Reference;

  constructor(private auth: AuthProvider) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.dictionaryStatRef = firebase.database().ref(`/dictionaryStat/${user.uid}`);
        this.wordStatRef = firebase.database().ref(`/wordStat/${user.uid}`);
      }
    });
  }

  updateStats(dictionary: Dictionary, word: Word, valid: boolean): Observable<number> {
    const newWordsLearned = dictionary.wordsLearned + (valid ? 1 : 0);
    const uid = this.auth.user.uid;
    return new Observable<number>(observer => {
      var dictionaryListRef = firebase.database().ref(`/dictionaryList/${dictionary.id}`);
      var dictionarRef = firebase.database().ref(`/dictionary/${dictionary.id}`);

      Promise.all([
        this.updateWordsLearned(dictionaryListRef, uid, newWordsLearned),
        this.updateWordsLearned(dictionarRef, uid, newWordsLearned)
      ])
        .then(_ => observer.next(newWordsLearned))
        .catch(reason => observer.error(reason));

      // const count = word.count + 1;
      // const errors = word.errors + (valid ? 0 : 1);
      // this.wordStatRef
      //   .child(`${word.id}/todo`)
      //   .update({ count, errors, lastViewed: new Date().toISOString() }, error => {
      //     if (error) {
      //       console.error(error);
      //       observer.error(error);
      //     } else {
      //       observer.next(newWordsLearned);
      //     }
      //   });
    });
  }

  private updateWordsLearned(dictionaryRef, uid, wordsLearned) {
    return dictionaryRef.transaction(function(dictionary) {
      if (dictionary) {
        if (!dictionary.wordsLearned) {
          dictionary.wordsLearned = {};
        }
        dictionary.wordsLearned[uid] = wordsLearned;
      }
      return dictionary;
    });
  }
}
