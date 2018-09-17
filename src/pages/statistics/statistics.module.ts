import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticsPage } from './statistics';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [StatisticsPage],
  imports: [IonicPageModule.forChild(StatisticsPage), ComponentsModule]
})
export class StatisticsPageModule {}
