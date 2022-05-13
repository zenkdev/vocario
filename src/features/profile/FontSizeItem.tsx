import { IonIcon, IonItem, IonLabel, IonRange, IonSkeletonText } from '@ionic/react';
import { text } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { If } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IonRangeEvent } from '../../types';
import { saveFontSize } from './profileSlice';

const FontSizeItem = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    profile: { fontSize },
  } = useAppSelector(state => state.profile);
  const handleChange = useCallback(
    (evt: IonRangeEvent) => {
      const value = evt.detail.value as number;
      dispatch(saveFontSize(value / 100));
    },
    [dispatch],
  );

  return (
    <IonItem>
      <IonIcon slot="start" icon={text} size="small" />
      <IonLabel position="fixed">Font Size</IonLabel>
      <If
        condition={!isLoading}
        then={<IonRange min={80} max={150} value={fontSize * 100} step={10} ticks snaps onIonChange={handleChange} />}
        else={<IonSkeletonText animated />}
      />
      <IonIcon slot="end" icon={text} />
    </IonItem>
  );
};

export default FontSizeItem;
