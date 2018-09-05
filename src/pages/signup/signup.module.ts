import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    NgxErrorsModule
  ],
})
export class SignupPageModule {}
