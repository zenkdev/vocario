import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageProvider } from './message';
import { Dictionary } from '../models';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DictionaryProvider {
  private dictionariesUrl = 'api/dictionaries'; // URL to web api
  private dictionariesKey = 'dictionaries';

  constructor(private http: HttpClient, private messageProvider: MessageProvider, private storage: Storage) {}

  /** GET dictionaries from the server */
  getDictionaries(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.dictionariesUrl).pipe(
      tap(_ => this.log('fetched dictionaries')),
      catchError(this.handleError('getDictionaries', []))
    );
  }

  /** GET dictionary by id. Return `undefined` when id not found */
  getDictionaryNo404(id: number): Observable<Dictionary> {
    const url = `${this.dictionariesUrl}/?id=${id}`;
    return this.http.get<Dictionary[]>(url).pipe(
      map(dictionaries => dictionaries[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} dictionary id=${id}`);
      }),
      catchError(this.handleError<Dictionary>(`getDictionary id=${id}`))
    );
  }

  /** GET dictionary by id. Will 404 if id not found */
  getDictionary(id: number): Observable<Dictionary> {
    const key = `${this.dictionariesKey}_${id}`;
    return Observable.create(observer => {
      this.storage.get(key).then(data => {
        if (data) {
          this.log(`dictionary from storage id=${id}`);
          observer.next(data);
          observer.complete();
        } else {
          const url = `${this.dictionariesUrl}/${id}`;
          this.http.get<Dictionary>(url).subscribe(
            json => {
              this.log(`fetched dictionary id=${id}`);
              this.storage.set(key, json);
              observer.next(json);
            },
            error => {
              const operation = `getDictionary id=${id}`;
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead

              // TODO: better job of transforming error for user consumption
              this.log(`${operation} failed: ${error.message}`);

              // Let the app keep running by returning an empty result.
              observer.error(error);
            },
            () => observer.complete()
          );
        }
      });
    });
  }

  /* GET dictionaries whose name contains search term */
  searchDictionaries(term: string): Observable<Dictionary[]> {
    if (!term.trim()) {
      // if not search term, return empty dictionary array.
      return Observable.of([]);
    }
    return this.http.get<Dictionary[]>(`${this.dictionariesUrl}/?name=${term}`).pipe(
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
    const key = `${this.dictionariesKey}_${dictionary.id}`;
    return this.http.put(this.dictionariesUrl, dictionary, httpOptions).pipe(
      tap(_ => this.storage.set(key, dictionary)),
      tap(_ => this.log(`updated dictionary id=${dictionary.id}`)),
      catchError(this.handleError<any>('updateDictionary'))
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
}
