import { IonIcon, IonItem, IonLabel, IonSkeletonText, IonToggle } from '@ionic/react';
import { rocket } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { If } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IonToggleEvent } from '../../types';
import { saveSimpleMode } from './profileSlice';

const SimpleModeItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    profile: { simpleMode },
  } = useAppSelector(state => state.profile);
  const handleChange = useCallback(
    (evt: IonToggleEvent) => {
      const { checked } = evt.detail;
      dispatch(saveSimpleMode(checked));
    },
    [dispatch],
  );

  return (
    <IonItem>
      <IonIcon slot="start" icon={rocket} />
      <IonLabel position="fixed">Simple Mode</IonLabel>
      <If condition={!isLoading} then={<IonToggle checked={simpleMode} onIonChange={handleChange} />} else={<IonSkeletonText animated />} />
    </IonItem>
  );
};

export default SimpleModeItem;
