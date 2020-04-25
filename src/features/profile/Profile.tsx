/* eslint-disable react/jsx-one-expression-per-line */
import { logOut } from 'ionicons/icons';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { RootState } from '../../app/rootReducer';
import { authService, toastService } from '../../services';
import DarkThemeItem from './DarkThemeItem';
import DisplayNameItem from './DisplayNameItem';
import EmailItem from './Emailtem';
import FontSizeItem from './FontSizeItem';
import { fetchProfile } from './profileSlice';
import ResetProgress from './ResetProgress';
import SimpleModeItem from './SimpleModeItem';

const Profile: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const { isLoading, isSaving } = useSelector((state: RootState) => state.profile);
  const fetchData = useCallback(() => dispatch(fetchProfile()), [dispatch]);
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
          <DisplayNameItem />
          <EmailItem />
          <SimpleModeItem />
          <DarkThemeItem />
          <FontSizeItem />
        </IonList>
        <ResetProgress />
        <div className="ion-padding">
          <span className="small-text" style={{ textTransform: 'capitalize' }}>
            {process.env.REACT_APP_NAME} version: {process.env.REACT_APP_VERSION}
          </span>
        </div>
        <IonLoading isOpen={isLoading} message="Loading..." />
        <IonLoading isOpen={isSaving} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
