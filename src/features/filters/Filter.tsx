import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { IonInputEvent } from '../../types';
import { setVisibilityFilter, VisibilityFilters } from './filtersSlice';
import { selectCompletedCount, selectLearningCount } from './selectors';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.visibilityFilter);
  const learning = useSelector(selectLearningCount);
  const completed = useSelector(selectCompletedCount);
  const handleIonSegmentChange = useCallback((e: IonInputEvent) => dispatch(setVisibilityFilter(e.detail.value as VisibilityFilters)), [
    dispatch,
  ]);

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
