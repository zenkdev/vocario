import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
/* Theme variables */
import '../theme/variables.css';
import '../theme/variables.dark.css';

import './styles.scss';

/* Core CSS required for Ionic components to work properly */
import { toastController } from '@ionic/core';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { profileService, toastService } from '../services';
import { defaultTo } from '../utils';
import { setIsLoading, updateAppSettings } from './appSlice';
import Splash from './Splash';
import Tabs from './Tabs';

setupIonicReact();

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, fontSize, darkTheme } = useAppSelector(state => state.app);

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
