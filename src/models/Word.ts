/* eslint-disable @typescript-eslint/no-explicit-any */
import { parseTexts } from '../utils';

export interface WordText {
  index: number;
  text: string;
  transcription?: string;
  lang?: string;
}

export class Word {
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
    texts?: WordText[];
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

  public texts: WordText[];

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count?: number;

  public firstOccur?: string;

  public nextOccur?: string;

  static fromSnapshot(payload: firebase.database.DataSnapshot): Word {
    const id = payload.key as string;
    const { translation, category, partOfSpeech, ...rest } = payload.val();
    const texts = parseTexts(rest);
    return new Word({ id, translation, category, partOfSpeech, texts });
  }
}
