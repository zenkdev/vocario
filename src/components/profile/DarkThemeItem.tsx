/* eslint-disable react/jsx-one-expression-per-line */
import { moon } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { IonIcon, IonItem, IonLabel, IonSkeletonText, IonToggle } from '@ionic/react';

import { useDarkTheme } from '../../hooks';
import { toastService } from '../../services';
import { IonToggleEvent } from '../../types';
import If from '../If';

type DarkThemeItemProps = {
  isLoading: boolean;
  initialDarkTheme: boolean;
  setShowSaving: (showSaving: boolean) => void;
};

const DarkThemeItem: React.FC<DarkThemeItemProps> = ({ isLoading, initialDarkTheme, setShowSaving }) => {
  const onCompleted = useCallback(() => setShowSaving(false), [setShowSaving]);
  const onError = useCallback(
    error => {
      setShowSaving(false);
      toastService.showError(error);
    },
    [setShowSaving],
  );
  const [value, updateValue] = useDarkTheme(initialDarkTheme, { onCompleted, onError });
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
      <IonIcon slot="start" icon={moon} />
      <IonLabel position="fixed">Dark Theme</IonLabel>
      <If condition={!isLoading} then={<IonToggle checked={value} onIonChange={handleChange} />} else={<IonSkeletonText animated />} />
    </IonItem>
  );
};

export default DarkThemeItem;
