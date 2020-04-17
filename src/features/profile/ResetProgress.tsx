import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IonAlert } from '@ionic/react';

import Button from '../app/Button';
import { doResetProgress } from './profileSlice';

const ResetProgress: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleReset = useCallback(() => {
    setIsOpen(false);
    dispatch(doResetProgress());
  }, [dispatch]);

  return (
    <>
      <div className="ion-padding">
        <Button expand="block" color="primary" onClick={() => setIsOpen(true)}>
          Reset the progress
        </Button>
      </div>
      <IonAlert
        isOpen={isOpen}
        header="Reset the progress!"
        message="Are you sure you want to completely reset all your progress? This operation is irreversible!"
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => setIsOpen(false),
          },
          {
            text: 'Reset',
            handler: handleReset,
          },
        ]}
      />
    </>
  );
};

export default ResetProgress;
