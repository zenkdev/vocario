import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@/shared/ui';
import { doResetProgress } from '@/lib/profile-slice';
import { useAppDispatch } from '@/lib/hooks';
import { useCallback, useState } from 'react';

function ResetProgress() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleReset = useCallback(() => {
    setIsOpen(false);
    dispatch(doResetProgress());
  }, [dispatch]);

  return (
    <>
      <Button variant="outlined" color="primary" onClick={() => setIsOpen(true)} fullWidth>
        Reset the progress
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>Reset the progress!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to completely reset all your progress? This operation is irreversible!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleReset}>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ResetProgress;
