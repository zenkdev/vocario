import React, { useCallback, useEffect, useState } from 'react';

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { Word } from '../models';
import { firebaseInstance } from '../services';

const Stats: React.FC = () => {
  const [wordStats, setWordStats] = useState<Word[]>([]);
  const doRefresh = useCallback(({ target: refresher }) => {
    firebaseInstance.getStatistics().subscribe(data => {
      setWordStats(data);
      refresher.complete();
      // if (this.loading) {
      //   await this.loading.dismiss();
      //   this.loading = null;
      // }
    });
  }, []);
  useEffect(() => {
    firebaseInstance.getStatistics().subscribe(data => setWordStats(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Statistics</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonList>
          <IonListHeader>{wordStats.length ? <IonLabel>Welcome to Lexion!</IonLabel> : <IonLabel>No Statistics</IonLabel>}</IonListHeader>
          {wordStats.map(wordStat => (
            <IonItem>
              <IonTitle>{wordStat?.text}</IonTitle>
              <IonLabel>{`Counter: ${wordStat.count} | Errors: ${wordStat.errors}`}</IonLabel>
              <p>{wordStat?.transcription}</p>
              <strong>{wordStat?.translation}</strong>
              <p>{`${wordStat?.partOfSpeech} : ${wordStat?.category}`}</p>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stats;
