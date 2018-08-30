import { Dictionary } from '../models';

export function getStatistic(dictionary: Dictionary) {
  if (!dictionary) {
    return '';
  }
  const wordsLearned = dictionary.wordsLearned || 0;
  const totalWords = (dictionary.words && dictionary.words.length) || 0;
  if (!totalWords) {
    return wordsLearned.toString(0);
  }
  return `${wordsLearned} / ${totalWords}`;
}
