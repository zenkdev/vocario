class Word {
  constructor(
    id?: string,
    text?: string,
    transcription?: string,
    translation?: string,
    category?: string,
    partOfSpeech?: string,
    count?: number,
    firstOccur?: string,
  ) {
    this.id = id || '';
    this.text = text || '';
    this.transcription = transcription || '';
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count;
    this.firstOccur = firstOccur;
  }

  public id: string;

  public text: string;

  public transcription: string;

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count?: number;

  public firstOccur?: string;

  static fromSnapshot(payload: firebase.database.DataSnapshot): Word {
    const id = payload.key as string;
    const { text, transcription, translation, category, partOfSpeech } = payload.val();
    return new Word(id, text, transcription, translation, category, partOfSpeech);
  }
}

export default Word;
