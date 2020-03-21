// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/performance';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import firebaseConfig from '../firebaseConfig';

export class Firebase {
  public readonly auth: firebase.auth.Auth;

  public readonly db: firebase.database.Database;

  public readonly perf: firebase.performance.Performance;

  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
    this.db = firebase.database();
    this.perf = firebase.performance();

    this.withTrace = this.withTrace.bind(this);
  }

  public async withTrace<R>(traceName: string, callback: () => Promise<R>): Promise<R> {
    const trace = this.perf.trace(traceName);
    trace.start();
    const result = await callback();
    trace.stop();
    return result;
  }
}

export default new Firebase();
