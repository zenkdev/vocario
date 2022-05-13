import { moon } from 'ionicons/icons';
import React, { useCallback } from 'react';

import { IonIcon, IonItem, IonLabel, IonSkeletonText, IonToggle } from '@ionic/react';

import { If } from '../../components';
import { IonToggleEvent } from '../../types';
import { saveDarkTheme } from './profileSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const DarkThemeItem = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    profile: { darkTheme },
  } = useAppSelector(state => state.profile);
  const handleChange = useCallback(
    (evt: IonToggleEvent) => {
      const { checked } = evt.detail;
      dispatch(saveDarkTheme(checked));
    },
    [dispatch],
  );

  return (
    <IonItem>
      <IonIcon slot="start" icon={moon} />
      <IonLabel position="fixed">Dark Theme</IonLabel>
      <If condition={!isLoading} then={<IonToggle checked={darkTheme} onIonChange={handleChange} />} else={<IonSkeletonText animated />} />
    </IonItem>
  );
};

export default DarkThemeItem;
