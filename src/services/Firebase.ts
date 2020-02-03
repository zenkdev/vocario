// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/performance';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

import environment from '../environments/environment';

export class Firebase {
  public readonly auth: firebase.auth.Auth;

  public readonly db: firebase.database.Database;

  public readonly perf: firebase.performance.Performance;

  constructor() {
    firebase.initializeApp(environment.firebase);

    this.auth = firebase.auth();
    this.db = firebase.database();
    this.perf = firebase.performance();
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
