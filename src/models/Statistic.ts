import formatISO from 'date-fns/formatISO';
import addDays from 'date-fns/addDays';
import startOfDay from 'date-fns/startOfDay';
import parseISO from 'date-fns/parseISO';

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
    firstOccur?: string,
    nextOccur?: string,
  ) {
    this.id = id || '';
    this.dictionaryId = dictionaryId || '';
    this.text = text || '';
    this.transcription = transcription || '';
    this.translation = translation || '';
    this.category = category || '';
    this.partOfSpeech = partOfSpeech || '';
    this.count = count || 0;
    this.firstOccur = firstOccur || formatISO(Date.now());
    this.nextOccur =
      nextOccur ||
      (function getNextOccur(date: string, cnt: number) {
        switch (cnt) {
          case 0:
            return date;
          case 1:
            return formatISO(addDays(startOfDay(parseISO(date)), 1));
          case 2:
            return formatISO(addDays(startOfDay(parseISO(date)), 3));
          default:
            return undefined;
        }
      })(this.firstOccur, this.count);
  }

  public id: string;

  public dictionaryId: string;

  public text: string;

  public transcription: string;

  public translation: string;

  public category: string;

  public partOfSpeech: string;

  public count: number;

  public firstOccur: string;

  public nextOccur?: string;

  static fromSnapshot(payload: firebase.database.DataSnapshot): Statistic {
    const id = payload.key as string;
    const { dictionaryId, text, transcription, translation, category, partOfSpeech, count, firstOccur, nextOccur } = payload.val();

    return new Statistic(id, dictionaryId, text, transcription, translation, category, partOfSpeech, count, firstOccur, nextOccur);
  }
}

export default Statistic;
