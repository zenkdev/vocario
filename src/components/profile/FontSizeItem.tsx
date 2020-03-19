import { text } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { IonIcon, IonItem, IonLabel, IonRange, IonSkeletonText } from '@ionic/react';

import { useFontSize } from '../../hooks';
import { toastService } from '../../services';
import { IonRangeEvent } from '../../types';
import If from '../If';

type SimpleModeItemProps = {
  isLoading: boolean;
  initialValue: number;
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
  const [value, updateValue] = useFontSize(initialValue, { onCompleted, onError });
  const handleChange = useCallback(
    (evt: IonRangeEvent) => {
      const newValue = evt.detail.value as number;
      updateValue(newValue / 100);
      setShowSaving(true);
    },
    [setShowSaving, updateValue],
  );

  return (
    <IonItem>
      <IonIcon slot="start" icon={text} size="small" />
      <IonLabel position="fixed">Font Size</IonLabel>
      <If
        condition={!isLoading}
        then={<IonRange min={80} max={150} value={value * 100} step={10} ticks snaps onIonChange={handleChange} />}
        else={<IonSkeletonText animated />}
      />
      <IonIcon slot="end" icon={text} />
    </IonItem>
  );
};

export default SimpleModeItem;
