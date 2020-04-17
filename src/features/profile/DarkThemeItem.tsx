import { moon } from 'ionicons/icons';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonIcon, IonItem, IonLabel, IonSkeletonText, IonToggle } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { IonToggleEvent } from '../../types';
import If from '../app/If';
import { saveDarkTheme } from './profileSlice';

const DarkThemeItem: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    profile: { darkTheme },
  } = useSelector((state: RootState) => state.profile);
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
