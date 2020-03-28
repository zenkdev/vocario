import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { IonInputEvent } from '../../types';
import { setStatisticsFilter, StatisticsFilters } from './filtersSlice';
import { selectCompletedCount, selectLearningCount } from './selectors';

const StatisticsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const statisticsFilter = useSelector((state: RootState) => state.statisticsFilter);
  const learning = useSelector(selectLearningCount);
  const completed = useSelector(selectCompletedCount);
  const handleIonSegmentChange = useCallback(
    (e: IonInputEvent) => {
      dispatch(setStatisticsFilter(e.detail.value as StatisticsFilters));
      // setNumberOfItems(NUMBER_OF_ITEMS);
    },
    [dispatch],
  );

  return (
    <IonSegment className="ion-padding" value={statisticsFilter} onIonChange={handleIonSegmentChange}>
      <IonSegmentButton value={StatisticsFilters.SHOW_LEARNING}>
        <IonLabel>{`Learning ${learning}`}</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value={StatisticsFilters.SHOW_COMPLETED}>
        <IonLabel>{`Completed ${completed}`}</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default StatisticsFilter;
