import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useCallback, useEffect } from 'react';

import { If } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { percent } from '../../utils';
import Congratulations from './Congratulations';
import * as actions from './learnSlice';
import NormalCard from './NormalCard';
import * as selectors from './selectors';
import SimpleCard from './SimpleCard';

type LearnPageProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const useLearnPage = () => {
  const { simpleMode } = useAppSelector(state => state.app);
  const { isLoading } = useAppSelector(state => state.learn);
  const { completed, total, more } = useAppSelector(selectors.selectDailyStatistics);
  const title = useAppSelector(selectors.selectTitle);
  const word = useAppSelector(selectors.selectWord);

  return {
    simpleMode,
    isLoading,
    title,
    word,
    progress: percent(completed, total),
    hasMore: more,
  };
};

const LearnPage: React.FC<LearnPageProps> = ({ match }: LearnPageProps) => {
  const dispatch = useAppDispatch();
  const { title, simpleMode, isLoading, word, progress, hasMore } = useLearnPage();
  const fetchData = useCallback(() => dispatch(actions.fetchDictionary(match.params.id)), [dispatch, match.params.id]);

  useEffect(fetchData, [fetchData]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonProgressBar value={progress} />
        {word && <If condition={simpleMode} then={<SimpleCard word={word} />} else={<NormalCard word={word} />} />}
        {!isLoading && !word && <Congratulations more={hasMore} />}
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default LearnPage;
