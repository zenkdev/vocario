import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import { Observable } from 'rxjs';

@Injectable()
export class StatProvider {
  public userStatRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userStatRef = firebase.database().ref(`/userStats/${user.uid}`);
      }
    });
  }

  getWordsLearned(dictionaryId: string): Observable<number> {
    return new Observable<number>(observer => {
      this.userStatRef
        .child(`dictionary/${dictionaryId}/wordsLearned`)
        .once('value')
        .then(snap => {
          observer.next(snap.val() || 0);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }

  setWordsLearned(dictionaryId: string, wordsLearned: number): Observable<void> {
    return new Observable<void>(observer => {
      this.userStatRef
        .child(`dictionary/${dictionaryId}/wordsLearned`)
        .set(wordsLearned)
        .then(() => observer.next())
        .catch(error => observer.error(error));
    });
  }
}
