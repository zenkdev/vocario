import { useCallback, useEffect, useState } from 'react';

import { profileService } from '../../services';

type UseFontSizeOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

type UpdateProfileValues = {
  simpleMode?: boolean;
  fontSize?: number;
  darkTheme?: boolean;
};

const useFontSize = (initialValue: number, options: UseFontSizeOptions = {}): [number, (newValue: number) => void] => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const [isRestoring, setRestoring] = useState(false);
  const [value, setValue] = useState(initialValue);
  const updateData = useCallback(
    async (newValue: number) => {
      // check if restore value from error
      if (isRestoring) return;

      const prevValue = value;
      setValue(newValue);

      try {
        await profileService.updateFontSize(newValue);
        if (!didCancel) {
          if (onCompleted) onCompleted();
        }
      } catch (error) {
        setRestoring(true);
        setValue(prevValue);
        setRestoring(false);
        if (!didCancel) {
          if (onError) onError(error);
        }
      }
    },
    [value, didCancel, isRestoring, onCompleted, onError],
  );
  useEffect(() => {
    setDidCancel(false);
    return () => setDidCancel(true);
  }, []);
  return [value, updateData];
};

export default useFontSize;
