/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useReducer, useState } from 'react';

import AppContext from '../AppContext';
import { Dictionary, createDictionary, Word, createWord, Statistic, createStatistic, modelHelper } from '../models';
import firebaseInstance from '../services/Firebase';
import { TState, dataFetchReducer, timeout, UseDatabaseOptions } from './useDatabase';

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
type UseDictionaryOptions = UseDatabaseOptions<Dictionary>;

const useDictionary = (dictionaryId?: string, options: UseDictionaryOptions = {}): [DictionaryState, () => void] => {
  const { onCompleted, onError } = options;
  const { currentUser } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
  } as DictionaryState);
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        await timeout(2000);
        const dictionary = await getDictionary(dictionaryId as string, currentUser && currentUser.id);
        const words = await getWords(dictionaryId as string);
        const statistics = await getStatistics(dictionaryId as string, currentUser && currentUser.id);
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
          // throw new Error('test error');
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
  }, [dictionaryId, onCompleted, onError, currentUser, counter]);
  return [state as any, () => setCounter(counter + 1)];
};

export default useDictionary;
