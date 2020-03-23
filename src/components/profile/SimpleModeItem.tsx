import { rocket } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { IonIcon, IonItem, IonLabel, IonSkeletonText, IonToggle } from '@ionic/react';

import { useSimpleMode } from '../../hooks';
import { toastService } from '../../services';
import { IonToggleEvent } from '../../types';
import If from '../If';

type SimpleModeItemProps = {
  isLoading: boolean;
  initialValue: boolean;
  setShowSaving: (showSaving: boolean) => void;
};

const SimpleModeItem: React.FC<SimpleModeItemProps> = ({ isLoading, initialValue, setShowSaving }) => {
  const onCompleted = useCallback(() => setShowSaving(false), [setShowSaving]);
  const onError = useCallback(
    error => {
      setShowSaving(false);
      toastService.showError(error);
    },
    [setShowSaving],
  );
  const [value, updateValue] = useSimpleMode(initialValue, { onCompleted, onError });
  const handleChange = useCallback(
    (evt: IonToggleEvent) => {
      const { checked } = evt.detail;
      updateValue(checked);
      setShowSaving(true);
    },
    [setShowSaving, updateValue],
  );

  return (
    <IonItem>
      <IonIcon slot="start" icon={rocket} />
      <IonLabel position="fixed">Simple Mode</IonLabel>
      <If condition={!isLoading} then={<IonToggle checked={value} onIonChange={handleChange} />} else={<IonSkeletonText animated />} />
    </IonItem>
  );
};

export default SimpleModeItem;
