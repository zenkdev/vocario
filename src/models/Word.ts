import Text from './Text';

class Word {
  constructor({
    id,
    texts,
    translation,
    category,
    partOfSpeech,
    occurs,
  }: {
    id?: string;
    texts?: Text[];
    translation?: string;
    category?: string;
    partOfSpeech?: string;
    occurs?: string[];
  }) {
    this.id = id || '';
    this.texts = texts || [];
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.occurs = occurs;
  }

  public id: string;

  public texts: Text[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public occurs?: string[];
}

export default Word;
