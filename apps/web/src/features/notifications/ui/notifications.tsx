import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Badge from '@mui/material/Badge';
import Portal from '@mui/material/Portal';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

import { store, useNotifications, type DefaultNotificationOptions, type NotificationPosition } from '../model';

export interface NotificationsProps {
  position?: NotificationPosition;
  notificationOptions?: DefaultNotificationOptions;
}

export function Notifications({ position = 'top-right', notificationOptions }: NotificationsProps) {
  const { notifications, startPause, endPause } = useNotifications(notificationOptions);

  const currentNotification = notifications[0] ?? null;
  const [vertical, horizontal] = (currentNotification?.position || position).split('-') as ['top' | 'bottom', 'left' | 'center' | 'right'];
  const badge = notifications.length > 1 ? String(notifications.length) : null;

  return (
    <Portal>
      {currentNotification ? (
        <Snackbar
          id={currentNotification.id}
          key={currentNotification.id}
          open
          onClose={() => store.remove(currentNotification.id)}
          anchorOrigin={{ vertical, horizontal }}
          onMouseEnter={startPause}
          onMouseLeave={endPause}
        >
          <Badge badgeContent={badge} color="primary">
            <Alert onClose={() => store.remove(currentNotification.id)} severity={currentNotification.type} variant="filled">
              {currentNotification.title ? (
                <AlertTitle>
                  <Typography variant="h6">{currentNotification.title}</Typography>
                </AlertTitle>
              ) : null}
              <Typography variant="body2">{currentNotification.message}</Typography>
            </Alert>
          </Badge>
        </Snackbar>
      ) : null}
    </Portal>
  );
}
