import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { home, person, statsChart } from 'ionicons/icons';

import Home from '../features/home/Home';
import LearnPage from '../features/learn/LearnPage';
import LoginPage from '../features/login/LoginPage';
import ProfilePage from '../features/profile/ProfilePage';
import ResetPassword from '../features/login/ResetPassword';
import SignupPage from '../features/signup/SignupPage';
import StatisticsPage from '../features/statistics/StatisticsPage';
import { PrivateRoute } from '../components';
import { routerService } from '../services';

const Tabs: React.FC = () => {
  routerService.history = useHistory();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <PrivateRoute path="/home" component={Home} exact />
        <PrivateRoute path="/learn/:id" component={LearnPage} />
        <Route path="/login" component={LoginPage} exact />
        <PrivateRoute path="/profile" component={ProfilePage} exact />
        <Route path="/reset-password" component={ResetPassword} exact />
        <Route path="/signup" component={SignupPage} exact />
        <PrivateRoute path="/stats" component={StatisticsPage} exact />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="stats" href="/stats">
          <IonIcon icon={statsChart} />
          <IonLabel>Statistics</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
