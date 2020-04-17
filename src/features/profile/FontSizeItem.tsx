import { text } from 'ionicons/icons';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonIcon, IonItem, IonLabel, IonRange, IonSkeletonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { IonRangeEvent } from '../../types';
import If from '../app/If';
import { saveFontSize } from './profileSlice';

const FontSizeItem: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    profile: { fontSize },
  } = useSelector((state: RootState) => state.profile);
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
