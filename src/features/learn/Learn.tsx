import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, StaticContext } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import { Dispatch } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { percent } from '../../utils';
import Congratulations from './Congratulations';
import * as actions from './learnSlice';
import NormalCard from './NormalCard';
import * as selectors from './selectors';
import SimpleCard from './SimpleCard';

type LearnLocationState = {
  id: string;
  title: string;
};

type LearnOwnProps = RouteComponentProps<{}, StaticContext, LearnLocationState>;

const mapStateToProps = (state: RootState) => {
  const { simpleMode } = state.app;
  const { isLoading } = state.learn;
  return {
    simpleMode,
    isLoading,
    word: selectors.selectWord(state),
    dailyStatistics: selectors.selectDailyStatistics(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LearnOwnProps) => {
  const { state } = ownProps.location;
  return {
    fetchData: () => {
      if (state && state.id) {
        dispatch(actions.fetchDictionary(state.id) as any);
      }
    },
  };
};

type LearnProps = LearnOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Learn: React.FC<LearnProps> = ({ location, simpleMode, isLoading, word, dailyStatistics, fetchData }) => {
  const title = (location.state && location.state.title) || 'Learn';
  const { completed, total, more } = dailyStatistics;

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
        <IonProgressBar value={percent(completed, total)} />
        {word && !simpleMode && <NormalCard word={word} />}
        {word && simpleMode && <SimpleCard word={word} />}
        {!isLoading && !word && <Congratulations more={more} />}
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
