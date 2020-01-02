import firebase from 'firebase/app';

import firebaseInstance from './Firebase';

type UserCredential = firebase.auth.UserCredential;

class AuthService {
  public async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    console.log('Sign in with email');
    await firebaseInstance.auth.setPersistence('local');
    return await firebaseInstance.auth.signInWithEmailAndPassword(email, password);
  }

  public async loginWithGoogle(): Promise<UserCredential> {
    console.log('Sign in with google');
    await firebaseInstance.auth.setPersistence('local');
    return await this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  public async signupUser(email: string, password: string): Promise<UserCredential> {
    const newUserCredential = await firebaseInstance.auth.createUserWithEmailAndPassword(email, password);
    const { uid, displayName, photoURL } = newUserCredential.user!;
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
    return await firebaseInstance.auth.sendPasswordResetEmail(email);
  }

  public async logout(): Promise<void> {
    const currentUser = firebaseInstance.auth.currentUser;
    if (!currentUser) {
      return;
    }
    firebaseInstance.db.ref(`/userProfile/${currentUser.uid}`).off();
    return await firebaseInstance.auth.signOut();
  }

  private async oauthSignIn(provider: firebase.auth.AuthProvider): Promise<UserCredential> {
    let signInPromise;
    // if (!(<any>window).cordova) {
    signInPromise = firebaseInstance.auth.signInWithPopup(provider);
    // } else {
    // signInPromise = this.afAuth.auth.signInWithRedirect(provider).then(() => {
    //   return this.afAuth.auth.getRedirectResult();
    // });
    // }

    const newUserCredential = await signInPromise;

    const { uid, displayName, email } = newUserCredential.user!;

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
