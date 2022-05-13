import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { RootState } from '../../app/rootReducer';
import DictionaryList from './DictionaryList';
import { fetchDictionaries } from './homeSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state: RootState) => state.home);
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
