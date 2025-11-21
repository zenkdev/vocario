import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../index.css';

import Notifications from '@/features/notifications';
import HomePage from '@/pages/home';
import LearnPage from '@/pages/learn';
import LoginPage from '@/pages/login';
import ProfilePage from '@/pages/profile';
import ResetPasswordPage from '@/pages/reset-password';
import SignupPage from '@/pages/signup';
import StatisticsPage from '@/pages/stats';
import { Redirect } from '@/shared/ui';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { BrowserRouter, Route, Routes } from 'react-router';
import Loader from './loader';
import PWABadge from './pwa-badge';
import StoreProvider from './store-provider';
import ThemeProvider from './theme-provider';

export default function AppRoot() {
  return (
    <>
      <InitColorSchemeScript attribute="class" />
      <StoreProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Loader>
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/learn/:dct" element={<LearnPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/stats" element={<StatisticsPage />} />
                <Route path="*" element={<Redirect to="/home" />} />
              </Routes>
            </Loader>
          </BrowserRouter>
          <Notifications />
          <PWABadge />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
