import { mail } from 'ionicons/icons';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonIcon, IonInput, IonItem, IonLabel, IonSkeletonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { If } from '../../components';
import { IonInputEvent } from '../../types';
import { saveEmail } from './profileSlice';

const EmailItem: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    profile: { email: initialValue },
  } = useSelector((state: RootState) => state.profile);
  const [email, setEmail] = useState('');
  const handleChange = (evt: IonInputEvent) => setEmail(evt.detail.value || '');
  const handleBlur = useCallback(() => {
    if (email != null && email !== initialValue) {
      dispatch(saveEmail(email));
    }
  }, [dispatch, email, initialValue]);
  useEffect(() => setEmail(initialValue), [initialValue]);

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
