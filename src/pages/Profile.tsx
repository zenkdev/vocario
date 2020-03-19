/* eslint-disable react/jsx-one-expression-per-line */
import { logOut, mail } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';

import { Button, DarkThemeItem, FontSizeItem, If, ResetProgress, SimpleModeItem } from '../components';
import { useProfile, useUpdateEmail, useUpdateName } from '../hooks';
import { UserProfile } from '../models';
import { authService, toastService } from '../services';
import { IonInputEvent } from '../types';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [photoURL, setPhotoURL] = useState<string>();
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const onCompleted = useCallback((data: UserProfile) => {
    setPhotoURL(data.photoURL);
    setDisplayName(data.displayName);
    setEmail(data.email);
  }, []);
  const [{ isLoading, data }, fetchData] = useProfile({ onCompleted, onError: toastService.showError });
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

  const handleDisplayNameChange = (evt: IonInputEvent) => setDisplayName(evt.detail.value || '');

  const updateOnCompleted = useCallback(() => setShowSaving(false), [setShowSaving]);
  const updateOnError = useCallback(
    error => {
      setShowSaving(false);
      toastService.showError(error);
    },
    [setShowSaving],
  );
  const updateName = useUpdateName({ onCompleted: updateOnCompleted, onError: updateOnError });
  const handleDisplayNameBlur = () => {
    if (displayName == null || displayName === data.displayName) {
      return;
    }

    setShowSaving(true);
    updateName(displayName);
  };

  const handleEmailChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');
  const updateEmail = useUpdateEmail({ onCompleted: updateOnCompleted, onError: updateOnError });
  const handleEmailBlur = () => {
    if (email == null || email === data.email) {
      return;
    }

    setShowSaving(true);
    updateEmail(email, '');
  };

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
          <IonItem>
            {photoURL && (
              <IonAvatar slot="start">
                <img src={photoURL} alt="avatar" />
              </IonAvatar>
            )}
            <IonLabel position="stacked">Name</IonLabel>
            <If
              condition={!isLoading}
              then={<IonInput type="text" value={displayName} onIonChange={handleDisplayNameChange} onIonBlur={handleDisplayNameBlur} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={mail} />
            <IonLabel position="stacked">Email</IonLabel>
            <If
              condition={!isLoading}
              then={<IonInput type="email" value={email} onIonChange={handleEmailChange} onIonBlur={handleEmailBlur} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
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
