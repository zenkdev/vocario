import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { IonSegmentChangeEvent } from '../../types';
import { setVisibilityFilter, VisibilityFilters } from './filtersSlice';
import { selectCompletedCount, selectLearningCount } from './selectors';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(state => state.visibilityFilter);
  const learning = useAppSelector(selectLearningCount);
  const completed = useAppSelector(selectCompletedCount);
  const handleIonSegmentChange = useCallback(
    (e: IonSegmentChangeEvent) => dispatch(setVisibilityFilter(e.detail.value as VisibilityFilters)),
    [dispatch],
  );

  return (
    <IonSegment className="ion-padding" value={filter} onIonChange={handleIonSegmentChange}>
      <IonSegmentButton value={VisibilityFilters.SHOW_LEARNING}>
        <IonLabel>{`Learning ${learning}`}</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value={VisibilityFilters.SHOW_COMPLETED}>
        <IonLabel>{`Completed ${completed}`}</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default Filter;
