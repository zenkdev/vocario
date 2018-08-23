import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnPage } from './learn';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [LearnPage],
  imports: [IonicPageModule.forChild(LearnPage), ComponentsModule]
})
export class LearnPageModule {}
