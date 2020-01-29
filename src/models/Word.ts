import Text from './Text';

class Word {
  constructor({
    id,
    texts,
    translation,
    category,
    partOfSpeech,
    count,
    firstOccur,
    nextOccur,
  }: {
    id?: string;
    texts?: Text[];
    translation?: string;
    category?: string;
    partOfSpeech?: string;
    count?: number;
    firstOccur?: string;
    nextOccur?: string;
  }) {
    this.id = id || '';
    this.texts = texts || [];
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count;
    this.firstOccur = firstOccur;
    this.nextOccur = nextOccur;
  }

  public id: string;

  public texts: Text[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count?: number;

  public firstOccur?: string;

  public nextOccur?: string;
}

export default Word;
