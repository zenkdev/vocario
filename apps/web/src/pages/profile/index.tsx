import LoginPage from '@/pages/login';
import { RequireAuth } from '@/shared/ui';

import ProfilePage from './profile-page';

function Page() {
  return (
    <RequireAuth LoginComponent={LoginPage}>
      <ProfilePage />
    </RequireAuth>
  );
}

export default Page;
