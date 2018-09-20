import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

import { MessageProvider } from '../message';
import { Dictionary, Word } from '../../models';

import firebase, { User } from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DictionaryProvider {
  private dictionariesUrl = 'api/dictionaries'; // URL to web api
  private currentUser: User;

  constructor(
    private http: HttpClient,
    private messageProvider: MessageProvider,
    private storage: Storage,
    private db: AngularFireDatabase,
    afAuth: AngularFireAuth
  ) {
    afAuth.user.subscribe(
      user => {
        this.currentUser = user;
      },
      error => alert(error)
    );
  }

  /** GET dictionaries from the server */
  getDictionaries(): Observable<Dictionary[]> {
    return this.db
      .list<Dictionary>('dictionaryList')
      .snapshotChanges()
      .pipe(
        tap(_ => this.log('fetched dictionaries')),
        map(snapshot => Dictionary.fromJsonArray(snapshot, this.currentUser.uid)),
        catchError(this.handleError('getDictionaries', []))
      );
  }

  /** GET dictionary by id. */
  getDictionary(id: string): Observable<Dictionary> {
    return this.getDictionaryById(id).pipe(
      switchMap(dictionary => {
        return this.getWordsByDictionaryId(id).pipe(
          map(data => {
            dictionary.words = data;
            return dictionary;
          })
        );
      })
    );
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
    return new Observable<Word[]>(observer => {
      firebase
        .database()
        .ref(`/wordStat/${this.currentUser.uid}`)
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
    const newWordsLearned = dictionary.wordsLearned + (valid ? 1 : 0);
    return new Observable<number>(observer => {
      const promises = [];

      if (valid) {
        promises.push(this.updateWordsLearned(dictionary.id, this.currentUser.uid, newWordsLearned));
      }
      promises.push(this.updateWordStat(this.currentUser.uid, word, valid));

      Promise.all(promises)
        .then(_ => observer.next(newWordsLearned))
        .catch(reason => observer.error(reason));
    });
  }

  private getDictionaryById(id: string): Observable<Dictionary> {
    return this.db
      .object<Dictionary>(`dictionaryList/${id}`)
      .snapshotChanges()
      .pipe(
        tap(_ => this.log(`fetched dictionary id=${id}`)),
        map(snap => {
          return Dictionary.fromJson(snap, this.currentUser.uid);
        }),
        catchError(this.handleError<Dictionary>(`getDictionaryById id=${id}`))
      );
  }

  private getWordsByDictionaryId(dictionaryId: string): Observable<Word[]> {
    return this.db
      .list<Word>('wordList', ref => ref.orderByChild('dictionaryId').equalTo(dictionaryId))
      .snapshotChanges()
      .pipe(
        tap(_ => this.log(`fetched words dictionaryId=${dictionaryId}`)),
        map(snap => Word.fromJsonArray(snap, this.currentUser.uid)),
        catchError(this.handleError('getWordsByDictionaryId', []))
      );
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
