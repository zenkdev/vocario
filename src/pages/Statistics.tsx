import React, { useCallback, useMemo, useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonItem,
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
  useIonViewWillEnter,
} from '@ionic/react';

import { StatisticsItem } from '../components';
import { useStatistics } from '../hooks';
import { modelHelper } from '../models';
import { toastService } from '../services';
import { IonInputEvent } from '../types';

const NUMBER_OF_ITEMS = 20;

const Statistics: React.FC = () => {
  const [{ isLoading, data }, fetchData] = useStatistics({ onError: toastService.showError });
  const learning = useMemo(() => `Learning ${modelHelper.count(data, s => !modelHelper.isCompleted(s))}`, [data]);
  const completed = useMemo(() => `Completed ${modelHelper.count(data, s => modelHelper.isCompleted(s))}`, [data]);
  const [segment, setSegment] = useState<string>('learning');
  const [numberOfItems, setNumberOfItems] = useState(NUMBER_OF_ITEMS);
  const handleSegmentChange = useCallback((e: IonInputEvent) => {
    setSegment(e.detail.value || '');
    setNumberOfItems(NUMBER_OF_ITEMS);
  }, []);
  const handleShowMore = useCallback(() => setNumberOfItems(numberOfItems + NUMBER_OF_ITEMS), [numberOfItems]);
  const items = useMemo(
    () =>
      data.filter(s => (segment === 'learning' && !modelHelper.isCompleted(s)) || (segment === 'completed' && modelHelper.isCompleted(s))),
    [data, segment],
  );
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
          <IonTitle>Statistics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonSegment className="ion-padding" value={segment} onIonChange={handleSegmentChange}>
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
          {items.slice(0, numberOfItems).map(item => (
            <StatisticsItem key={item.id} item={item} showCount={segment !== 'completed'} />
          ))}
          {items.length > numberOfItems && (
            <IonItem onClick={handleShowMore} button>
              <IonLabel>Show more...</IonLabel>
            </IonItem>
          )}
        </IonList>
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
