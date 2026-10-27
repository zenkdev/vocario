import type { AlertColor } from '@mui/material/Alert';
import { useEffect, useState } from 'react';

import type { DefaultNotificationOptions, Notification } from './types';

const NOTIFICATION_LIMIT = 20;

export type ActionType =
  'ADD_NOTIFICATION' | 'UPDATE_NOTIFICATION' | 'UPSERT_NOTIFICATION' | 'REMOVE_NOTIFICATION' | 'START_PAUSE' | 'END_PAUSE';

type Action =
  | {
      type: 'ADD_NOTIFICATION';
      notification: Notification;
    }
  | {
      type: 'UPSERT_NOTIFICATION';
      notification: Notification;
    }
  | {
      type: 'UPDATE_NOTIFICATION';
      notification: Partial<Notification>;
    }
  | {
      type: 'REMOVE_NOTIFICATION';
      notificationId?: string;
    }
  | {
      type: 'START_PAUSE';
      time: number;
    }
  | {
      type: 'END_PAUSE';
      time: number;
    };

interface State {
  notifications: Notification[];
  pausedAt: number | undefined;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.notification, ...state.notifications].slice(0, NOTIFICATION_LIMIT),
      };

    case 'UPDATE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.map(t => (t.id === action.notification.id ? { ...t, ...action.notification } : t)),
      };

    case 'UPSERT_NOTIFICATION':
      return reducer(state, {
        type: state.notifications.find(t => t.id === action.notification.id) ? 'UPDATE_NOTIFICATION' : 'ADD_NOTIFICATION',
        notification: action.notification,
      });

    case 'REMOVE_NOTIFICATION':
      if (action.notificationId === undefined) {
        return {
          ...state,
          notifications: [],
        };
      }

      return {
        ...state,
        notifications: state.notifications.filter(t => t.id !== action.notificationId),
      };

    case 'START_PAUSE':
      return {
        ...state,
        pausedAt: action.time,
      };

    case 'END_PAUSE': {
      const diff = action.time - (state.pausedAt || 0);

      return {
        ...state,
        pausedAt: undefined,
        notifications: state.notifications.map(t => ({
          ...t,
          pauseDuration: t.pauseDuration + diff,
        })),
      };
    }
  }
};

const listeners: ((state: State) => void)[] = [];

let memoryState: State = { notifications: [], pausedAt: undefined };

export const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach(listener => {
    listener(memoryState);
  });
};

export const defaultTimeouts: Record<AlertColor, number> = {
  info: 4000,
  error: Infinity,
  success: 2000,
  warning: 2000,
};

export const useStore = (notificationOptions: DefaultNotificationOptions = {}): State => {
  const [state, setState] = useState<State>(memoryState);
  useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  const mergedNotifications = state.notifications.map(t => ({
    ...notificationOptions,
    ...notificationOptions[t.type],
    ...t,
    duration: t.duration || notificationOptions[t.type]?.duration || notificationOptions?.duration || defaultTimeouts[t.type],
  }));

  return {
    ...state,
    notifications: mergedNotifications,
  };
};
