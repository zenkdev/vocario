import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export interface AppLoaderProps {
  loading: boolean;
}

export function AppLoader({ loading }: AppLoaderProps) {
  return (
    <Backdrop open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
