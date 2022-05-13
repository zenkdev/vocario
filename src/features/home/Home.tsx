import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import DictionaryList from './DictionaryList';
import { fetchDictionaries } from './homeSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useAppSelector(state => state.home);
  const fetchData = useCallback(() => {
    dispatch(fetchDictionaries());
  }, [dispatch]);
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
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <DictionaryList dictionaries={data} />
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Home;
