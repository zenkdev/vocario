import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'page-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePage implements OnInit {
  public userProfile: any;
  public birthDate: string;

  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.profileService.getUserProfile().subscribe(data => {
      this.userProfile = data;
      this.birthDate = data.birthDate;
    });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  async updateName() {
    const alert = await this.alertCtrl.create({
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
            this.profileService.updateName(data.displayName);
          }
        }
      ]
    });
    await alert.present();
  }

  updateDOB(birthDate: string): void {
    this.profileService.updateDOB(birthDate);
  }

  async updateEmail() {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService
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
    await alert.present();
  }

  async updatePassword() {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePassword(data.newPassword, data.oldPassword);
          }
        }
      ]
    });
    await alert.present();
  }
}
