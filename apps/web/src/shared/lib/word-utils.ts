import { type Word, nextOccur } from '@/shared/model';
import { differenceInDays } from 'date-fns/differenceInDays';
import { startOfDay } from 'date-fns/startOfDay';
import { startOfToday } from 'date-fns/startOfToday';

export const wordUtils = {
  getText: ({ texts }: Word): string => texts.reduce((acc, { text }) => acc + (acc && text ? ', ' : '') + (text || ''), ''),
  getTextWithLang: ({ texts }: Word): string =>
    texts.reduce((acc, { text, lang }) => acc + (acc && text ? ', ' : '') + (text || '') + (text && lang ? ` (${lang})` : ''), ''),
  getTranscription: ({ texts }: Word): string =>
    texts.reduce((acc, { transcription }) => acc + (acc && transcription ? ', ' : '') + (transcription || ''), ''),
  nextOccurString: (word: Word) => {
    const value = nextOccur(word);
    if (!value) {
      return undefined;
    }
    const days = differenceInDays(startOfDay(value), startOfToday());
    if (days <= 0) {
      return 'today';
    }
    if (days === 1) {
      return 'tomorrow';
    }
    return `in ${days} days`;
  },
};
