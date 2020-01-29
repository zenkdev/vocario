import addDays from 'date-fns/addDays';
import formatISO from 'date-fns/formatISO';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';

import Text from './Text';

function getNextOccur(date: string, cnt: number) {
  switch (cnt) {
    case 0:
      return date;
    case 1:
      return formatISO(addDays(startOfDay(parseISO(date)), 1));
    case 2:
      return formatISO(addDays(startOfDay(parseISO(date)), 3));
    default:
      return undefined;
  }
}

class Statistic {
  constructor({
    id,
    dictionaryId,
    texts,
    translation,
    category,
    partOfSpeech,
    count,
    firstOccur,
    nextOccur,
  }: {
    id?: string;
    dictionaryId?: string;
    texts?: Text[];
    translation?: string;
    category?: string;
    partOfSpeech?: string;
    count?: number;
    firstOccur?: string;
    nextOccur?: string;
  }) {
    this.id = id || '';
    this.dictionaryId = dictionaryId || '';
    this.texts = texts || [];
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count || 0;
    this.firstOccur = firstOccur || formatISO(Date.now());
    this.nextOccur = nextOccur || getNextOccur(this.firstOccur, this.count);
  }

  public id: string;

  public dictionaryId: string;

  public texts: Text[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count: number;

  public firstOccur: string;

  public nextOccur?: string;
}

export default Statistic;
