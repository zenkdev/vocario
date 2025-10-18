import type { AlertColor } from '@mui/material/Alert';
import type { ReactNode } from 'react';

import { ActionType, dispatch } from './notification-reducer';
import type { Notification, NotificationOptions } from './types';
import { genId } from './gen-id';

type NotificationHandler = (message: ReactNode, title?: ReactNode, options?: NotificationOptions) => string;

const createNotification = (type: AlertColor, message: ReactNode, title?: ReactNode, opts?: NotificationOptions): Notification => ({
  createdAt: Date.now(),
  type,
  title,
  message: typeof message === 'object' && message !== null ? message.toString() : message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || genId(),
});

const createHandler =
  (type: AlertColor): NotificationHandler =>
  (message, title, options) => {
    const notification = createNotification(type, message, title, options);
    dispatch({ type: ActionType.UPSERT_NOTIFICATION, notification });

    return notification.id;
  };

export const store = {
  info: createHandler('info'),
  success: createHandler('success'),
  error: createHandler('error'),
  warning: createHandler('warning'),
  remove: (notificationId?: string) => dispatch({ type: ActionType.REMOVE_NOTIFICATION, notificationId }),
};
