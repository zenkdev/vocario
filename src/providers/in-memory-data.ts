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
            translation: 'быть',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do (did, done)',
            transcription: '[duː]',
            translation: 'делать',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have (had, had)',
            transcription: '[hæv]',
            translation: 'иметь',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make (made, made)',
            transcription: '[meɪk]',
            translation: 'делать',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'get (got, got / gotten)',
            transcription: '[gɛt]',
            translation: 'получать, становиться',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go (went, gone)',
            transcription: '[gəʊ]',
            translation: 'идти',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take (took, taken)',
            transcription: '[teɪk]',
            translation: 'брать',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'will',
            transcription: '[wɪl]',
            translation: '(образует будущее время)',
            count: 0,
            errors: 0,
            category: 'Наиболее употребительные глаголы',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'move',
            transcription: '[muːv]',
            translation: 'двигать (-ся)',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go (went, gone)',
            transcription: '[gəʊ]',
            translation: 'идти',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'walk',
            transcription: '[wɔːk]',
            translation: 'идти пешком, гулять',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'run (ran, run)',
            transcription: '[rʌn]',
            translation: 'бежать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'turn',
            transcription: '[tɜːn]',
            translation: 'поворачивать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fly (flew, flown)',
            transcription: '[flaɪ]',
            translation: 'летать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'drive (drove, driven)',
            transcription: '[draɪv]',
            translation: 'вести машину',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'swim (swam, swum)',
            transcription: '[swɪm]',
            translation: 'плыть',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'jump',
            transcription: '[ʤʌmp]',
            translation: 'прыгать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sit down (sat, sitten)',
            transcription: '[sɪt daʊn]',
            translation: 'садиться',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lie down (lay, lain)',
            transcription: '[laɪ daʊn]',
            translation: 'ложиться',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stand up (stood, stood)',
            transcription: '[stænd ʌp]',
            translation: 'вставать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stand (stood, stood)',
            transcription: '[stænd]',
            translation: 'стоять',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lie (lay, lain)',
            transcription: '[laɪ]',
            translation: 'лежать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sit (sat, sitten)',
            transcription: '[sɪt]',
            translation: 'сидеть',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'step',
            transcription: '[stɛp]',
            translation: 'делать шаг',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dance',
            transcription: '[dɑːns]',
            translation: 'танцевать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'roll',
            transcription: '[rəʊl]',
            translation: 'катить (-ся)',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'push',
            transcription: '[pʊʃ]',
            translation: 'толкать, нажимать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pull',
            transcription: '[pʊl]',
            translation: 'тянуть',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put (put, put)',
            transcription: '[pʊt]',
            translation: 'ставить, класть, помещать',
            count: 0,
            errors: 0,
            category: 'Основные глаголы движения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take (took, taken)',
            transcription: '[teɪk]',
            translation: 'брать',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'give (gave, given)',
            transcription: '[gɪv]',
            translation: 'давать',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pass',
            transcription: '[pɑːs]',
            translation: 'передавать',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'throw (threw, thrown)',
            transcription: '[θrəʊ]',
            translation: 'бросать',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hit (hit, hit)',
            transcription: '[hɪt]',
            translation: 'бить',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'touch',
            transcription: '[tʌʧ]',
            translation: 'прикасаться',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'point at',
            transcription: '[pɔɪnt æt]',
            translation: 'указывать на что-то',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hold (held, held)',
            transcription: '[həʊld]',
            translation: 'держать',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'knock',
            transcription: '[nɒk]',
            translation: 'стучать (напр. в дверь)',
            count: 0,
            errors: 0,
            category: 'Ручные действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'say',
            transcription: '[seɪ]',
            translation: 'сказать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'speak (spoke, spoken)',
            transcription: '[spiːk]',
            translation: 'говорить',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tell (told, told)',
            transcription: '[tɛl]',
            translation: 'говорить, рассказывать, велеть',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'talk',
            transcription: '[tɔːk]',
            translation: 'разговаривать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ask',
            transcription: '[ɑːsk]',
            translation: 'просить, спрашивать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'answer',
            transcription: '[ˈɑːnsə]',
            translation: 'отвечать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'call',
            transcription: '[kɔːl]',
            translation: 'звонить по телефону',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'text',
            transcription: '[tɛkst]',
            translation: 'писать сообщение',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cry',
            transcription: '[kraɪ]',
            translation: 'плакать, кричать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'explain',
            transcription: '[ɪksˈpleɪn]',
            translation: 'объяснять',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'repeat',
            transcription: '[rɪˈpiːt]',
            translation: 'повторять',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'understand (understood, understood)',
            transcription: '[ˌʌndəˈstænd]',
            translation: 'понимать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'teach (taught, taught)',
            transcription: '[tiːʧ]',
            translation: 'учить (обучать)',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'learn',
            transcription: '[lɜːn]',
            translation: 'учить (учиться)',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'study',
            transcription: '[ˈstʌdi]',
            translation: 'изучать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'read (read, read)',
            transcription: '[riːd]',
            translation: 'читать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'write (wrote, written)',
            transcription: '[raɪt]',
            translation: 'писать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'watch',
            transcription: '[wɒʧ]',
            translation: 'смотреть, наблюдать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'listen',
            transcription: '[ˈlɪsn]',
            translation: 'слушать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hear (heard, heard)',
            transcription: '[hɪə]',
            translation: 'слышать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'help',
            transcription: '[hɛlp]',
            translation: 'помогать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'think (thought, thought)',
            transcription: '[θɪŋk]',
            translation: 'думать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'correct',
            transcription: '[kəˈrɛkt]',
            translation: 'исправлять',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make a mistake (made, made)',
            transcription: '[meɪk ə mɪsˈteɪk]',
            translation: 'делать ошибку',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hint',
            transcription: '[hɪnt]',
            translation: 'подсказывать, намекать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'forget (forgot, forgotten)',
            transcription: '[fəˈgɛt]',
            translation: 'забывать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remember',
            transcription: '[rɪˈmɛmbə]',
            translation: 'помнить',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remind',
            transcription: '[ˈrɪmaɪnd]',
            translation: 'напоминать',
            count: 0,
            errors: 0,
            category: 'Глаголы речи, общения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'live',
            transcription: '[lɪv]',
            translation: 'жить',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sleep (slept, slept)',
            transcription: '[sliːp]',
            translation: 'спать',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wake up (woke, woken)',
            transcription: '[weɪk ʌp]',
            translation: 'просыпаться',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go to bed (went, gone)',
            transcription: '[gəʊ tuː bɛd]',
            translation: 'идти спать',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take a shower (took, taken)',
            transcription: '[teɪk ə ˈʃaʊə]',
            translation: 'принимать душ',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'brush one’s teeth',
            transcription: '[brʌʃ wʌnz tiːθ]',
            translation: 'чистить зубы',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'comb one’s hair',
            transcription: '[kəʊm wʌnz heə]',
            translation: 'причесываться',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shave',
            transcription: '[ʃeɪv]',
            translation: 'бриться',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'get dressed (got, got / gotten)',
            transcription: '[gɛt drɛst]',
            translation: 'одеваться',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put on make-up (put, put)',
            transcription: '[pʊt ɒn ˈmeɪkʌp]',
            translation: 'делать макияж',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make breakfast (made, made)',
            transcription: '[meɪk ˈbrɛkfəst]',
            translation: 'готовить завтрак',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have breakfast (had, had)',
            transcription: '[hæv ˈbrɛkfəst]',
            translation: 'завтракать',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go to work (went, gone)',
            transcription: '[gəʊ tuː wɜːk]',
            translation: 'идти на работу',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'work',
            transcription: '[wɜːk]',
            translation: 'работать',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rest',
            transcription: '[rɛst]',
            translation: 'отдыхать',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take a bath (took, taken)',
            transcription: '[teɪk ə bɑːθ]',
            translation: 'принимать ванну',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cook',
            transcription: '[kʊk]',
            translation: 'готовить (еду)',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'eat (ate, eaten)',
            transcription: '[iːt]',
            translation: 'есть',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do cleaning, clean (did, done)',
            transcription: '[duː ˈkliːnɪŋ] [kliːn]',
            translation: 'убираться',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do dishes (did, done)',
            transcription: '[duː dɪʃɪz]',
            translation: 'мыть посуду',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do the laundry (did, done)',
            transcription: '[duː ðə ˈlɔːndri]',
            translation: 'заниматься стиркой',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'work out',
            transcription: '[wɜːk aʊt]',
            translation: 'заниматься спортом',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have fun (had, had)',
            transcription: '[hæv fʌn]',
            translation: 'развлекаться, веселиться',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'play',
            transcription: '[pleɪ]',
            translation: 'играть',
            count: 0,
            errors: 0,
            category: 'Глаголы, обозначающие повседневные дела',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'begin (began, begun)',
            transcription: '[bɪˈgɪn]',
            translation: 'начинаться (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'start',
            transcription: '[stɑːt]',
            translation: 'начинаться (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'continue',
            transcription: '[kənˈtɪnju(ː)]',
            translation: 'продолжать (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go on (went, gone)',
            transcription: '[gəʊ ɒn]',
            translation: 'продолжать (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'end',
            transcription: '[ɛnd]',
            translation: 'заканчивать (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'finish',
            transcription: '[ˈfɪnɪʃ]',
            translation: 'заканчивать (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stop',
            transcription: '[stɒp]',
            translation: 'прекращать, останавливать (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'complete',
            transcription: '[kəmˈpliːt]',
            translation: 'завершать (-ся)',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'postpone',
            transcription: '[pɛʊstˈpəʊn]',
            translation: 'откладывать, переносить',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put off (put, put)',
            transcription: '[pʊt ɒf]',
            translation: 'откладывать, переносить',
            count: 0,
            errors: 0,
            category: 'Этапы действия',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'time',
            transcription: '[taɪm]',
            translation: 'время',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'past',
            transcription: '[pɑːst]',
            translation: 'прошлое',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'future',
            transcription: '[ˈfjuːʧə]',
            translation: 'будущее',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'present',
            transcription: '[ˈprɛznt]',
            translation: 'настоящее',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'age',
            transcription: '[eɪʤ]',
            translation: 'эра, эпоха (также "возраст")',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'millennium',
            transcription: '[mɪlˈiːnɪəːm]',
            translation: 'тысячелетие',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'century',
            transcription: '[ˈsɛnʧʊri]',
            translation: 'век',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'decade',
            transcription: '[ˈdɛkeɪd]',
            translation: 'десятилетие',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'year',
            transcription: '[jɪə]',
            translation: 'год',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'month',
            transcription: '[mʌnθ]',
            translation: 'месяц',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'week',
            transcription: '[wiːk]',
            translation: 'неделя',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'day',
            transcription: '[deɪ]',
            translation: 'день',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hour',
            transcription: '[ˈaʊə]',
            translation: 'час',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'half an hour',
            transcription: '[hɑːf ən ˈaʊə]',
            translation: 'полчаса',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minute',
            transcription: '[ˈmɪnɪt]',
            translation: 'минута',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'second',
            transcription: '[ˈsɛkənd]',
            translation: 'секунда',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'watch',
            transcription: '[wɒʧ]',
            translation: 'часы (наручные)',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clock',
            transcription: '[klɒk]',
            translation: 'часы (настенные)',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'calendar',
            transcription: '[ˈkælɪndə]',
            translation: 'календарь',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'schedule',
            transcription: '[ˈʃɛdjuːl]',
            translation: 'расписание',
            count: 0,
            errors: 0,
            category: 'Единицы времени, слова на тему "Время"',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'season',
            transcription: '[ˈsiːzn]',
            translation: 'время года',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'winter',
            transcription: '[ˈwɪntə]',
            translation: 'зима',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spring',
            transcription: '[sprɪŋ]',
            translation: 'весна',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'summer',
            transcription: '[ˈsʌmə]',
            translation: 'лето',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fall (Am.) autumn (Br.)',
            transcription: '[fɔːl] [ˈɔːtəm]',
            translation: 'осень',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'January',
            transcription: '[ˈʤænjʊəri]',
            translation: 'январь',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'February',
            transcription: '[ˈfɛbrʊəri]',
            translation: 'февраль',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'March',
            transcription: '[mɑːʧ]',
            translation: 'март',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'April',
            transcription: '[ˈeɪprəl]',
            translation: 'апрель',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'May',
            transcription: '[meɪ]',
            translation: 'май',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'June',
            transcription: '[ʤuːn]',
            translation: 'июнь',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'July',
            transcription: '[ʤuˈlaɪ]',
            translation: 'июль',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'August',
            transcription: '[ˈɔːgəst]',
            translation: 'август',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'September',
            transcription: '[sɛpˈtɛmbə]',
            translation: 'сентябрь',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'October',
            transcription: '[ɒkˈtəʊbə]',
            translation: 'октябрь',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'November',
            transcription: '[nəʊˈvɛmbə]',
            translation: 'ноябрь',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'December',
            transcription: '[dɪˈsɛmbə]',
            translation: 'декабрь',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Monday',
            transcription: '[ˈmʌndeɪ]',
            translation: 'понедельник',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Tuesday',
            transcription: '[ˈtjuːzdeɪ]',
            translation: 'вторник',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Wednesday',
            transcription: '[ˈwɛnzdeɪ]',
            translation: 'среда',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Thursday',
            transcription: '[ˈθɜːzdeɪ]',
            translation: 'четверг',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Friday',
            transcription: '[ˈfraɪdeɪ]',
            translation: 'пятница',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Saturday',
            transcription: '[ˈsætədeɪ]',
            translation: 'суббота',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Sunday',
            transcription: '[ˈsʌndeɪ]',
            translation: 'воскресенье',
            count: 0,
            errors: 0,
            category: 'Месяцы, времена года, дни недели',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'family',
            transcription: '[ˈfæmɪli]',
            translation: 'семья',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'love',
            transcription: '[lʌv]',
            translation: 'любовь',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'human',
            transcription: '[ˈhjuːmən]',
            translation: 'человек',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'people',
            transcription: '[ˈpiːpl]',
            translation: 'люди, народ',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'man',
            transcription: '[mæn]',
            translation: 'мужчина, человек',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'woman',
            transcription: '[ˈwʊmən]',
            translation: 'женщина',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boy',
            transcription: '[bɔɪ]',
            translation: 'мальчик',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guy',
            transcription: '[gaɪ]',
            translation: 'парень',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'girl',
            transcription: '[gɜːl]',
            translation: 'девочка, девушка',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'parents',
            transcription: '[ˈpeərənts]',
            translation: 'родители',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mother',
            transcription: '[ˈmʌðə]',
            translation: 'мать',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'father',
            transcription: '[ˈfɑːðə]',
            translation: 'отец',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mom (Am.), mum (Br.)',
            transcription: '[mɒm], [mʌm]',
            translation: 'мама',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dad',
            transcription: '[dæd]',
            translation: 'папа',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandmother',
            transcription: '[ˈgrænˌmʌðə]',
            translation: 'бабушка',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandfather',
            transcription: '[ˈgrændˌfɑːðə]',
            translation: 'дедушка',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandparents',
            transcription: '[ˈgrænˌpeərənts]',
            translation: 'бабушки и дедушки',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brother',
            transcription: '[ˈbrʌðə]',
            translation: 'брат',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sister',
            transcription: '[ˈsɪstə]',
            translation: 'сестра',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'siblings',
            transcription: '[ˈsɪblɪŋz]',
            translation: 'братья и сестры',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cousin',
            transcription: '[ˈkʌzn]',
            translation: 'кузен (двоюродные братья и сестры)',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wife',
            transcription: '[waɪf]',
            translation: 'жена',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'husband',
            transcription: '[ˈhʌzbənd]',
            translation: 'муж',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'father-in-law',
            transcription: '[ˈfɑːðərɪnlɔː]',
            translation: 'тесть',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mother-in-law',
            transcription: '[ˈmʌðərɪnlɔː]',
            translation: 'теща',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'son-in-law',
            transcription: '[ˈsʌnɪnlɔː]',
            translation: 'зять',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'daughter-in-law',
            transcription: '[ˈdɔːtərɪnlɔː]',
            translation: 'невестка',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'son',
            transcription: '[sʌn]',
            translation: 'сын',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'daughter',
            transcription: '[ˈdɔːtə]',
            translation: 'дочь',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'baby',
            transcription: '[ˈbeɪbi]',
            translation: 'маленький ребенок',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'children, kids',
            transcription: '[ˈʧɪldrən], [kɪdz]',
            translation: 'дети',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teenager',
            transcription: '[ˈtiːnˌeɪʤə]',
            translation: 'подросток',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'aunt',
            transcription: '[ɑːnt]',
            translation: 'тетя',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'uncle',
            transcription: '[ˈʌŋkl]',
            translation: 'дядя',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'niece',
            transcription: '[niːs]',
            translation: 'племянница',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nephew',
            transcription: '[ˈnɛvju(ː)] [ˈnɛfju(ː)]',
            translation: 'племянник',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'girlfriend',
            transcription: '[ˈgɜːlˌfrɛnd]',
            translation: 'девушка (подруга)',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boyfriend',
            transcription: '[ˈbɔɪˌfrɛnd]',
            translation: 'парень (бойфренд)',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'friend',
            transcription: '[frɛnd]',
            translation: 'друг',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'relatives',
            transcription: '[ˈrɛlətɪvz]',
            translation: 'родственники',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engagement',
            transcription: '[ɪnˈgeɪʤmənt]',
            translation: 'помолвка',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'marriage',
            transcription: '[ˈmærɪʤ]',
            translation: 'женитьба, замужество, брак',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wedding',
            transcription: '[ˈwɛdɪŋ]',
            translation: 'свадьба',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiancée, bride',
            transcription: "[fɪ'ɑːn(t)seɪ], [braɪd]",
            translation: 'невеста',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiancé, groom (bridegroom)',
            transcription: "[fɪ'ɑːn(t)seɪ], [grʊm] [ˈbraɪdgrʊm]",
            translation: 'жених',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'funeral',
            transcription: '[ˈfjuːnərəl]',
            translation: 'похороны',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'birth',
            transcription: '[bɜːθ]',
            translation: 'рождение',
            count: 0,
            errors: 0,
            category: 'Семья, родственники',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'house',
            transcription: '[haʊs]',
            translation: 'дом',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'home',
            transcription: '[həʊm]',
            translation: 'дом',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'apartment (USA), flat (UK)',
            transcription: '[əpˈɑːtmənt], [flæt]',
            translation: 'квартира',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'roof',
            transcription: '[ruːf]',
            translation: 'крыша',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'room',
            transcription: '[ruːm]',
            translation: 'комната',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wall',
            transcription: '[wɔːl]',
            translation: 'стена',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'floor',
            transcription: '[flɔː]',
            translation: 'пол, этаж',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stairs',
            transcription: '[steəz]',
            translation: 'лестница, ступеньки',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ceiling',
            transcription: '[ˈsiːlɪŋ]',
            translation: 'потолок',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'window',
            transcription: '[ˈwɪndəʊ]',
            translation: 'окно',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'door',
            transcription: '[dɔː]',
            translation: 'дверь',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'doorbell',
            transcription: '[ˈdɔːbɛl]',
            translation: 'дверной звонок',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lock',
            transcription: '[lɒk]',
            translation: 'замок',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'key',
            transcription: '[kiː]',
            translation: 'ключ',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'furniture',
            transcription: '[ˈfɜːnɪʧə]',
            translation: 'мебель',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'thing',
            transcription: '[θɪŋ]',
            translation: 'вещь, предмет',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lamp',
            transcription: '[læmp]',
            translation: 'лампа',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'light bulb',
            transcription: '[laɪt bʌlb]',
            translation: 'лампочка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'table',
            transcription: '[ˈteɪbl]',
            translation: 'стол',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'desk',
            transcription: '[dɛsk]',
            translation: 'письменный стол',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chair',
            transcription: '[ʧeə]',
            translation: 'стул',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'armchair',
            transcription: '[ˈɑːmˈʧeə]',
            translation: 'кресло',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sofa (coach)',
            transcription: '[ˈsəʊfə] [kəʊʧ]',
            translation: 'диван',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stove (US), cooker (Br)',
            transcription: '[stəʊv]',
            translation: 'кухонная плита',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vacuum cleaner',
            transcription: '[ˈvækjʊəm ˈkliːnə]',
            translation: 'пылесос',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'microwave',
            transcription: '[ˈmaɪkrəʊweɪv]',
            translation: 'микроволновая печь',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'air conditioner (AC)',
            transcription: '[eə kənˈdɪʃənə] [eɪ-siː]',
            translation: 'кондиционер',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tap, faucet',
            transcription: '[tæp], [ˈfɔːsɪt]',
            translation: 'водопроводный кран',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shower',
            transcription: '[ˈʃaʊə]',
            translation: 'душ',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'washing machine',
            transcription: '[ˈwɒʃɪŋ] [məˈʃiːn]',
            translation: 'стиральная машина',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'soap',
            transcription: '[səʊp]',
            translation: 'мыло',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shampoo',
            transcription: '[ʃæmˈpuː]',
            translation: 'шампунь',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'toiletries',
            transcription: '[ˈtɔɪlɪtriz]',
            translation: 'туалетные принадлежности (мыло, шампунь и проч.)',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bathroom',
            transcription: '[ˈbɑːθru(ː)m]',
            translation: 'ванная комната \\ туалет',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mirror',
            transcription: '[ˈmɪrə]',
            translation: 'зеркало',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hall',
            transcription: '[hɔːl]',
            translation: 'зал, холл',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hall, hallway',
            transcription: '[hɔːl] [ˈhɔːlweɪ]',
            translation: 'коридор, прихожая',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'living room',
            transcription: '[ˈlɪvɪŋ ruːm]',
            translation: 'гостиная',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'kitchen',
            transcription: '[ˈkɪʧɪn]',
            translation: 'кухня',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bedroom',
            transcription: '[ˈbɛdru(ː)m]',
            translation: 'спальня',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'neighbour (neighbor)',
            transcription: '[ˈneɪbə]',
            translation: 'сосед',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wardrobe',
            transcription: '[ˈwɔːdrəʊb]',
            translation: 'шкаф для одежды',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cupboard',
            transcription: '[ˈkʌbəd]',
            translation: 'шкаф, буфет',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'closet',
            transcription: '[ˈklɒzɪt]',
            translation: 'шкаф, кладовка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dishes',
            transcription: '[ˈdɪʃɪz]',
            translation: 'тарелки, посуда',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cup',
            transcription: '[kʌp]',
            translation: 'чашка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fork',
            transcription: '[fɔːk]',
            translation: 'вилка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spoon',
            transcription: '[spuːn]',
            translation: 'ложка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plate',
            transcription: '[pleɪt]',
            translation: 'тарелка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'knife',
            transcription: '[naɪf]',
            translation: 'нож',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tools',
            transcription: '[tuːlz]',
            translation: 'инструменты',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'TV',
            transcription: '[ˌtiːˈviː]',
            translation: 'телевизор',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'remote control',
            transcription: '[rɪˈməʊt kənˈtrəʊl]',
            translation: 'пульт управления',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'computer',
            transcription: '[kəmˈpjuːtə]',
            translation: 'компьютер',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'laptop',
            transcription: '[ˈlæpˌtɒp]',
            translation: 'ноутбук',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'phone',
            transcription: '[fəʊn]',
            translation: 'телефон',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bed',
            transcription: '[bɛd]',
            translation: 'кровать',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'blanket',
            transcription: '[ˈblæŋkɪt]',
            translation: 'одеяло',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pillow',
            transcription: '[ˈpɪləʊ]',
            translation: 'подушка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pillowcase',
            transcription: '[ˈpɪləʊkeɪs]',
            translation: 'наволочка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sheet (bedsheet)',
            transcription: '[ʃiːt]',
            translation: 'простыня',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'linens',
            transcription: '[ˈlɪnɪnz]',
            translation: 'постельное белье',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'towel',
            transcription: '[ˈtaʊəl]',
            translation: 'полотенце',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'movie \\ film',
            transcription: '[ˈmuːvi] [fɪlm]',
            translation: 'фильм',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'book',
            transcription: '[bʊk]',
            translation: 'книга',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'camera',
            transcription: '[ˈkæmərə]',
            translation: 'фотоаппарат, видеокамера',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'newspaper',
            transcription: '[ˈnjuːzˌpeɪpə]',
            translation: 'газета',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'magazine',
            transcription: '[ˌmægəˈziːn]',
            translation: 'журнал',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clothes',
            transcription: '[kləʊðz]',
            translation: 'одежда',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shirt',
            transcription: '[ʃɜːt]',
            translation: 'рубашка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pants (trousers)',
            transcription: '[pænts] [ˈtraʊzəz]',
            translation: 'брюки',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jacket',
            transcription: '[ˈʤækɪt]',
            translation: 'пиджак',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sweater (jumper)',
            transcription: '[ˈswɛtə] [ˈʤʌmpə]',
            translation: 'свитер, джемпер',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hat',
            transcription: '[hæt]',
            translation: 'шляпа',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cap',
            transcription: '[ˈkæp]',
            translation: 'кепка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pocket',
            transcription: '[ˈpɒkɪt]',
            translation: 'карман',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shorts',
            transcription: '[ʃɔːts]',
            translation: 'шорты',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shoes',
            transcription: '[ʃuːz]',
            translation: 'туфли',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dress',
            transcription: '[drɛs]',
            translation: 'платье',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'skirt',
            transcription: '[skɜːt]',
            translation: 'юбка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jeans',
            transcription: '[ʤiːnz]',
            translation: 'джинсы',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'underwear',
            transcription: '[ˈʌndəweə]',
            translation: 'нижнее белье',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'socks',
            transcription: '[sɒks]',
            translation: 'носки',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bag',
            transcription: '[bæg]',
            translation: 'сумка',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'purse',
            transcription: '[pɜːs]',
            translation: 'дамская сумочка, кошелек',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coat',
            transcription: '[kəʊt]',
            translation: 'пальто',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'scarf',
            transcription: '[skɑːf]',
            translation: 'шарф',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gloves',
            transcription: '[glʌvz]',
            translation: 'перчатки',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wallet',
            transcription: '[ˈwɒlɪt]',
            translation: 'бумажник',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'uniform',
            transcription: '[ˈjuːnɪfɔːm]',
            translation: 'униформа',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'belt',
            transcription: '[bɛlt]',
            translation: 'ремень',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'button',
            transcription: '[ˈbʌtn]',
            translation: 'кнопка, пуговица',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'zip',
            transcription: '[zɪp]',
            translation: 'застежка молния',
            count: 0,
            errors: 0,
            category: 'Дом, одежда, предметы быта',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nature',
            transcription: '[ˈneɪʧə]',
            translation: 'природа',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'North',
            transcription: '[nɔːθ]',
            translation: 'север',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'South',
            transcription: '[saʊθ]',
            translation: 'юг',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'West',
            transcription: '[wɛst]',
            translation: 'запад',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'East',
            transcription: '[iːst]',
            translation: 'восток',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Sun',
            transcription: '[sʌn]',
            translation: 'солнце',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Moon',
            transcription: '[muːn]',
            translation: 'луна',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'star',
            transcription: '[stɑː]',
            translation: 'звезда',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sky',
            transcription: '[skaɪ]',
            translation: 'небо',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Earth',
            transcription: '[ɜːθ]',
            translation: 'Земля',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ground',
            transcription: '[graʊnd]',
            translation: 'земля',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'space',
            transcription: '[speɪs]',
            translation: 'космос, пространство',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'air',
            transcription: '[eə]',
            translation: 'воздух',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plant',
            transcription: '[plɑːnt]',
            translation: 'растение',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tree',
            transcription: '[triː]',
            translation: 'дерево',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flower',
            transcription: '[ˈflaʊə]',
            translation: 'цветок',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'domestic animal',
            transcription: '[dəʊˈmɛstɪk ˈænɪməl]',
            translation: 'домашнее животное',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wild animal',
            transcription: '[waɪld ˈænɪməl]',
            translation: 'дикое животное',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bird',
            transcription: '[bɜːd]',
            translation: 'птица',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poultry',
            transcription: '[ˈpəʊltri]',
            translation: 'домашняя птица',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pet',
            transcription: '[pɛt]',
            translation: 'домашнее животное (питомец)',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cat',
            transcription: '[kæt]',
            translation: 'кошка',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dog',
            transcription: '[dɒg]',
            translation: 'собака',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'horse',
            transcription: '[hɔːs]',
            translation: 'лошадь',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chicken',
            transcription: '[ˈʧɪkɪn]',
            translation: 'цыпленок, курица',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mouse',
            transcription: '[maʊs]',
            translation: 'мышь',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sea',
            transcription: '[siː]',
            translation: 'море',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'seashore \\ bank',
            transcription: '[ˈsiːʃɔː] [bæŋk]',
            translation: 'берег',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'river',
            transcription: '[ˈrɪvə]',
            translation: 'река',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'snow',
            transcription: '[snəʊ]',
            translation: 'снег',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sand',
            transcription: '[sænd]',
            translation: 'песок',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rain',
            transcription: '[reɪn]',
            translation: 'дождь',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cold',
            transcription: '[kəʊld]',
            translation: 'холод',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'heat',
            transcription: '[hiːt]',
            translation: 'жара',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fire',
            transcription: '[ˈfaɪə]',
            translation: 'огонь, пожар',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'water',
            transcription: '[ˈwɔːtə]',
            translation: 'вода',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wind',
            transcription: '[wɪnd]',
            translation: 'ветер',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'storm',
            transcription: '[stɔːm]',
            translation: 'буря',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weather',
            transcription: '[ˈwɛðə]',
            translation: 'погода',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weather forecast',
            transcription: '[ˈwɛðə ˈfɔːkɑːst]',
            translation: 'прогноз погоды',
            count: 0,
            errors: 0,
            category: 'Природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'city \\ town',
            transcription: '[ˈsɪti] [taʊn]',
            translation: 'город',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'building',
            transcription: '[ˈbɪldɪŋ]',
            translation: 'здание',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'street',
            transcription: '[striːt]',
            translation: 'улица',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'block',
            transcription: '[blɒk]',
            translation: 'квартал',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'traffic lights',
            transcription: '[ˈtræfɪk laɪts]',
            translation: 'светофор',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'intersection',
            transcription: '[ˌɪntə(ː)ˈsɛkʃən]',
            translation: 'перекресток',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crosswalk',
            transcription: '[ˈkrɒswɔːk]',
            translation: 'пешеходный переход',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'road sign (traffc sign)',
            transcription: '[rəʊd saɪn]',
            translation: 'дорожный знак',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'car',
            transcription: '[kɑː]',
            translation: 'автомобиль',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'public transport',
            transcription: '[ˈpʌblɪk ˈtrænspɔːt]',
            translation: 'общественный транспорт',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'airport',
            transcription: '[ˈeəpɔːt]',
            translation: 'аэропорт',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'railway (railroad) station',
            transcription: '[ˈreɪlweɪ (ˈreɪlrəʊd) ˈsteɪʃən]',
            translation: 'вокзал',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'port',
            transcription: '[pɔːt]',
            translation: 'порт',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bus station (bus terminal)',
            transcription: '[bʌs ˈsteɪʃən] [bʌs ˈtɜːmɪnl]',
            translation: 'автобусная станция',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'taxi',
            transcription: '[ˈtæksi]',
            translation: 'такси',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bridge',
            transcription: '[brɪʤ]',
            translation: 'мост',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shop',
            transcription: '[ʃɒp]',
            translation: 'магазин',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mall',
            transcription: '[mɔːl]',
            translation: 'торговый центр',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cinema (UK), movie theater (US)',
            transcription: '[ˈsɪnəmə]',
            translation: 'кинотеатр',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'theatre (theater)',
            transcription: '[ˈθɪətə]',
            translation: 'театр',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'police department',
            transcription: '[pəˈliːs dˈepətmənt]',
            translation: 'полицейский участок',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hospital',
            transcription: '[ˈhɒspɪtl]',
            translation: 'больница',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hotel',
            transcription: '[həʊˈtɛl]',
            translation: 'гостиница',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'post office',
            transcription: '[pəʊst ˈɒfɪs]',
            translation: 'почта',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wi-fi',
            transcription: "[ˌwaɪ'faɪ]",
            translation: 'вай-фай',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'embassy',
            transcription: '[ˈɛmbəsi]',
            translation: 'посольство',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ambassador',
            transcription: '[æmˈbæsədə]',
            translation: 'посол',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'passer-by',
            transcription: '[ˈpɑːsə baɪ]',
            translation: 'прохожий',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pedestrian',
            transcription: '[pɪˈdɛstrɪən]',
            translation: 'пешеход',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'police officer',
            transcription: '[pəˈliːs ˈɒfɪsə]',
            translation: 'полицейский',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'emergency',
            transcription: '[ɪˈmɜːʤənsi]',
            translation: 'чрезвычайная ситуация',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'map',
            transcription: '[mæp]',
            translation: 'карта',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'subway',
            transcription: '[ˈsʌbweɪ]',
            translation: 'метро',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'station',
            transcription: '[ˈsteɪʃən]',
            translation: 'станция',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stop',
            transcription: '[stɒp]',
            translation: 'остановка',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sightseeing',
            transcription: '[ˈsaɪtˌsiːɪŋ]',
            translation: 'осмотр достопримечательностей',
            count: 0,
            errors: 0,
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'work',
            transcription: '[wɜːk]',
            translation: 'работа',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'job',
            transcription: '[ʤɒb]',
            translation: 'работа',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'office',
            transcription: '[ˈɒfɪs]',
            translation: 'офис',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'workplace',
            transcription: '[ˈwɜːkˌpleɪs]',
            translation: 'рабочее место',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'working hours',
            transcription: '[ˈwɜːkɪŋ ˈaʊəz]',
            translation: 'рабочие часы',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'schedule',
            transcription: '[ˈʃɛdjuːl]',
            translation: 'расписание, график',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'colleague',
            transcription: '[ˈkɒliːg]',
            translation: 'коллега',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'CV \\ resume',
            transcription: '[siː-viː] [ˈrɛzju(ː)meɪ]',
            translation: 'резюме',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'payday',
            transcription: '[ˈpeɪdeɪ]',
            translation: 'день зарплаты',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'paycheck',
            transcription: '[ˈpeɪˌʧɛk]',
            translation: 'зарплатный чек',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'salary',
            transcription: '[ˈsæləri]',
            translation: 'зарплата',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'duties',
            transcription: '[ˈdjuːtiz]',
            translation: 'обязанности',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employer',
            transcription: '[ɪmˈplɔɪə]',
            translation: 'работодатель',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employee',
            transcription: '[ˌɛmplɔɪˈiː]',
            translation: 'работник',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'social security',
            transcription: '[ˈsəʊʃəl sɪˈkjʊərɪti]',
            translation: 'социальное страхование',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'job interview',
            transcription: '[ʤɒb ˈɪntəvjuː]',
            translation: 'собеседование на работу',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'health',
            transcription: '[hɛlθ]',
            translation: 'здоровье',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'money',
            transcription: '[ˈmʌni]',
            translation: 'деньги',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cash',
            transcription: '[kæʃ]',
            translation: 'наличные',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bill',
            transcription: '[bɪl]',
            translation: 'купюра',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coin',
            transcription: '[kɔɪn]',
            translation: 'монета',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'change',
            transcription: '[ʧeɪnʤ]',
            translation: 'сдача, мелочь',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'payment',
            transcription: '[ˈpeɪmənt]',
            translation: 'платеж',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'check (cheque)',
            transcription: '[ʧɛk]',
            translation: 'чек',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bank',
            transcription: '[bæŋk]',
            translation: 'банк',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ATM (automated teller machine)',
            transcription: '[eɪ-tiː-ɛm] [ˈɔːtəmeɪtɪd ˈtɛlə məˈʃiːn]',
            translation: 'банкомат',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bank card',
            transcription: '[bæŋk kɑːd]',
            translation: 'банковская карта',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tips',
            transcription: '[tɪps]',
            translation: 'чаевые',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'receipt',
            transcription: '[rɪˈsiːt]',
            translation: 'чек',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'money transfer',
            transcription: '[ˈmʌni ˈtrænsfə(ː)]',
            translation: 'денежный перевод',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fine',
            transcription: '[faɪn]',
            translation: 'штраф',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'budget',
            transcription: '[ˈbʌʤɪt]',
            translation: 'бюджет',
            count: 0,
            errors: 0,
            category: 'Работа и деньги',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'food',
            transcription: '[fuːd]',
            translation: 'еда',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'breakfast',
            transcription: '[ˈbrɛkfəst]',
            translation: 'завтрак',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dinner',
            transcription: '[ˈdɪnə]',
            translation: 'обед',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lunch',
            transcription: '[lʌnʧ]',
            translation: 'ланч',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'supper',
            transcription: '[ˈsʌpə]',
            translation: 'ужин',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meal',
            transcription: '[miːl]',
            translation: 'блюдо, прием пищи',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drink, beverage',
            transcription: '[drɪŋk], [ˈbɛvərɪʤ]',
            translation: 'напиток',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'alcohol',
            transcription: '[ˈælkəhɒl]',
            translation: 'алкоголь',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'water',
            transcription: '[ˈwɔːtə]',
            translation: 'вода',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coffee',
            transcription: '[ˈkɒfi]',
            translation: 'кофе',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tea',
            transcription: '[tiː]',
            translation: 'чай',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wine',
            transcription: '[waɪn]',
            translation: 'вино',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'juice',
            transcription: '[ʤuːs]',
            translation: 'сок',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meat',
            transcription: '[miːt]',
            translation: 'мясо',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cereal',
            transcription: '[ˈsɪərɪəl]',
            translation: 'хлопья',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bread',
            transcription: '[brɛd]',
            translation: 'хлеб',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vegetables',
            transcription: '[ˈvɛʤɪtəblz]',
            translation: 'овощи',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fruit',
            transcription: '[fruːt]',
            translation: 'фрукты',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fish',
            transcription: '[fɪʃ]',
            translation: 'рыба',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'oil',
            transcription: '[ɔɪl]',
            translation: 'растительное масло',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'butter',
            transcription: '[ˈbʌtə]',
            translation: 'сливочное масло',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'snack',
            transcription: '[snæk]',
            translation: 'снэк, закуска',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'candy',
            transcription: '[ˈkændi]',
            translation: 'конфета (леденец)',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pastry',
            transcription: '[ˈpeɪstri]',
            translation: 'выпечка',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'diet',
            transcription: '[ˈdaɪət]',
            translation: 'диета',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fridge, refrigerator',
            transcription: '[frɪʤ], [rɪˈfrɪʤəreɪtə]',
            translation: 'холодильник',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fork',
            transcription: '[fɔːk]',
            translation: 'вилка',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spoon',
            transcription: '[spuːn]',
            translation: 'ложка',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'glass',
            transcription: '[glɑːs]',
            translation: 'стакан',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cup',
            transcription: '[kʌp]',
            translation: 'чашка',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mug',
            transcription: '[mʌg]',
            translation: 'кружка',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plate, dish',
            transcription: '[pleɪt], [dɪʃ]',
            translation: 'тарелка',
            count: 0,
            errors: 0,
            category: 'Еда и напитки',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'study',
            transcription: '[ˈstʌdi]',
            translation: 'изучение, исследование',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'school',
            transcription: '[skuːl]',
            translation: 'школа',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'college',
            transcription: '[ˈkɒlɪʤ]',
            translation: 'колледж',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'university',
            transcription: '[ˌjuːnɪˈvɜːsɪti]',
            translation: 'университет',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'education',
            transcription: '[ˌɛdju(ː)ˈkeɪʃən]',
            translation: 'образование',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'degree',
            transcription: "[dɪ'griː]",
            translation: 'ученая степень',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'graduate',
            transcription: '[ˈgrædjʊət]',
            translation: 'выпускник',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'diploma',
            transcription: '[dɪˈpləʊmə]',
            translation: 'диплом',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'textbook',
            transcription: '[ˈtɛkstbʊk]',
            translation: 'учебник',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'notebook, copybook',
            transcription: '[ˈnəʊtbʊk], [ˈkɒpɪbʊk]',
            translation: 'тетрадь',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'notepad',
            transcription: '[ˈnəʊtˌpæd]',
            translation: 'блокнот',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pen',
            transcription: '[pɛn]',
            translation: 'авторучка',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pencil',
            transcription: '[ˈpɛnsl]',
            translation: 'карандаш',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'blackboard',
            transcription: '[ˈblækbɔːd]',
            translation: 'школьная доска',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'whiteboard',
            transcription: '[ˈwaɪtbɔːd]',
            translation: 'маркерная доска',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'classroom',
            transcription: '[ˈklɑːsrʊm]',
            translation: 'класс (помещение)',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'class, lesson',
            transcription: '[klɑːs], [ˈlɛsn]',
            translation: 'урок',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grade',
            transcription: '[greɪd]',
            translation: 'класс (этап обучения)',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mark, grade',
            transcription: '[mɑːk], [greɪd]',
            translation: 'оценка',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pupil',
            transcription: '[ˈpjuːpl]',
            translation: 'ученик',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'student',
            transcription: '[ˈstjuːdənt]',
            translation: 'студент',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teacher',
            transcription: '[ˈtiːʧə]',
            translation: 'учитель',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exam (examination)',
            transcription: '[ɪgˈzæm] [ɪgˌzæmɪˈneɪʃən]',
            translation: 'экзамен',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'test',
            transcription: '[tɛst]',
            translation: 'тест',
            count: 0,
            errors: 0,
            category: 'Образование',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'color (colour)',
            transcription: '[ˈkʌlə]',
            translation: 'цвет',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'black',
            transcription: '[blæk]',
            translation: 'черный',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'white',
            transcription: '[waɪt]',
            translation: 'белый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dark',
            transcription: '[dɑːk]',
            translation: 'темный',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'light',
            transcription: '[laɪt]',
            translation: 'светлый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'red',
            transcription: '[rɛd]',
            translation: 'красный',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'orange',
            transcription: '[ˈɒrɪnʤ]',
            translation: 'оранжевый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'yellow',
            transcription: '[ˈjɛləʊ]',
            translation: 'желтый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'green',
            transcription: '[griːn]',
            translation: 'зеленый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'blue',
            transcription: '[bluː]',
            translation: 'голубой, синий',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'purple',
            transcription: '[ˈpɜːpl]',
            translation: 'фиолетовый (пурпурный)',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'violet',
            transcription: '[ˈvaɪəlɪt]',
            translation: 'темно-фиолетовый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pink',
            transcription: '[pɪŋk]',
            translation: 'розовый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'silver',
            transcription: '[ˈsɪlvə]',
            translation: 'серебристый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'gold',
            transcription: '[gəʊld]',
            translation: 'золотой',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'brown',
            transcription: '[braʊn]',
            translation: 'коричневый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'grey (gray)',
            transcription: '[greɪ]',
            translation: 'серый',
            count: 0,
            errors: 0,
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'big',
            transcription: '[bɪg]',
            translation: 'большой',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'large, great, huge, enormous',
            transcription: '[lɑːʤ], [greɪt], [hjuːʤ], [ɪˈnɔːməs]',
            translation: 'большой, огромный',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'small',
            transcription: '[smɔːl]',
            translation: 'маленький',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'little',
            transcription: '[ˈlɪtl]',
            translation: 'маленький',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tiny',
            transcription: '[ˈtaɪni]',
            translation: 'крошечный',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'long',
            transcription: '[lɒŋ]',
            translation: 'длинный, долгий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tall',
            transcription: '[tɔːl]',
            translation: 'высокий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'high',
            transcription: '[haɪ]',
            translation: 'высокий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'short',
            transcription: '[ʃɔːt]',
            translation: 'короткий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'thin',
            transcription: '[θɪn]',
            translation: 'тонкий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'thick',
            transcription: '[θɪk]',
            translation: 'толстый',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wide, broad',
            transcription: '[waɪd] [brɔːd]',
            translation: 'широкий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'narrow',
            transcription: '[ˈnærəʊ]',
            translation: 'узкий',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'heavy',
            transcription: '[ˈhɛvi]',
            translation: 'тяжелый (о весе)',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'light, lightweight',
            transcription: '[laɪt], [ˈlaɪtweɪt]',
            translation: 'легкий (о весе)',
            count: 0,
            errors: 0,
            category: 'Вес и размер',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'good',
            transcription: '[gʊd]',
            translation: 'хороший',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bad',
            transcription: '[bæd]',
            translation: 'плохой',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cheap',
            transcription: '[ʧiːp]',
            translation: 'дешевый',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'expensive',
            transcription: '[ɪksˈpɛnsɪv]',
            translation: 'дорогой (о цене)',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'convenient, handy, comfortable',
            transcription: '[kənˈviːnjənt], [ˈhændi], [ˈkʌmfətəbl]',
            translation: 'удобный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tasty',
            transcription: '[ˈteɪsti]',
            translation: 'вкусный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sweet',
            transcription: '[swiːt]',
            translation: 'сладкий',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'salty',
            transcription: '[ˈsɔːlti]',
            translation: 'соленый',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bitter',
            transcription: '[ˈbɪtə]',
            translation: 'горький',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sour',
            transcription: '[ˈsaʊə]',
            translation: 'кислый',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hot',
            transcription: '[hɒt]',
            translation: 'горячий, острый (о вкусе)',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cold',
            transcription: '[kəʊld]',
            translation: 'холодный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cool',
            transcription: '[kuːl]',
            translation: 'прохладный, клевый (сленг)',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'distgusting',
            transcription: '[dɪstgˈʌstɪŋ]',
            translation: 'мерзкий (о вкусе)',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ugly',
            transcription: '[ˈʌgli]',
            translation: 'отвратительный (о внешности)',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'beautiful',
            transcription: '[ˈbjuːtəfʊl]',
            translation: 'красивый',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'scary',
            transcription: '[ˈskeəri]',
            translation: 'страшный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'funny',
            transcription: '[ˈfʌni]',
            translation: 'смешной',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'interesting',
            transcription: '[ˈɪntrɪstɪŋ]',
            translation: 'интересный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'boring',
            transcription: '[ˈbɔːrɪŋ]',
            translation: 'скучный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'true',
            transcription: '[truː]',
            translation: 'правдивый, истинный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'false',
            transcription: '[fɔːls]',
            translation: 'ложный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'useful',
            transcription: '[ˈjuːsfʊl]',
            translation: 'полезный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'useless',
            transcription: '[ˈjuːslɪs]',
            translation: 'бесполезный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'soft',
            transcription: '[sɒft]',
            translation: 'мягкий',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'solid',
            transcription: '[ˈsɒlɪd]',
            translation: 'твердый',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'liquid',
            transcription: '[ˈlɪkwɪd]',
            translation: 'жидкий',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hard',
            transcription: '[hɑːd]',
            translation: 'жесткий',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'easy, simple',
            transcription: '[ˈiːzi], [ˈsɪmpl]',
            translation: 'легкий, простой',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hard, difficult',
            transcription: '[hɑːd], [ˈdɪfɪkəlt]',
            translation: 'трудный, сложный',
            count: 0,
            errors: 0,
            category: 'Различные качества и свойства',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'young',
            transcription: '[jʌŋ]',
            translation: 'молодой',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'old',
            transcription: '[əʊld]',
            translation: 'старый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'adult',
            transcription: '[əˈdʌlt]',
            translation: 'взрослый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'lazy',
            transcription: '[ˈleɪzi]',
            translation: 'ленивый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hardworking',
            transcription: '[ˈhɑːdˌwɜːkɪŋ]',
            translation: 'трудолюбивый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'smart',
            transcription: '[smɑːt]',
            translation: 'умный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'stupid',
            transcription: '[ˈstjuːpɪd]',
            translation: 'глупый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'kind',
            transcription: '[kaɪnd]',
            translation: 'добрый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'mean',
            transcription: '[miːn]',
            translation: 'злой, подлый, нехороший',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'good',
            transcription: '[gʊd]',
            translation: 'хороший, добрый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bad',
            transcription: '[bæd]',
            translation: 'плохой',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'nice',
            transcription: '[naɪs]',
            translation: 'приятный, милый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cute',
            transcription: '[kjuːt]',
            translation: 'милый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'optimistic',
            transcription: '[ˌɒptɪˈmɪstɪk]',
            translation: 'оптимистичный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pessimistic',
            transcription: '[ˌpɛsɪˈmɪstɪk]',
            translation: 'пессимистичный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'curious',
            transcription: '[ˈkjʊərɪəs]',
            translation: 'любопытный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'positive',
            transcription: '[ˈpɒzətɪv]',
            translation: 'позитивный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cruel',
            transcription: '[krʊəl]',
            translation: 'жестокий',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'calm',
            transcription: '[kɑːm]',
            translation: 'спокойный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'brave',
            transcription: '[breɪv]',
            translation: 'смелый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cowardly',
            transcription: '[ˈkaʊəd]',
            translation: 'трусливый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cool',
            transcription: '[kuːl]',
            translation: 'клевый, крутой, прикольный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tough',
            transcription: '[tʌf]',
            translation: 'крутой',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'honest',
            transcription: '[ˈɒnɪst]',
            translation: 'честный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'happy',
            transcription: '[ˈhæpi]',
            translation: 'счастливый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sad',
            transcription: '[sæd]',
            translation: 'печальный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'angry',
            transcription: '[ˈæŋgri]',
            translation: 'сердитый',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'scared',
            transcription: '[skeəd]',
            translation: 'испуганный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tired',
            transcription: '[ˈtaɪəd]',
            translation: 'уставший',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bored',
            transcription: '[bɔːd]',
            translation: 'скучающий',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'helpful',
            transcription: '[ˈhɛlpfʊl]',
            translation: 'готовый помочь',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'reliable',
            transcription: '[rɪˈlaɪəbl]',
            translation: 'надежный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'responsible',
            transcription: '[rɪsˈpɒnsəbl]',
            translation: 'ответственный',
            count: 0,
            errors: 0,
            category: 'Качества, характер человека',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'now',
            transcription: '[naʊ]',
            translation: 'сейчас',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'then',
            transcription: '[ðɛn]',
            translation: 'тогда',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'again',
            transcription: '[əˈgɛn]',
            translation: 'снова',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'always',
            transcription: '[ˈɔːlweɪz]',
            translation: 'всегда',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'never',
            transcription: '[ˈnɛvə]',
            translation: 'никогда',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'soon',
            transcription: '[suːn]',
            translation: 'скоро',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'late',
            transcription: '[leɪt]',
            translation: 'поздно',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'early',
            transcription: '[ˈɜːli]',
            translation: 'рано',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'before',
            transcription: '[bɪˈfɔː]',
            translation: 'до',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'after',
            transcription: '[ˈɑːftə]',
            translation: 'после',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'yesterday',
            transcription: '[ˈjɛstədeɪ]',
            translation: 'вчера',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'today',
            transcription: '[təˈdeɪ]',
            translation: 'сегодня',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'tomorrow',
            transcription: '[təˈmɒrəʊ]',
            translation: 'завтра',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'next week (year)',
            transcription: '[nɛkst wiːk] [jɪə]',
            translation: 'на следующей неделе (в след. году)',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'every day (week, month)',
            transcription: '[ˈɛvri deɪ] [wiːk] [mʌnθ]',
            translation: 'каждый день (неделю, месяц)',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'this morning (afternoon)',
            transcription: '[ðɪs ˈmɔːnɪŋ] [ˈɑːftəˈnuːn]',
            translation: 'этим утром (днем)',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'tonight',
            transcription: '[təˈnaɪt]',
            translation: 'этим вечером (ночью)',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'sometimes',
            transcription: '[ˈsʌmtaɪmz]',
            translation: 'иногда',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'often',
            transcription: '[ˈɒf (t)(ə)n]',
            translation: 'часто',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'rarely, seldom',
            transcription: '[ˈreəli], [ˈsɛldəm]',
            translation: 'редко',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'recently',
            transcription: '[ˈriːsntli]',
            translation: 'недавно',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'lately',
            transcription: '[ˈleɪtli]',
            translation: 'в последнее время',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'once',
            transcription: '[wʌns]',
            translation: 'однажды',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'usually',
            transcription: '[ˈjuːʒʊəli]',
            translation: 'обычно',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'already',
            transcription: '[ɔːlˈrɛdi]',
            translation: 'уже',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'yet',
            transcription: '[jɛt]',
            translation: 'уже',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'not yet',
            transcription: '[nɒt jɛt]',
            translation: 'еще не',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'still',
            transcription: '[stɪl]',
            translation: 'все еще',
            count: 0,
            errors: 0,
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'here',
            transcription: '[hɪə]',
            translation: 'здесь',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'there',
            transcription: '[ðeə]',
            translation: 'там',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'where',
            transcription: '[weə]',
            translation: 'где',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'around',
            transcription: '[əˈraʊnd]',
            translation: 'вокруг',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'inside',
            transcription: '[ɪnˈsaɪd]',
            translation: 'внутри',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'outside',
            transcription: '[ˌaʊtˈsaɪd]',
            translation: 'снаружи',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'above',
            transcription: '[əˈbʌv]',
            translation: 'над',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'under, below',
            transcription: '[ˈʌndə], [bɪˈləʊ]',
            translation: 'под',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'somewhere',
            transcription: '[ˈsʌmweə]',
            translation: 'где-то',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'anywhere',
            transcription: '[ˈɛnɪweə]',
            translation: 'где-нибудь, хоть где',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'nowhere',
            transcription: '[ˈnəʊweə]',
            translation: 'нигде',
            count: 0,
            errors: 0,
            category: 'Наречия места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'only',
            transcription: '[ˈəʊnli]',
            translation: 'только',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'much',
            transcription: '[mʌʧ]',
            translation: 'много',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'little',
            transcription: '[ˈlɪtl]',
            translation: 'мало',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'very',
            transcription: '[ˈvɛri]',
            translation: 'очень',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'so',
            transcription: '[səʊ]',
            translation: 'так',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'enough',
            transcription: '[ɪˈnʌf]',
            translation: 'достаточно',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'almost',
            transcription: '[ˈɔːlməʊst]',
            translation: 'почти',
            count: 0,
            errors: 0,
            category: 'Наречия меры и степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'well',
            transcription: '[wɛl]',
            translation: 'хорошо',
            count: 0,
            errors: 0,
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'bad',
            transcription: '[bæd]',
            translation: 'плохо',
            count: 0,
            errors: 0,
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'fast',
            transcription: '[fɑːst]',
            translation: 'быстро',
            count: 0,
            errors: 0,
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'quickly',
            transcription: '[ˈkwɪkli]',
            translation: 'быстро',
            count: 0,
            errors: 0,
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'slowly',
            transcription: '[ˈsləʊli]',
            translation: 'медленно',
            count: 0,
            errors: 0,
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'too ( + наречие)',
            transcription: '[tuː]',
            translation: 'слишком (+ наречие)',
            count: 0,
            errors: 0,
            category: 'Наречия образа действия',
            partOfSpeach: 'Наречия'
          }
        ]
      }
    ];
    return { dictionaries };
  }
}
