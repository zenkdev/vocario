import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataProvider extends InMemoryDbService {
  createDb() {
    const dictionaries = [
      {
        id: 1,
        name: 'Словарь 500 v2',
        wordsLearned: 0,
        lastViewed: null,
        timeSpended: null,
        words: [
          {
            text: 'be (was, been)',
            transcription: '[biː]',
            translation: 'быть'
          },
          {
            text: 'do (did, done)',
            transcription: '[duː]',
            translation: 'делать'
          },
          {
            text: 'have (had, had)',
            transcription: '[hæv]',
            translation: 'иметь'
          },
          {
            text: 'make (made, made)',
            transcription: '[meɪk]',
            translation: 'делать'
          },
          {
            text: 'get (got, got / gotten)',
            transcription: '[gɛt]',
            translation: 'получать, становиться'
          },
          {
            text: 'go (went, gone)',
            transcription: '[gəʊ]',
            translation: 'идти'
          },
          {
            text: 'take (took, taken)',
            transcription: '[teɪk]',
            translation: 'брать'
          },
          {
            text: 'will',
            transcription: '[wɪl]',
            translation: '(образует будущее время)'
          }
        ]
      }
    ];
    return { dictionaries };
  }
}
