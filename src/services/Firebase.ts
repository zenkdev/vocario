/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import { forkJoin, from, Observable, of, Subject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import environment from '../environments/environment';
import { Dictionary, Word } from '../models';

export class Firebase {
  public readonly auth: firebase.auth.Auth;

  public readonly db: firebase.database.Database;

  private currentUser: firebase.User | null = null;

  private currentUserSubject: Subject<firebase.User | null> = new Subject();

  constructor() {
    firebase.initializeApp(environment.firebase);

    this.auth = firebase.auth();
    this.db = firebase.database();

    this.auth.onAuthStateChanged(
      user => {
        this.currentUser = user;
        this.currentUserSubject.next(user);
      },
      // eslint-disable-next-line no-console
      error => console.error(error),
    );
  }

  private get uid() {
    return this.currentUser && this.currentUser.uid;
  }

  public currentUserObservable(): Observable<firebase.User | null> {
    return this.currentUserSubject.asObservable();
  }

  /**
   * GET dictionaries from the server
   */
  public getDictionaries(): Observable<Dictionary[]> {
    return from(this.db.ref('dictionaryList').once('value')).pipe(
      map(snapshot => {
        const arr: Dictionary[] = [];
        snapshot.forEach(payload => {
          arr.push(Dictionary.fromSnapshot(payload, this.uid));
        });
        return arr;
      }),
      catchError(this.handleError('getDictionaries', [])),
    );
  }

  /** GET dictionary by id. */
  public getDictionary(id: string): Observable<Dictionary> {
    return this.getDictionaryById(id).pipe(
      switchMap(dictionary =>
        this.getWordsByDictionaryId(id).pipe(
          map(data => {
            dictionary.words = data;
            return dictionary;
          }),
        ),
      ),
    );
  }

  public getStatistics(): Observable<Word[]> {
    if (!this.uid) {
      return of();
    }

    return from(this.db.ref(`statistics/${this.uid}`).once('value')).pipe(
      map(snapshot => {
        const arr: Word[] = [];
        snapshot.forEach(payload => {
          arr.push(Word.fromSnapshot(payload, this.uid));
        });
        return arr;
      }),
      catchError(this.handleError<Word[]>('getStatistics')),
    );
  }

  public updateDictionaryFromWord(dictionary: Dictionary, word: Word, valid: boolean): Observable<any> {
    let wordsLearned = dictionary.wordsLearned + (valid && word.count === word.errors ? 1 : 0);
    if (wordsLearned > dictionary.totalWords) {
      wordsLearned = dictionary.totalWords;
    }
    const observables = [];
    if (valid) {
      observables.push(this.updateDictionaryWordsLearned(dictionary.id, this.uid, wordsLearned));
    }
    observables.push(this.updateWord(word.id, this.uid, valid));
    observables.push(this.updateStatistics(word, this.uid, valid));

    return forkJoin(observables).pipe(
      map(() => wordsLearned),
      catchError(this.handleError('updateDictionaryStat')),
    );
  }

  private getDictionaryById(id: string): Observable<Dictionary> {
    return from(this.db.ref(`dictionaryList/${id}`).once('value')).pipe(
      map(snapshot => Dictionary.fromSnapshot(snapshot, this.uid)),
      catchError(this.handleError<Dictionary>(`getDictionaryById id=${id}`)),
    );
  }

  private getWordsByDictionaryId(dictionaryId: string): Observable<Word[]> {
    return from(
      this.db
        .ref('wordList')
        .orderByChild('dictionaryId')
        .equalTo(dictionaryId)
        .once('value'),
    ).pipe(
      map(snapshot => {
        const arr: Word[] = [];
        snapshot.forEach(payload => {
          arr.push(Word.fromSnapshot(payload, this.uid));
        });
        return arr;
      }),
      catchError(this.handleError('getWordsByDictionaryId', [])),
    );
  }

  private updateDictionaryWordsLearned(dictionaryId: string, uid: string | null, wordsLearned: number): Observable<any> {
    if (!uid) {
      return of();
    }

    const ref = this.db.ref(`dictionaryList/${dictionaryId}`);
    const promise = ref.transaction(data => {
      if (data) {
        if (!data.wordsLearned) {
          data.wordsLearned = {};
        }
        data.wordsLearned[uid] = wordsLearned;
      }
      return data;
    });
    return from(promise);
  }

  private updateWord(wordId: string, uid: string | null, valid: boolean): Observable<any> {
    if (!uid) {
      return of();
    }

    const ref = this.db.ref(`wordList/${wordId}`);
    const promise = ref.transaction(data => {
      if (data) {
        if (!data.count) {
          data.count = {};
        }
        if (!data.errors) {
          data.errors = {};
        }
        const count = data.count[uid] || 0;
        const errors = data.errors[uid] || 0;

        data.count[uid] = count + 1;
        data.errors[uid] = errors + (valid ? 0 : 1);
      }
      return data;
    });
    return from(promise);
  }

  private updateStatistics(word: Word, uid: string | null, valid: boolean): Observable<any> {
    if (!uid) {
      return of();
    }

    const { id, ...rest } = word;
    const ref = this.db.ref(`statistics/${uid}`);
    const promise = ref.child(id).once('value', snapshot => {
      const updates: any = {};
      const snap = snapshot.val();
      if (snap) {
        updates[id] = {
          ...rest,
          count: snap.count + 1,
          errors: snap.errors + (valid ? 0 : 1),
        };
      } else {
        updates[id] = { ...rest, count: 1, errors: valid ? 0 : 1 };
      }
      return ref.update(updates);
    });

    return from(promise);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // eslint-disable-next-line class-methods-use-this
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // eslint-disable-next-line no-console
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // eslint-disable-next-line no-console
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

export default new Firebase();
