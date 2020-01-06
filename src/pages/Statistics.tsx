import React, { useCallback, useContext, useEffect, useState } from 'react';

import {
  IonBadge,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { FirebaseContext } from '../components';
import { Word } from '../models';
import { statisticService, toastService } from '../services';

const Statistics: React.FC = () => {
  const { resetCount } = useContext(FirebaseContext);
  const [showLoading, setShowLoading] = useState(true);
  const [statistics, setStatistics] = useState<Word[]>([]);
  const doRefresh = useCallback(({ target: refresher }) => {
    setShowLoading(true);
    statisticService
      .getStatistics()
      .then(data => {
        setShowLoading(false);
        refresher.complete();
        setStatistics(data);
      })
      .catch(error => {
        setShowLoading(false);
        refresher.complete();
        toastService.showError(error);
      });
  }, []);
  useEffect(() => {
    statisticService
      .getStatistics()
      .then(data => {
        setShowLoading(false);
        setStatistics(data);
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
          <IonTitle>Statistics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          {!statistics.length && (
            <IonListHeader>
              <IonLabel>No Statistics</IonLabel>
            </IonListHeader>
          )}
          {statistics.map(word => (
            <IonItem key={word.id}>
              <IonLabel>
                <IonGrid class="ion-no-margin ion-no-padding">
                  <IonRow>
                    <IonCol>
                      <div>
                        <strong>{word.text}</strong>
                      </div>
                      <small>{word.transcription}</small>
                    </IonCol>
                    <IonCol>{word.translation}</IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <p style={{ fontSize: '60%', whiteSpace: 'normal' }}>{`${word.partOfSpeech} : ${word.category}`}</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
              <IonBadge slot="end" color="primary">
                {word.count}
              </IonBadge>
            </IonItem>
          ))}
        </IonList>
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
