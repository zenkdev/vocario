import { Answer } from '../types';

export const toCharArray = (value: string | null | undefined) => (value ? value.split('') : []);
export const isLetter = (ch: string): boolean => /[A-Za-z]/.test(ch);
export const isWhiteSpace = (ch: string): boolean => /\s/.test(ch);
export const isNumber = (ch: string): boolean => /\d/.test(ch);

export const compareStringsIgnoreCase = (str1?: string, str2?: string) =>
  typeof str1 === 'string' && typeof str2 === 'string' && str1.trim().toLocaleLowerCase() === str2.trim().toLocaleLowerCase();
export const isValidAnswer = (compareTo: string, userInput: string) =>
  compareStringsIgnoreCase(compareTo, userInput) ? Answer.valid : Answer.invalid;

export function getFullInput(input: string, text: string) {
  let str = '';
  let iInd = 0;
  let tInd = 0;

  // prepend text
  while (tInd < text.length) {
    if (isLetter(text.charAt(tInd))) {
      break;
    }
    str += text.charAt(tInd);
    tInd += 1;
  }

  // copy input
  while (iInd < input.length) {
    str += input.charAt(iInd);
    iInd += 1;
    tInd += 1;

    // append text
    while (tInd < text.length) {
      if (isLetter(text.charAt(tInd))) {
        break;
      }
      str += text.charAt(tInd);
      tInd += 1;
    }
  }

  return str;
}

export function unusedChars(input: string, text: string) {
  const chars = toCharArray(text.toLocaleLowerCase())
    .filter(isLetter)
    .reduce((acc, ch) => {
      acc[ch] = (acc[ch] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const usedChars = toCharArray(input.toLocaleLowerCase()).filter(isLetter);
  usedChars.forEach(ch => {
    chars[ch] = (chars[ch] || 0) - 1;
  });

  return Object.entries(chars)
    .filter(([, value]) => value > 0)
    .map(([key]) => key);
}
