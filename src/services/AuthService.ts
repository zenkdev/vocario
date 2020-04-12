/* eslint-disable no-console */
import firebase from 'firebase/app';

import firebaseInstance from './Firebase';

type UserCredential = firebase.auth.UserCredential;

class AuthService {
  private auth: firebase.auth.Auth;

  constructor() {
    this.auth = firebaseInstance.auth;
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    console.log('Sign in with email');
    await this.auth.setPersistence('local');
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public async loginWithGithub(): Promise<UserCredential> {
    console.log('Sign in with github');
    await this.auth.setPersistence('local');
    return this.oauthSignIn(new firebase.auth.GithubAuthProvider());
  }

  public async loginWithGoogle(): Promise<UserCredential> {
    console.log('Sign in with google');
    await this.auth.setPersistence('local');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  public async signupUser(email: string, password: string): Promise<UserCredential> {
    const newUserCredential = await this.auth.createUserWithEmailAndPassword(email, password);
    if (newUserCredential.user == null) {
      throw new Error('user can not be null');
    }
    const { uid, displayName, photoURL } = newUserCredential.user;
    return new Promise<UserCredential>((resolve, reject) => {
      firebaseInstance.db.ref(`/userProfile/${uid}`).update({ email, displayName, photoURL }, error => {
        if (!error) {
          console.log('success', newUserCredential);
          resolve(newUserCredential);
        } else {
          console.log('error', error);
          reject(error);
        }
      });
    });
  }

  public async resetPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }

  public async logout(): Promise<void> {
    const { currentUser } = this.auth;
    if (!currentUser) {
      return;
    }
    firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).off();
    await this.auth.signOut();
  }

  private async oauthSignIn(provider: firebase.auth.AuthProvider): Promise<UserCredential> {
    // if (!(<any>window).cordova) {
    const signInPromise = this.auth.signInWithPopup(provider);
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
      firebaseInstance.db.ref(`/userProfile/${uid}`).update({ displayName, email }, error => {
        if (!error) {
          console.log('success', newUserCredential);
          resolve(newUserCredential);
        } else {
          console.log('error', error);
          reject(error);
        }
      });
    });
  }
}

export default new AuthService();
