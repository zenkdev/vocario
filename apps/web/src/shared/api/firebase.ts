// Firebase App (the core Firebase SDK) is always required and must be listed first
import { type FirebaseApp, initializeApp } from 'firebase/app';
// Add the Firebase products that you want to use
import { getAuth, type Auth } from 'firebase/auth';
import { getDatabase, Database } from 'firebase/database';
import { type AnalyticsCallOptions, type Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { getPerformance, type FirebasePerformance, trace as getTrace } from 'firebase/performance';

import firebaseConfig from '../../firebaseConfig';

export class Firebase {
  private readonly app: FirebaseApp;

  public readonly auth: Auth;

  public readonly db: Database;

  public readonly perf: FirebasePerformance;

  private analytics: Analytics | null = null;

  constructor() {
    this.app = initializeApp(firebaseConfig);

    this.auth = getAuth(this.app);
    this.db = getDatabase(this.app);
    this.perf =
      typeof window !== 'undefined'
        ? getPerformance(this.app)
        : { app: this.app, dataCollectionEnabled: false, instrumentationEnabled: false };
    this.withTrace = this.withTrace.bind(this);
    this.logEvent = this.logEvent.bind(this);
  }

  public async withTrace<R>(traceName: string, callback: () => Promise<R>): Promise<R> {
    const trace = getTrace(this.perf, traceName);
    trace.start();
    const result = await callback();
    trace.stop();
    return result;
  }

  public logEvent(eventName: string, eventParams?: Record<string, unknown>, options?: AnalyticsCallOptions) {
    if (!this.analytics) {
      this.analytics = getAnalytics(this.app);
    }
    logEvent(this.analytics, eventName, eventParams, options);
  }
}

export const firebaseInstance = new Firebase();
