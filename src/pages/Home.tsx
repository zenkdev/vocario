import React, { useCallback, useState } from 'react';

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

import { DictionaryListItem } from '../components';
import useDictionaries from '../hooks/useDictionaries';
import { toastService } from '../services';

const Home: React.FC = () => {
  const [segment] = useState('all');
  const [state, fetchData] = useDictionaries({ onError: toastService.showError });
  const doRefresh = useCallback(
    ({ target: refresher }) => {
      fetchData();
      refresher.complete();
    },
    [fetchData],
  );
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const addFavorite = useCallback(() => {}, []);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const removeFavorite = useCallback(() => {}, []);

  useIonViewWillEnter(fetchData);

  console.log(state);

  const { isLoading, data } = state;

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
          {data.map(dictionary => (
            <DictionaryListItem
              key={dictionary.id}
              item={dictionary}
              segment={segment}
              onAddFavorite={addFavorite}
              onRemoveFavorite={removeFavorite}
            />
          ))}
        </IonList>
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Home;
