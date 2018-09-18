import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase, { User } from 'firebase/app';
import EmailAuthProvider = firebase.auth.EmailAuthProvider;

@Injectable()
export class ProfileProvider {
  public userProfile: firebase.database.Reference;
  public currentUser: User;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(
      user => {
        this.currentUser = user;
        if (user) {
          this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
        }
      },
      error => alert(error)
    );
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  updateName(displayName: string): Promise<any> {
    return this.userProfile.update({ displayName });
  }

  updateDOB(birthDate: string): Promise<any> {
    return this.userProfile.update({ birthDate });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const credential = EmailAuthProvider.credential(this.currentUser.email, password);
    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(_ => {
        this.currentUser.updateEmail(newEmail).then(_ => {
          this.userProfile.update({ email: newEmail });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {
    const credential = EmailAuthProvider.credential(this.currentUser.email, oldPassword);
    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(_ => {
        this.currentUser.updatePassword(newPassword).then(_ => {
          console.log('Password Changed');
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
