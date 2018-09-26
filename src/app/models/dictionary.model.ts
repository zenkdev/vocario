import { Word } from './index';

export class Dictionary {
  constructor(id?: string, name?: string, totalWords?: number, wordsLearned?: number) {
    this.id = id;
    this.name = name;
    this.totalWords = totalWords;
    this.wordsLearned = wordsLearned;
  }

  public id: string;
  public name: string;
  public totalWords: number;
  public wordsLearned: number;

  public words?: Word[];

  static fromJson({ payload }, uid: string): Dictionary {
    const id = payload.key;
    const { name, totalWords, wordsLearned: wordsLearnedObject } = payload.val();
    const wordsLearned = (wordsLearnedObject && wordsLearnedObject[uid]) || 0;
    return new Dictionary(id, name, totalWords, wordsLearned);
  }

  static fromJsonArray(json: any[], uid: string): Dictionary[] {
    return json.map(x => Dictionary.fromJson(x, uid));
  }
}
