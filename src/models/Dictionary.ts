import Word from './Word';

class Dictionary {
  constructor({
    id,
    name,
    wordsCount,
    wordsCompleted,
    words,
  }: {
    id?: string;
    name?: string;
    wordsCount?: number;
    wordsCompleted?: number;
    words?: Word[];
  }) {
    this.id = id || '';
    this.name = name || '';
    this.wordsCount = wordsCount || 0;
    this.wordsCompleted = wordsCompleted || 0;
    this.words = words || [];
  }

  public id: string;

  public name: string;

  public wordsCount: number;

  public wordsCompleted: number;

  public words: Word[];
}

export default Dictionary;
