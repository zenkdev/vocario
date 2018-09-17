import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageProvider } from './message';
import { Dictionary, Word } from '../models';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DictionaryProvider {
  private dictionariesUrl = 'api/dictionaries'; // URL to web api

  private user: firebase.User;

  constructor(private http: HttpClient, private messageProvider: MessageProvider, private storage: Storage) {
    firebase.auth().onAuthStateChanged(user => (this.user = user));
  }

  /** GET dictionaries from the server */
  // getDictionaries(): Observable<Dictionary[]> {
  //   return this.getDictionariesFromStorage()
  //     .flatMap(data => (data ? Observable.of(data) : this.http.get<Dictionary[]>(this.dictionariesUrl)))
  //     .pipe(
  //       tap(_ => this.log('fetched dictionaries')),
  //       tap((dictionaries: Dictionary[]) => {
  //         this.setDictionariesInStrorage(dictionaries);
  //       }),
  //       catchError(this.handleError('getDictionaries', []))
  //     );
  // }

  getDictionaries() {
    return new Observable<Dictionary[]>(observer => {
      firebase
        .database()
        .ref('/dictionaryList')
        .once(
          'value',
          snapshot => {
            const dictionarytList = [];
            snapshot.forEach(snap => {
              const dictionaryListEntity = { id: snap.key, ...snap.val() };
              if (this.user) {
                this.getWordsLearned(
                  firebase.database().ref(`/dictionaryList/${dictionaryListEntity.id}`),
                  this.user.uid
                ).then(
                  data => {
                    dictionaryListEntity.wordsLearned = data;
                    dictionarytList.push(dictionaryListEntity);
                  },
                  error => observer.error(error)
                );
              } else {
                dictionarytList.push(dictionaryListEntity);
              }
            });
            observer.next(dictionarytList);
          },
          error => observer.error(error)
        );
    });
  }

  /** GET dictionary by id. Return `undefined` when id not found */
  // getDictionaryNo404(id: number): Observable<Dictionary> {
  //   const url = `${this.dictionariesUrl}/?id=${id}`;
  //   return this.getDictionariesFromStorage()
  //     .flatMap(data => (data ? Observable.of(data.filter(x => x.id === id)) : this.http.get<Dictionary[]>(url)))
  //     .pipe(
  //       map(dictionaries => dictionaries[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} dictionary id=${id}`);
  //       }),
  //       catchError(this.handleError<Dictionary>(`getDictionary id=${id}`))
  //     );
  // }

  /** GET dictionary by id. Will 404 if id not found */
  // getDictionary(id: number): Observable<Dictionary> {
  //   const url = `${this.dictionariesUrl}/${id}`;
  //   return this.getDictionariesFromStorage()
  //     .flatMap(data => (data ? Observable.of(data.find(x => x.id === id)) : this.http.get<Dictionary>(url)))
  //     .pipe(
  //       tap(_ => this.log(`fetched dictionary id=${id}`)),
  //       catchError(this.handleError<Dictionary>(`getDictionary id=${id}`))
  //     );
  // }

  getDictionary(id: string): Observable<Dictionary> {
    return new Observable<Dictionary>(observer => {
      firebase
        .database()
        .ref(`/dictionaryList/${id}`)
        .once(
          'value',
          snap => {
            const dictionaryEntity = { id: snap.key, ...snap.val() };

            this.getWords(dictionaryEntity.id)
              .then(data => {
                dictionaryEntity.words = data;
                if (this.user) {
                  this.getWordsLearned(
                    firebase.database().ref(`/dictionaryList/${dictionaryEntity.id}`),
                    this.user.uid
                  ).then(
                    data => {
                      dictionaryEntity.wordsLearned = data;
                      observer.next(dictionaryEntity);
                    },
                    error => observer.error(error)
                  );
                } else {
                  observer.next(dictionaryEntity);
                }
              })
              .catch(error => observer.error(error));
          },
          error => observer.error(error)
        );
    });
  }

  /* GET dictionaries whose name contains search term */
  searchDictionaries(term: string): Observable<Dictionary[]> {
    if (!term.trim()) {
      // if not search term, return empty dictionary array.
      return Observable.of([]);
    }
    const url = `${this.dictionariesUrl}/?name=${term}`;
    return this.getDictionariesFromStorage()
      .flatMap(
        data => (data ? Observable.of(data.filter(x => x.name.indexOf(term) !== -1)) : this.http.get<Dictionary[]>(url))
      )
      .pipe(
        tap(_ => this.log(`found dictionaries matching "${term}"`)),
        catchError(this.handleError<Dictionary[]>('searchDictionaries', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new dictionary to the server */
  addDictionary(dictionary: Dictionary): Observable<Dictionary> {
    return this.http.post<Dictionary>(this.dictionariesUrl, dictionary, httpOptions).pipe(
      tap((dictionary: Dictionary) => this.log(`added dictionary w/ id=${dictionary.id}`)),
      catchError(this.handleError<Dictionary>('addHDictionary'))
    );
  }

  /** DELETE: delete the dictionary from the server */
  deleteDictionary(dictionary: Dictionary | number): Observable<Dictionary> {
    const id = typeof dictionary === 'number' ? dictionary : dictionary.id;
    const url = `${this.dictionariesUrl}/${id}`;

    return this.http.delete<Dictionary>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted dictionary id=${id}`)),
      catchError(this.handleError<Dictionary>('deleteDictionary'))
    );
  }

  /** PUT: update the dictionary on the server */
  updateDictionary(dictionary: Dictionary): Observable<any> {
    return this.http.put(this.dictionariesUrl, dictionary, httpOptions).pipe(
      tap(_ => {
        this.getDictionariesFromStorage().subscribe(data => {
          if (!data) {
            data = [];
          }
          const newData = [...data.filter(x => x.id !== dictionary.id), dictionary];
          this.setDictionariesInStrorage(newData);
        });
      }),
      tap(_ => this.log(`updated dictionary id=${dictionary.id}`)),
      catchError(this.handleError<any>('updateDictionary'))
    );
  }

  getWordStats() {
    if (!this.user) {
      return Observable.of<Word[]>([]);
    }
    return new Observable<Word[]>(observer => {
      firebase
        .database()
        .ref(`/wordStat/${this.user.uid}`)
        .once(
          'value',
          snapshot => {
            const data = [];
            snapshot.forEach(snap => {
              data.push({ id: snap.key, ...snap.val() });
            });
            observer.next(data);
          },
          error => observer.error(error)
        );
    });
  }

  updateDictionaryStat(dictionary: Dictionary, word: Word, valid: boolean): Observable<number> {
    if (!this.user){
      return Observable.of(dictionary.wordsLearned);
    }
    const newWordsLearned = dictionary.wordsLearned + (valid ? 1 : 0);
    return new Observable<number>(observer => {
      const promises = [];

      if (valid) {
        promises.push(this.updateWordsLearned(dictionary.id, this.user.uid, newWordsLearned));
      }
      promises.push(this.updateWordStat(this.user.uid, word, valid));

      Promise.all(promises)
        .then(_ => observer.next(newWordsLearned))
        .catch(reason => observer.error(reason));
    });
  }

  private getWords(dictionaryKey: string): Promise<Word[]> {
    return new Promise((resolve, reject) => {
      const wordListRef = firebase.database().ref(`/wordList`);
      wordListRef
        .orderByChild('dictionaryKey')
        .equalTo(dictionaryKey)
        .once(
          'value',
          snapshot => {
            const data = [];
            snapshot.forEach(function(childSnapshot) {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              data.push({ id: childKey, ...childData });
            });
            resolve(data);
          },
          error => reject(error)
        );
    });
  }

  private getWordsLearned(dictionaryRef: any, uid: string): Promise<number> {
    return new Promise((resolve, reject) => {
      dictionaryRef.child(`wordsLearned/${uid}`).once(
        'value',
        snap => {
          resolve(snap.val() || 0);
        },
        error => reject(error)
      );
    });
  }

  private updateWordsLearned(dictionaryId: string, uid: string, wordsLearned: number): Promise<any> {
    const dictionaryListRef = firebase.database().ref(`/dictionaryList/${dictionaryId}`);
    return dictionaryListRef.transaction(function(dictionary) {
      if (dictionary) {
        if (!dictionary.wordsLearned) {
          dictionary.wordsLearned = {};
        }
        dictionary.wordsLearned[uid] = wordsLearned;
      }
      return dictionary;
    });
  }

  private updateWordStat(userId: string, word: Word, valid: boolean): Promise<any> {
    const { id, ...rest } = word;
    const wordsRef = firebase.database().ref(`/wordStat/${userId}`);
    return wordsRef.child(id).once(
      'value',
      function(snapshot) {
        var updates = {};
        const wordRef = snapshot.val();
        if (wordRef) {
          updates[id] = {
            ...rest,
            lastViewed: new Date(),
            count: word.count + 1,
            errors: word.errors + (valid ? 0 : 1)
          };
        } else {
          updates[id] = { ...rest, lastViewed: new Date(), count: 1, errors: valid ? 0 : 1 };
        }
        return wordsRef.update(updates);
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

  /** Log a DictionaryService message with the MessageService */
  private log(message: string) {
    this.messageProvider.add(`DictionaryService: ${message}`);
  }

  private getDictionariesFromStorage(): Observable<Dictionary[]> {
    return Observable.fromPromise(this.storage.get('lexion-dictionaries'));
  }

  private setDictionariesInStrorage(value: Dictionary[]): void {
    this.storage.set('lexion-dictionaries', value);
  }
}
