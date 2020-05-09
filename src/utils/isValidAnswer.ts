import { Answer } from '../types';
import stringUtils from './stringUtils';

export default function isValidAnswer(compareTo: string, userInput: string) {
  return stringUtils.compareStringsIgnoreCase(compareTo, userInput) ? Answer.valid : Answer.invalid;
}
