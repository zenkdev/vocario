import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable, Subject, of, from, forkJoin } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

import { MessageProvider } from '../message';
import { Dictionary, Word } from '../../models';

import firebase, { User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DictionaryProvider {
  private dictionariesUrl = 'api/dictionaries'; // URL to web api
  private currentUser: User;
  private sdkDb: firebase.database.Database;

  constructor(
    private http: HttpClient,
    private messageProvider: MessageProvider,
    private storage: Storage,
    private db: AngularFireDatabase,
    afAuth: AngularFireAuth
  ) {
    this.sdkDb = db.database;
    afAuth.user.subscribe(user => (this.currentUser = user), error => alert(error));
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
      return of([]);
    }
    const url = `${this.dictionariesUrl}/?name=${term}`;
    return this.getDictionariesFromStorage()
      .flatMap(data => (data ? of(data.filter(x => x.name.indexOf(term) !== -1)) : this.http.get<Dictionary[]>(url)))
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

  updateDictionaryFromWord(dictionary: Dictionary, word: Word, valid: boolean): Observable<any> {
    let wordsLearned = dictionary.wordsLearned + (valid && !word.count ? 1 : 0);
    if (wordsLearned > dictionary.totalWords) {
      wordsLearned = dictionary.totalWords;
    }
    const observables = [];
    if (valid) {
      observables.push(this.updateDictionaryWordsLearned(dictionary.id, this.currentUser.uid, wordsLearned));
    }
    observables.push(this.updateWord(word.id, this.currentUser.uid, valid));
    observables.push(this.updateStatistics(word, this.currentUser.uid, valid));

    return forkJoin(observables).pipe(
      tap(_ => this.log(`updated dictionarie stat id=${dictionary.id}`)),
      map(_ => wordsLearned),
      catchError(this.handleError('updateDictionaryStat'))
    );
  }

  getStatistics(): Observable<Word[]> {
    return this.db
      .list<Word>(`statistics/${this.currentUser.uid}`)
      .snapshotChanges()
      .pipe(
        tap(_ => this.log(`fetched statistics`)),
        map(action => Word.fromJsonStatArray(action)),
        catchError(this.handleError<Word[]>(`getStatistics`))
      );
  }

  private getDictionaryById(id: string): Observable<Dictionary> {
    return this.db
      .object<Dictionary>(`dictionaryList/${id}`)
      .snapshotChanges()
      .pipe(
        tap(_ => this.log(`fetched dictionary id=${id}`)),
        map(action => Dictionary.fromJson(action, this.currentUser.uid)),
        catchError(this.handleError<Dictionary>(`getDictionaryById id=${id}`))
      );
  }

  private getWordsByDictionaryId(dictionaryId: string): Observable<Word[]> {
    return this.db
      .list<Word>('wordList', ref => ref.orderByChild('dictionaryId').equalTo(dictionaryId))
      .snapshotChanges()
      .pipe(
        tap(_ => this.log(`fetched words dictionaryId=${dictionaryId}`)),
        map(action => Word.fromJsonArray(action, this.currentUser.uid)),
        catchError(this.handleError('getWordsByDictionaryId', []))
      );
  }

  private updateDictionaryWordsLearned(dictionaryId: string, uid: string, wordsLearned: number): Observable<any> {
    const ref = this.sdkDb.ref(`dictionaryList/${dictionaryId}`);
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

  private updateWord(wordId: string, uid: string, valid: boolean): Observable<any> {
    const ref = this.sdkDb.ref(`wordList/${wordId}`);
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

  private updateStatistics(word: Word, uid: string, valid: boolean): Observable<any> {
    const { id, ...rest } = word;
    const ref = this.sdkDb.ref(`statistics/${uid}`);
    const promise = ref.child(id).once('value', snapshot => {
      var updates = {};
      const snap = snapshot.val();
      if (snap) {
        updates[id] = {
          ...rest,
          count: snap.count + 1,
          errors: snap.errors + (valid ? 0 : 1)
        };
      } else {
        updates[id] = { ...rest, count: 1, errors: valid ? 0 : 1 };
      }
      return ref.update(updates);
    });

    return from(promise);
  }

  private firebaseUpdate(dataToSave) {
    const subject = new Subject();

    this.sdkDb
      .ref()
      .update(dataToSave)
      .then(
        val => {
          subject.next(val);
          subject.complete();
        },
        err => {
          subject.error(err);
          subject.complete();
        }
      );

    return subject.asObservable();
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
      return of(result as T);
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
