import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase, { User } from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;

import { Observable } from 'rxjs';

@Injectable()
export class AuthProvider {
  public user: Observable<User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.user;
  }

  loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    console.log('Sign in with email');
    return this.afAuth.auth.setPersistence('local').then(() => {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    });
  }

  loginWithGoogle(): Promise<UserCredential> {
    console.log('Sign in with google');
    return this.afAuth.auth.setPersistence('local').then(() => {
      return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    });
  }

  signupUser(email: string, password: string): Promise<UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(newUserCredential => {
      const { displayName, email } = newUserCredential.user;
      return firebase
        .database()
        .ref(`/userProfile/${newUserCredential.user.uid}`)
        .update({ displayName, email })
        .then(
          () => {
            console.log('success', newUserCredential);
            return Promise.resolve(newUserCredential);
          },
          error => {
            console.log('error', error);
            return Promise.reject(error);
          }
        );
    });
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    const userId: string = this.afAuth.auth.currentUser.uid;
    firebase
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
    return this.afAuth.auth.signOut();
  }

  private oauthSignIn(provider: firebase.auth.AuthProvider): Promise<UserCredential> {
    let signInPromise;
    // if (!(<any>window).cordova) {
    //   signInPromise = this.afAuth.auth.signInWithPopup(provider);
    // } else {
    signInPromise = this.afAuth.auth.signInWithRedirect(provider).then(() => {
      return this.afAuth.auth.getRedirectResult();
    });
    // }

    return signInPromise.then(newUserCredential => {
      const { displayName, email } = newUserCredential.user;
      return firebase
        .database()
        .ref(`/userProfile/${newUserCredential.user.uid}`)
        .update({ displayName, email })
        .then(
          () => {
            console.log('success', newUserCredential);
            return Promise.resolve(newUserCredential);
          },
          error => {
            console.log('error', error);
            return Promise.reject(error);
          }
        );
    });
  }
}
