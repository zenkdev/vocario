import firebase from 'firebase/app';

import { firebaseInstance } from '.';

class ProfileService {
  private currentUser: firebase.User | null = null;

  private userProfile: firebase.database.Reference | null = null;

  constructor() {
    firebaseInstance.auth.onAuthStateChanged(user => {
      this.currentUser = user;
      this.userProfile = user && firebaseInstance.db.ref(`/userProfile/${user.uid}`);
    });
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
}

export default new ProfileService();
