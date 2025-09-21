import LoginPage from '@/pages/login';
import { RequireAuth } from '@/shared/ui';

import HomePage from './home-page';

function Page() {
  return (
    <RequireAuth LoginComponent={LoginPage}>
      <HomePage />
    </RequireAuth>
  );
}

export default Page;
