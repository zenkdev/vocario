import { Answer } from '../types';
import { compareStringsIgnoreCase } from './stringUtils';

export default function isValidAnswer(compareTo: string, userInput: string) {
  return compareStringsIgnoreCase(compareTo, userInput) ? Answer.valid : Answer.invalid;
}
