import Word from './Word';

class Dictionary {
  constructor({
    id,
    name,
    wordsCount,
    wordsLearned,
    words,
  }: {
    id?: string;
    name?: string;
    wordsCount?: number;
    wordsLearned?: number;
    words?: Word[];
  }) {
    this.id = id || '';
    this.name = name || '';
    this.wordsCount = wordsCount || 0;
    this.wordsLearned = wordsLearned || 0;
    this.words = words || [];
  }

  public id: string;

  public name: string;

  public wordsCount: number;

  public wordsLearned: number;

  public words: Word[];
}

export default Dictionary;
