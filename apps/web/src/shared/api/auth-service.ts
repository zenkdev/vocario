import {
  type Auth,
  type AuthProvider,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type UserCredential,
} from 'firebase/auth';
import { off, ref, update } from 'firebase/database';

import { firebaseInstance } from './firebase';

export class AuthService {
  private auth: Auth;

  constructor() {
    this.auth = firebaseInstance.auth;
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    console.log('Sign in with email');
    await setPersistence(this.auth, browserLocalPersistence);
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public async loginWithGithub(): Promise<UserCredential> {
    console.log('Sign in with github');
    await setPersistence(this.auth, browserLocalPersistence);
    return this.oauthSignIn(new GithubAuthProvider());
  }

  public async loginWithGoogle(): Promise<UserCredential> {
    console.log('Sign in with google');
    await setPersistence(this.auth, browserLocalPersistence);
    return this.oauthSignIn(new GoogleAuthProvider());
  }

  public async loginWithMicrosoft(): Promise<UserCredential> {
    console.log('Sign in with microsoft');
    await setPersistence(this.auth, browserLocalPersistence);
    return this.oauthSignIn(new OAuthProvider('microsoft.com'));
  }

  public async signupUser(email: string, password: string): Promise<UserCredential> {
    const newUserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    if (newUserCredential.user == null) {
      throw new Error('user can not be null');
    }
    const { uid, displayName, photoURL } = newUserCredential.user;
    return new Promise<UserCredential>((resolve, reject) => {
      update(ref(firebaseInstance.db, `/userProfile/${uid}`), { email, displayName, photoURL }).then(
        () => {
          console.log('success', newUserCredential);
          resolve(newUserCredential);
        },
        reason => {
          console.log('error', reason);
          reject(reason);
        },
      );
    });
  }

  public async resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

  public async logout(): Promise<void> {
    const { currentUser } = this.auth;
    if (!currentUser) {
      return;
    }
    off(ref(firebaseInstance.db, `/userProfile/${currentUser.uid}`));
    signOut(this.auth);
  }

  private async oauthSignIn(provider: AuthProvider): Promise<UserCredential> {
    // if (!(<any>window).cordova) {
    const signInPromise = signInWithPopup(this.auth, provider);
    // } else {
    // signInPromise = this.afAuth.auth.signInWithRedirect(provider).then(() => {
    //   return this.afAuth.auth.getRedirectResult();
    // });
    // }

    const newUserCredential = await signInPromise;
    if (newUserCredential.user == null) {
      throw new Error('user can not be null');
    }

    const { uid, displayName, email } = newUserCredential.user;

    return new Promise<UserCredential>((resolve, reject) => {
      update(ref(firebaseInstance.db, `/userProfile/${uid}`), { displayName, email }).then(
        () => {
          console.log('success', newUserCredential);
          resolve(newUserCredential);
        },
        reason => {
          console.log('error', reason);
          reject(reason);
        },
      );
    });
  }
}

export const authService = new AuthService();
