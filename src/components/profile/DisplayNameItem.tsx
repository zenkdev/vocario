import React, { useCallback, useState } from 'react';

import { IonAvatar, IonInput, IonItem, IonLabel, IonSkeletonText } from '@ionic/react';

import { useUpdateName } from '../../hooks';
import { toastService } from '../../services';
import { IonInputEvent } from '../../types';
import If from '../If';

type DisplayNameItemProps = {
  isLoading: boolean;
  initialValue: string;
  photoURL?: string;
  setShowSaving: (showSaving: boolean) => void;
};

const DisplayNameItem: React.FC<DisplayNameItemProps> = ({ isLoading, initialValue, photoURL, setShowSaving }) => {
  const onCompleted = useCallback(() => setShowSaving(false), [setShowSaving]);
  const onError = useCallback(
    error => {
      setShowSaving(false);
      toastService.showError(error);
    },
    [setShowSaving],
  );
  const updateName = useUpdateName({ onCompleted, onError });
  const [displayName, setEmail] = useState<string>(initialValue);
  const handleChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');
  const handleBlur = useCallback(() => {
    if (displayName != null && displayName !== initialValue) {
      setShowSaving(true);
      updateName(displayName);
    }
  }, [setShowSaving, updateName, displayName, initialValue]);

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
