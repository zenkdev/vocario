import firebase from 'firebase/app';
import Observable from 'zen-observable';

import { UserProfile } from '../models';
import firebaseInstance from './Firebase';
import createLogger from './createLogger';

class ProfileService {
  private logger = createLogger('ProfileService');

  private currentUser: firebase.User | null = null;

  private userProfile: firebase.database.Reference | null = null;

  private currentUserChanged$: Observable<UserProfile>;

  private currentUserChangedSubscriber!: ZenObservable.SubscriptionObserver<UserProfile>;

  constructor() {
    this.handleAuthStateChanged = this.handleAuthStateChanged.bind(this);

    this.currentUserChanged$ = new Observable<UserProfile>(subscriber => {
      this.currentUserChangedSubscriber = subscriber;
    });
    firebaseInstance.auth.onAuthStateChanged(this.handleAuthStateChanged);
  }

  public onCurrentUserChanged(
    onNext: (value: UserProfile) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription {
    return this.currentUserChanged$.subscribe(onNext, onError, onComplete);
  }

  public async getProfile(): Promise<UserProfile> {
    this.logger.info('getProfile');

    if (!this.currentUser || !this.userProfile) {
      return new UserProfile();
    }
    const snapshot = await this.userProfile.once('value');
    return UserProfile.fromSnapshot(snapshot);
  }

  public async updateName(displayName: string): Promise<void> {
    if (this.currentUser && this.userProfile) {
      await this.currentUser.updateProfile({ displayName });
      await this.userProfile.update({ displayName });
    }
  }

  public async updateEmail(newEmail: string, password: string): Promise<void> {
    if (this.currentUser && this.userProfile) {
      if (this.currentUser.email == null) {
        throw new Error('Email can not be null');
      }
      const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser.email, password);
      await this.currentUser.reauthenticateWithCredential(credential);
      await this.currentUser.updateEmail(newEmail);
      await this.userProfile.update({ email: newEmail });
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
      // eslint-disable-next-line no-console
      console.log('Password Changed');
    }
  }

  public async updateSimpleMode(simpleMode: boolean): Promise<void> {
    this.logger.info('updateSimpleMode', simpleMode);
    if (this.currentUser && this.userProfile) {
      await this.userProfile.update({ simpleMode });
    }
  }

  private handleAuthStateChanged(user: firebase.User | null) {
    this.currentUser = user;
    if (this.userProfile) {
      this.userProfile.off(); // disconnect prev subscription
    }
    this.userProfile = user && firebaseInstance.db.ref(`/userProfile/${user.uid}`);

    if (!this.userProfile) {
      this.currentUserChangedSubscriber.next(new UserProfile());
    } else {
      this.userProfile.on('value', snapshot => {
        const profile = UserProfile.fromSnapshot(snapshot);
        this.currentUserChangedSubscriber.next(profile);
      });
    }
  }
}

export default new ProfileService();
