import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { EmailValidator } from '../../validators/EmailValidator';

@Component({
  selector: 'page-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authProvider: AuthService,
    formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  async loginWithEmailAndPassword() {
    if (!this.loginForm.valid) {
      console.log(`Form is not valid yet, current value: ${this.loginForm.value}`);
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.loading = await this.loadingCtrl.create();
      await this.loading.present();

      try {
        await this.authProvider.loginWithEmailAndPassword(email, password);
        await this.loading.dismiss();
        this.router.navigate(['/']);
        // this.router.navigate([this.returnUrl]);
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

  async loginWithGoogle() {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    try {
      await this.authProvider.loginWithGoogle();
      await this.loading.dismiss();
      this.router.navigate(['/']);
      // this.router.navigate([this.returnUrl]);
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
