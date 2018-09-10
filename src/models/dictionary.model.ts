import { Word } from './word.model';

export class Dictionary {
  public id: string;
  public name: string;
  public totalWords: number;
  public wordsLearned: number;
  public lastViewed: string;
  public timeSpended: string;

  public words: Word[];
}
