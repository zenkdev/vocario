import React, { useCallback, useState } from 'react';

import { IonAlert } from '@ionic/react';

import { Button } from '../../components';
import useResetProgress from '../../hooks/useResetProgress';
import { toastService } from '../../services';

const ResetProgress: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCompleted = useCallback(() => {
    toastService.showToast({
      message: 'All progress successfully reset.',
      header: 'Reset the progress',
      duration: 3000,
      color: 'success',
      buttons: [{ text: 'Close', role: 'cancel' }],
    });
  }, []);
  const resetProgress = useResetProgress({ onCompleted, onError: toastService.showError });
  const handleReset = useCallback(() => {
    setIsOpen(false);
    resetProgress();
  }, [resetProgress]);

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
