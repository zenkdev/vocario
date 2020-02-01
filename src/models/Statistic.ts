import Text from './Text';

class Statistic {
  constructor({
    id,
    dictionaryId,
    texts,
    translation,
    category,
    partOfSpeech,
    occurs,
  }: {
    id?: string;
    dictionaryId?: string;
    texts?: Text[];
    translation?: string;
    category?: string;
    partOfSpeech?: string;
    occurs?: string[];
  }) {
    this.id = id || '';
    this.dictionaryId = dictionaryId || '';
    this.texts = texts || [];
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.occurs = occurs || [];
  }

  public id: string;

  public dictionaryId: string;

  public texts: Text[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public occurs: string[];
}

export default Statistic;
