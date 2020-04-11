import React, { useCallback } from 'react';
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

import Filter from '../features/filters/Filter';
import { selectIsLoading } from '../features/statistics/selectors';
import StatisticsList from '../features/statistics/StatisticsList';
import { fetchStatistics } from '../features/statistics/statisticsSlice';
import Chart from '../features/statistics/Chart';

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const fetchData = useCallback(() => dispatch(fetchStatistics()), [dispatch]);
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
        <Chart />
        <Filter />
        <StatisticsList />
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
