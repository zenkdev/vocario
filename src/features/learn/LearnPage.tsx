import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import { If } from '../../components';
import { percent } from '../../utils';
import Congratulations from './Congratulations';
import * as actions from './learnSlice';
import NormalCard from './NormalCard';
import * as selectors from './selectors';
import SimpleCard from './SimpleCard';

type LearnPageOwnProps = {
  match: {
    params: {
      id: string;
    };
  };
};

const mapStateToProps = (state: RootState) => {
  const { simpleMode } = state.app;
  const { isLoading } = state.learn;
  const { completed, total, more } = selectors.selectDailyStatistics(state);
  return {
    simpleMode,
    isLoading,
    title: selectors.selectTitle(state),
    word: selectors.selectWord(state),
    progress: percent(completed, total),
    hasMore: more,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch, { match }: LearnPageOwnProps) => {
  const { id } = match.params;
  return {
    fetchData: () => {
      dispatch(actions.fetchDictionary(id));
    },
  };
};

type LearnPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const LearnPage: React.FC<LearnPageProps> = ({ title, simpleMode, isLoading, word, progress, hasMore, fetchData }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(LearnPage);
