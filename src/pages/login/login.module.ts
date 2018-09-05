import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    NgxErrorsModule
  ],
})
export class LoginPageModule {}
