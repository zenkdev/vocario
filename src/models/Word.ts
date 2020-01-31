import Text from './Text';

class Word {
  constructor({
    id,
    texts,
    translation,
    category,
    partOfSpeech,
    count,
    occurs,
  }: {
    id?: string;
    texts?: Text[];
    translation?: string;
    category?: string;
    partOfSpeech?: string;
    count?: number;
    occurs?: string[];
  }) {
    this.id = id || '';
    this.texts = texts || [];
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count;
    this.occurs = occurs;
  }

  public id: string;

  public texts: Text[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count?: number;

  public occurs?: string[];
}

export default Word;
