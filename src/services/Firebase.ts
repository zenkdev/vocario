// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import environment from '../environments/environment';

export class Firebase {
  public readonly auth: firebase.auth.Auth;

  public readonly db: firebase.database.Database;

  constructor() {
    firebase.initializeApp(environment.firebase);

    this.auth = firebase.auth();
    this.db = firebase.database();
  }
}

export default new Firebase();
