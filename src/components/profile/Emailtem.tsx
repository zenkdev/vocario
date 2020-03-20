import { mail } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';

import { IonIcon, IonInput, IonItem, IonLabel, IonSkeletonText } from '@ionic/react';

import { useUpdateEmail } from '../../hooks';
import { toastService } from '../../services';
import { IonInputEvent } from '../../types';
import If from '../If';

type EmailItemProps = {
  isLoading: boolean;
  initialValue: string;
  setShowSaving: (showSaving: boolean) => void;
};

const EmailItem: React.FC<EmailItemProps> = ({ isLoading, initialValue, setShowSaving }) => {
  const onCompleted = useCallback(() => setShowSaving(false), [setShowSaving]);
  const onError = useCallback(
    error => {
      setShowSaving(false);
      toastService.showError(error);
    },
    [setShowSaving],
  );
  const updateEmail = useUpdateEmail({ onCompleted, onError });
  const [email, setEmail] = useState<string>(initialValue);
  const handleChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');
  const handleBlur = useCallback(() => {
    if (email != null && email !== initialValue) {
      setShowSaving(true);
      updateEmail(email, '');
    }
  }, [setShowSaving, updateEmail, email, initialValue]);

  return (
    <IonItem>
      <IonIcon slot="start" icon={mail} />
      <IonLabel position="stacked">Email</IonLabel>
      <If
        condition={!isLoading}
        then={<IonInput type="email" value={email} onIonChange={handleChange} onIonBlur={handleBlur} />}
        else={<IonSkeletonText animated />}
      />
    </IonItem>
  );
};

export default EmailItem;
