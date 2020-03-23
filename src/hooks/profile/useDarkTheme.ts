import { useCallback, useEffect, useState } from 'react';

import { profileService } from '../../services';

type UseDarkThemeOptions = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const useDarkTheme = (initialValue: boolean, options: UseDarkThemeOptions = {}): [boolean, (newValue: boolean) => void] => {
  const { onCompleted, onError } = options;
  const [didCancel, setDidCancel] = useState(false);
  const [isRestoring, setRestoring] = useState(false);
  const [value, setValue] = useState(initialValue);
  const updateData = useCallback(
    async (newValue: boolean) => {
      // check if restore value from error
      if (isRestoring) return;

      const prevValue = value;
      setValue(newValue);

      try {
        await profileService.updateDarkTheme(newValue);
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

export default useDarkTheme;
