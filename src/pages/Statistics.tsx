import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

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
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { FirebaseContext, StatisticListItem } from '../components';
import { Statistic } from '../models';
import { statisticService, toastService } from '../services';

const isCompleted = (value: Statistic) => value.count >= 3;

const Statistics: React.FC = () => {
  const { resetCount } = useContext(FirebaseContext);
  const [showLoading, setShowLoading] = useState(true);
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [segment, setSegment] = useState<string>('learning');
  const learning = useMemo(() => `Learning ${statistics.reduce((acc, cur) => acc + (!isCompleted(cur) ? 1 : 0), 0)}`, [statistics]);
  const completed = useMemo(() => `Completed ${statistics.reduce((acc, cur) => acc + (isCompleted(cur) ? 1 : 0), 0)}`, [statistics]);
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
  const items = useMemo(
    () => statistics.filter(cur => (segment === 'learning' && !isCompleted(cur)) || (segment === 'completed' && isCompleted(cur))),
    [statistics, segment],
  );
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
        <IonSegment className="ion-padding" value={segment} onIonChange={e => setSegment(e.detail.value || '')}>
          <IonSegmentButton value="learning">
            <IonLabel>{learning}</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="completed">
            <IonLabel>{completed}</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          {!items.length && (
            <IonListHeader>
              <IonLabel>No Statistics</IonLabel>
            </IonListHeader>
          )}
          {items.map(item => (
            <StatisticListItem key={item.id} item={item} showCount={segment !== 'completed'} />
          ))}
        </IonList>
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
