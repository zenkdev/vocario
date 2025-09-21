import {
  type User,
  updateProfile,
  reauthenticateWithCredential,
  updateEmail as updateFirebaseEmail,
  updatePassword as updateFirebasePassword,
  EmailAuthProvider,
} from 'firebase/auth';
import { Database, ref, get, update } from 'firebase/database';
import Observable from 'zen-observable';

import { createUserProfile, type UserProfile } from '@/shared/model';
import { omitUndefined } from '@/shared/lib';
import { firebaseInstance, Firebase } from './firebase';
import { localStoreManager, DARK_THEME_DATA_KEY, FONT_SIZE_DATA_KEY, getProfileOptions, SIMPLE_MODE_DATA_KEY } from './local-store-manager';

const { withTrace } = firebaseInstance;

export class ProfileService {
  private readonly db: Database;

  private currentUser: User | null = null;

  private currentUserChanged$: Observable<UserProfile | null>;

  private currentUserChangedSubscriber: ZenObservable.SubscriptionObserver<UserProfile | null> | null = null;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

      const dbRef = ref(this.db, `/userProfile/${this.currentUser.uid}`);
      const snapshot = await get(dbRef);
      return createUserProfile(snapshot, options);
    });
  };

  /** UPDATE profile name on the server */
  public updateProfile = async (displayName: string, photoURL?: string): Promise<void> => {
    if (this.currentUser) {
      await updateProfile(this.currentUser, { displayName }); // can not store data urls
      await this.updateUserProfile(omitUndefined({ displayName, photoURL }));
      await this.raiseCurrentUserChanged();
    }
  };

  /** UPDATE email on the server */
  public updateEmail = async (newEmail: string, password: string): Promise<void> => {
    if (this.currentUser) {
      if (this.currentUser.email == null) {
        throw new Error('Email can not be null');
      }
      const credential = EmailAuthProvider.credential(this.currentUser.email, password);
      await reauthenticateWithCredential(this.currentUser, credential);
      await updateFirebaseEmail(this.currentUser, newEmail);
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
      const credential = EmailAuthProvider.credential(this.currentUser.email, oldPassword);
      await reauthenticateWithCredential(this.currentUser, credential);
      await updateFirebasePassword(this.currentUser, newPassword);
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

  private handleAuthStateChanged(user: User | null) {
    this.currentUser = user;

    this.raiseCurrentUserChanged().catch(console.error);
  }

  private raiseCurrentUserChanged(): Promise<void> {
    if (!this.currentUser) {
      this.currentUserChangedSubscriber?.next(null);
      return Promise.resolve();
    }
    return this.getProfile().then(profile => {
      this.currentUserChangedSubscriber?.next(profile);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async updateUserProfile(values: Record<string, any>): Promise<void> {
    if (this.currentUser) {
      await update(ref(this.db, `/userProfile/${this.currentUser.uid}`), values);
    }
  }
}

export const profileService = new ProfileService(firebaseInstance);
