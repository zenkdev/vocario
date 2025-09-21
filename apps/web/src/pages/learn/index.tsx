import LoginPage from '@/pages/login';
import { RequireAuth } from '@/shared/ui';

import LearnPage from './learn-page';

function Page() {
  return (
    <RequireAuth LoginComponent={LoginPage}>
      <LearnPage />
    </RequireAuth>
  );
}

export default Page;
