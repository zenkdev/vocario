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
  IonNote,
  IonGrid,
  IonCol,
  IonRow,
  IonLoading,
} from '@ionic/react';

import { Word } from '../models';
import { dictionaryService, toastService } from '../services';

const Stats: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [wordStats, setWordStats] = useState<Word[]>([]);
  const doRefresh = useCallback(({ target: refresher }) => {
    setShowLoading(true);
    dictionaryService
      .getStatistics()
      .then(data => {
        setShowLoading(false);
        refresher.complete();
        setWordStats(data);
      })
      .catch(error => {
        setShowLoading(false);
        refresher.complete();
        toastService.showError(error);
      });
  }, []);
  useEffect(() => {
    dictionaryService
      .getStatistics()
      .then(data => {
        setShowLoading(false);
        setWordStats(data);
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
          <IonTitle>Statistics</IonTitle>
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
          {!wordStats.length && (
            <IonListHeader>
              <IonLabel>No Statistics</IonLabel>
            </IonListHeader>
          )}
          {wordStats.map(wordStat => (
            <IonItem key={wordStat.id}>
              <IonLabel>
                <IonGrid class="ion-no-margin ion-no-padding">
                  <IonRow>
                    <IonCol>
                      <h3>{wordStat?.text}</h3>
                      <small>{wordStat?.transcription}</small>
                    </IonCol>
                    <IonCol>
                      <strong>{wordStat?.translation}</strong>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <p style={{ fontSize: '60%', whiteSpace: 'normal' }}>{`${wordStat?.partOfSpeech} : ${wordStat?.category}`}</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
              <IonNote slot="end" color="primary">
                {wordStat.count}
              </IonNote>
              <IonNote slot="end" color="danger">
                {wordStat.errors}
              </IonNote>
            </IonItem>
          ))}
        </IonList>
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Stats;
