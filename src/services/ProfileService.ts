/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';
import Observable from 'zen-observable';

import { UserProfile } from '../models';
import firebaseInstance from './Firebase';
import createLogger from './createLogger';
import localStoreManager from './LocalStoreManager';

const SIMPLE_MODE_DATA_KEY = 'lexion:simpleMode';
const FONT_SIZE_DATA_KEY = 'lexion:fontSize';

class ProfileService {
  private logger = createLogger('ProfileService');

  private currentUser: firebase.User | null = null;

  private currentUserChanged$: Observable<UserProfile | null>;

  private currentUserChangedSubscriber!: ZenObservable.SubscriptionObserver<UserProfile | null>;

  constructor() {
    this.handleAuthStateChanged = this.handleAuthStateChanged.bind(this);

    this.currentUserChanged$ = new Observable<UserProfile>(subscriber => {
      this.currentUserChangedSubscriber = subscriber;
    });
    firebaseInstance.auth.onAuthStateChanged(this.handleAuthStateChanged);
  }

  public onCurrentUserChanged(
    onNext: (value: UserProfile | null) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription {
    return this.currentUserChanged$.subscribe(onNext, onError, onComplete);
  }

  public async getProfile(): Promise<UserProfile> {
    this.logger.info('getProfile');

    const simpleMode = localStoreManager.getDataObject<boolean>(SIMPLE_MODE_DATA_KEY);
    const fontSize = localStoreManager.getDataObject<number>(FONT_SIZE_DATA_KEY);
    if (!this.currentUser) {
      return new UserProfile({ simpleMode, fontSize });
    }

    const ref = firebaseInstance.db.ref(`/userProfile/${this.currentUser.uid}`);
    const snapshot = await ref.once('value');
    const profile = UserProfile.fromSnapshot(snapshot);

    profile.simpleMode = simpleMode != null ? simpleMode : profile.simpleMode;
    profile.fontSize = fontSize != null ? fontSize : profile.fontSize;

    return profile;
  }

  public async updateName(displayName: string): Promise<void> {
    if (this.currentUser) {
      await this.currentUser.updateProfile({ displayName });
      await this.updateUserProfile({ displayName });
      await this.raiseCurrentUserChanged();
    }
  }

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

  public async updatePassword(newPassword: string, oldPassword: string): Promise<void> {
    if (this.currentUser) {
      if (this.currentUser.email == null) {
        throw new Error('Email can not be null');
      }
      const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser.email, oldPassword);
      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updatePassword(newPassword);
      await this.raiseCurrentUserChanged();
      this.logger.info('Password Changed');
    }
  }

  public async updateSimpleMode(simpleMode: boolean): Promise<void> {
    this.logger.info('updateSimpleMode', simpleMode);
    localStoreManager.savePermanentData(SIMPLE_MODE_DATA_KEY, simpleMode);
    // if (this.currentUser) {
    //   await this.updateUserProfile({ simpleMode });
    // }
    await this.raiseCurrentUserChanged();
  }

  public async updateFontSize(fontSize: number): Promise<void> {
    this.logger.info('updateFontSize', fontSize);
    localStoreManager.savePermanentData(FONT_SIZE_DATA_KEY, fontSize);
    // if (this.currentUser) {
    //   await this.updateUserProfile({ fontSize });
    // }
    await this.raiseCurrentUserChanged();
  }

  private handleAuthStateChanged(user: firebase.User | null) {
    this.currentUser = user;
    this.raiseCurrentUserChanged().catch(e => {
      this.logger.error(e);
    });
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
      await firebaseInstance.db.ref(`/userProfile/${this.currentUser.uid}`).update(values);
    }
  }
}

export default new ProfileService();
