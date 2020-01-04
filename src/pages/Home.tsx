/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-bind */
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonNote,
} from '@ionic/react';

import { Dictionary } from '../models';
import { dictionaryService, toastService } from '../services';

const Home: React.FC = () => {
  const history = useHistory();
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
  const goToLearn = useCallback(
    (dictionary: Dictionary) => {
      history.push('/learn', { id: dictionary.id, title: dictionary.name });
    },
    [history],
  );
  const addFavorite = useCallback(() => {}, []);
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
  }, []);

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
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonListHeader color="light">
            <IonLabel>{dictionaries.length ? `Welcome to Lexion!` : `No Dictionaries Found`}</IonLabel>
          </IonListHeader>
          {dictionaries.map(dictionary => (
            <IonItemSliding key={dictionary.id}>
              <IonItem button detail onClick={goToLearn.bind(null, dictionary)}>
                <IonLabel>
                  <h3>{dictionary.name}</h3>
                </IonLabel>
                <IonNote slot="end" color="primary">
                  {`${dictionary.wordsLearned} / ${dictionary.totalWords}`}
                </IonNote>
              </IonItem>
              <IonItemOptions>
                {segment === 'all' && (
                  <IonButton color="favorite" onClick={addFavorite.bind(null, dictionary)}>
                    Favorite
                  </IonButton>
                )}
                {segment === 'favorites' && (
                  <IonButton color="danger" onClick={removeFavorite.bind(null, dictionary)}>
                    Remove
                  </IonButton>
                )}
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Home;
