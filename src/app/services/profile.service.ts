import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { User } from 'firebase/app';
import EmailAuthProvider = firebase.auth.EmailAuthProvider;
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfile: AngularFireObject<any>;
  private currentUser: User;

  constructor(db: AngularFireDatabase, afAuth: AngularFireAuth) {
    afAuth.user.subscribe(
      user => {
        this.currentUser = user;
        if (this.currentUser) {
          this.userProfile = db.object(`/userProfile/${this.currentUser.uid}`);
        }
      },
      error => alert(error)
    );
  }

  getUserProfile(): Observable<any> {
    return this.userProfile.valueChanges();
  }

  updateName(displayName: string): Promise<any> {
    return this.userProfile.update({ displayName });
  }

  updateDOB(birthDate: string): Promise<any> {
    return this.userProfile.update({ birthDate });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const credential = EmailAuthProvider.credential(this.currentUser.email, password);
    return this.currentUser.reauthenticateWithCredential(credential).then(
      _ => {
        this.currentUser.updateEmail(newEmail).then(() => {
          this.userProfile.update({ email: newEmail });
        });
      },
      error => alert(error)
    );
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {
    const credential = EmailAuthProvider.credential(this.currentUser.email, oldPassword);
    return this.currentUser.reauthenticateWithCredential(credential).then(
      _ => {
        this.currentUser.updatePassword(newPassword).then(() => {
          console.log('Password Changed');
        });
      },
      error => alert(error)
    );
  }
}
