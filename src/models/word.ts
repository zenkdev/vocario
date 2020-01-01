export class Word {
  constructor(
    id?: string,
    text?: string,
    transcription?: string,
    translation?: string,
    category?: string,
    partOfSpeech?: string,
    count?: number,
    errors?: number,
  ) {
    this.id = id!;
    this.text = text!;
    this.transcription = transcription!;
    this.translation = translation!;
    this.category = category!;
    this.partOfSpeech = partOfSpeech!;
    this.count = count!;
    this.errors = errors!;
  }
  public id: string;
  public text: string;
  public transcription: string;
  public translation: string;
  public category: string;
  public partOfSpeech: string;
  public count: number;
  public errors: number;

  static fromSnapshot(payload: firebase.database.DataSnapshot, uid: string | null): Word {
    const id = payload.key as string;
    const { text, transcription, translation, category, partOfSpeech, count: countObject, errors: errorsObject } = payload.val();
    const count = (countObject && uid && countObject[uid]) || 0;
    const errors = (errorsObject && uid && errorsObject[uid]) || 0;
    return new Word(id, text, transcription, translation, category, partOfSpeech, count, errors);
  }

  static fromJsonStat({ payload }: any): Word {
    const id = payload.key;
    const { text, transcription, translation, category, partOfSpeech, count, errors } = payload.val();
    return new Word(id, text, transcription, translation, category, partOfSpeech, count, errors);
  }

  static fromJsonStatArray(json: any[]): Word[] {
    return json.map(x => Word.fromJsonStat(x));
  }
}
