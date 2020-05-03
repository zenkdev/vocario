import firebase from 'firebase/app';
import Observable from 'zen-observable';

import { createUserProfile, UserProfile } from '../models';
import firebaseInstance, { Firebase } from './Firebase';
import localStoreManager, { DARK_THEME_DATA_KEY, FONT_SIZE_DATA_KEY, getProfileOptions, SIMPLE_MODE_DATA_KEY } from './LocalStoreManager';

const { withTrace } = firebaseInstance;

type Database = firebase.database.Database;
type User = firebase.User;

class ProfileService {
  private readonly db: Database;

  private currentUser: User | null = null;

  private currentUserChanged$: Observable<UserProfile | null>;

  private currentUserChangedSubscriber!: ZenObservable.SubscriptionObserver<UserProfile | null>;

  constructor({ auth, db }: Firebase) {
    this.db = db;
    this.handleAuthStateChanged = this.handleAuthStateChanged.bind(this);
    this.currentUserChanged$ = new Observable<UserProfile>(subscriber => {
      this.currentUserChangedSubscriber = subscriber;
    });
    auth.onAuthStateChanged(this.handleAuthStateChanged);
  }

  public onCurrentUserChanged = (
    onNext: (value: UserProfile | null) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription => this.currentUserChanged$.subscribe(onNext, onError, onComplete);

  /** GET profile from the server */
  public getProfile = async (): Promise<UserProfile> => {
    return withTrace('getProfile', async () => {
      const options = getProfileOptions();

      if (!this.currentUser) {
        return createUserProfile(null, options);
      }

      const ref = this.db.ref(`/userProfile/${this.currentUser.uid}`);
      const snapshot = await ref.once('value');
      return createUserProfile(snapshot, options);
    });
  };

  /** UPDATE profile name on the server */
  public updateProfile = async (displayName: string, photoURL?: string): Promise<void> => {
    if (this.currentUser) {
      await this.currentUser.updateProfile({ displayName }); // can not store data urls
      await this.updateUserProfile({ displayName, photoURL });
      await this.raiseCurrentUserChanged();
    }
  };

  /** UPDATE email on the server */
  public updateEmail = async (newEmail: string, password: string): Promise<void> => {
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
  };

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

  /** UPDATE dark theme on the server */
  public updateDarkTheme = async (darkTheme: boolean): Promise<void> => {
    localStoreManager.savePermanentData(DARK_THEME_DATA_KEY, darkTheme);
    await this.updateUserProfile({ darkTheme });
    await this.raiseCurrentUserChanged();
  };

  /** UPDATE font size on the server */
  public updateFontSize = async (fontSize: number): Promise<void> => {
    localStoreManager.savePermanentData(FONT_SIZE_DATA_KEY, fontSize);
    await this.updateUserProfile({ fontSize });
    await this.raiseCurrentUserChanged();
  };

  /** UPDATE simple mode on the server */
  public updateSimpleMode = async (simpleMode: boolean): Promise<void> => {
    localStoreManager.savePermanentData(SIMPLE_MODE_DATA_KEY, simpleMode);
    await this.updateUserProfile({ simpleMode });
    await this.raiseCurrentUserChanged();
  };

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
      await this.db.ref(`/userProfile/${this.currentUser.uid}`).update(values);
    }
  }
}

export default new ProfileService(firebaseInstance);
