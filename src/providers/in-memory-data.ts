import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataProvider extends InMemoryDbService {
  createDb() {
    const dictionaries = [
      {
        id: 1,
        name: 'Russian-English',
        wordsLearned: 0,
        lastViewed: null,
        timeSpended: null,
        words: []
      }
    ];
    return { dictionaries };
  }
}
