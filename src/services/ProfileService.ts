import { firebaseInstance } from '.';
import { Observable, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { ServiceFactory } from './ServiceFactory';
import firebase from 'firebase/app';

class ProfileService extends ServiceFactory {
  private currentUser: firebase.User | null = null;

  constructor() {
    super();
    firebaseInstance.currentUserObservable().subscribe(user => {
      this.currentUser = user;
    });
  }

  private get userProfile(): firebase.database.Reference | null {
    return this.currentUser && firebaseInstance.db.ref(`/userProfile/${this.currentUser.uid}`);
  }

  public updateName(displayName: string): Observable<void> {
    return from(this.userProfile!.update({ displayName })).pipe(
      tap(() => this.log('updateName')),
      switchMap(() => from(this.currentUser!.updateProfile({ displayName }))),
    );
  }

  public updateEmail(newEmail: string, password: string): Observable<void> {
    const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser!.email!, password);
    return from(this.currentUser!.reauthenticateWithCredential(credential)).pipe(
      tap(() => this.log('updateEmail')),
      switchMap(() => from(this.currentUser!.updateEmail(newEmail))),
      switchMap(() => from(this.userProfile!.update({ email: newEmail }))),
    );
  }

  public updatePassword(newPassword: string, oldPassword: string): Observable<void> {
    const credential = firebase.auth.EmailAuthProvider.credential(this.currentUser!.email!, oldPassword);
    return from(this.currentUser!.reauthenticateWithCredential(credential)).pipe(
      tap(() => this.log('updatePassword')),
      switchMap(() => from(this.currentUser!.updatePassword(newPassword))),
      tap(() => this.log('Password Changed')),
    );
  }
}

export default new ProfileService();
