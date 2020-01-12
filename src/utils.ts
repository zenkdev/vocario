import { Answer } from './types';

export function toCharArray(value: string | null | undefined): string[] {
  return value ? value.split('') : [];
}

export function compareStringsIgnoreCase(str1?: string, str2?: string): boolean {
  return typeof str1 === 'string' && typeof str2 === 'string' && str1.trim().toLocaleLowerCase() === str2.trim().toLocaleLowerCase();
}

export function isValidAnswer(compareTo: string, userInput: string): Answer {
  return compareStringsIgnoreCase(compareTo, userInput) ? Answer.valid : Answer.invalid;
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
