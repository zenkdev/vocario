import addDays from 'date-fns/addDays';
import formatISO from 'date-fns/formatISO';
import parseISO from 'date-fns/parseISO';
/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase from 'firebase/app';

import { isNumber } from '../utils';
import Dictionary from './Dictionary';
import Statistic from './Statistic';
import Text from './Text';
import UserProfile from './UserProfile';
import Word from './Word';

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

function fromNextOccur(value: string, count: number) {
  switch (count) {
    case 1:
      return formatISO(addDays(parseISO(value), -1));
    case 2:
      return formatISO(addDays(parseISO(value), -3));
    default:
      return value;
  }
}

export function createStatistic(payload: firebase.database.DataSnapshot): Statistic {
  const id = payload.key as string;
  const { dictionaryId, translation, category, partOfSpeech, count, firstOccur, nextOccur, occurs: o, ...rest } = payload.val();
  const texts = createTextArray(rest);
  let occurs = [];
  if (Array.isArray(o) && o.length) {
    occurs = o;
  } else {
    if (firstOccur) {
      occurs.push(firstOccur);
    }
    if (count != null && nextOccur) {
      for (let n = 0; n < count; n += 1) {
        occurs.push(fromNextOccur(nextOccur, count));
      }
    }
  }
  return new Statistic({ id, dictionaryId, texts, translation, category, partOfSpeech, count, firstOccur, nextOccur, occurs });
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

export function createPlainJS(texts: Text[]) {
  const poco: any = {};
  for (let i = 0; i < texts.length; i += 1) {
    const { index, ...rest } = texts[i];
    Object.entries(rest).forEach(([key, value]) => {
      if (index) {
        poco[`${key}${index}`] = value;
      } else {
        poco[key] = value;
      }
    });
  }
  return poco;
}
