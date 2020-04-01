import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

import { increaceNumberOfItems } from '../filters/filtersSlice';
import { selectShowMore } from '../filters/selectors';
import { selectVisible } from './selectors';
import StatisticsListItem from './StatisticsListItem';

const StatisticsList: React.FC = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectVisible);
  const showMore = useSelector(selectShowMore);
  const handleClick = useCallback(() => dispatch(increaceNumberOfItems()), [dispatch]);

  return (
    <IonList lines="full" class="ion-no-margin ion-no-padding">
      {!statistics.length && (
        <IonListHeader>
          <IonLabel>No Statistics</IonLabel>
        </IonListHeader>
      )}
      {statistics.map(item => (
        <StatisticsListItem key={item.id} item={item} />
      ))}
      {showMore && (
        <IonItem onClick={handleClick} button>
          <IonLabel>Show more...</IonLabel>
        </IonItem>
      )}
    </IonList>
  );
};

export default StatisticsList;
