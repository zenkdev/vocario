import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../guards';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { StatisticsPage } from '../statistics/statistics.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage,
        // canActivate: [AuthGuard]
      },
      {
        path: 'statistics',
        outlet: 'statistics',
        component: StatisticsPage,
        // canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage,
        // canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
