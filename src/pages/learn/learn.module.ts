import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnPage } from './learn';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [LearnPage],
  imports: [IonicPageModule.forChild(LearnPage), ComponentsModule, PipesModule]
})
export class LearnPageModule {}
