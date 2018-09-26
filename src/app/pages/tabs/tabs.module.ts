import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import { HomePageModule } from '../home/home.module';
import { StatisticsPageModule } from '../statistics/statistics.module';
import { ProfilePageModule } from '../profile/profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HomePageModule,
    StatisticsPageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
