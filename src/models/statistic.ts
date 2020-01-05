class Statistic {
  constructor(
    id?: string,
    dictionaryId?: string,
    text?: string,
    transcription?: string,
    translation?: string,
    category?: string,
    partOfSpeech?: string,
    count?: number,
  ) {
    this.id = id || '';
    this.dictionaryId = dictionaryId || '';
    this.text = text || '';
    this.transcription = transcription || '';
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count || 0;
  }

  public id: string;

  public dictionaryId: string;

  public text: string;

  public transcription: string;

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count: number;

  static fromSnapshot(payload: firebase.database.DataSnapshot): Statistic {
    const id = payload.key as string;
    const { dictionaryId, text, transcription, translation, category, partOfSpeech, count } = payload.val();

    return new Statistic(id, dictionaryId, text, transcription, translation, category, partOfSpeech, count);
  }
}

export default Statistic;
