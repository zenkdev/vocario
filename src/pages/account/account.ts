import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { AuthProvider, ProfileProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  public userProfile: any;
  public birthDate: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private authProvider: AuthProvider,
    private profileProvider: ProfileProvider
  ) {}

  ionViewCanEnter() {
    const subscription = this.authProvider.user.subscribe(user => {
      subscription.unsubscribe();
      return !!user;
    });
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().subscribe(data => {
      this.userProfile = data;
      this.birthDate = data.birthDate;
    });
  }

  logout(): void {
    this.authProvider.logout().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: 'Your first name & last name',
      inputs: [
        {
          name: 'displayName',
          placeholder: 'Your name',
          value: this.userProfile.displayName
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateName(data.displayName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate: string): void {
    this.profileProvider.updateDOB(birthDate);
  }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
          }
        }
      ]
    });
    alert.present();
  }
}
