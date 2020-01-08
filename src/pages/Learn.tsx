import addDays from 'date-fns/addDays';
import formatISO from 'date-fns/formatISO';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';
import startOfToday from 'date-fns/startOfToday';
import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { IonBackButton, IonButtons, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

import { Congratulations, SimpleWordCard } from '../components';
import { Dictionary, Word } from '../models';
import { dictionaryService, statisticService, toastService } from '../services';
import { percent, randomNumber } from '../utils';

const isNew = (value: Word) => value.count == null;
const isCompleted = (value: Word) => value.count != null && value.count >= 3;
const isFirstOccurToday = (value: Word) => value.firstOccur && isToday(parseISO(value.firstOccur));
const isNextOccurToday = (value: Word) => value.nextOccur && isToday(parseISO(value.nextOccur));

interface LearnLocationState {
  id: string;
  title: string;
}

const Learn: React.FC<RouteComponentProps<LearnLocationState>> = ({ location }) => {
  const [title, setTitle] = useState('Learn');
  const [showLoading, setShowLoading] = useState(true);
  const [dictionary, setDictionary] = useState<Dictionary>();
  const [word, setWord] = useState<Word>();

  function nextWord(dct: Dictionary | undefined) {
    if (dct) {
      const wordsToday = dct.words.reduce((acc, cur) => acc + (isFirstOccurToday(cur) ? 1 : 0), 0);
      // console.table(
      //   dct.words.map(cur => ({ ...cur, isNew: isNew(cur), isCompleted: isCompleted(cur), isNextOccurToday: isNextOccurToday(cur) })),
      // );
      const words = dct.words.filter(cur => (wordsToday < 20 && isNew(cur)) || (!isNew(cur) && isNextOccurToday(cur) && !isCompleted(cur)));
      if (words.length) {
        const rnd = randomNumber(0, words.length - 1);
        setWord(words[rnd]);
        return;
      }
    }

    setWord(undefined);
  }

  const getOptions = useCallback(() => {
    if (!dictionary || !word) {
      return [];
    }
    const options: string[] = [word.translation];
    const numOptions = Math.min(3, dictionary.words.length || 0);
    while (options.length < numOptions) {
      const rnd = randomNumber(0, dictionary.totalWords - 1);
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
        if (isNew(word)) {
          word.firstOccur = formatISO(Date.now());
          dictionary.wordsLearned += 1;
        }
        word.count = (word.count || 0) + (valid ? 1 : 0);
        switch (word.count) {
          case 0:
            word.nextOccur = formatISO(Date.now());
            break;
          case 1:
            word.nextOccur = formatISO(addDays(startOfToday(), 1));
            break;
          case 2:
            word.nextOccur = formatISO(addDays(startOfToday(), 3));
            break;
          default:
            word.nextOccur = undefined;
            break;
        }
        await statisticService.updateFromWord(dictionary, word);
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
        {dictionary && <IonProgressBar value={percent(dictionary.wordsLearned, dictionary.totalWords)} />}
        {/* <WordCard validate={handleValidate} value={word} /> */}
        {word && <SimpleWordCard onNext={handleNext} word={word} options={getOptions()} />}
        {!showLoading && !word && <Congratulations />}
        <IonLoading isOpen={showLoading} message="Loading..." />
      </IonContent>
    </IonPage>
  );
};

export default Learn;
