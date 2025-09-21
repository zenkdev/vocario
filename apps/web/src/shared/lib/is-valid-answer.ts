import { Answer } from '@/shared/model';

import { stringUtils } from './string-utils';

export function isValidAnswer(compareTo: string, userInput: string) {
  return stringUtils.compareStringsIgnoreCase(compareTo, userInput) ? Answer.valid : Answer.invalid;
}
