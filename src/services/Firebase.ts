// Firebase App (the core Firebase SDK) is always required and must be listed first
import { FirebaseApp, initializeApp } from 'firebase/app';
// Add the Firebase products that you want to use
import { getAuth, Auth } from 'firebase/auth';
import { getDatabase, Database } from 'firebase/database';
import { getPerformance, FirebasePerformance, trace as getTrace } from 'firebase/performance';

import firebaseConfig from '../firebaseConfig';

export class Firebase {
  private readonly app: FirebaseApp;

  public readonly auth: Auth;

  public readonly db: Database;

  public readonly perf: FirebasePerformance;

  constructor() {
    this.app = initializeApp(firebaseConfig);

    this.auth = getAuth(this.app);
    this.db = getDatabase(this.app);
    this.perf = getPerformance(this.app);

    this.withTrace = this.withTrace.bind(this);
  }

  public async withTrace<R>(traceName: string, callback: () => Promise<R>): Promise<R> {
    const trace = getTrace(this.perf, traceName);
    trace.start();
    const result = await callback();
    trace.stop();
    return result;
  }
}

export default new Firebase();
