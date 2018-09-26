import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { EmailValidator } from '../../validators/EmailValidator';

@Component({
  selector: 'page-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordPage {
  public resetPasswordForm: FormGroup;

  constructor(
    private location: Location,
    private alertCtrl: AlertController,
    private auth: AuthService,
    formBuilder: FormBuilder
  ) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    });
  }

  async resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(`Form is not valid yet, current value: ${this.resetPasswordForm.value}`);
    } else {
      const email: string = this.resetPasswordForm.value.email;
      try {
        const user = await this.auth.resetPassword(email);
        const alert = await this.alertCtrl.create({
          message: 'Check your email for a password reset link',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => this.location.back()
            }
          ]
        });
        await alert.present();
      } catch (error) {
        const errorAlert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        await errorAlert.present();
      }
    }
  }
}
