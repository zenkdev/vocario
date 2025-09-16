import LoginPage from '@/pages/login';
import { RequireAuth } from '@/shared/ui';

import StatisticsPage from './statistics-page';

function Page() {
  return (
    <RequireAuth LoginComponent={LoginPage}>
      <StatisticsPage />
    </RequireAuth>
  );
}

export default Page;
