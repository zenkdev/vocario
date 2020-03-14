/* eslint-disable react/jsx-one-expression-per-line */
import { logOut, mail, moon, rocket, text } from 'ionicons/icons';
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
  IonRange,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';

import { Button, If, ResetProgress } from '../components';
import useProfile from '../hooks/useProfile';
import { UserProfile } from '../models';
import { authService, profileService, toastService } from '../services';
import { IonInputEvent, IonRangeEvent, IonToggleEvent } from '../types';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [photoURL, setPhotoURL] = useState<string>();
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [simpleMode, setSimpleMode] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  const onCompleted = useCallback((data: UserProfile) => {
    setPhotoURL(data.photoURL);
    setDisplayName(data.displayName);
    setEmail(data.email);
    setSimpleMode(data.simpleMode);
    setDarkTheme(data.darkTheme);
    setFontSize(data.fontSize * 100);
  }, []);
  const [state, fetchData] = useProfile({ onCompleted, onError: toastService.showError });

  const { isLoading, data } = state;

  const [showAlert, setShowAlert] = useState(false);
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

  const handleDisplayNameBlur = async () => {
    if (displayName == null || displayName === data.displayName) {
      return;
    }

    setShowSaving(true);
    try {
      await profileService.updateName(displayName);
      setShowSaving(false);
    } catch (error) {
      setShowSaving(false);
      toastService.showError(error);
    }
  };

  const handleEmailChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');

  const handleEmailBlur = async () => {
    if (email == null || email === data.email) {
      return;
    }

    setShowSaving(true);
    try {
      await profileService.updateEmail(email, '');
      setShowSaving(false);
    } catch (error) {
      setShowSaving(false);
      toastService.showError(error);
    }
  };

  const handleSimpleModeChange = async (evt: IonToggleEvent) => {
    const newValue = evt.detail.checked;
    const oldValue = simpleMode;

    setSimpleMode(newValue);
    try {
      await profileService.updateSimpleMode(newValue);
    } catch (error) {
      setSimpleMode(oldValue); // restore if error occur
      toastService.showError(error);
    }
  };

  const handleDarkThemeChange = async (evt: IonToggleEvent) => {
    const newValue = evt.detail.checked;
    const oldValue = darkTheme;

    setDarkTheme(newValue);
    try {
      await profileService.updateDarkTheme(newValue);
    } catch (error) {
      setDarkTheme(oldValue); // restore if error occur
      toastService.showError(error);
    }
  };

  const handleFontSizeChange = async (evt: IonRangeEvent) => {
    const newValue = evt.detail.value as number;
    const oldValue = fontSize;

    setFontSize(newValue);
    try {
      await profileService.updateFontSize(newValue / 100);
    } catch (error) {
      setFontSize(oldValue); // restore if error occur
      toastService.showError(error);
    }
  };

  const doRefresh = useCallback(
    ({ target: refresher }) => {
      fetchData();
      refresher.complete();
    },
    [fetchData],
  );

  useIonViewWillEnter(fetchData);

  console.log(state);

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
          <IonItem>
            <IonIcon slot="start" icon={rocket} />
            <IonLabel position="fixed">Simple Mode</IonLabel>
            <If
              condition={!isLoading}
              then={<IonToggle checked={simpleMode} onIonChange={handleSimpleModeChange} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel position="fixed">Dark Theme</IonLabel>
            <If
              condition={!isLoading}
              then={<IonToggle checked={darkTheme} onIonChange={handleDarkThemeChange} />}
              else={<IonSkeletonText animated />}
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={text} size="small" />
            <IonLabel position="fixed">Font Size</IonLabel>
            <If
              condition={!isLoading}
              then={<IonRange min={80} max={150} value={fontSize} step={10} ticks snaps onIonChange={handleFontSizeChange} />}
              else={<IonSkeletonText animated />}
            />
            <IonIcon slot="end" icon={text} />
          </IonItem>
        </IonList>
        <div className="ion-padding">
          <Button expand="block" color="primary" onClick={() => setShowAlert(true)}>
            Reset the progress
          </Button>
        </div>
        <div className="ion-padding">
          <span className="small-text" style={{ textTransform: 'capitalize' }}>
            {process.env.REACT_APP_NAME} version: {process.env.REACT_APP_VERSION}
          </span>
        </div>
        <ResetProgress showAlert={showAlert} onClose={() => setShowAlert(false)} />
        <IonLoading isOpen={isLoading} message="Loading..." />
        <IonLoading isOpen={showSaving} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Login;
