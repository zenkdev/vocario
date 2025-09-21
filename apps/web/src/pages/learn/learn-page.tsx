import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { AppLoader, AppPage } from '@/shared/ui';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import Congratulations from './congratulations-card';
import NormalCard from './normal-card';
import SimpleCard from './simple-card';
import useLearnPage from './use-learn-page';

function LearnPage() {
  const { dct } = useParams<{ dct: string }>();
  const { title, simpleMode, isLoading, word, progress, hasMore, fetchData } = useLearnPage(dct!);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppPage title={title} showBackButton showFooter>
      <Stack direction="column" gap={2} px={2}>
        <LinearProgress variant="determinate" value={progress * 100} />
        {word && <>{simpleMode ? <SimpleCard key={word.id} word={word} /> : <NormalCard key={word.id} word={word} />}</>}
        {!isLoading && !word && <Congratulations more={hasMore} />}
      </Stack>
      <AppLoader loading={isLoading} />
    </AppPage>
  );
}

export default LearnPage;
