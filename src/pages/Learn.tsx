import formatISO from 'date-fns/formatISO';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import AppContext from '../AppContext';
import { Congratulations, NormalCard, SimpleCard } from '../components';
import useDictionary from '../hooks/useDictionary';
import { Dictionary, modelHelper, Word } from '../models';
import { localStoreManager, statisticService, toastService } from '../services';
import { percent, randomNumber } from '../utils';

const NEXT_WORD_DATA_KEY_PREFIX = 'lexion:nextWord:';

function audioUrl(word?: Word): string | undefined {
  return word && `https://us-central1-vocabionic.cloudfunctions.net/synthesize/${word.id}`;
}
interface LearnLocationState {
  id: string;
  title: string;
}

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location }) => {
  const [word, setWord] = useState<Word>();
  function nextWord(dct: Dictionary) {
    const words = modelHelper.wordsToLearn(dct);
    if (words.length) {
      const prev = localStoreManager.getDataObject<number>(NEXT_WORD_DATA_KEY_PREFIX + dct.id);
      if (prev && words[prev]) {
        setWord(words[prev]);
      } else {
        const rnd = randomNumber(0, words.length - 1);
        setWord(words[rnd]);
        localStoreManager.savePermanentData(NEXT_WORD_DATA_KEY_PREFIX + dct.id, rnd);
      }
    } else {
      setWord(undefined);
      localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + dct.id);
    }
  }

  const { currentUser } = useContext(AppContext);
  const simpleMode = currentUser ? currentUser.simpleMode : true;
  const [title, setTitle] = useState('Learn');
  const onCompleted = useCallback(nextWord, []);
  const [state] = useDictionary(location.state && location.state.id, { onCompleted, onError: toastService.showError });
  const url = audioUrl(word);

  const { isLoading, data } = state;
  const { completed, total, more } = modelHelper.dailyStatistics(data);

  const getOptions = useCallback(() => {
    if (!data || !word) {
      return [];
    }
    const options: string[] = [word.translation];
    const numOptions = Math.min(3, data.words.length || 0);
    while (options.length < numOptions) {
      const rnd = randomNumber(0, data.words.length - 1);
      const opt = data.words[rnd];
      if (opt && !options.includes(opt.translation)) {
        options.push(opt.translation);
      }
    }
    return options.sort();
  }, [data, word]);

  const handleNext = useCallback(
    async (valid: boolean) => {
      if (!data || !word) {
        return;
      }

      try {
        const dateStr = formatISO(Date.now());
        if (!word.occurs) {
          word.occurs = [];
        }
        if (!word.occurs.length) {
          word.occurs.push(dateStr);
        }
        if (valid) {
          word.occurs.push(dateStr);
        }

        if (modelHelper.isCompleted(word)) {
          data.wordsCompleted = Math.min(data.wordsCompleted + 1, data.wordsCount);
        }

        await statisticService.updateFromWord(data, word);
        localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + data.id);
        nextWord(data);
      } catch (error) {
        toastService.showError(error);
      }
    },
    [data, word],
  );

  useEffect(() => {
    if (location.state && location.state.title) {
      setTitle(location.state.title);
    }
  }, [location.state]);

  console.log(state);

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
        {data && <IonProgressBar value={percent(completed, total)} />}
        {word && !simpleMode && <NormalCard onNext={handleNext} word={word} audioUrl={url} />}
        {word && simpleMode && <SimpleCard onNext={handleNext} word={word} options={getOptions()} />}
        {!isLoading && !word && <Congratulations more={more} />}
        <IonLoading isOpen={isLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;
