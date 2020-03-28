import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';

import StatisticsFilter from '../features/filters/StatisticsFilter';
import { selectIsLoading, selectVisible } from '../features/statistics/selectors';
import StatisticsList from '../features/statistics/StatisticsList';
import { fetchStatistics } from '../features/statistics/statisticsSlice';

const NUMBER_OF_ITEMS = 30;

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const visible = useSelector(selectVisible);
  const fetchData = useCallback(() => dispatch(fetchStatistics()), [dispatch]);
  const [numberOfItems, setNumberOfItems] = useState(NUMBER_OF_ITEMS);
  // const handleSegmentChange = useCallback((e: IonInputEvent) => {
  //   setSegment(e.detail.value || '');
  //   setNumberOfItems(NUMBER_OF_ITEMS);
  // }, []);
  const handleShowMoreClick = useCallback(() => setNumberOfItems(numberOfItems + NUMBER_OF_ITEMS), [numberOfItems]);
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
        <StatisticsFilter />
        <StatisticsList statistics={visible} numberOfItems={numberOfItems} onShowMoreClick={handleShowMoreClick} />
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
