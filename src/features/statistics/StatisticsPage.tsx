import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import Filter from '../filters/Filter';
import Chart from './Chart';
import { selectIsLoading } from './selectors';
import StatisticsList from './StatisticsList';
import { fetchStatistics } from './statisticsSlice';

const StatisticsPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const fetchData = useCallback(() => dispatch(fetchStatistics()), [dispatch]);
  const doRefresh = useCallback(
    ({ detail: refresher }: CustomEvent<RefresherEventDetail>) => {
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
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
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

export default StatisticsPage;
