import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { User } from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
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
      const { displayName, photoURL } = newUserCredential.user;
      return this.db
        .object(`/userProfile/${newUserCredential.user.uid}`)
        .update({ email, displayName, photoURL })
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
    this.db.database.ref(`/userProfile/${userId}`).off();
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
      return this.db
        .object(`/userProfile/${newUserCredential.user.uid}`)
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
