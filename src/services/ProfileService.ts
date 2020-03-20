import firebase from 'firebase/app';
import Observable from 'zen-observable';

import { createUserProfile, UserProfile } from '../models';
import firebaseInstance from './Firebase';
import localStoreManager, { DARK_THEME_DATA_KEY, FONT_SIZE_DATA_KEY, SIMPLE_MODE_DATA_KEY } from './LocalStoreManager';

const { withTrace, auth, db } = firebaseInstance;

const getOptions = () => {
  const simpleMode = localStoreManager.getDataObject<boolean>(SIMPLE_MODE_DATA_KEY);
  const fontSize = localStoreManager.getDataObject<number>(FONT_SIZE_DATA_KEY);
  const darkTheme = localStoreManager.getDataObject<boolean>(DARK_THEME_DATA_KEY);
  return { simpleMode, fontSize, darkTheme };
};

class ProfileService {
  private readonly database: firebase.database.Database;

  private currentUser: firebase.User | null = null;

  private currentUserChanged$: Observable<UserProfile | null>;

  private currentUserChangedSubscriber!: ZenObservable.SubscriptionObserver<UserProfile | null>;

  constructor() {
    this.database = db;
    this.handleAuthStateChanged = this.handleAuthStateChanged.bind(this);
    this.currentUserChanged$ = new Observable<UserProfile>(subscriber => {
      this.currentUserChangedSubscriber = subscriber;
    });
    auth.onAuthStateChanged(this.handleAuthStateChanged);
  }

  public onCurrentUserChanged(
    onNext: (value: UserProfile | null) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription {
    return this.currentUserChanged$.subscribe(onNext, onError, onComplete);
  }

  /** GET profile from the server */
  public async getProfile(): Promise<UserProfile> {
    return withTrace('getProfile', async () => {
      const options = getOptions();

      if (!this.currentUser) {
        return new UserProfile(options);
      }

      const ref = firebaseInstance.db.ref(`/userProfile/${this.currentUser.uid}`);
      const snapshot = await ref.once('value');
      return createUserProfile(snapshot, options);
    });
  }

  /** UPDATE profile name on the server */
  public async updateName(displayName: string): Promise<void> {
    if (this.currentUser) {
      await this.currentUser.updateProfile({ displayName });
      await this.updateUserProfile({ displayName });
      await this.raiseCurrentUserChanged();
    }
  }

  /** UPDATE email on the server */
  public async updateEmail(newEmail: string, password: string): Promise<void> {
    if (this.currentUser) {
      if (this.currentUser.email == null) {
        throw new Error('Email can not be null');
      }
      const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser.email, password);
      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updateEmail(newEmail);
      await this.updateUserProfile({ email: newEmail });
      await this.raiseCurrentUserChanged();
    }
  }

  /** UPDATE password on the server */
  public async updatePassword(newPassword: string, oldPassword: string): Promise<void> {
    if (this.currentUser) {
      if (this.currentUser.email == null) {
        throw new Error('Email can not be null');
      }
      const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser.email, oldPassword);
      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updatePassword(newPassword);
      await this.raiseCurrentUserChanged();
      // console.info('Password Changed');
    }
  }

  /** UPDATE simple mode on the server */
  public async updateSimpleMode(simpleMode: boolean): Promise<void> {
    localStoreManager.savePermanentData(SIMPLE_MODE_DATA_KEY, simpleMode);
    await this.updateUserProfile({ simpleMode });
    await this.raiseCurrentUserChanged();
  }

  /** UPDATE font size on the server */
  public async updateFontSize(fontSize: number): Promise<void> {
    localStoreManager.savePermanentData(FONT_SIZE_DATA_KEY, fontSize);
    await this.updateUserProfile({ fontSize });
    await this.raiseCurrentUserChanged();
  }

  /** UPDATE dark theme on the server */
  public async updateDarkTheme(darkTheme: boolean): Promise<void> {
    localStoreManager.savePermanentData(DARK_THEME_DATA_KEY, darkTheme);
    await this.updateUserProfile({ darkTheme });
    await this.raiseCurrentUserChanged();
  }

  private handleAuthStateChanged(user: firebase.User | null) {
    this.currentUser = user;
    // eslint-disable-next-line no-console
    this.raiseCurrentUserChanged().catch(console.error);
  }

  private raiseCurrentUserChanged(): Promise<void> {
    if (!this.currentUser) {
      this.currentUserChangedSubscriber.next(null);
      return Promise.resolve();
    }
    return this.getProfile().then(profile => {
      this.currentUserChangedSubscriber.next(profile);
    });
  }

  private async updateUserProfile(values: Record<string, any>): Promise<void> {
    if (this.currentUser) {
      await this.database.ref(`/userProfile/${this.currentUser.uid}`).update(values);
    }
  }
}

export default new ProfileService();
