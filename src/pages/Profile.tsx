/* eslint-disable react/jsx-one-expression-per-line */
import { logOut } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';

import { Button, DarkThemeItem, DisplayNameItem, Emailtem, FontSizeItem, ResetProgress, SimpleModeItem } from '../components';
import { useProfile } from '../hooks';
import { authService, toastService } from '../services';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [{ isLoading, data }, fetchData] = useProfile({ onError: toastService.showError });
  const [showResetProgress, setShowResetProgress] = useState(false);
  const [showSaving, setShowSaving] = useState(false);
  const handleLogout = useCallback(async () => {
    try {
      await authService.logout();
      history.push('/login');
    } catch (error) {
      toastService.showError(error);
    }
  }, [history]);

  const doRefresh = useCallback(
    ({ target: refresher }) => {
      fetchData();
      refresher.complete();
    },
    [fetchData],
  );

  useIonViewWillEnter(fetchData);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>
              <IonIcon icon={logOut} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonListHeader color="light">
            <IonLabel>Personal Information</IonLabel>
          </IonListHeader>
          <DisplayNameItem isLoading={isLoading} initialValue={data.displayName} photoURL={data.photoURL} setShowSaving={setShowSaving} />
          <Emailtem isLoading={isLoading} initialValue={data.email} setShowSaving={setShowSaving} />
          <SimpleModeItem isLoading={isLoading} initialValue={data.simpleMode} setShowSaving={setShowSaving} />
          <DarkThemeItem isLoading={isLoading} initialValue={data.darkTheme} setShowSaving={setShowSaving} />
          <FontSizeItem isLoading={isLoading} initialValue={data.fontSize} setShowSaving={setShowSaving} />
        </IonList>
        <div className="ion-padding">
          <Button expand="block" color="primary" onClick={() => setShowResetProgress(true)}>
            Reset the progress
          </Button>
        </div>
        <div className="ion-padding">
          <span className="small-text" style={{ textTransform: 'capitalize' }}>
            {process.env.REACT_APP_NAME} version: {process.env.REACT_APP_VERSION}
          </span>
        </div>
        <ResetProgress isOpen={showResetProgress} onClose={() => setShowResetProgress(false)} />
        <IonLoading isOpen={isLoading} message="Loading..." />
        <IonLoading isOpen={showSaving} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;
