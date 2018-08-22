import { Word } from './word.model';

export class Dictionary {
  public id: number;
  public name: string;
  public wordsLearned: number;
  public lastViewed: string;
  public timeSpended: string;

  public words: Word[];
}
