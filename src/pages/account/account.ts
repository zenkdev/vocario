import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  authenticated: boolean;
  email: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.getProfile();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current email populated
  // clicking OK will update the email and display it
  // clicking Cancel will close the alert and do nothing
  changeEmail() {
    let alert = this.alertCtrl.create({
      title: 'Change Email',
      buttons: ['Cancel']
    });
    alert.addInput({
      name: 'email',
      value: this.email,
      placeholder: 'email'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.auth.setEmail(data.email).then(() => {
          this.getProfile();
        });
      }
    });

    alert.present();
  }

  getProfile() {
    this.authenticated = this.auth.authenticated;
    this.email = this.auth.getEmail();
  }

  changePassword() {
    console.log('Clicked to change password');
  }
  
  signIn() {
    this.navCtrl.setRoot('LoginPage');
  }
  signOut() {
    this.auth.signOut().then(() => this.navCtrl.setRoot('LoginPage'));
  }
}
