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
  useIonViewWillEnter,
} from '@ionic/react';

import { RootState } from '../app/rootReducer';
import { fetchDictionaries } from '../features/home/homeSlice';
import DictionaryList from '../features/home/DictionaryList';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state: RootState) => state.home);
  const fetchData = useCallback(() => dispatch(fetchDictionaries()), [dispatch]);
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
