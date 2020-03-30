import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import AppContext from '../app/AppContext';
import { RootState } from '../app/rootReducer';
import { fetchDictionary } from '../features/learn/learnSlice';
import NormalCard from '../features/learn/NormalCard';
import { selectDailyStatistics, selectWord } from '../features/learn/selectors';
import SimpleCard from '../features/learn/SimpleCard';
import useAudio from '../hooks/useAudio';
import { percent } from '../utils';
import { modelHelper } from '../models';
import Congratulations from '../features/learn/Congratulations';

type LearnLocationState = {
  id: string;
  title: string;
};

export const LearnContext = React.createContext({
  playing: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location: { state: locationState } }) => {
  const dispatch = useDispatch();
  const title = (locationState && locationState.title) || 'Learn';
  const { toggle, playing, setUrl } = useAudio();
  const { simpleMode } = useContext(AppContext);
  const { isLoading, dictionary } = useSelector((state: RootState) => state.learn);
  const word = useSelector(selectWord);
  const { completed, total, more } = useSelector(selectDailyStatistics);

  useEffect(() => {
    if (locationState && locationState.id) {
      dispatch(fetchDictionary(locationState.id));
    }
  }, [locationState, dispatch]);

  useEffect(() => {
    if (word) {
      setUrl(modelHelper.audioUrl(word));
    } else {
      setUrl('');
    }
  }, [word, setUrl]);

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
        {dictionary && <IonProgressBar value={percent(completed, total)} />}
        <LearnContext.Provider value={{ playing, toggle }}>
          {word && !simpleMode && <NormalCard word={word} />}
          {word && simpleMode && <SimpleCard word={word} />}
        </LearnContext.Provider>
        {!isLoading && !word && <Congratulations more={more} />}
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;
