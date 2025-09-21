import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';

import { AppFooter } from './app-footer';
import { BackButton } from './back-button';

export interface AppPageProps {
  title: ReactNode;
  children: ReactNode;
  showFooter?: boolean;
  showBackButton?: boolean;
  right?: ReactNode;
  variant?: 'normal' | 'form';
}

export function AppPage({ title, children, showFooter, showBackButton, right, variant = 'normal' }: AppPageProps) {
  return (
    <>
      <AppBar position="sticky" component="nav" sx={{ mb: 4 }}>
        <Toolbar>
          {showBackButton ? <BackButton /> : null}
          <Typography variant="h5">{title}</Typography>
          {right}
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ width: '100%', maxWidth: variant === 'form' ? '600px' : undefined, mx: variant === 'form' ? 'auto' : 0 }}>
        {children}
      </Box>
      {showFooter ? <AppFooter /> : null}
    </>
  );
}
