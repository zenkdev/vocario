import { type AlertColor } from '@mui/material/Alert';
import { type ReactNode } from 'react';

export type NotificationPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface Notification {
  type: AlertColor;
  id: string;
  title?: ReactNode;
  message: ReactNode;
  duration?: number;
  pauseDuration: number;
  position?: NotificationPosition;

  createdAt: number;
}

export type NotificationOptions = Partial<Pick<Notification, 'id' | 'duration' | 'position'>>;

export type DefaultNotificationOptions = NotificationOptions & Partial<Record<AlertColor, NotificationOptions>>;
