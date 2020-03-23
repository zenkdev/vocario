import React, { useCallback } from 'react';

import {
  IonContent,
  IonHeader,
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

import { DictionaryItem } from '../components';
import { useDictionaries } from '../hooks';
import { toastService } from '../services';

const Home: React.FC = () => {
  const [{ isLoading, data }, fetchData] = useDictionaries({ onError: toastService.showError });
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
        <IonList lines="none" class="ion-no-margin ion-no-padding">
          {!data.length && (
            <IonListHeader>
              <IonLabel>No Dictionaries Found</IonLabel>
            </IonListHeader>
          )}
          {data.map(item => (
            <DictionaryItem key={item.id} item={item} />
          ))}
        </IonList>
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Home;
