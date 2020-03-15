import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../AppContext';
import { createDictionary, createStatistic, createWord, Dictionary, modelHelper, Statistic, Word } from '../models';
import firebaseInstance from '../services/Firebase';
import { dataFetchReducer, TReducer, TState, UseDatabaseOptions } from './dataFetchReducer';

const getDictionary = async (dictionaryId: string, uid: string | null): Promise<Dictionary> => {
  return firebaseInstance.withTrace('getDictionary', async () => {
    const snapshot = await firebaseInstance.db.ref(`dictionary/${dictionaryId}`).once('value');
    return createDictionary(snapshot, uid);
  });
};

const getWords = async (dictionaryId: string): Promise<Word[]> => {
  return firebaseInstance.withTrace('getWords', async () => {
    const snapshot = await firebaseInstance.db
      .ref('word')
      .orderByChild('dictionaryId')
      .equalTo(dictionaryId)
      .once('value');
    const arr: Word[] = [];
    snapshot.forEach(payload => {
      arr.push(createWord(payload));
    });
    return arr;
  });
};

const getStatistics = async (dictionaryId: string, uid: string | null): Promise<Record<string, Statistic>> => {
  return firebaseInstance.withTrace('getStatistics', async () => {
    const map: Record<string, Statistic> = {};
    if (uid) {
      const snapshot = await firebaseInstance.db
        .ref(`statistics/${uid}`)
        .orderByChild('dictionaryId')
        .equalTo(dictionaryId)
        .once('value');
      snapshot.forEach(payload => {
        map[payload.key as string] = createStatistic(payload);
      });
    }
    return map;
  });
};

type DictionaryState = TState<Dictionary | undefined>;
type DictionaryReducer = TReducer<Dictionary | undefined>;
type UseDictionaryOptions = UseDatabaseOptions<Dictionary>;

const useDictionary = (dictionaryId?: string, options: UseDictionaryOptions = {}): [DictionaryState, () => void] => {
  const { onCompleted, onError } = options;
  const { uid } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer<DictionaryReducer>(dataFetchReducer, {
    isLoading: false,
    isError: false,
  } as DictionaryState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const dictionary = await getDictionary(dictionaryId as string, uid);
        const words = await getWords(dictionaryId as string);
        const statistics = await getStatistics(dictionaryId as string, uid);
        words.forEach(word => {
          const stat = statistics[word.id];
          if (stat) {
            // eslint-disable-next-line no-param-reassign
            word.occurs = stat.occurs;
          }
        });

        // fix wordsCompleted
        const wordsCompleted = modelHelper.count(words, w => modelHelper.isCompleted(w));
        if (dictionary.wordsCompleted !== wordsCompleted) {
          dictionary.wordsCompleted = wordsCompleted;
        }
        const payload = { ...dictionary, words };
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload });
          if (onCompleted) onCompleted(payload);
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
          if (onError) onError(error);
        }
      }
    };
    if (dictionaryId) fetchData();
    return () => {
      didCancel = true;
    };
  }, [dictionaryId, uid, onCompleted, onError, counter]);
  return [state, () => setCounter(counter + 1)];
};

export default useDictionary;
