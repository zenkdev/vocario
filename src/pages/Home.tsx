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
} from '@ionic/react';

import { Dictionary } from '../models';
import { firebaseInstance } from '../services';

const Home: React.FC = () => {
  const history = useHistory();
  const [segment] = useState('all');
  const [dictionaries, setDictionaries] = useState<Dictionary[]>([]);
  const doRefresh = useCallback(({ target: refresher }) => {
    firebaseInstance.getDictionaries().subscribe(data => {
      setDictionaries(data);
      refresher.complete();
      // if (this.loading) {
      //   await this.loading.dismiss();
      //   this.loading = null;
      // }
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
    firebaseInstance.getDictionaries().subscribe(data => setDictionaries(data));
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
            {dictionaries.length ? <IonLabel>Welcome to Lexion!</IonLabel> : <IonLabel>No Dictionaries Found</IonLabel>}
          </IonListHeader>
          {dictionaries.map(dictionary => (
            <IonItemSliding key={dictionary.id}>
              <IonItem button detail onClick={goToLearn.bind(null, dictionary)}>
                <IonLabel>
                  <h3>{dictionary.name}</h3>
                  <p>{`${dictionary.wordsLearned} / ${dictionary.totalWords}`}</p>
                </IonLabel>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
