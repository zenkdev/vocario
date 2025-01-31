/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import '../theme/variables.css';
import '../theme/variables.dark.css';
import './styles.scss';

import { home, person, statsChart } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';

import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { PrivateRoute } from '../components';
import Home from '../features/home/Home';
import LearnPage from '../features/learn/LearnPage';
import LoginPage from '../features/login/LoginPage';
import ResetPassword from '../features/login/ResetPassword';
import ProfilePage from '../features/profile/ProfilePage';
import SignupPage from '../features/signup/SignupPage';
import StatisticsPage from '../features/statistics/StatisticsPage';
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
