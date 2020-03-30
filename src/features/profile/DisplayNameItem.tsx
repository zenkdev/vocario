import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonAvatar, IonInput, IonItem, IonLabel, IonSkeletonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { If } from '../../components';
import { IonInputEvent } from '../../types';
import { saveDisplayName } from './profileSlice';

const DisplayNameItem: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    profile: { displayName: initialValue, photoURL },
  } = useSelector((state: RootState) => state.profile);
  const [displayName, setDisplayName] = useState('');
  const handleChange = (evt: IonInputEvent) => setDisplayName(evt.detail.value || '');
  const handleBlur = useCallback(() => {
    if (displayName != null && displayName !== initialValue) {
      dispatch(saveDisplayName(displayName));
    }
  }, [dispatch, displayName, initialValue]);
  useEffect(() => setDisplayName(initialValue), [initialValue]);

  return (
    <IonItem>
      {photoURL && (
        <IonAvatar slot="start">
          <img src={photoURL} alt="avatar" />
        </IonAvatar>
      )}
      <IonLabel position="stacked">Name</IonLabel>
      <If
        condition={!isLoading}
        then={<IonInput type="text" value={displayName} onIonChange={handleChange} onIonBlur={handleBlur} />}
        else={<IonSkeletonText animated />}
      />
    </IonItem>
  );
};

export default DisplayNameItem;
