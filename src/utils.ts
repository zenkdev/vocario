/* eslint-disable @typescript-eslint/no-explicit-any */
import { Answer } from './types';

export function toCharArray(value: string | null | undefined): string[] {
  return value ? value.split('') : [];
}

export const isLetter = (ch: string): boolean => /[A-Za-z]/.test(ch);
export const isWhiteSpace = (ch: string): boolean => /\s/.test(ch);

export function compareStringsIgnoreCase(str1?: string, str2?: string): boolean {
  return typeof str1 === 'string' && typeof str2 === 'string' && str1.trim().toLocaleLowerCase() === str2.trim().toLocaleLowerCase();
}

export function isValidAnswer(compareTo: string, userInput: string): Answer {
  return compareStringsIgnoreCase(compareTo, userInput) ? Answer.valid : Answer.invalid;
}

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

/**
 * generate a random integer between min and max
 * @param {Number} min
 * @param {Number} max
 * @return {Number} random generated integer
 */
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function percent(value?: number, base?: number): number {
  return !value || !base ? 0 : Math.round((value / base) * 100) / 100;
}

export function omitUndefined<T extends Record<string, any>>(value: T): T {
  const clone = { ...value };
  const keys = Object.keys(clone);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (clone[key] === undefined) {
      delete clone[key];
    }
  }

  return clone;
}
