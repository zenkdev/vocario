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

import { StatisticListItem } from '../components';
import useStatistics from '../hooks/useStatistics';
import { modelHelper } from '../models';
import { toastService } from '../services';
import { IonInputEvent } from '../types';

const NUMBER_OF_ITEMS = 20;

const Statistics: React.FC = () => {
  const [state, fetchData] = useStatistics({ onError: toastService.showError });

  const { isLoading, data } = state;

  const [segment, setSegment] = useState<string>('learning');
  const [numberOfItems, setNumberOfItems] = useState(NUMBER_OF_ITEMS);
  const learning = useMemo(() => `Learning ${modelHelper.count(data, s => !modelHelper.isCompleted(s))}`, [data]);
  const completed = useMemo(() => `Completed ${modelHelper.count(data, s => modelHelper.isCompleted(s))}`, [data]);
  const handleSegmentChange = useCallback((e: IonInputEvent) => {
    setSegment(e.detail.value || '');
    setNumberOfItems(NUMBER_OF_ITEMS);
  }, []);
  const handleShowMore = useCallback(() => setNumberOfItems(numberOfItems + NUMBER_OF_ITEMS), [numberOfItems]);
  const doRefresh = useCallback(
    ({ target: refresher }) => {
      fetchData();
      refresher.complete();
    },
    [fetchData],
  );
  const items = useMemo(
    () =>
      data.filter(s => (segment === 'learning' && !modelHelper.isCompleted(s)) || (segment === 'completed' && modelHelper.isCompleted(s))),
    [data, segment],
  );
  useIonViewWillEnter(fetchData);

  console.log(state);

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
            <StatisticListItem key={item.id} item={item} showCount={segment !== 'completed'} />
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
