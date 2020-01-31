import Text from './Text';

class Statistic {
  constructor({
    id,
    dictionaryId,
    texts,
    translation,
    category,
    partOfSpeech,
    count,
    occurs,
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
    occurs?: string[];
  }) {
    this.id = id || '';
    this.dictionaryId = dictionaryId || '';
    this.texts = texts || [];
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count || 0;
    this.occurs = occurs || [];
  }

  public id: string;

  public dictionaryId: string;

  public texts: Text[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count: number;

  public occurs: string[];
}

export default Statistic;
