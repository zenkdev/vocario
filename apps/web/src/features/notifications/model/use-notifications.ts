import { useCallback, useEffect } from 'react';

import { ActionType, dispatch, useStore } from './notification-reducer';
import type { DefaultNotificationOptions } from './types';
import { store } from './notification-store';

const startPause = () => dispatch({ type: ActionType.START_PAUSE, time: Date.now() });

export const useNotifications = (notificationOptions?: DefaultNotificationOptions) => {
  const { notifications, pausedAt } = useStore(notificationOptions);

  useEffect(() => {
    if (pausedAt) {
      return;
    }

    const now = Date.now();
    const timeouts = notifications.map(n => {
      if (n.duration === Infinity) {
        return;
      }

      const durationLeft = (n.duration || 0) + n.pauseDuration - (now - n.createdAt);

      if (durationLeft < 0) {
        store.remove(n.id);

        return;
      }

      return setTimeout(() => store.remove(n.id), durationLeft);
    });

    return () => {
      timeouts.forEach(timeout => timeout && clearTimeout(timeout));
    };
  }, [notifications, pausedAt]);

  const endPause = useCallback(() => {
    if (pausedAt) {
      dispatch({ type: ActionType.END_PAUSE, time: Date.now() });
    }
  }, [pausedAt]);

  return { notifications, startPause, endPause };
};
