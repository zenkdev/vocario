import formatISO from 'date-fns/formatISO';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import AppContext from '../AppContext';
import { Congratulations, WordCardNormal, WordCardSimple } from '../components';
import { Dictionary, modelHelper, Word } from '../models';
import { dictionaryService, localStoreManager, statisticService, toastService } from '../services';
import { percent, randomNumber } from '../utils';

const NEXT_WORD_DATA_KEY_PREFIX = 'lexion:nextWord:';

interface LearnLocationState {
  id: string;
  title: string;
}

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location }) => {
  const { currentUser } = useContext(AppContext);
  const [title, setTitle] = useState('Learn');
  const [showLoading, setShowLoading] = useState(true);
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [word, setWord] = useState<Word>();
  const simpleMode = useMemo(() => (currentUser ? currentUser.simpleMode : true), [currentUser]);
  const { completed, total, more } = modelHelper.dailyStatistics(dictionary);

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

  const getOptions = useCallback(() => {
    if (!dictionary || !word) {
      return [];
    }
    const options: string[] = [word.translation];
    const numOptions = Math.min(3, dictionary.words.length || 0);
    while (options.length < numOptions) {
      const rnd = randomNumber(0, dictionary.words.length - 1);
      const opt = dictionary.words[rnd];
      if (opt && !options.includes(opt.translation)) {
        options.push(opt.translation);
      }
    }
    return options.sort();
  }, [dictionary, word]);

  const handleNext = useCallback(
    async (valid: boolean) => {
      if (!dictionary || !word) {
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
          dictionary.wordsLearned += 1;
          if (dictionary.wordsCount < dictionary.wordsLearned) {
            dictionary.wordsLearned = dictionary.wordsCount;
          }
        }

        await statisticService.updateFromWord(dictionary, word);
        localStoreManager.deleteData(NEXT_WORD_DATA_KEY_PREFIX + dictionary.id);
        nextWord(dictionary);
      } catch (error) {
        toastService.showError(error);
      }
    },
    [dictionary, word],
  );

  useEffect(() => {
    if (location.state && location.state.title) {
      setTitle(location.state.title);
    }
    if (location.state && location.state.id) {
      dictionaryService
        .getDictionary(location.state.id)
        .then(data => {
          setShowLoading(false);
          setDictionary(data);
          nextWord(data);
        })
        .catch(error => {
          setShowLoading(false);
          toastService.showError(error);
        });
    }
  }, [location.state]);

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
        {word && !simpleMode && <WordCardNormal onNext={handleNext} word={word} />}
        {word && simpleMode && <WordCardSimple onNext={handleNext} word={word} options={getOptions()} />}
        {!showLoading && !word && <Congratulations more={more} />}
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;
