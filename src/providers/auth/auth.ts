import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import fbAuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthProvider {
  public user: User;

  constructor(public events: Events) {
    firebase.auth().onAuthStateChanged(
      user => {
        this.user = user;
        this.events.publish('auth:authStateChanged', this.user);
      },
      error => console.log(error)
    );
  }

  loginWithEmailAndPassword(email: string, password: string) {
    console.log('Sign in with email');
    return firebase
      .auth()
      .setPersistence('local')
      .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      });
  }

  loginWithGoogle() {
    console.log('Sign in with google');
    return firebase
      .auth()
      .setPersistence('local')
      .then(() => {
        return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
      });
  }

  signupUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUserCredentials => {
        const { displayName, email } = newUserCredentials.user;
        return firebase
          .database()
          .ref(`/userProfile/${newUserCredentials.user.uid}`)
          .update({ displayName, email })
          .then(
            value => {
              console.log('success', value);
              return Promise.resolve(newUserCredentials);
            },
            error => {
              console.log('error', error);
              return Promise.reject(error);
            }
          );
      });
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    const userId: string = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
    return firebase.auth().signOut();
  }

  private oauthSignIn(provider: fbAuthProvider): Promise<void> {
    if (false && !(<any>window).cordova) {
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then(newUserCredentials => {
          const { displayName, email } = newUserCredentials.user;
          return firebase
            .database()
            .ref(`/userProfile/${newUserCredentials.user.uid}`)
            .update({ displayName, email })
            .then(
              value => {
                console.log('success', value);
                return Promise.resolve();
              },
              error => {
                console.log('error', error);
                return Promise.reject(error);
              }
            );
        });
    } else {
      return firebase
        .auth()
        .signInWithRedirect(provider)
        .then(() => {
          return firebase
            .auth()
            .getRedirectResult()
            .then(newUserCredentials => {
              const { displayName, email } = newUserCredentials.user;
              return firebase
                .database()
                .ref(`/userProfile/${newUserCredentials.user.uid}`)
                .update({ displayName, email })
                .then(
                  value => {
                    console.log('success', value);
                    return Promise.resolve();
                  },
                  error => {
                    console.log('error', error);
                    return Promise.reject(error);
                  }
                );
            })
            .catch(function(error) {
              // Handle Errors here.
              alert(error.message);
            });
        });
    }
  }
}
