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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toastController } from '@ionic/core';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { profileService, toastService } from '../services';
import { defaultTo } from '../utils';
import { setIsLoading, updateAppSettings } from './appSlice';
import { RootState } from './rootReducer';
import Splash from './Splash';
import Tabs from './Tabs';

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
          <Tabs />
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
