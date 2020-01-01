import firebase from 'firebase/app';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import firebaseInstance from './Firebase';

type UserCredential = firebase.auth.UserCredential;

class AuthService {
  public loginWithEmailAndPassword(email: string, password: string): Observable<UserCredential> {
    console.log('Sign in with email');
    return from(firebaseInstance.auth.setPersistence('local')).pipe(
      switchMap(() => firebaseInstance.auth.signInWithEmailAndPassword(email, password)),
    );
  }

  public loginWithGoogle(): Observable<UserCredential> {
    console.log('Sign in with google');
    return from(firebaseInstance.auth.setPersistence('local')).pipe(
      switchMap(() => this.oauthSignIn(new firebase.auth.GoogleAuthProvider())),
    );
  }

  public signupUser(email: string, password: string): Observable<UserCredential> {
    return from(firebaseInstance.auth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap(newUserCredential => {
        const { uid, displayName, photoURL } = newUserCredential.user!;
        return from(
          new Promise<UserCredential>((resolve, reject) => {
            firebaseInstance.db.ref(`/userProfile/${uid}`).update({ email, displayName, photoURL }, error => {
              if (!error) {
                console.log('success', newUserCredential);
                resolve(newUserCredential);
              } else {
                console.log('error', error);
                reject(error);
              }
            });
          }),
        );
      }),
    );
  }

  public resetPassword(email: string): Observable<void> {
    return from(firebaseInstance.auth.sendPasswordResetEmail(email));
  }

  public logout(): Observable<void> {
    const userId: string = firebaseInstance.auth.currentUser!.uid;
    firebaseInstance.db.ref(`/userProfile/${userId}`).off();
    return from(firebaseInstance.auth.signOut());
  }

  private oauthSignIn(provider: firebase.auth.AuthProvider): Observable<UserCredential> {
    let signInPromise;
    // if (!(<any>window).cordova) {
    signInPromise = firebaseInstance.auth.signInWithPopup(provider);
    // } else {
    // signInPromise = this.afAuth.auth.signInWithRedirect(provider).then(() => {
    //   return this.afAuth.auth.getRedirectResult();
    // });
    // }

    return from(signInPromise).pipe(
      switchMap(newUserCredential => {
        const { uid, displayName, email } = newUserCredential.user!;

        return from(
          new Promise<UserCredential>((resolve, reject) => {
            firebaseInstance.db.ref(`/userProfile/${uid}`).update({ displayName, email }, error => {
              if (!error) {
                console.log('success', newUserCredential);
                resolve(newUserCredential);
              } else {
                console.log('error', error);
                reject(error);
              }
            });
          }),
        );
      }),
    );
  }
}

export default new AuthService();
