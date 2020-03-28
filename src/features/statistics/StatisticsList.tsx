import React from 'react';

import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

import { Statistic } from '../../models';
import StatisticsListItem from './StatisticsListItem';

type StatisticsListProps = {
  statistics: Statistic[];
  numberOfItems: number;
  onShowMoreClick: () => void;
};

const StatisticsList: React.FC<StatisticsListProps> = ({ statistics, numberOfItems, onShowMoreClick }) => (
  <IonList lines="full" class="ion-no-margin ion-no-padding">
    {!statistics.length && (
      <IonListHeader>
        <IonLabel>No Statistics</IonLabel>
      </IonListHeader>
    )}
    {statistics.slice(0, numberOfItems).map(item => (
      <StatisticsListItem key={item.id} item={item} />
    ))}
    {statistics.length > numberOfItems && (
      <IonItem onClick={onShowMoreClick} button>
        <IonLabel>Show more...</IonLabel>
      </IonItem>
    )}
  </IonList>
);

export default StatisticsList;
