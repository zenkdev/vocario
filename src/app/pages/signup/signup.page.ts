import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { EmailValidator } from '../../validators/EmailValidator';

@Component({
  selector: 'page-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupPage {
  public signupForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private auth: AuthService,
    formBuilder: FormBuilder
  ) {
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  async signupUser() {
    if (!this.signupForm.valid) {
      console.log(`Need to complete the form, current value: ${this.signupForm.value}`);
    } else {
      const email: string = this.signupForm.value.email;
      const password: string = this.signupForm.value.password;

      this.loading = await this.loadingCtrl.create();
      await this.loading.present();

      try {
        await this.auth.signupUser(email, password);
        await this.loading.dismiss();
        this.router.navigate(['/']);
      } catch (error) {
        await this.loading.dismiss();
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        await alert.present();
      }
    }
  }
}
