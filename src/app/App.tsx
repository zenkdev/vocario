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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { toastController } from '@ionic/core';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { setIsLoading, updateAppSettings } from '../features/app/appSlice';
import PrivateRoute from '../features/app/PrivateRoute';
import Splash from '../features/app/Splash';
import Home from '../features/home/Home';
import Learn from '../features/learn/Learn';
import Login from '../features/login/Login';
import ResetPassword from '../features/login/ResetPassword';
import Signup from '../features/login/Signup';
import Profile from '../features/profile/Profile';
import Statistics from '../features/statistics/Statistics';
import { profileService, toastService } from '../services';
import defaultTo from '../utils/defaultTo';
import { RootState } from './rootReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, fontSize, darkTheme } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const unsubscribeUser = profileService.onCurrentUserChanged(user => {
      dispatch(
        updateAppSettings({
          isLoggedIn: !!user,
          simpleMode: defaultTo(user && user.simpleMode, true),
          darkTheme: defaultTo(user && user.darkTheme, false),
          fontSize: defaultTo(user && user.fontSize, 1),
        }),
      );
      dispatch(setIsLoading(false));
    });
    const unsubscribeToast = toastService.onNextToast(options => {
      toastController.create(options).then(toast => {
        toast.present();
      });
    });

    return () => {
      unsubscribeUser.unsubscribe();
      unsubscribeToast.unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize * 16}px`;
    document.body.classList.toggle('dark', darkTheme);
  }, [fontSize, darkTheme]);

  return (
    <IonApp>
      {isLoading ? (
        <Splash />
      ) : (
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <PrivateRoute path="/home" component={Home} exact />
              <PrivateRoute path="/learn" component={Learn} />
              <Route path="/login" component={Login} exact />
              <PrivateRoute path="/profile" component={Profile} exact />
              <Route path="/reset-password" component={ResetPassword} exact />
              <Route path="/signup" component={Signup} exact />
              <PrivateRoute path="/stats" component={Statistics} exact />
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
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
