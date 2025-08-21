import React, { useCallback } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  type RefresherEventDetail,
  useIonViewWillEnter,
} from '@ionic/react';
import type { RouteComponentProps } from 'react-router';
import { logOut } from 'ionicons/icons';

import DarkThemeItem from './DarkThemeItem';
import DisplayNameItem from './DisplayNameItem';
import EmailItem from './Emailtem';
import FontSizeItem from './FontSizeItem';
import ResetProgress from './ResetProgress';
import SimpleModeItem from './SimpleModeItem';
import { authService, toastService } from '../../services';
import { fetchProfile } from './profileSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const ProfilePage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useAppDispatch();
  const { isLoading, isSaving } = useAppSelector(state => state.profile);
  const fetchData = useCallback(() => dispatch(fetchProfile()), [dispatch]);
  const handleLogout = useCallback(async () => {
    try {
      await authService.logout();
      history.push('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toastService.showError(error);
    }
  }, [history]);
  const doRefresh = useCallback(
    ({ detail: refresher }: CustomEvent<RefresherEventDetail>) => {
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
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
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
          <IonItemDivider />
          <SimpleModeItem />
          <DarkThemeItem />
          <FontSizeItem />
        </IonList>
        <ResetProgress />
        <div className="ion-padding">
          <span className="small-text" style={{ textTransform: 'capitalize' }}>
            {import.meta.env.REACT_APP_NAME} version: {import.meta.env.REACT_APP_VERSION}
          </span>
        </div>
        <IonLoading isOpen={isLoading} message="Loading..." />
        <IonLoading isOpen={isSaving} message="Saving..." />
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
