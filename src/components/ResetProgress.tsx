import React from 'react';

import { IonAlert } from '@ionic/react';

import { statisticService, toastService } from '../services';

interface ResetProgressProps {
  showAlert: boolean;
  onClose: () => void;
}

const ResetProgress: React.FC<ResetProgressProps> = ({ showAlert, onClose }) => {
  const resetProgress = async () => {
    onClose();

    try {
      await statisticService.resetProgress();
      toastService.showToast({
        message: 'All progress successfully reset.',
        header: 'Reset the progress',
        duration: 3000,
        color: 'success',
        buttons: [{ text: 'Close', role: 'cancel' }],
      });
    } catch (error) {
      toastService.showError(error);
    }
  };

  return (
    <IonAlert
      isOpen={showAlert}
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
          handler: resetProgress,
        },
      ]}
    />
  );
};

export default ResetProgress;
