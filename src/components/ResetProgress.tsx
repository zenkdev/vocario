import React, { useCallback } from 'react';

import { IonAlert } from '@ionic/react';

import { useResetProgress } from '../hooks';
import { toastService } from '../services';

interface ResetProgressProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetProgress: React.FC<ResetProgressProps> = ({ isOpen, onClose }) => {
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
    onClose();
    resetProgress();
  }, [onClose, resetProgress]);

  return (
    <IonAlert
      isOpen={isOpen}
      header="Reset the progress!"
      message="Are you sure you want to completely reset all your progress? This operation is irreversible!"
      buttons={[
        {
          text: 'Cancel',
          role: 'cancel',
          handler: onClose,
        },
        {
          text: 'Reset',
          handler: handleReset,
        },
      ]}
    />
  );
};

export default ResetProgress;
