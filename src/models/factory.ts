/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';

import Dictionary from './Dictionary';
import Statistic from './Statistic';
import Text from './Text';
import UserProfile from './UserProfile';
import Word from './Word';
import { isNumber } from '../utils';

function parseKey(value: string): [string, number] {
  let index = '';
  let str = value;
  while (str && str.length) {
    const ch = str.charAt(str.length - 1);
    if (!isNumber(ch)) {
      break;
    }
    index = ch + index;
    str = str.substring(0, str.length - 1);
  }
  return [str, Number(index)];
}

function createTextArray(payload: any): Text[] {
  return Object.entries(payload).reduce((acc: any[], [k, value]) => {
    if (k.startsWith('text') || k.startsWith('transcription') || k.startsWith('lang')) {
      const [key, index] = parseKey(k);
      const option: any = acc.find(x => x.index === index);
      if (option) {
        option[key] = value;
      } else {
        acc.push({ index, [key]: value });
      }
    }
    return acc;
  }, []);
}

export function createDictionary(payload: firebase.database.DataSnapshot, uid: string | null): Dictionary {
  const id = payload.key as string;
  const { name, wordsCount, wordsLearned: wordsLearnedObject } = payload.val();
  const wordsLearned = (wordsLearnedObject && uid && wordsLearnedObject[uid]) || 0;
  return new Dictionary({ id, name, wordsCount, wordsLearned });
}

export function createStatistic(payload: firebase.database.DataSnapshot): Statistic {
  const id = payload.key as string;
  const { dictionaryId, translation, category, partOfSpeech, count, firstOccur, nextOccur, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return new Statistic({ id, dictionaryId, texts, translation, category, partOfSpeech, count, firstOccur, nextOccur });
}

export function createUserProfile(payload: firebase.database.DataSnapshot, options?: any): UserProfile {
  const id = payload.key as string;
  const { email, displayName, photoURL, simpleMode } = payload.val();
  const data: any = { id, email, displayName, photoURL, simpleMode };
  data.simpleMode = options != null && options.simpleMode != null ? options.simpleMode : data.simpleMode;
  data.fontSize = options != null && options.fontSize != null ? options.fontSize : data.fontSize;
  return new UserProfile(data);
}

export function createWord(payload: firebase.database.DataSnapshot): Word {
  const id = payload.key as string;
  const { translation, category, partOfSpeech, ...rest } = payload.val();
  const texts = createTextArray(rest);
  return new Word({ id, translation, category, partOfSpeech, texts });
}
