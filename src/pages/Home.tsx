import React, { useCallback, useContext, useEffect, useState } from 'react';

import {
  IonBackButton,
  IonButtons,
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
} from '@ionic/react';

import { DictionaryListItem, FirebaseContext } from '../components';
import { Dictionary } from '../models';
import { dictionaryService, toastService } from '../services';

const Home: React.FC = () => {
  const { resetCount } = useContext(FirebaseContext);
  const [showLoading, setShowLoading] = useState(true);
  const [segment] = useState('all');
  const [dictionaries, setDictionaries] = useState<Dictionary[]>([]);
  const doRefresh = useCallback(({ target: refresher }) => {
    setShowLoading(true);
    dictionaryService
      .getDictionaries()
      .then(data => {
        setShowLoading(false);
        refresher.complete();
        setDictionaries(data);
      })
      .catch(error => {
        setShowLoading(false);
        refresher.complete();
        toastService.showError(error);
      });
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const addFavorite = useCallback(() => {}, []);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const removeFavorite = useCallback(() => {}, []);

  useEffect(() => {
    dictionaryService
      .getDictionaries()
      .then(data => {
        setShowLoading(false);
        setDictionaries(data);
      })
      .catch(error => {
        setShowLoading(false);
        toastService.showError(error);
      });
  }, [resetCount]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonList lines="none" class="ion-no-margin ion-no-padding">
          <IonListHeader color="light">
            <IonLabel>{dictionaries.length ? `Welcome to Lexion!` : `No Dictionaries Found`}</IonLabel>
          </IonListHeader>
          {dictionaries.map(dictionary => (
            <DictionaryListItem
              key={dictionary.id}
              item={dictionary}
              segment={segment}
              onAddFavorite={addFavorite}
              onRemoveFavorite={removeFavorite}
            />
          ))}
        </IonList>
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Home;
