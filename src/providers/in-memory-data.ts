import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataProvider extends InMemoryDbService {
  createDb() {
    const dictionaries = [
      {
        id: 1,
        name: 'Словарь 500',
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
      },
      {
        id: 2,
        name: 'Тематический Словарь 3000',
        wordsLearned: 0,
        lastViewed: null,
        timeSpended: null,
        words: [
          {
            text: 'become (became, become)',
            transcription: '[bɪˈkʌm] ',
            translation: 'становиться',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'begin (began, begun)',
            transcription: '[bɪˈgɪn] ',
            translation: 'начинать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'start',
            transcription: '[stɑːt] ',
            translation: 'начинать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'continue',
            transcription: '[kənˈtɪnju(ː)] ',
            translation: 'продолжать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go on (went, gone)',
            transcription: '[gəʊ ɒn] ',
            translation: 'продолжать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stop',
            transcription: '[stɒp] ',
            translation: 'заканчивать, останавливать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'end',
            transcription: '[ɛnd] ',
            translation: 'заканчивать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'finish',
            transcription: '[ˈfɪnɪʃ] ',
            translation: 'заканчивать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'last',
            transcription: '[lɑːst] ',
            translation: 'длиться',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'accomplish',
            transcription: '[əˈkɒmplɪʃ] ',
            translation: 'завершать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'prepare',
            transcription: '[prɪˈpeə] ',
            translation: 'подготавливать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'postpone',
            transcription: '[pɛʊstˈpəʊn] ',
            translation: 'откладывать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put off (put, put)',
            transcription: '[pʊt ɒf] ',
            translation: 'откладывать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'divide',
            transcription: '[dɪˈvaɪd] ',
            translation: 'разделять',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'consist of',
            transcription: '[kənˈsɪst ɒv] ',
            translation: 'состоять из',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'include',
            transcription: '[ɪnˈkluːd] ',
            translation: 'включать (в себя что-то)',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'exclude',
            transcription: '[ɪksˈkluːd] ',
            translation: 'исключать',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'incorporate',
            transcription: '[ɪnˈkɔːpəreɪt]',
            translation: 'включать (в себя что-то), объединяться',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'split (split, split)',
            transcription: '[splɪt] ',
            translation: 'разделять на части, расщеплять',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'contain',
            transcription: '[kənˈteɪn] ',
            translation: 'содержать (в себе)',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'separate',
            transcription: '[ˈsɛpəreɪt] ',
            translation: 'отделять',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'assemble',
            transcription: '[əˈsɛmbl] ',
            translation: 'собирать (из частей)',
            count: '0',
            errors: '0',
            category: 'Этапы действия, часть и целое',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'go (went, gone)',
            transcription: '[gəʊ] ',
            translation: 'идти',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'come (came, come)',
            transcription: '[kʌm] ',
            translation: 'приходить',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'turn',
            transcription: '[tɜːn] ',
            translation: 'поворачивать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'run (ran, run)',
            transcription: '[rʌn] ',
            translation: 'бежать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'move',
            transcription: '[muːv] ',
            translation: 'двигать (-ся)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bring (brought, brought)',
            transcription: '[brɪŋ] ',
            translation: 'приносить',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sit (sat, sat)',
            transcription: '[sɪt] ',
            translation: 'сидеть ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stand',
            transcription: '[stænd] ',
            translation: 'стоять ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'follow',
            transcription: '[ˈfɒləʊ] ',
            translation: 'следовать ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stop',
            transcription: '[stɒp] ',
            translation: 'останавливать (-ся)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'walk',
            transcription: '[wɔːk] ',
            translation: 'ходить (гулять)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'appear',
            transcription: '[əˈpɪə] ',
            translation: 'появляться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dissapear',
            transcription: '[dˈɪsəpər]',
            translation: 'исчезать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remain',
            transcription: '[rɪˈmeɪn] ',
            translation: 'оставаться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'leave (left, left)',
            transcription: '[liːv] ',
            translation: 'уходить',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'raise',
            transcription: '[reɪz] ',
            translation: 'поднимать (-ся)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'carry',
            transcription: '[ˈkæri] ',
            translation: 'нести ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'drive (drove, driven)',
            transcription: '[draɪv] ',
            translation: 'вести машину',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'throw (threw, trown)',
            transcription: '[θrəʊ] ',
            translation: 'бросать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'push',
            transcription: '[pʊʃ] ',
            translation: 'толкать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lay (laid, laid)',
            transcription: '[leɪ] ',
            translation: 'класть',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lie (lay, lain)',
            transcription: '[laɪ] ',
            translation: 'лежать, лгать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'arrive',
            transcription: '[əˈraɪv] ',
            translation: 'прибывать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shake (shook, shaken)',
            transcription: '[ʃeɪk] ',
            translation: 'трясти',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fly (flew, flown)',
            transcription: '[flaɪ] ',
            translation: 'летать ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stay',
            transcription: '[steɪ] ',
            translation: 'оставаться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fall (fell, fallen)',
            transcription: '[fɔːl] ',
            translation: 'падать ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wear (wore, worn)',
            transcription: '[weə] ',
            translation: 'носить (напр. одежду)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'step',
            transcription: '[stɛp] ',
            translation: 'шагнуть',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'roll',
            transcription: '[rəʊl] ',
            translation: 'катиться, сворачивать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ride (rode, ridden)',
            transcription: '[raɪd] ',
            translation: 'ехать (напр. верхом)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lift',
            transcription: '[lɪft] ',
            translation: 'поднимать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'jump',
            transcription: '[ʤʌmp] ',
            translation: 'прыгать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'approach',
            transcription: '[əˈprəʊʧ] ',
            translation: 'приближаться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cross',
            transcription: '[krɒs] ',
            translation: 'пересекать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'climb',
            transcription: '[klaɪm] ',
            translation: 'лезть (карабкаться)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bear (bore, born)',
            transcription: '[beə] ',
            translation: 'нести ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shift',
            transcription: '[ʃɪft] ',
            translation: 'сдвигать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'slip',
            transcription: '[slɪp] ',
            translation: 'поскальзываться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rush',
            transcription: '[rʌʃ] ',
            translation: 'торопиться (стремительно мчаться)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'land',
            transcription: '[lænd] ',
            translation: 'приземляться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'escape',
            transcription: '[ɪsˈkeɪp] ',
            translation: 'сбегать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'drag',
            transcription: '[dræg] ',
            translation: 'тащить',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'slide (slid, slid)',
            transcription: '[slaɪd] ',
            translation: 'скользить',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'toss',
            transcription: '[tɒs] ',
            translation: 'бросать (метать)',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'accompany',
            transcription: '[əˈkʌmpəni] ',
            translation: 'сопровождать ',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'swing (swang, swung)',
            transcription: '[swɪŋ] ',
            translation: 'раскачивать',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'advance',
            transcription: '[ədˈvɑːns] ',
            translation: 'продвигаться',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'swim (swam, swum)',
            transcription: '[swɪm] ',
            translation: 'плыть',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'flee',
            transcription: '[fliː] ',
            translation: 'убегать, спасаться бегством',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sink (sank, sunk)',
            transcription: '[sɪŋk] ',
            translation: 'тонуть',
            count: '0',
            errors: '0',
            category: 'Движение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'be (was, been)',
            transcription: '[biː] ',
            translation: 'быть',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'exist',
            transcription: '[ɪgˈzɪst] ',
            translation: 'существовать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'include',
            transcription: '[ɪnˈkluːd] ',
            translation: 'включать (в себя что-либо)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'exclude',
            transcription: '[ɪksˈkluːd] ',
            translation: 'исключать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'add',
            transcription: '[æd] ',
            translation: 'добавлять',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'enter',
            transcription: '[ˈɛntə] ',
            translation: 'вводить, входить',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'share',
            transcription: '[ʃeə] ',
            translation: 'делиться',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remove',
            transcription: '[rɪˈmuːv] ',
            translation: 'удалять ',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'receive',
            transcription: '[rɪˈsiːv] ',
            translation: 'получать ',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lose (lost, lost)',
            transcription: '[luːz] ',
            translation: 'терять',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'find (found, found)',
            transcription: '[faɪnd] ',
            translation: 'найти',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have (had, had)',
            transcription: '[hæv] ',
            translation: 'иметь',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'be present',
            transcription: '[bi ˈprɛznt] ',
            translation: 'присутствовать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'be absent',
            transcription: '[bi ˈæbsənt] ',
            translation: 'отсутствовать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'get (got, got\\gotten)',
            transcription: '[gɛt] ',
            translation: 'получить (становиться)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'take (took, taken)',
            transcription: '[teɪk] ',
            translation: 'брать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'give (gave, given)',
            transcription: '[gɪv] ',
            translation: 'давать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'return',
            transcription: '[rɪˈtɜːn] ',
            translation: 'возвращать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'join',
            transcription: '[ʤɔɪn] ',
            translation: 'присоединять',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'involve',
            transcription: '[ɪnˈvɒlv] ',
            translation: 'вовлекать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'release',
            transcription: '[rɪˈliːs] ',
            translation: 'выпускать (отпускать)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'own',
            transcription: '[əʊn] ',
            translation: 'владеть',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'gain',
            transcription: '[geɪn] ',
            translation: 'получать, набирать (прибавлять в чем-то)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'emerge',
            transcription: '[ɪˈmɜːʤ] ',
            translation: 'появляться ',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'expand',
            transcription: '[ɪksˈpænd] ',
            translation: 'расширять (-ся)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'disappear',
            transcription: '[ˌdɪsəˈpɪə] ',
            translation: 'исчезать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'obtain',
            transcription: '[əbˈteɪn] ',
            translation: 'получать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'belong',
            transcription: '[bɪˈlɒŋ] ',
            translation: 'принадлежать ',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'limit',
            transcription: '[ˈlɪmɪt] ',
            translation: 'ограничивать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'spread (spread, spread)',
            transcription: '[sprɛd] ',
            translation: 'распространять (-ся)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'extend',
            transcription: '[ɪksˈtɛnd] ',
            translation: 'расширять (-ся)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'acquire',
            transcription: '[əˈkwaɪə] ',
            translation: 'приобретать (получать)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'abandon',
            transcription: '[əˈbændən] ',
            translation: 'покидать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'arise (arose, arisen)',
            transcription: '[əˈraɪz] ',
            translation: 'возникать',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'possess',
            transcription: '[pəˈzɛs] ',
            translation: 'обладать (владеть)',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'leave (left, left)',
            transcription: '[liːv] ',
            translation: 'оставить',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'occupy',
            transcription: '[ˈɒkjʊpaɪ] ',
            translation: 'занимать (место) ',
            count: '0',
            errors: '0',
            category: 'Наличие\\отсутствие, принадлежность',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'work',
            transcription: '[wɜːk] ',
            translation: 'работать ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'keep (kept, kept)',
            transcription: '[kiːp] ',
            translation: 'хранить',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'help',
            transcription: '[hɛlp] ',
            translation: 'помогать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'write (wrote, written)',
            transcription: '[raɪt] ',
            translation: 'писать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'provide',
            transcription: '[prəˈvaɪd] ',
            translation: 'обеспечивать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pay (paid, paid)',
            transcription: '[peɪ] ',
            translation: 'платить ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lead (led, led)',
            transcription: '[liːd] ',
            translation: 'лидировать (возглавлять)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'create',
            transcription: '[kri(ː)ˈeɪt] ',
            translation: 'создавать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'serve',
            transcription: '[sɜːv] ',
            translation: 'служить ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'build (built, built)',
            transcription: '[bɪld] ',
            translation: 'строить',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'develop',
            transcription: '[dɪˈvɛləp] ',
            translation: 'развивать (разрабатывать)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'base',
            transcription: '[beɪs] ',
            translation: 'базировать, размещать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'realize',
            transcription: '[ˈrɪəlaɪz] ',
            translation: 'реализовать, осознавать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'save',
            transcription: '[seɪv] ',
            translation: 'сохранять (делать сбережения)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fail',
            transcription: '[feɪl] ',
            translation: 'терпеть неудачу',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'check',
            transcription: '[ʧɛk] ',
            translation: 'проверять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'design',
            transcription: '[dɪˈzaɪn] ',
            translation: 'разрабатывать ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'claim',
            transcription: '[kleɪm] ',
            translation: 'предъявлять претензии, заявлять о правах, утверждать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'establish',
            transcription: '[ɪsˈtæblɪʃ] ',
            translation: 'устанавливать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'maintain',
            transcription: '[meɪnˈteɪn] ',
            translation: 'поддерживать ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'head',
            transcription: '[hɛd] ',
            translation: 'руководить (возглавлять)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'control',
            transcription: '[kənˈtrəʊl] ',
            translation: 'контролировать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'apply',
            transcription: '[əˈplaɪ] ',
            translation: 'подавать заявление, применять что-то',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'manage',
            transcription: '[ˈmænɪʤ] ',
            translation: 'управлять ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'perform',
            transcription: '[pəˈfɔːm] ',
            translation: 'выполнять ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'improve',
            transcription: '[ɪmˈpruːv] ',
            translation: 'улучшать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sign',
            transcription: '[saɪn] ',
            translation: 'подписывать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'test',
            transcription: '[tɛst] ',
            translation: 'проверять (тестировать)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'prevent',
            transcription: '[prɪˈvɛnt] ',
            translation: 'предотвращать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'publish',
            transcription: '[ˈpʌblɪʃ] ',
            translation: 'публиковать ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'achieve',
            transcription: '[əˈʧiːv] ',
            translation: 'достигать (добиваться чего-то)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'conduct',
            transcription: '[kənˈdʌkt] ',
            translation: 'проводить',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'attend',
            transcription: '[əˈtɛnd] ',
            translation: 'участвовать, посещать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'complete',
            transcription: '[kəmˈpliːt] ',
            translation: 'выполнять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'handle (Handle with care)',
            transcription: '[ˈhændl]',
            translation: 'обращаться (работать с чем-либо, обычн. вручную)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'handle (I can handle it)',
            transcription: '[ˈhændl]',
            translation: 'справляться (напр. с проблемой)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'deliver',
            transcription: '[dɪˈlɪvə] ',
            translation: 'доставлять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'operate',
            transcription: '[ˈɒpəreɪt] ',
            translation: 'управлять (обычно механизмом, машиной, программой)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'order',
            transcription: '[ˈɔːdə] ',
            translation: 'приказывать, заказывать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'measure',
            transcription: '[ˈmɛʒə] ',
            translation: 'измерять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'engage',
            transcription: '[ɪnˈgeɪʤ] ',
            translation: 'входить в контакт (заниматься)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hire',
            transcription: '[ˈhaɪə] ',
            translation: 'нанимать на работу',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'train',
            transcription: '[treɪn] ',
            translation: 'обучать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'paint',
            transcription: '[peɪnt] ',
            translation: 'красить ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'direct',
            transcription: '[dɪˈrɛkt] [daɪˈrɛkt] ',
            translation: 'руководить (управлять)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'solve',
            transcription: '[sɒlv] ',
            translation: 'решать (проблему, задачу)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'file',
            transcription: '[faɪl] ',
            translation: 'вносить в записи',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'employ',
            transcription: '[ɪmˈplɔɪ] ',
            translation: 'принимать на работу',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make (made, made)',
            transcription: '[meɪk] ',
            translation: 'делать, заставлять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'try',
            transcription: '[traɪ] ',
            translation: 'пробовать, пытаться',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'happen',
            transcription: '[ˈhæpən] ',
            translation: 'случаться',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'set (set, set)',
            transcription: '[sɛt] ',
            translation: 'устанавливать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'seek',
            transcription: '[siːk] ',
            translation: 'искать ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fill',
            transcription: '[fɪl] ',
            translation: 'заполнять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pass',
            transcription: '[pɑːs] ',
            translation: 'проходить, передавать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'attempt',
            transcription: '[əˈtɛmpt] ',
            translation: 'пытаться',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'connect',
            transcription: '[kəˈnɛkt] ',
            translation: 'подключать (соединять)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'record',
            transcription: '[rɪˈkɔːd] ',
            translation: 'записывать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'locate',
            transcription: '[ləʊˈkeɪt] ',
            translation: 'обнаружить (выяснить местоположение)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'search',
            transcription: '[sɜːʧ] ',
            translation: 'искать, обыскивать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'select',
            transcription: '[sɪˈlɛkt] ',
            translation: 'выбирать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'launch',
            transcription: '[lɔːnʧ] ',
            translation: 'запускать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'adjust',
            transcription: '[əˈʤʌst] ',
            translation: 'настраивать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'succeed',
            transcription: '[səkˈsiːd] ',
            translation: 'достигать цели (преуспевать в чем-то)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'review',
            transcription: '[rɪˈvjuː] ',
            translation: 'пересматривать, делать обзор',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'arrange (an event)',
            transcription: '[əˈreɪnʤ]',
            translation: 'организовывать (мероприятие)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'benefit',
            transcription: '[ˈbɛnɪfɪt] ',
            translation: 'получать выгоду',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'coach',
            transcription: '[kəʊʧ] ',
            translation: 'тренировать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'exercise',
            transcription: '[ˈɛksəsaɪz] ',
            translation: 'упражняться',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'monitor',
            transcription: '[ˈmɒnɪtə] ',
            translation: 'наблюдать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'supply',
            transcription: '[səˈplaɪ] ',
            translation: 'обеспечивать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'assist',
            transcription: '[əˈsɪst] ',
            translation: 'помогать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'construct',
            transcription: '[kənˈstrʌkt] ',
            translation: 'строить',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'schedule',
            transcription: '[ˈʃɛdjuːl] ',
            translation: 'составлять график, вносить в график',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'assign',
            transcription: '[əˈsaɪn] ',
            translation: 'назначать, давать задание',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dismiss',
            transcription: '[dɪsˈmɪs] ',
            translation: 'увольнять ',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'practice',
            transcription: '[ˈpræktɪs] ',
            translation: 'практиковаться',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'illustrate',
            transcription: '[ˈɪləstreɪt] ',
            translation: 'иллюстрировать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'enhance',
            transcription: '[ɪnˈhɑːns] ',
            translation: 'улучшать, усиливать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'implement',
            transcription: '[ˈɪmplɪmɛnt] ',
            translation: 'выполнять, применять',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'preserve',
            transcription: '[prɪˈzɜːv] ',
            translation: 'сохранять (уберегать)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'guide',
            transcription: '[gaɪd] ',
            translation: 'вести (направлять)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'illustrate',
            transcription: '[ˈɪləstreɪt] ',
            translation: 'иллюстрировать',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'deserve',
            transcription: '[dɪˈzɜːv] ',
            translation: 'заслуживать чего-то',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'face (something)',
            transcription: '[feɪs] ([ˈsʌmθɪŋ]) ',
            translation: 'встретиться с чем-то (напр. с проблемой)',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cause',
            transcription: '[kɔːz] ',
            translation: 'причинять что-либо',
            count: '0',
            errors: '0',
            category: 'Работа, сотрудничество',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'teach (taught, taught)',
            transcription: '[tiːʧ] ',
            translation: 'учить (обучать)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'can (could) ',
            transcription: '[kæn] ',
            translation: 'мочь, быть способным',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'know (knew, known)',
            transcription: '[nəʊ] ',
            translation: 'знать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'think (thought, thought)',
            transcription: '[θɪŋk] ',
            translation: 'думать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'see (saw, seen)',
            transcription: '[siː] ',
            translation: 'видеть',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'want',
            transcription: '[wɒnt] ',
            translation: 'хотеть',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'look',
            transcription: '[lʊk] ',
            translation: 'смотреть, выглядеть',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'need',
            transcription: '[niːd] ',
            translation: 'нуждаться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'feel (felt, felt)',
            transcription: '[fiːl] ',
            translation: 'чувствовать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'mean (meant, meant)',
            transcription: '[miːn] ',
            translation: 'значить (иметь ввиду)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'seem',
            transcription: '[siːm] ',
            translation: 'казаться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hear (heard, heard)',
            transcription: '[hɪə] ',
            translation: 'слышать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'like',
            transcription: '[laɪk] ',
            translation: 'нравиться (любить)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'believe',
            transcription: '[bɪˈliːv] ',
            translation: 'верить',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'learn (learnt, learnt)',
            transcription: '[lɜːn] ',
            translation: 'изучать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'watch',
            transcription: '[wɒʧ] ',
            translation: 'смотреть (сторожить)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'read (read, read)',
            transcription: '[riːd] ',
            translation: 'читать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remember',
            transcription: '[rɪˈmɛmbə] ',
            translation: 'помнить',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'love',
            transcription: '[lʌv] ',
            translation: 'любить',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'decide',
            transcription: '[dɪˈsaɪd] ',
            translation: 'решать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hope',
            transcription: '[həʊp] ',
            translation: 'надеяться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'listen',
            transcription: '[ˈlɪsn] ',
            translation: 'слушать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'focus',
            transcription: '[ˈfəʊkəs] ',
            translation: 'сосредоточиваться (на чем-либо)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'plan',
            transcription: '[plæn] ',
            translation: 'планировать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'note',
            transcription: '[nəʊt] ',
            translation: 'замечать, обращать внимание',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'identify',
            transcription: '[aɪˈdɛntɪfaɪ] ',
            translation: 'идентифицировать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'determine',
            transcription: '[dɪˈtɜːmɪn] ',
            translation: 'определять',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'recognize',
            transcription: '[ˈrɛkəgnaɪz] ',
            translation: 'узнавать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'compare',
            transcription: '[kəmˈpeə] ',
            translation: 'сравнивать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'miss (someone)',
            transcription: '[mɪs]',
            translation: 'скучать (по кому-то\\чему-то)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'study',
            transcription: '[ˈstʌdi] ',
            translation: 'изучать (учиться)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'forget (forgon, forgotten)',
            transcription: '[fəˈgɛt] ',
            translation: 'забывать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'imagine',
            transcription: '[ɪˈmæʤɪn] ',
            translation: 'воображать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'discover',
            transcription: '[dɪsˈkʌvə] ',
            translation: 'совершать открытие',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'worry',
            transcription: '[ˈwʌri] ',
            translation: 'беспокоиться ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wait',
            transcription: '[weɪt] ',
            translation: 'ждать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'experience',
            transcription: '[ɪksˈpɪərɪəns] ',
            translation: 'переживать (испытывать что-то на себе)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tend',
            transcription: '[tɛnd] ',
            translation: 'иметь склонность (к чему-то)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'notice',
            transcription: '[ˈnəʊtɪs] ',
            translation: 'замечать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wish',
            transcription: '[wɪʃ] ',
            translation: 'желать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'figure out',
            transcription: '[ˈfɪgər aʊt] ',
            translation: 'выяснять (находить решение)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'suffer',
            transcription: '[ˈsʌfə] ',
            translation: 'страдать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'recall',
            transcription: '[rɪˈkɔːl] ',
            translation: 'вспоминать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stare',
            transcription: '[steə] ',
            translation: 'пристально смотреть, пялиться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'examine',
            transcription: '[ɪgˈzæmɪn] ',
            translation: 'проверять (изучать)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'define',
            transcription: '[dɪˈfaɪn] ',
            translation: 'определять',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'observe',
            transcription: '[əbˈzɜːv] ',
            translation: 'наблюдать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'count',
            transcription: '[kaʊnt] ',
            translation: 'считать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'associate',
            transcription: '[əˈsəʊʃɪeɪt] ',
            translation: 'ассоциировать (с чем-то)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'view',
            transcription: '[vjuː] ',
            translation: 'смотреть',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'remind',
            transcription: '[ˈrɪmaɪnd] ',
            translation: 'напоминать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hate',
            transcription: '[heɪt] ',
            translation: 'ненавидеть',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'intend',
            transcription: '[ɪnˈtɛnd] ',
            translation: 'намереваться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'explore',
            transcription: '[ɪksˈplɔː] ',
            translation: 'исследовать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'predict',
            transcription: '[prɪˈdɪkt] ',
            translation: 'предсказывать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'acknowledge',
            transcription: '[əkˈnɒlɪʤ] ',
            translation: 'признавать, подтверждать получение',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fear',
            transcription: '[fɪə] ',
            translation: 'бояться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'conclude',
            transcription: '[kənˈkluːd] ',
            translation: 'делать вывод',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'prefer',
            transcription: '[priˈfɜː] ',
            translation: 'предпочитать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'appreciate',
            transcription: '[əˈpriːʃɪeɪt] ',
            translation: 'ценить',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'trust',
            transcription: '[trʌst] ',
            translation: 'доверять',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rely on',
            transcription: '[rɪˈlaɪ ɒn] ',
            translation: 'полагаться на',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'question',
            transcription: '[ˈkwɛsʧən] ',
            translation: 'подвергать сомнению, допрашивать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'regard',
            transcription: '[rɪˈgɑːd] ',
            translation: 'учитывать, считать кем-либо \\ чем-либо',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'suspect',
            transcription: '[səsˈpɛkt] ',
            translation: 'подозревать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'suppose',
            transcription: '[səˈpəʊz] ',
            translation: 'предполагать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'perceive',
            transcription: '[pəˈsiːv] ',
            translation: 'воспринимать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'inspire',
            transcription: '[ɪnˈspaɪə] ',
            translation: 'вдохновлять ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'analyze',
            transcription: '[ˈænəlaɪz] ',
            translation: 'анализировать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'concentrate',
            transcription: '[ˈkɒnsəntreɪt] ',
            translation: 'сосредоточиваться',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'smell (smelt, smelt)',
            transcription: '[smɛl] ',
            translation: 'нюхать, пахнуть',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'glance',
            transcription: '[glɑːns] ',
            translation: 'смотреть (бросать взгляд)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dream (dreamt, dreamt)',
            transcription: '[driːm] ',
            translation: 'мечать (видеть сны)',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'react',
            transcription: '[ri(ː)ˈækt] ',
            translation: 'реагировать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'choose',
            transcription: '[ʧuːz] ',
            translation: 'выбирать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'expect',
            transcription: '[ɪksˈpɛkt] ',
            translation: 'ожидать ',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'miss',
            transcription: '[mɪs] ',
            translation: 'упускать, скучать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'realize',
            transcription: '[ˈrɪəlaɪz] ',
            translation: 'реализовать, осознавать',
            count: '0',
            errors: '0',
            category: 'Чувства, мышление, восприятие',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'say (said, said)',
            transcription: '[seɪ] ',
            translation: 'сказать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tell (told, told)',
            transcription: '[tɛl] ',
            translation: 'говорить ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'call',
            transcription: '[kɔːl] ',
            translation: 'звать, звонить',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ask',
            transcription: '[ɑːsk] ',
            translation: 'спрашивать, просить',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'talk',
            transcription: '[tɔːk] ',
            translation: 'разговаривать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'meet (met, met)',
            transcription: '[miːt] ',
            translation: 'знакомиться (встречать)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'understand (understood, understood)',
            transcription: '[ˌʌndəˈstænd] ',
            translation: 'понимать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'speak (spoke, spoken)',
            transcription: '[spiːk] ',
            translation: 'говорить ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'allow',
            transcription: '[əˈlaʊ] ',
            translation: 'позволять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'offer',
            transcription: '[ˈɒfə] ',
            translation: 'предлагать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'consider',
            transcription: '[kənˈsɪdə] ',
            translation: 'рассматривать, считать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'suggest',
            transcription: '[səˈʤɛst] ',
            translation: 'предлагать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'require',
            transcription: '[rɪˈkwaɪə] ',
            translation: 'требовать, нуждаться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'report',
            transcription: '[rɪˈpɔːt] ',
            translation: 'докладывать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'explain',
            transcription: '[ɪksˈpleɪn] ',
            translation: 'объяснять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'thank',
            transcription: '[θæŋk] ',
            translation: 'благодарить',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'agree',
            transcription: '[əˈgriː] ',
            translation: 'соглашаться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'describe',
            transcription: '[dɪsˈkraɪb] ',
            translation: 'описывать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'represent',
            transcription: '[ˌrɛprɪˈzɛnt] ',
            translation: 'представлять (напр. компанию)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lie',
            transcription: '[laɪ] ',
            translation: 'лгать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tell the truth (told, told)',
            transcription: '[tɛl ðə truːθ] ',
            translation: 'говорить правду',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'mean (meant, meant)',
            transcription: '[miːn] ',
            translation: 'иметь в виду',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'argue',
            transcription: '[ˈɑːgjuː] ',
            translation: 'спорить',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wonder',
            transcription: '[ˈwʌndə] ',
            translation: 'интересоваться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'name',
            transcription: '[neɪm] ',
            translation: 'называть, именовать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'answer',
            transcription: '[ˈɑːnsə] ',
            translation: 'отвечать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'state',
            transcription: '[steɪt] ',
            translation: 'делать заявление',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'discuss',
            transcription: '[dɪsˈkʌs] ',
            translation: 'обсуждать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'laugh',
            transcription: '[lɑːf] ',
            translation: 'смеяться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'guess',
            transcription: '[gɛs] ',
            translation: 'догадываться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'prove',
            transcription: '[pruːv] ',
            translation: 'доказывать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sound',
            transcription: '[saʊnd] ',
            translation: 'звучать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'respond',
            transcription: '[rɪsˈpɒnd] ',
            translation: 'отвечать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'reveal',
            transcription: '[rɪˈviːl] ',
            translation: 'выявлять, раскрывать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'treat',
            transcription: '[triːt] ',
            translation: 'лечить (обращаться с кем-либо)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'affect',
            transcription: '[əˈfɛkt] ',
            translation: 'влиять (воздействовать)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'mention',
            transcription: '[ˈmɛnʃən] ',
            translation: 'упоминать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'care',
            transcription: '[keə] ',
            translation: 'заботиться, беспокоиться, относиться не безразлично',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'avoid',
            transcription: '[əˈvɔɪd] ',
            translation: 'избегать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'support',
            transcription: '[səˈpɔːt] ',
            translation: 'поддерживать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sing (sang, sung)',
            transcription: '[sɪŋ] ',
            translation: 'петь',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'address',
            transcription: '[əˈdrɛs] ',
            translation: 'обращаться к кому-то',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'smile',
            transcription: '[smaɪl] ',
            translation: 'улыбаться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'admit',
            transcription: '[ədˈmɪt] ',
            translation: 'признать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'assume',
            transcription: '[əˈsjuːm] ',
            translation: 'предполагать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'refer',
            transcription: '[rɪˈfɜː] ',
            translation: 'ссылаться на что-то, направлять, отсылать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'announce',
            transcription: '[əˈnaʊns] ',
            translation: 'объявлять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'encourage',
            transcription: '[ɪnˈkʌrɪʤ] ',
            translation: 'воодушевлять, поощрять, побуждать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'introduce',
            transcription: '[ˌɪntrəˈdjuːs] ',
            translation: 'представлять (напр. одного человека другому)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'refuse',
            transcription: '[ˌriːˈfjuːz] ',
            translation: 'отказываться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'express',
            transcription: '[ɪksˈprɛs] ',
            translation: 'выражать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'settle',
            transcription: '[ˈsɛtl] ',
            translation: 'улаживать (вопрос)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cry',
            transcription: '[kraɪ] ',
            translation: 'плакать (кричать)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'insist',
            transcription: '[ɪnˈsɪst] ',
            translation: 'настаивать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ignore',
            transcription: '[ɪgˈnɔː] ',
            translation: 'игнорировать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'deny',
            transcription: '[dɪˈnaɪ] ',
            translation: 'отрицать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'promise',
            transcription: '[ˈprɒmɪs] ',
            translation: 'обещать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'demand',
            transcription: '[dɪˈmɑːnd] ',
            translation: 'требовать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'welcome',
            transcription: '[ˈwɛlkəm] ',
            translation: 'приветствовать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'invite',
            transcription: '[ɪnˈvaɪt] ',
            translation: 'приглашать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'repeat',
            transcription: '[rɪˈpiːt] ',
            translation: 'повторять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'recommend',
            transcription: '[ˌrɛkəˈmɛnd] ',
            translation: 'рекомендовать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'propose',
            transcription: '[prəˈpəʊz] ',
            translation: 'предлагать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'declare',
            transcription: '[dɪˈkleə] ',
            translation: 'объявлять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: "matter (It doesn't matter)",
            transcription: '[ˈmætə] ',
            translation: 'иметь значение',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'judge',
            transcription: '[ˈʤʌʤ] ',
            translation: 'судить, осуждать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ensure',
            transcription: '[ɪnˈʃʊə] ',
            translation: 'обеспечивать (гарантировать, убеждаться в чем-то)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'challenge',
            transcription: '[ˈʧælɪnʤ] ',
            translation: 'бросать вызов',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'warn',
            transcription: '[wɔːn] ',
            translation: 'предупреждать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'influence',
            transcription: '[ˈɪnflʊəns] ',
            translation: 'влиять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'blame',
            transcription: '[bleɪm] ',
            translation: 'винить',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'complain',
            transcription: '[kəmˈpleɪn] ',
            translation: 'жаловаться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'back',
            transcription: '[bæk] ',
            translation: 'поддерживать, отступать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cite',
            transcription: '[saɪt] ',
            translation: 'цитировать (ссылаться)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'emphasize',
            transcription: '[ˈɛmfəsaɪz] ',
            translation: 'подчеркивать (делать ударение на чем-то)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'decline',
            transcription: '[dɪˈklaɪn] ',
            translation: 'отклонять (напр. предложение)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'accuse',
            transcription: '[əˈkjuːz] ',
            translation: 'обвинять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'reject',
            transcription: '[rɪˈʤɛkt] ',
            translation: 'отвергать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'convince',
            transcription: '[kənˈvɪns] ',
            translation: 'убеждать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'approve',
            transcription: '[əˈpruːv] ',
            translation: 'подтверждать, одобрять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'list',
            transcription: '[lɪst] ',
            translation: 'перечислять, составлять список',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'permit',
            transcription: '[pəˈmɪt] ',
            translation: 'разрешать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'scream',
            transcription: '[skriːm] ',
            translation: 'кричать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shout',
            transcription: '[ʃaʊt] ',
            translation: 'выкрикивать, кричать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'inform',
            transcription: '[ɪnˈfɔːm] ',
            translation: 'информировать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bother',
            transcription: '[ˈbɒðə] ',
            translation: 'беспокоить',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'reply',
            transcription: '[rɪˈplaɪ] ',
            translation: 'отвечать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'resolve',
            transcription: '[rɪˈzɒlv] ',
            translation: 'решать (вопрос)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'contact',
            transcription: '[ˈkɒntækt] ',
            translation: 'контактировать, связываться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'interview',
            transcription: '[ˈɪntəvjuː] ',
            translation: 'проводить интервью (беседу)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'quote',
            transcription: '[kwəʊt] ',
            translation: 'цитировать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'urge',
            transcription: '[ɜːʤ] ',
            translation: 'торопить, убеждать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'whisper',
            transcription: '[ˈwɪspə] ',
            translation: 'шептать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'favor (favour)',
            transcription: '[ˈfeɪvə]',
            translation: 'оказывать внимание, быть благосклонным',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'comment',
            transcription: '[ˈkɒmɛnt] ',
            translation: 'коментировать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'negotiate',
            transcription: '[nɪˈgəʊʃɪeɪt] ',
            translation: 'вести переговоры',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'advise',
            transcription: '[ədˈvaɪz] ',
            translation: 'советовать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'criticize',
            transcription: '[ˈkrɪtɪsaɪz] ',
            translation: 'критиковать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'assure',
            transcription: '[əˈʃʊə] ',
            translation: 'уверять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'yell',
            transcription: '[jɛl] ',
            translation: 'кричать ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'communicate',
            transcription: '[kəˈmjuːnɪkeɪt] ',
            translation: 'общаться ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'disagree',
            transcription: '[ˌdɪsəˈgriː] ',
            translation: 'не соглашаться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'proceed',
            transcription: '[prəˈsiːd] ',
            translation: 'переходить к чему-то, продолжать как запланировано',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'translate',
            transcription: '[trænsˈleɪt] ',
            translation: 'переводить (лингв.)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'interpret',
            transcription: '[ɪnˈtɜːprɪt] ',
            translation: 'толковать, интерпретировать, переводить (устно) ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pause',
            transcription: '[pɔːz] ',
            translation: 'делать паузу',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'imply',
            transcription: '[ɪmˈplaɪ] ',
            translation: 'предполагать, подразумевать, намекать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'respect',
            transcription: '[rɪsˈpɛkt] ',
            translation: 'уважать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'characterize',
            transcription: '[ˈkærɪktəraɪz] ',
            translation: 'характеризовать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'appeal',
            transcription: '[əˈpiːl] ',
            translation: 'обращаться, апеллировать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stress',
            transcription: '[strɛs] ',
            translation: 'делать ударение',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'doubt',
            transcription: '[daʊt] ',
            translation: 'сомневаться',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'guarantee',
            transcription: '[ˌgærənˈtiː] ',
            translation: 'гарантировать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'honor',
            transcription: '[ˈɒnə] ',
            translation: 'чтить, уважать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'encounter',
            transcription: '[ɪnˈkaʊntə] ',
            translation: 'встречать (случайно встретить кого-то)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dominate',
            transcription: '[ˈdɒmɪneɪt] ',
            translation: 'доминировать, иметь полный контроль',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'accept',
            transcription: '[əkˈsɛpt] ',
            translation: 'принимать',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'let (let, let)',
            transcription: '[lɛt] ',
            translation: 'позволять',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'date',
            transcription: '[deɪt] ',
            translation: 'встречаться, ходить на свидания',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'win (won, won)',
            transcription: '[wɪn] ',
            translation: 'побеждать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'kill',
            transcription: '[kɪl] ',
            translation: 'убивать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hit (hit, hit)',
            transcription: '[hɪt] ',
            translation: 'ударить',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fight (fought, fought)',
            transcription: '[faɪt] ',
            translation: 'драться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shoot (shot, shot)',
            transcription: '[ʃuːt] ',
            translation: 'стрелять (снимать на камеру)',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'protect',
            transcription: '[prəˈtɛkt] ',
            translation: 'защищать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'force',
            transcription: '[fɔːs] ',
            translation: 'принуждать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'beat (beat, beaten)',
            transcription: '[biːt] ',
            translation: 'бить ',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hurt (hurt, hurt)',
            transcription: '[hɜːt] ',
            translation: 'причинять боль',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'strike (struck, struck)',
            transcription: '[straɪk] ',
            translation: 'ударять (бастовать)',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'threaten',
            transcription: '[ˈθrɛtn] ',
            translation: 'угрожать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'destroy',
            transcription: '[dɪsˈtrɔɪ] ',
            translation: 'уничтожать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fire',
            transcription: '[ˈfaɪə] ',
            translation: 'стрелять ',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'attack',
            transcription: '[əˈtæk] ',
            translation: 'атаковать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'struggle',
            transcription: '[ˈstrʌgl] ',
            translation: 'бороться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'capture',
            transcription: '[ˈkæpʧə] ',
            translation: 'захватывать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'defend',
            transcription: '[dɪˈfɛnd] ',
            translation: 'защищать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'kick',
            transcription: '[kɪk] ',
            translation: 'пинать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'eliminate',
            transcription: '[ɪˈlɪmɪneɪt] ',
            translation: 'устранять',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'score',
            transcription: '[skɔː] ',
            translation: 'набирать очки (баллы)',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'aim',
            transcription: '[eɪm] ',
            translation: 'целиться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'compete (sport)',
            transcription: '[kəmˈpiːt]',
            translation: 'соревноваться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'confront',
            transcription: '[kənˈfrʌnt] ',
            translation: 'противостоять ',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'resist',
            transcription: '[rɪˈzɪst] ',
            translation: 'сопротивляться ',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'target',
            transcription: '[ˈtɑːgɪt] ',
            translation: 'делать мишенью, целиться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'overcome',
            transcription: '[ˌəʊvəˈkʌm] ',
            translation: 'преодолевать',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'give up (gave, given)',
            transcription: '[gɪv ʌp] ',
            translation: 'сдаваться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'surrender',
            transcription: '[səˈrɛndə] ',
            translation: 'сдаваться',
            count: '0',
            errors: '0',
            category: 'Борьба',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cost (cost, cost)',
            transcription: '[kɒst] ',
            translation: 'стоить',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'earn',
            transcription: '[ɜːn] ',
            translation: 'зарабатывать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'make money (made, made)',
            transcription: '[meɪk ˈmʌni] ',
            translation: 'зарабатывать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'promote',
            transcription: '[prəˈməʊt] ',
            translation: 'продвигать, рекламировать, повышать по службе',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'charge',
            transcription: '[ʧɑːʤ] ',
            translation: 'брать плату',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'estimate',
            transcription: '[ˈɛstɪmeɪt] ',
            translation: 'оценивать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'account',
            transcription: '[əˈkaʊnt] ',
            translation: 'считать, вести учет',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'invest',
            transcription: '[ɪnˈvɛst] ',
            translation: 'инвестировать ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'assess',
            transcription: '[əˈsɛs] ',
            translation: 'оценивать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'compete',
            transcription: '[kəmˈpiːt] ',
            translation: 'конкурировать ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'purchase',
            transcription: '[ˈpɜːʧəs] ',
            translation: 'покупать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'evaluate',
            transcription: '[ɪˈvæljʊeɪt] ',
            translation: 'оценивать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'trade',
            transcription: '[treɪd] ',
            translation: 'торговать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'market',
            transcription: '[ˈmɑːkɪt] ',
            translation: 'продвигать на рынке (рекламировать)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'withdraw',
            transcription: '[wɪðˈdrɔː] ',
            translation: 'снимать (деньги со счета в банке)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'convert',
            transcription: '[kənˈvɜːt] ',
            translation: 'конвертировать ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'spend (spent, spent)',
            transcription: '[spɛnd] ',
            translation: 'тратить (напр. деньги), проводить время',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'buy (bought, bought)',
            transcription: '[baɪ] ',
            translation: 'покупать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sell (sold, sold)',
            transcription: '[sɛl] ',
            translation: 'продавать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'deal (dealt, dealt)',
            transcription: '[diːl] ',
            translation: 'вести дела',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'produce',
            transcription: '[prəˈdjuːs] ',
            translation: 'производить ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'save',
            transcription: '[seɪv] ',
            translation: 'делать сбережения, экономить',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rule',
            transcription: '[ruːl] ',
            translation: 'править (властвовать)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'elect',
            transcription: '[ɪˈlɛkt] ',
            translation: 'выбирать (на выборах)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'vote',
            transcription: '[vəʊt] ',
            translation: 'голосовать',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'contribute',
            transcription: '[kənˈtrɪbju(ː)t] ',
            translation: 'вносить вклад во что-то',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'settle',
            transcription: '[ˈsɛtl] ',
            translation: 'расселяться (создавать поселение)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'impose',
            transcription: '[ɪmˈpəʊz] ',
            translation: 'налагать (напр. обязательство)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'transfer',
            transcription: '[trænsˈfɜː] ',
            translation: 'передавать, переводить (напр. деньги)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'distribute',
            transcription: '[dɪsˈtrɪbju(ː)t] ',
            translation: 'распространять ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'deposit',
            transcription: '[dɪpˈɒzɪtɪ]',
            translation: 'вносить деньги (на счет в банке)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'afford',
            transcription: '[əˈfɔːd] ',
            translation: 'повзволять себе',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'live',
            transcription: '[lɪv] ',
            translation: 'жить ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'grow up (grew, grown)',
            transcription: '[grəʊ ʌp] ',
            translation: 'расти ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'die',
            transcription: '[daɪ] ',
            translation: 'умереть ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'be born',
            transcription: '[bi bɔːn] ',
            translation: 'быть рожденным',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'marry (get married)',
            transcription: '[ˈmæri]',
            translation: 'жениться (выходить замуж)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'survive',
            transcription: '[səˈvaɪv] ',
            translation: 'выживать',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'adopt',
            transcription: '[əˈdɒpt] ',
            translation: 'усыновлять (удочерять)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'retire',
            transcription: '[rɪˈtaɪə] ',
            translation: 'выходить на пенсию',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'breathe',
            transcription: '[briːð] ',
            translation: 'дышать ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'kiss',
            transcription: '[kɪs] ',
            translation: 'целовать',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bury',
            transcription: '[ˈbɛri] ',
            translation: 'хоронить',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pray',
            transcription: '[preɪ] ',
            translation: 'молиться ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'graduate',
            transcription: '[ˈgrædjʊeɪt] ',
            translation: 'выпускаться из учебного заведения',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tire (get tired)',
            transcription: '[ˈtaɪə] ',
            translation: 'уставать',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'adapt',
            transcription: '[əˈdæpt] ',
            translation: 'адаптировать (-ся)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pretend',
            transcription: '[prɪˈtɛnd] ',
            translation: 'притворяться ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'divorce (get divorced)',
            transcription: '[dɪˈvɔːs] ',
            translation: 'разводиться (о супругах)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'inherit',
            transcription: '[ɪnˈhɛrɪt] ',
            translation: 'наследовать',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sleep (slept, slept)',
            transcription: '[sliːp] ',
            translation: 'спать',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dress',
            transcription: '[drɛs] ',
            translation: 'одевать (-ся)',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wake up (woke, woken)',
            transcription: '[weɪk ʌp] ',
            translation: 'будить (просыпаться)',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'eat (ate, eaten)',
            transcription: '[iːt] ',
            translation: 'есть',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'drink (drank, drunk)',
            transcription: '[drɪŋk] ',
            translation: 'пить, выпивать',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'feed (fed, fed)',
            transcription: '[fiːd] ',
            translation: 'кормить',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cook',
            transcription: '[kʊk] ',
            translation: 'готовить пищу',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'taste',
            transcription: '[teɪst] ',
            translation: 'пробовать на вкус, ощущаться на вкус',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bake',
            transcription: '[beɪk] ',
            translation: 'печь',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'freeze',
            transcription: '[friːz] ',
            translation: 'замораживать, замерзать, хранить в морозилке',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'play',
            transcription: '[pleɪ] ',
            translation: 'играть в игру или на музыкальном инструменте, воспроизводить запись',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'spend (spent, spent)',
            transcription: '[spɛnd]',
            translation: 'проводить (напр. время), тратить деньги',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'enjoy',
            transcription: '[ɪnˈʤɔɪ] ',
            translation: 'наслаждаться ',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'visit',
            transcription: '[ˈvɪzɪt] ',
            translation: 'навещать',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'travel',
            transcription: '[ˈtrævl] ',
            translation: 'путешествовать, ехать (перемещаться)',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rest',
            transcription: '[rɛst] ',
            translation: 'отдыхать',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dance',
            transcription: '[dɑːns] ',
            translation: 'танцевать',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'celebrate',
            transcription: '[ˈsɛlɪbreɪt] ',
            translation: 'праздновать ',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bet (bet, bet)',
            transcription: '[bɛt] ',
            translation: 'делать ставку',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'relax',
            transcription: '[rɪˈlæks] ',
            translation: 'расслабляться',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'gamble',
            transcription: '[ˈgæmbl] ',
            translation: 'играть в азартные игры',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'have fun (had, had)',
            transcription: '[həv fʌn] ',
            translation: 'развлекаться (веселиться)',
            count: '0',
            errors: '0',
            category: 'Дом, быт, развлечения',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'weigh',
            transcription: '[weɪ] ',
            translation: 'весить, взвешивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'balance',
            transcription: '[ˈbæləns] ',
            translation: 'балансировать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'flow (flew, flown)',
            transcription: '[fləʊ] ',
            translation: 'течь ',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'transform',
            transcription: '[trænsˈfɔːm] ',
            translation: 'трансформировать (-ся), значительно изменять (-ся)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'recover',
            transcription: '[rɪˈkʌvə] ',
            translation: 'восстанавливать (-ся), выздоравливать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'expose',
            transcription: '[ɪksˈpəʊz] ',
            translation: 'выставлять (подвергать чему-то)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pop',
            transcription: '[pɒp] ',
            translation: 'хлопать (выскакивать)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'indicate',
            transcription: '[ˈɪndɪkeɪt] ',
            translation: 'указывать (объяснять)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'alter',
            transcription: '[ˈɔːltə] ',
            translation: 'изменять, модифицировать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'alternate',
            transcription: '[ɔːlˈtɜːnɪt]',
            translation: 'чередовать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'double',
            transcription: '[ˈdʌbl] ',
            translation: 'удваивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'retain ',
            transcription: '[rɪˈteɪn] ',
            translation: 'удерживать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fade',
            transcription: '[feɪd] ',
            translation: 'увядать (блекнуть)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'form',
            transcription: '[fɔːm] ',
            translation: 'формировать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shape',
            transcription: '[ʃeɪp] ',
            translation: 'придавать форму',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'change',
            transcription: '[ʧeɪnʤ] ',
            translation: 'менять',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'place',
            transcription: '[pleɪs] ',
            translation: 'размещать ',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rise (rose, risen)',
            transcription: '[raɪz] ',
            translation: 'поднимать (-ся)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'reflect',
            transcription: '[rɪˈflɛkt] ',
            translation: 'отражать (-ся)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'enable',
            transcription: '[ɪˈneɪbl] ',
            translation: 'включать (активировать), делать возможным',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wave',
            transcription: '[weɪv] ',
            translation: 'развеваться, махать',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'snap',
            transcription: '[snæp] ',
            translation: 'щелкать, трещать, сломать с хрустом',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'display',
            transcription: '[dɪsˈpleɪ] ',
            translation: 'показывать (выставлять на показ)',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stick',
            transcription: '[stɪk] ',
            translation: 'липнуть',
            count: '0',
            errors: '0',
            category: 'Физические действия (общие)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'testify',
            transcription: '[ˈtɛstɪfaɪ] ',
            translation: 'давать показания',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'justify',
            transcription: '[ˈʤʌstɪfaɪ] ',
            translation: 'оправдывать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'violate',
            transcription: '[ˈvaɪəleɪt] ',
            translation: 'нарушать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'witness',
            transcription: '[ˈwɪtnɪs] ',
            translation: 'быть свидетелем',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'arrest',
            transcription: '[əˈrɛst] ',
            translation: 'арестовывать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'investigate',
            transcription: '[ɪnˈvɛstɪgeɪt] ',
            translation: 'расследовать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'confess ',
            transcription: '[kənˈfɛs]  ',
            translation: 'сознаваться',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'accuse',
            transcription: '[əˈkjuːz] ',
            translation: 'обвинять',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'charge',
            transcription: '[ʧɑːʤ] ',
            translation: 'обвинять (официально)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'suspect',
            transcription: '[səsˈpɛkt] ',
            translation: 'подозревать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sue',
            transcription: '[sjuː] ',
            translation: 'подавать в суд',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'convict',
            transcription: '[kənˈvɪkt] ',
            translation: 'выносить приговор, признавать виновным',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'beat (up) (beat, beaten)',
            transcription: '[biːt] [ʌp]',
            translation: 'бить, избивать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'murder',
            transcription: '[ˈmɜːdə] ',
            translation: 'убивать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'kill',
            transcription: '[kɪl] ',
            translation: 'убивать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'attack',
            transcription: '[əˈtæk] ',
            translation: 'нападать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'free',
            transcription: '[friː] ',
            translation: 'освободжать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'offend',
            transcription: '[əˈfɛnd] ',
            translation: 'оскорблять',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'disturb',
            transcription: '[dɪsˈtɜːb] ',
            translation: 'беспокоить',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'steal (stole, stolen)',
            transcription: '[stiːl] ',
            translation: 'красть',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rob',
            transcription: '[rɒb] ',
            translation: 'грабить',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rape',
            transcription: '[reɪp] ',
            translation: 'насиловать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'punish',
            transcription: '[ˈpʌnɪʃ] ',
            translation: 'наказывать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do time',
            transcription: '[dʊ taɪm] ',
            translation: 'сидеть (в тюрьме)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'interrogate ',
            transcription: '[ɪnˈtɛrəʊgeɪt]  ',
            translation: 'допрашивать',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'swear',
            transcription: '[sweə] ',
            translation: 'клясться',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'reach',
            transcription: '[riːʧ] ',
            translation: 'достигать (дотягиваться)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'catch (caught, caught)',
            transcription: '[kæʧ] ',
            translation: 'ловить',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'drop',
            transcription: '[drɒp] ',
            translation: 'ронять',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hang (hung, hung)',
            transcription: '[hæŋ] ',
            translation: 'повесить',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'touch',
            transcription: '[tʌʧ] ',
            translation: 'прикасаться',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'clear',
            transcription: '[klɪə] ',
            translation: 'очищать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pour',
            transcription: '[pɔː] ',
            translation: 'лить (напр. воду)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stir',
            transcription: '[stɜː] ',
            translation: 'перемешивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'clean',
            transcription: '[kliːn] ',
            translation: 'чистить, убирать (мыть, приводить в порядок)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wrap',
            transcription: '[ræp] ',
            translation: 'заворачивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wash',
            transcription: '[wɒʃ] ',
            translation: 'стирать (мыть)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'ring (rang, rung)',
            transcription: '[rɪŋ] ',
            translation: 'звонить',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'embrace',
            transcription: '[ɪmˈbreɪs] ',
            translation: 'обнимать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hug',
            transcription: '[hʌg] ',
            translation: 'обнимать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'put (put, put)',
            transcription: '[pʊt] ',
            translation: 'класть (помещать)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'use',
            transcription: '[juːz] ',
            translation: 'использовать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'show',
            transcription: '[ʃəʊ] ',
            translation: 'показывать ',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hold (held, held)',
            transcription: '[həʊld] ',
            translation: 'держать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'open',
            transcription: '[ˈəʊpən] ',
            translation: 'открывать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cut',
            transcription: '[kʌt] ',
            translation: 'резать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pull',
            transcription: '[pʊl] ',
            translation: 'тянуть',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'break (broke, broken)',
            transcription: '[breɪk] ',
            translation: 'ломать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'cover',
            transcription: '[ˈkʌvə] ',
            translation: 'прикрывать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'draw (drew, drawn)',
            transcription: '[drɔː] ',
            translation: 'тянуть',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'point',
            transcription: '[pɔɪnt] ',
            translation: 'указывать (на что-либо)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'close',
            transcription: '[kləʊz] ',
            translation: 'закрывать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'replace',
            transcription: '[rɪˈpleɪs] ',
            translation: 'заменять',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'collect',
            transcription: '[kəˈlɛkt] ',
            translation: 'собирать, забирать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'grab',
            transcription: '[græb] ',
            translation: 'хватать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tie',
            transcription: '[taɪ] ',
            translation: 'связывать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'press',
            transcription: '[prɛs] ',
            translation: 'давить',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'link',
            transcription: '[lɪŋk] ',
            translation: 'соединять, проводить связь между фактами',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'mix',
            transcription: '[mɪks] ',
            translation: 'перемешивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'stretch',
            transcription: '[strɛʧ] ',
            translation: 'растягивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hand',
            transcription: '[hænd] ',
            translation: 'подавать что-то, передавать из рук в руки',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'knock',
            transcription: '[nɒk] ',
            translation: 'стучать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bend (bent, bent)',
            transcription: '[bɛnd] ',
            translation: 'гнуть',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lock',
            transcription: '[lɒk] ',
            translation: 'запирать на замок',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tear (tore, torn)',
            transcription: '[teə] ',
            translation: 'рвать ',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pack',
            transcription: '[pæk] ',
            translation: 'упаковывать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'attach',
            transcription: '[əˈtæʧ] ',
            translation: 'прикреплять',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'dig (dug, dug)',
            transcription: '[dɪg] ',
            translation: 'копать ',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'bind (bound, bound)',
            transcription: '[baɪnd] ',
            translation: 'связывать (веревкой)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wind (wound, wound)',
            transcription: '[waɪnd] ',
            translation: 'закручивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'wipe',
            transcription: '[waɪp] ',
            translation: 'протирать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'load',
            transcription: '[ləʊd] ',
            translation: 'загружать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'sweep (swept, swept)',
            transcription: '[swiːp] ',
            translation: 'мести',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'squeeze',
            transcription: '[skwiːz] ',
            translation: 'сжимать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'rub',
            transcription: '[rʌb] ',
            translation: 'тереть',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'tap',
            transcription: '[tæp] ',
            translation: 'постукивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'spin (spun, spun)',
            transcription: '[spɪn] ',
            translation: 'вращать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'plant',
            transcription: '[plɑːnt] ',
            translation: 'сажать (растение)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pick',
            transcription: '[pɪk] ',
            translation: 'выбирать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'gather',
            transcription: '[ˈgæðə] ',
            translation: 'собирать (вместе)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'hide (hid, hid)',
            transcription: '[haɪd] ',
            translation: 'прятать (-ся)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'blow (blew, blown)',
            transcription: '[bləʊ] ',
            translation: 'дуть',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'smoke',
            transcription: '[sməʊk] ',
            translation: 'курить',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'act',
            transcription: '[ækt] ',
            translation: 'действовать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'do (did, done)',
            transcription: '[duː] ',
            translation: 'делать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'demonstrate',
            transcription: '[ˈdɛmənstreɪt] ',
            translation: 'демонстрировать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'lean',
            transcription: '[liːn] ',
            translation: 'прислоняться, наклоняться',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'fix',
            transcription: '[fɪks] ',
            translation: 'чинить',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'nod',
            transcription: '[nɒd] ',
            translation: 'кивать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'pose',
            transcription: '[pəʊz] ',
            translation: 'позировать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'send (sent, sent)',
            transcription: '[sɛnd] ',
            translation: 'отправлять',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'burn (burnt, burnt)',
            transcription: '[bɜːn] ',
            translation: 'сжигать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'shut (shut, shut)',
            transcription: '[ʃʌt] ',
            translation: 'закрывать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'line (up)',
            transcription: '[laɪn] ',
            translation: 'выстраивать в линию',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'arrange (the books on the shelves)',
            transcription: '[əˈreɪnʤ]',
            translation: 'приводить в порядок (расставлять)',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'install',
            transcription: '[ɪnˈstɔːl] ',
            translation: 'устанавливать',
            count: '0',
            errors: '0',
            category: 'Физические действия (человека)',
            partOfSpeach: 'Глаголы'
          },
          {
            text: 'south',
            transcription: '[saʊθ] ',
            translation: 'юг',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'west',
            transcription: '[wɛst] ',
            translation: 'запад ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'north',
            transcription: '[nɔːθ] ',
            translation: 'север',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'east',
            transcription: '[iːst] ',
            translation: 'восток ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'world',
            transcription: '[wɜːld] ',
            translation: 'мир ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'water',
            transcription: '[ˈwɔːtə] ',
            translation: 'вода ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'air',
            transcription: '[eə] ',
            translation: 'воздух',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'field',
            transcription: '[fiːld] ',
            translation: 'поле ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'light',
            transcription: '[laɪt] ',
            translation: 'свет ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'space',
            transcription: '[speɪs] ',
            translation: 'пространство (космос) ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'earth',
            transcription: '[ɜːθ] ',
            translation: 'земля (в т.ч. планета)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ground',
            transcription: '[graʊnd] ',
            translation: 'земля (под ногами)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'soil',
            transcription: '[sɔɪl] ',
            translation: 'почва',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'land',
            transcription: '[lænd] ',
            translation: 'земля (территория, страна)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'star',
            transcription: '[stɑː] ',
            translation: 'звезда',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fire',
            transcription: '[ˈfaɪə] ',
            translation: 'огонь (пожар)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nature',
            transcription: '[ˈneɪʧə] ',
            translation: 'природа ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'environment',
            transcription: '[ɪnˈvaɪərənmənt] ',
            translation: 'окружающая среда',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rock',
            transcription: '[rɒk] ',
            translation: 'камень (скала)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sea',
            transcription: '[siː] ',
            translation: 'море ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'seashore',
            transcription: '[ˈsiːʃɔː] ',
            translation: 'берег моря',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sort',
            transcription: '[sɔːt] ',
            translation: 'сорт (разновидность)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'planet',
            transcription: '[ˈplænɪt] ',
            translation: 'планета ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weather',
            transcription: '[ˈwɛðə] ',
            translation: 'погода ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'heat',
            transcription: '[hiːt] ',
            translation: 'жара',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wind',
            transcription: '[wɪnd] ',
            translation: 'ветер ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'track',
            transcription: '[træk] ',
            translation: 'тропа (дорожка)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sky',
            transcription: '[skaɪ] ',
            translation: 'небо ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'camp',
            transcription: '[kæmp] ',
            translation: 'лагерь ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stone',
            transcription: '[stəʊn] ',
            translation: 'камень ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ice',
            transcription: '[aɪs] ',
            translation: 'лед ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sun',
            transcription: '[sʌn] ',
            translation: 'солнце',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wood',
            transcription: '[wʊd] ',
            translation: 'древесина (лес)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mountain',
            transcription: '[ˈmaʊntɪn] ',
            translation: 'гора ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'river',
            transcription: '[ˈrɪvə] ',
            translation: 'река ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wave',
            transcription: '[weɪv] ',
            translation: 'волна ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'atmosphere',
            transcription: '[ˈætməsfɪə] ',
            translation: 'атмосфера ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'storm',
            transcription: '[stɔːm] ',
            translation: 'буря',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'universe',
            transcription: '[ˈjuːnɪvɜːs] ',
            translation: 'вселенная ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dirt',
            transcription: '[dɜːt] ',
            translation: 'грязь ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rain',
            transcription: '[reɪn] ',
            translation: 'дождь ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pollution',
            transcription: '[pəˈluːʃən] ',
            translation: 'загрязнение ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'disaster',
            transcription: '[dɪˈzɑːstə] ',
            translation: 'катастрофа ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'climate',
            transcription: '[ˈklaɪmɪt] ',
            translation: 'климат ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'moon',
            transcription: '[muːn] ',
            translation: 'луна ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cloud',
            transcription: '[klaʊd] ',
            translation: 'облако ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lake',
            transcription: '[leɪk] ',
            translation: 'озеро ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ocean',
            transcription: '[ˈəʊʃən] ',
            translation: 'океан ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'island',
            transcription: '[ˈaɪlənd] ',
            translation: 'остров ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'landscape',
            transcription: '[ˈlænskeɪp] ',
            translation: 'пейзаж ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sand',
            transcription: '[sænd] ',
            translation: 'песок ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'peak',
            transcription: '[piːk] ',
            translation: 'пик ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coast',
            transcription: '[kəʊst] ',
            translation: 'побережье ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pole (geography)',
            transcription: '[pəʊl] ',
            translation: 'полюс (напр. Северный полюс)',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flow',
            transcription: '[fləʊ] ',
            translation: 'поток',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stream',
            transcription: '[striːm] ',
            translation: 'поток ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'desert',
            transcription: '[ˈdɛzət] ',
            translation: 'пустыня ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'diversity',
            transcription: '[daɪˈvɜːsɪti] ',
            translation: 'разнообразие ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'relief',
            transcription: '[rɪˈliːf] ',
            translation: 'рельеф ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'snow',
            transcription: '[snəʊ] ',
            translation: 'снег ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'darkness',
            transcription: '[ˈdɑːknɪs] ',
            translation: 'тьма ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hill',
            transcription: '[hɪl] ',
            translation: 'холм ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bank ',
            transcription: '[bæŋk]  ',
            translation: 'берег реки',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dust',
            transcription: '[dʌst] ',
            translation: 'пыль ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stick',
            transcription: '[stɪk] ',
            translation: 'палка ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'silence',
            transcription: '[ˈsaɪləns] ',
            translation: 'тишина ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reality',
            transcription: '[ri(ː)ˈælɪti] ',
            translation: 'реальность ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shadow',
            transcription: '[ˈʃædəʊ] ',
            translation: 'тень ',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'selection',
            transcription: '[sɪˈlɛkʃən] ',
            translation: 'отбор',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'top',
            transcription: '[tɒp] ',
            translation: 'вершина',
            count: '0',
            errors: '0',
            category: 'Мир, природа',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bird',
            transcription: '[bɜːd] ',
            translation: 'птица ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poultry',
            transcription: '[ˈpəʊltri] ',
            translation: 'домашняя птица',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'duck',
            transcription: '[dʌk] ',
            translation: 'утка',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chicken',
            transcription: '[ˈʧɪkɪn] ',
            translation: 'курица (цыпленок)',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cock, rooster',
            transcription: '[kɒk], [ˈruːstə] ',
            translation: 'петух',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pigeon, dove',
            transcription: '[ˈpɪʤɪn], [dʌv] ',
            translation: 'голубь',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sparrow',
            transcription: '[ˈspærəʊ] ',
            translation: 'воробей',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crow',
            transcription: '[krəʊ] ',
            translation: 'ворона',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'animal',
            transcription: '[ˈænɪməl] ',
            translation: 'животное ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'domestic animal',
            transcription: '[dəʊˈmɛstɪk ˈænɪməl] ',
            translation: 'домашнее животное',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wild animal',
            transcription: '[waɪld ˈænɪməl] ',
            translation: 'дикое животное',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cow',
            transcription: '[kaʊ] ',
            translation: 'корова',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bull',
            transcription: '[bʊl] ',
            translation: 'бык',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'horse',
            transcription: '[hɔːs] ',
            translation: 'лошадь ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pig',
            transcription: '[pɪg] ',
            translation: 'свинья',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cat',
            transcription: '[kæt] ',
            translation: 'кот ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dog',
            transcription: '[dɒg] ',
            translation: 'собака ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mouse',
            transcription: '[maʊs] ',
            translation: 'мышь',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wolf',
            transcription: '[wʊlf] ',
            translation: 'волк',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fox',
            transcription: '[fɒks] ',
            translation: 'лиса',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bear',
            transcription: '[beə] ',
            translation: 'медведь',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'deer',
            transcription: '[dɪə] ',
            translation: 'олень ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lion',
            transcription: '[ˈlaɪən] ',
            translation: 'лев',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rabbit',
            transcription: '[ˈræbɪt] ',
            translation: 'кролик',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'growth',
            transcription: '[grəʊθ] ',
            translation: 'рост ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cell',
            transcription: '[sɛl] ',
            translation: 'клетка (биол.)',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'variety',
            transcription: '[vəˈraɪəti] ',
            translation: 'разнообразие ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'evolution',
            transcription: '[ˌiːvəˈluːʃən] ',
            translation: 'эволюция ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fish',
            transcription: '[fɪʃ] ',
            translation: 'рыба ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'egg',
            transcription: '[ɛg] ',
            translation: 'яйцо ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'male (biol.)',
            transcription: '[meɪl]',
            translation: 'самец',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'female (biol.) ',
            transcription: '[ˈfiːmeɪl]',
            translation: 'самка',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wing',
            transcription: '[wɪŋ] ',
            translation: 'крыло ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'creature',
            transcription: '[ˈkriːʧə] ',
            translation: 'существо ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tree',
            transcription: '[triː] ',
            translation: 'дерево ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'root',
            transcription: '[ruːt] ',
            translation: 'корень ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'leaf',
            transcription: '[liːf] ',
            translation: 'лист растения',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plant',
            transcription: '[plɑːnt] ',
            translation: 'растение',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'forest',
            transcription: '[ˈfɒrɪst] ',
            translation: 'лес ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flower',
            transcription: '[ˈflaʊə] ',
            translation: 'цветок ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'seed',
            transcription: '[siːd] ',
            translation: 'семя',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grass',
            transcription: '[grɑːs] ',
            translation: 'трава ',
            count: '0',
            errors: '0',
            category: 'Животные, растения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'season',
            transcription: '[ˈsiːzn] ',
            translation: 'время года',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'winter',
            transcription: '[ˈwɪntə] ',
            translation: 'зима',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spring',
            transcription: '[sprɪŋ] ',
            translation: 'весна',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'summer',
            transcription: '[ˈsʌmə] ',
            translation: 'лето',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fall (Am.) autumn (Br.)',
            transcription: '[fɔːl] [ˈɔːtəm]',
            translation: 'осень',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'January',
            transcription: '[ˈʤænjʊəri] ',
            translation: 'январь',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'February',
            transcription: '[ˈfɛbrʊəri] ',
            translation: 'февраль',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'March',
            transcription: '[mɑːʧ] ',
            translation: 'март',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'April',
            transcription: '[ˈeɪprəl] ',
            translation: 'апрель',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'May',
            transcription: '[meɪ] ',
            translation: 'май',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'June',
            transcription: '[ʤuːn] ',
            translation: 'июнь',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'July',
            transcription: '[ʤu(ː)ˈlaɪ] ',
            translation: 'июль',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'August',
            transcription: '[ˈɔːgəst] ',
            translation: 'август',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'September',
            transcription: '[sɛpˈtɛmbə] ',
            translation: 'сентябрь',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'October',
            transcription: '[ɒkˈtəʊbə] ',
            translation: 'октябрь',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'November',
            transcription: '[nəʊˈvɛmbə] ',
            translation: 'ноябрь',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'December',
            transcription: '[dɪˈsɛmbə] ',
            translation: 'декабрь',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Monday',
            transcription: '[ˈmʌndeɪ] ',
            translation: 'понедельник',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Tuesday',
            transcription: '[ˈtjuːzdeɪ] ',
            translation: 'вторник',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Wednesday',
            transcription: '[ˈwɛnzdeɪ] ',
            translation: 'среда',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Thursday',
            transcription: '[ˈθɜːzdeɪ] ',
            translation: 'четверг',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Friday',
            transcription: '[ˈfraɪdeɪ] ',
            translation: 'пятница',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Saturday',
            transcription: '[ˈsætədeɪ] ',
            translation: 'суббота',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Sunday',
            transcription: '[ˈsʌndeɪ] ',
            translation: 'воскресенье',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'week',
            transcription: '[wiːk] ',
            translation: 'неделя',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'day',
            transcription: '[deɪ] ',
            translation: 'день ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'night',
            transcription: '[naɪt] ',
            translation: 'ночь (вечер)',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'month',
            transcription: '[mʌnθ] ',
            translation: 'месяц ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hour',
            transcription: '[ˈaʊə] ',
            translation: 'час ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minute',
            transcription: '[ˈmɪnɪt] ',
            translation: 'минута ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'morning',
            transcription: '[ˈmɔːnɪŋ] ',
            translation: 'утро ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'moment',
            transcription: '[ˈməʊmənt] ',
            translation: 'момент ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'century',
            transcription: '[ˈsɛnʧʊri] ',
            translation: 'век',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'period',
            transcription: '[ˈpɪərɪəd] ',
            translation: 'период',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'future',
            transcription: '[ˈfjuːʧə] ',
            translation: 'будущее ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'second',
            transcription: '[ˈsɛkənd] ',
            translation: 'секунда',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'time',
            transcription: '[taɪm] ',
            translation: 'время ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'year',
            transcription: '[jɪə] ',
            translation: 'год ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'decade',
            transcription: '[ˈdɛkeɪd] ',
            translation: 'десять лет ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'evening',
            transcription: '[ˈiːvnɪŋ] ',
            translation: 'вечер ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'past',
            transcription: '[pɑːst] ',
            translation: 'прошлое',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'beginning',
            transcription: '[bɪˈgɪnɪŋ] ',
            translation: 'начало',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'date',
            transcription: '[deɪt] ',
            translation: 'дата',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'era',
            transcription: '[ˈɪərə] ',
            translation: 'эра',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'present (time)',
            transcription: '[ˈprɛznt]',
            translation: 'настоящее',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'afternoon',
            transcription: '[ˈɑːftəˈnuːn] ',
            translation: 'день (время суток)',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'life',
            transcription: '[laɪf] ',
            translation: 'жизнь ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'death',
            transcription: '[dɛθ] ',
            translation: 'смерть ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'birth',
            transcription: '[bɜːθ] ',
            translation: 'рождение ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'soul',
            transcription: '[səʊl] ',
            translation: 'душа ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'funeral',
            transcription: '[ˈfjuːnərəl] ',
            translation: 'похороны ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fate',
            transcription: '[feɪt] ',
            translation: 'судьба ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wisdom',
            transcription: '[ˈwɪzdəm] ',
            translation: 'мудрость ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lifetime',
            transcription: '[ˈlaɪftaɪm] ',
            translation: 'жизнь (продолжительность всей  жизни)',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boy',
            transcription: '[bɔɪ] ',
            translation: 'мальчик ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'girl',
            transcription: '[gɜːl] ',
            translation: 'девушка ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guy',
            transcription: '[gaɪ] ',
            translation: 'парень ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'baby',
            transcription: '[ˈbeɪbi] ',
            translation: 'малыш',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'adult',
            transcription: '[ˈædʌlt] ',
            translation: 'взрослый',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'youth',
            transcription: '[juːθ] ',
            translation: 'молодежь ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'childhood',
            transcription: '[ˈʧaɪldhʊd] ',
            translation: 'детство ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teenager (сокр. teen)',
            transcription: '[ˈtiːnˌeɪʤə]',
            translation: 'подросток ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'man',
            transcription: '[mæn] ',
            translation: 'человек (мужчина)',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'woman',
            transcription: '[ˈwʊmən] ',
            translation: 'женщина ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'child',
            transcription: '[ʧaɪld] ',
            translation: 'ребенок ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'kid',
            transcription: '[kɪd] ',
            translation: 'ребенок ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'twins',
            transcription: '[twɪnz] ',
            translation: 'близнецы ',
            count: '0',
            errors: '0',
            category: 'Человек: жизнь',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'identity',
            transcription: '[aɪˈdɛntɪti] ',
            translation: 'личность (установленная личность)',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'person',
            transcription: '[ˈpɜːsn] ',
            translation: 'человек, персона',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'individual',
            transcription: '[ˌɪndɪˈvɪdjʊəl] ',
            translation: 'личность (индивид)',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'human',
            transcription: '[ˈhjuːmən] ',
            translation: 'человек ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'beauty',
            transcription: '[ˈbjuːti] ',
            translation: 'красотка',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'personality',
            transcription: '[ˌpɜːsəˈnælɪti] ',
            translation: 'личность (персоналия)',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gentleman',
            transcription: '[ˈʤɛntlmən] ',
            translation: 'джентльмен ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lady',
            transcription: '[ˈleɪdi] ',
            translation: 'леди',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'name (first name)',
            transcription: '[neɪm] [fɜːst neɪm]',
            translation: 'имя ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'last name (Am) surname (Br)',
            transcription: '[lɑːst neɪm]  [ˈsɜː neɪm]',
            translation: 'фамилия',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'date of birth',
            transcription: '[deɪt əv bɜːθ] ',
            translation: 'дата рождения',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'birthday',
            transcription: '[ˈbɜːθdeɪ] ',
            translation: 'день рождения ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sex',
            transcription: '[sɛks]',
            translation: 'пол, секс',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'female (person)',
            transcription: '[ˈfiːmeɪl]',
            translation: 'женщина',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'male (person)',
            transcription: '[meɪl]',
            translation: 'мужчина ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'talent',
            transcription: '[ˈtælənt] ',
            translation: 'талант ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'risk',
            transcription: '[rɪsk] ',
            translation: 'риск ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ability',
            transcription: '[əˈbɪlɪti] ',
            translation: 'способность ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'height',
            transcription: '[haɪt] ',
            translation: 'рост',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weight',
            transcription: '[weɪt] ',
            translation: 'вес ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'age',
            transcription: '[eɪʤ] ',
            translation: 'возраст ',
            count: '0',
            errors: '0',
            category: 'Человек: личность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hand',
            transcription: '[hænd] ',
            translation: 'рука (кисть)',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'eye',
            transcription: '[aɪ] ',
            translation: 'глаз ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'body',
            transcription: '[ˈbɒdi] ',
            translation: 'тело ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'face',
            transcription: '[feɪs] ',
            translation: 'лицо ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'heart',
            transcription: '[hɑːt] ',
            translation: 'сердце ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'arm',
            transcription: '[ɑːm] ',
            translation: 'рука (полностью)',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hair',
            transcription: '[heə] ',
            translation: 'волосы ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mouth',
            transcription: '[maʊθ] ',
            translation: 'рот ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'neck',
            transcription: '[nɛk] ',
            translation: 'шея ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lips',
            transcription: '[lɪps] ',
            translation: 'губы',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'head',
            transcription: '[hɛd]',
            translation: 'голова',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'back',
            transcription: '[bæk] ',
            translation: 'спина',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'foot',
            transcription: '[fʊt] ',
            translation: 'нога (ступня)',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'leg',
            transcription: '[lɛg] ',
            translation: 'нога (полностью)',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shoulder',
            transcription: '[ˈʃəʊldə] ',
            translation: 'плечо ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'skin',
            transcription: '[skɪn] ',
            translation: 'кожа ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'finger',
            transcription: '[ˈfɪŋgə] ',
            translation: 'палец ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brain',
            transcription: '[breɪn] ',
            translation: 'мозг ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ear',
            transcription: '[ɪə] ',
            translation: 'ухо ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bone',
            transcription: '[bəʊn] ',
            translation: 'кость ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'knee',
            transcription: '[niː] ',
            translation: 'колено ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'breast',
            transcription: '[brɛst] ',
            translation: 'грудь ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'muscle',
            transcription: '[ˈmʌsl] ',
            translation: 'мышца',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chest',
            transcription: '[ʧɛst] ',
            translation: 'грудь ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nose',
            transcription: '[nəʊz] ',
            translation: 'нос ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tooth',
            transcription: '[tuːθ] ',
            translation: 'зуб ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'throat',
            transcription: '[θrəʊt] ',
            translation: 'горло',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stomach',
            transcription: '[ˈstʌmək] ',
            translation: 'желудок ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hip',
            transcription: '[hɪp] ',
            translation: 'бедро',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cheek',
            transcription: '[ʧiːk] ',
            translation: 'щека ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'voice',
            transcription: '[vɔɪs] ',
            translation: 'голос ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'look',
            transcription: '[lʊk] ',
            translation: 'взгляд',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'breath',
            transcription: '[brɛθ] ',
            translation: 'дыхание ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sight',
            transcription: '[saɪt] ',
            translation: 'зрение ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hearing',
            transcription: '[ˈhɪərɪŋ] ',
            translation: 'слух',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tongue',
            transcription: '[tʌŋ] ',
            translation: 'язык (биол.)',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gesture',
            transcription: '[ˈʤɛsʧə] ',
            translation: 'жест ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'step',
            transcription: '[stɛp] ',
            translation: 'шаг ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sleep',
            transcription: '[sliːp] ',
            translation: 'сон ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'profile',
            transcription: '[ˈprəʊfaɪl] ',
            translation: 'профиль ',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tear ',
            transcription: '[teə]  ',
            translation: 'слеза',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sense',
            transcription: '[sɛns] ',
            translation: 'чувство (физ.)',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'touch',
            transcription: '[tʌʧ] ',
            translation: 'прикосновение',
            count: '0',
            errors: '0',
            category: 'Человек: анатомия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'number',
            transcription: '[ˈnʌmbə] ',
            translation: 'число',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'digit',
            transcription: '[ˈdɪʤɪt] ',
            translation: 'цифра',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'value',
            transcription: '[ˈvæljuː] ',
            translation: 'значение (матем.)',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plus',
            transcription: '[plʌs] ',
            translation: 'плюс',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minus',
            transcription: '[ˈmaɪnəs] ',
            translation: 'минус',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fraction',
            transcription: '[ˈfrækʃən] ',
            translation: 'дробь',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'odd number',
            transcription: '[ɒd] [ˈnʌmbə] ',
            translation: 'нечетное число',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'even number',
            transcription: '[ˈiːvən] [ˈnʌmbə] ',
            translation: 'четное число',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'problem',
            transcription: '[ˈprɒbləm] ',
            translation: 'задача (арифм.)',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'answer',
            transcription: '[ˈɑːnsə] ',
            translation: 'ответ ',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'point',
            transcription: '[pɔɪnt] ',
            translation: 'точка',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brackets',
            transcription: '[ˈbrækɪts] ',
            translation: 'скобки (матем.)',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'percent',
            transcription: '[pəˈsɛnt] ',
            translation: 'процент',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'half',
            transcription: '[hɑːf] ',
            translation: 'половина',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'quarter',
            transcription: '[ˈkwɔːtə] ',
            translation: 'четверть',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'degree',
            transcription: '[dɪˈgriː] ',
            translation: 'степень',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'addition',
            transcription: '[əˈdɪʃ(ə)n] ',
            translation: 'сложение',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'subtraction',
            transcription: '[səbˈtrækʃən] ',
            translation: 'вычитание ',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'multiplication',
            transcription: '[ˌmʌltɪplɪˈkeɪʃən] ',
            translation: 'умножение',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'division',
            transcription: '[dɪˈvɪʒən] ',
            translation: 'деление',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'equality',
            transcription: '[i(ː)ˈkwɒlɪti] ',
            translation: 'равенство',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'line',
            transcription: '[laɪn] ',
            translation: 'линия',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shape',
            transcription: '[ʃeɪp] ',
            translation: 'форма, геом. Тело',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'figure',
            transcription: '[ˈfɪgə] ',
            translation: 'фигура',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'form',
            transcription: '[fɔːm] ',
            translation: 'форма',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'level',
            transcription: '[ˈlɛvl] ',
            translation: 'уровень',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'circle',
            transcription: '[ˈsɜːkl] ',
            translation: 'круг',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'square',
            transcription: '[skweə] ',
            translation: 'квадрат',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'triangle',
            transcription: '[ˈtraɪæŋgl] ',
            translation: 'треугольник',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rectangle',
            transcription: '[ˈrɛkˌtæŋgl] ',
            translation: 'прямоугольник',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sphere',
            transcription: '[sfɪə] ',
            translation: 'сфера',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cube',
            transcription: '[kjuːb] ',
            translation: 'куб',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cone',
            transcription: '[kəʊn] ',
            translation: 'конус',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'majority',
            transcription: '[məˈʤɒrɪti] ',
            translation: 'большинство',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minority',
            transcription: '[maɪˈnɒrɪti] ',
            translation: 'меньшинство',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'increase',
            transcription: '[ˈɪnkriːs] ',
            translation: 'увеличение',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'decrease',
            transcription: '[ˈdiːkriːs] ',
            translation: 'уменьшение',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'combination',
            transcription: '[ˌkɒmbɪˈneɪʃən] ',
            translation: 'комбинация, сочетание',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dimension',
            transcription: '[dɪˈmɛnʃən] ',
            translation: 'измерение (пространств.)',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chart',
            transcription: '[ʧɑːt] ',
            translation: 'схема',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'table ',
            transcription: '[ˈteɪbl]  ',
            translation: 'таблица',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'statistics',
            transcription: '[stəˈtɪstɪks] ',
            translation: 'статистика',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pair',
            transcription: '[peə] ',
            translation: 'пара',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'unit',
            transcription: '[ˈjuːnɪt] ',
            translation: 'единица (напр. измерения)',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'amount, number',
            transcription: '[əˈmaʊnt], [ˈnʌmbə] ',
            translation: 'количество',
            count: '0',
            errors: '0',
            category: 'Математика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'force',
            transcription: '[fɔːs] ',
            translation: 'сила',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'power',
            transcription: '[ˈpaʊə] ',
            translation: 'энергия',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'strength',
            transcription: '[strɛŋθ] ',
            translation: 'сила',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'speed',
            transcription: '[spiːd] ',
            translation: 'скорость',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'size',
            transcription: '[saɪz] ',
            translation: 'размер',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'length',
            transcription: '[lɛŋθ] ',
            translation: 'длина',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'color (colour)',
            transcription: '[ˈkʌlə]',
            translation: 'цвет',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shape (form)',
            transcription: '[ʃeɪp] [fɔːm]',
            translation: 'форма',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'temperature',
            transcription: '[ˈtɛmprɪʧə] ',
            translation: 'температура',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'capacity',
            transcription: '[kəˈpæsɪti] ',
            translation: 'вместимость',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'volume',
            transcription: '[ˈvɒljʊm] ',
            translation: 'объем',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mass',
            transcription: '[mæs] ',
            translation: 'масса',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weight',
            transcription: '[weɪt] ',
            translation: 'вес',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'smell',
            transcription: '[smɛl] ',
            translation: 'запах',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pace',
            transcription: '[peɪs] ',
            translation: 'темп ',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'contrast',
            transcription: '[ˈkɒntrɑːst] ',
            translation: 'контраст',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'absence',
            transcription: '[ˈæbsəns] ',
            translation: 'отсутствие',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'presence',
            transcription: '[ˈprɛzns] ',
            translation: 'присутствие',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'state',
            transcription: '[steɪt] ',
            translation: 'состояние (напр. вещества)',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'noise',
            transcription: '[nɔɪz] ',
            translation: 'шум',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'resistance',
            transcription: '[rɪˈzɪstəns] ',
            translation: 'сопротивление',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tension',
            transcription: '[ˈtɛnʃən] ',
            translation: 'напряжение, натяжение',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'kilogram',
            transcription: '[ˈkɪləʊgræm] ',
            translation: 'килограмм',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meter',
            transcription: '[ˈmiːtə] ',
            translation: 'метр',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'inch',
            transcription: '[ɪnʧ] ',
            translation: 'дюйм',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mile',
            transcription: '[maɪl] ',
            translation: 'миля',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pound',
            transcription: '[paʊnd] ',
            translation: 'фунт',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'foot',
            transcription: '[fʊt] ',
            translation: 'фут',
            count: '0',
            errors: '0',
            category: 'Физические явления, характеристики',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'material',
            transcription: '[məˈtɪərɪəl] ',
            translation: 'материал ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wood',
            transcription: '[wʊd] ',
            translation: 'древесина, дерево',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'glass',
            transcription: '[glɑːs] ',
            translation: 'стекло',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plastic',
            transcription: '[ˈplæstɪk] ',
            translation: 'пластик ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'metal',
            transcription: '[ˈmɛtl] ',
            translation: 'металл',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'steel',
            transcription: '[stiːl] ',
            translation: 'сталь ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plank',
            transcription: '[plæŋk] ',
            translation: 'доска',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'board',
            transcription: '[bɔːd] ',
            translation: 'доска, панель',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'element',
            transcription: '[ˈɛlɪmənt] ',
            translation: 'элемент ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brick',
            transcription: '[brɪk] ',
            translation: 'кирпич',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lead',
            transcription: '[liːd] ',
            translation: 'свинец',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chip',
            transcription: '[ʧɪp]',
            translation: 'осколок (кусочек)',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'substance',
            transcription: '[ˈsʌbstəns] ',
            translation: 'вещество ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'iron',
            transcription: '[ˈaɪən] ',
            translation: 'железо',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mixture',
            transcription: '[ˈmɪksʧə] ',
            translation: 'смесь ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiber',
            transcription: '[faɪbə] ',
            translation: 'волокно',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chemical',
            transcription: '[ˈkɛmɪkəl] ',
            translation: 'химикат',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tissue (biol.)',
            transcription: '[ˈtɪʃuː]',
            translation: 'ткань (биол.)',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mix',
            transcription: '[mɪks] ',
            translation: 'смесь',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'paper',
            transcription: '[ˈpeɪpə] ',
            translation: 'бумага ',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'piece (of something)',
            transcription: '[piːs]',
            translation: 'кусок чего-либо',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bit (of something)',
            transcription: '[bɪt]',
            translation: 'частичка',
            count: '0',
            errors: '0',
            category: 'Материалы',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'process',
            transcription: '[ˈprəʊsɛs] ',
            translation: 'процесс ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'model',
            transcription: '[ˈmɒdl] ',
            translation: 'модель ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'impact',
            transcription: '[ˈɪmpækt] ',
            translation: 'удар (столкновние), воздействие ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hole',
            transcription: '[həʊl] ',
            translation: 'отверстие ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'basis',
            transcription: '[ˈbeɪsɪs] ',
            translation: 'основа',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engine',
            transcription: '[ˈɛnʤɪn] ',
            translation: 'двигатель ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'function',
            transcription: '[ˈfʌnŋkʃən] ',
            translation: 'функция ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'damage',
            transcription: '[ˈdæmɪʤ] ',
            translation: 'повреждение ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'component',
            transcription: '[kəmˈpəʊnənt] ',
            translation: 'компонент ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chain',
            transcription: '[ʧeɪn] ',
            translation: 'цепь ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tear',
            transcription: '[teə] ',
            translation: 'разрыв (прореха)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'improvement',
            transcription: '[ɪmˈpruːvmənt] ',
            translation: 'улучшение ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'core',
            transcription: '[kɔː] ',
            translation: 'ядро ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rise',
            transcription: '[raɪz] ',
            translation: 'увеличение (рост)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'link',
            transcription: '[lɪŋk]',
            translation: 'соединение (звено)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'release',
            transcription: '[rɪˈliːs] ',
            translation: 'выпуск (выход)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hit',
            transcription: '[hɪt] ',
            translation: 'удар (попадание)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'transition',
            transcription: '[trænˈsɪʒən] ',
            translation: 'переход ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cycle',
            transcription: '[ˈsaɪkl] ',
            translation: 'цикл ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exposure (to something)',
            transcription: '[ɪksˈpəʊʒə] ',
            translation: 'подверженность  (воздействию чего-то)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'phase',
            transcription: '[feɪz] ',
            translation: 'фаза ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reduction',
            transcription: '[rɪˈdʌkʃən] ',
            translation: 'сокращение ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shift',
            transcription: '[ʃɪft] ',
            translation: 'сдвиг ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wire',
            transcription: '[ˈwaɪə] ',
            translation: 'провод ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'smoke',
            transcription: '[sməʊk] ',
            translation: 'дым ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shell',
            transcription: '[ʃɛl] ',
            translation: 'оболочка ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gear',
            transcription: '[gɪə] ',
            translation: 'механизм (аппарат), шестерня',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'barrier',
            transcription: '[ˈbærɪə] ',
            translation: 'барьер ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chamber',
            transcription: '[ˈʧeɪmbə] ',
            translation: 'полость (палата)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mechanism',
            transcription: '[ˈmɛkənɪzm] ',
            translation: 'механизм ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'destruction',
            transcription: '[dɪsˈtrʌkʃən] ',
            translation: 'разрушение ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'electricity',
            transcription: '[ɪlɛkˈtrɪsɪti] ',
            translation: 'электричество ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'expansion',
            transcription: '[ɪksˈpænʃən] ',
            translation: 'расширение ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'decline',
            transcription: '[dɪˈklaɪn] ',
            translation: 'спад (склон)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'concentration',
            transcription: '[ˌkɒnsənˈtreɪʃən] ',
            translation: 'концентрация ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reflection',
            transcription: '[rɪˈflɛkʃən] ',
            translation: 'отражение ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mode',
            transcription: '[məʊd] ',
            translation: 'режим (работы чего-то)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'platform',
            transcription: '[ˈplætfɔːm] ',
            translation: 'платформа ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hold',
            transcription: '[həʊld] ',
            translation: 'удержание, хватка',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'segment',
            transcription: '[ˈsɛgmənt] ',
            translation: 'сегмент ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tank',
            transcription: '[tæŋk] ',
            translation: 'бак (танк)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gap',
            transcription: '[gæp] ',
            translation: 'разрыв (пробел)',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'layer',
            transcription: '[ˈleɪə] ',
            translation: 'слой ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'power',
            transcription: '[ˈpaʊə] ',
            translation: 'энергия',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'standard',
            transcription: '[ˈstændəd] ',
            translation: 'стандарт ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'part',
            transcription: '[pɑːt] ',
            translation: 'часть',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'effect',
            transcription: '[ɪˈfɛkt] ',
            translation: 'эффект ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'surface',
            transcription: '[ˈsɜːfɪs] ',
            translation: 'поверхность ',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'portion',
            transcription: '[ˈpɔːʃən] ',
            translation: 'порция',
            count: '0',
            errors: '0',
            category: 'Техника',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'movement',
            transcription: '[ˈmuːvmənt] ',
            translation: 'движение ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'direction',
            transcription: '[dɪˈrɛkʃən] ',
            translation: 'направление ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'edge',
            transcription: '[ɛʤ] ',
            translation: 'край ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fall',
            transcription: '[fɔːl] ',
            translation: 'падение',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'access',
            transcription: '[ˈæksɛs] ',
            translation: 'доступ ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'turn',
            transcription: '[tɜːn] ',
            translation: 'поворот ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'distance',
            transcription: '[ˈdɪstəns] ',
            translation: 'расстояние ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'return',
            transcription: '[rɪˈtɜːn] ',
            translation: 'возвращение ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'middle',
            transcription: '[ˈmɪdl] ',
            translation: 'середина',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'path',
            transcription: '[pɑːθ] ',
            translation: 'путь, тропа',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'move',
            transcription: '[muːv] ',
            translation: 'ход, движение',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'location',
            transcription: '[ləʊˈkeɪʃən] ',
            translation: 'местонахождение, место',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'front',
            transcription: '[frʌnt] ',
            translation: 'передняя часть',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bottom',
            transcription: '[ˈbɒtəm] ',
            translation: 'дно (нижняя часть)',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'trail',
            transcription: '[treɪl] ',
            translation: 'тропа ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'limit',
            transcription: '[ˈlɪmɪt] ',
            translation: 'предел, ограничение',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'zone',
            transcription: '[zəʊn] ',
            translation: 'зона ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'motion',
            transcription: '[ˈməʊʃən] ',
            translation: 'движение ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'row',
            transcription: '[rəʊ] ',
            translation: 'ряд',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'length',
            transcription: '[lɛŋθ] ',
            translation: 'длина',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'width',
            transcription: '[wɪdθ] ',
            translation: 'ширина',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coverage',
            transcription: '[ˈkʌvərɪʤ] ',
            translation: 'охват (покрытие)',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'passage',
            transcription: '[ˈpæsɪʤ] ',
            translation: 'проезд (проход)',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'advance',
            transcription: '[ədˈvɑːns] ',
            translation: 'продвижение',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'arrangement',
            transcription: '[əˈreɪnʤmənt] ',
            translation: 'расположение ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drop',
            transcription: '[drɒp] ',
            translation: 'падение ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'depth',
            transcription: '[dɛpθ] ',
            translation: 'глубина ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boundary',
            transcription: '[ˈbaʊndəri] ',
            translation: 'граница (предел)',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'course',
            transcription: '[kɔːs] ',
            translation: 'курс ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'way',
            transcription: '[weɪ] ',
            translation: 'путь (способ)',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'place',
            transcription: '[pleɪs] ',
            translation: 'место ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'point',
            transcription: '[pɔɪnt] ',
            translation: 'точка (пункт)',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'area',
            transcription: '[ˈeərɪə] ',
            translation: 'местность, регион, район',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'side',
            transcription: '[saɪd] ',
            translation: 'сторона ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'end',
            transcription: '[ɛnd] ',
            translation: 'конец ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'center',
            transcription: '[ˈsɛntə] ',
            translation: 'центр ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'absence',
            transcription: '[ˈæbsəns] ',
            translation: 'отсутствие ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'presence',
            transcription: '[ˈprɛzns] ',
            translation: 'наличие ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'corner',
            transcription: '[ˈkɔːnə] ',
            translation: 'угол ',
            count: '0',
            errors: '0',
            category: 'Пространство',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'problem',
            transcription: '[ˈprɒbləm] ',
            translation: 'проблема ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fact',
            transcription: '[fækt] ',
            translation: 'факт ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'issue',
            transcription: '[ˈɪʃuː] ',
            translation: 'вопрос (проблема) ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'information',
            transcription: '[ˌɪnfəˈmeɪʃən] ',
            translation: 'информация ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'result',
            transcription: '[rɪˈzʌlt] ',
            translation: 'результат ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reason',
            transcription: '[ˈriːzn] ',
            translation: 'причина',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'decision',
            transcription: '[dɪˈsɪʒən] ',
            translation: 'решение ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'matter',
            transcription: '[ˈmætə] ',
            translation: 'дело (вопрос) ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'type',
            transcription: '[taɪp] ',
            translation: 'тип',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rule',
            transcription: '[ruːl] ',
            translation: 'правило ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'goal',
            transcription: '[gəʊl] ',
            translation: 'цель ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'factor',
            transcription: '[ˈfæktə] ',
            translation: 'фактор ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'approach',
            transcription: '[əˈprəʊʧ] ',
            translation: 'подход (к чему-либо)',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'option',
            transcription: '[ˈɒpʃən] ',
            translation: 'вариант (опция)',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'version',
            transcription: '[ˈvɜːʃən] ',
            translation: 'версия ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'solution',
            transcription: '[səˈluːʃən] ',
            translation: 'решение ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mistake',
            transcription: '[mɪsˈteɪk] ',
            translation: 'ошибка ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'category',
            transcription: '[ˈkætɪgəri] ',
            translation: 'категория ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'finding',
            transcription: '[ˈfaɪndɪŋ] ',
            translation: 'находка, вывод, информация, полученная в результате исследования',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'search',
            transcription: '[sɜːʧ] ',
            translation: 'поиск ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'importance',
            transcription: '[ɪmˈpɔːtəns] ',
            translation: 'важность ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cause',
            transcription: '[kɔːz] ',
            translation: 'причина',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'effect',
            transcription: '[ɪˈfɛkt] ',
            translation: 'следствие, эффект',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'conclusion',
            transcription: '[kənˈkluːʒən] ',
            translation: 'вывод, заключение',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'notion',
            transcription: '[ˈnəʊʃən] ',
            translation: 'идея (замечание), представление о чем-то',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'definition',
            transcription: '[ˌdɛfɪˈnɪʃən] ',
            translation: 'определение ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'priority',
            transcription: '[praɪˈɒrɪti] ',
            translation: 'приоритет ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exception',
            transcription: '[ɪkˈsɛpʃən] ',
            translation: 'исключение ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'feature',
            transcription: '[ˈfiːʧə] ',
            translation: 'особенность ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'comparison',
            transcription: '[kəmˈpærɪsn] ',
            translation: 'сравнение ',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'relation',
            transcription: '[rɪˈleɪʃən] ',
            translation: 'отношение, связь',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'criteria',
            transcription: '[kraɪˈtɪərɪə] ',
            translation: 'критерий',
            count: '0',
            errors: '0',
            category: 'Логика',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'idea',
            transcription: '[aɪˈdɪə] ',
            translation: 'идея ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mind',
            transcription: '[maɪnd] ',
            translation: 'разум, сознание',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'attention',
            transcription: '[əˈtɛnʃ(ə)n] ',
            translation: 'внимание ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'thought',
            transcription: '[θɔːt] ',
            translation: 'мысль',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'memory',
            transcription: '[ˈmɛməri] ',
            translation: 'память',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'opinion',
            transcription: '[əˈpɪnjən] ',
            translation: 'мнение ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vision',
            transcription: '[ˈvɪʒən] ',
            translation: 'видение ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'intelligence',
            transcription: '[ɪnˈtɛlɪʤəns] ',
            translation: 'интеллект, разведданные (разведка)',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'focus',
            transcription: '[ˈfəʊkəs] ',
            translation: 'центр, сосредоточение',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'will (power of will)',
            transcription: '[wɪl]',
            translation: 'воля (психол.)',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'thinking',
            transcription: '[ˈθɪŋkɪŋ] ',
            translation: 'мышление',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'perception',
            transcription: '[pəˈsɛpʃən] ',
            translation: 'восприятие ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'doubt',
            transcription: '[daʊt] ',
            translation: 'сомнение',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reflection',
            transcription: '[rɪˈflɛkʃən] ',
            translation: 'размышление',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'insight',
            transcription: '[ˈɪnsaɪt] ',
            translation: 'прозрение',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'imagination',
            transcription: '[ɪˌmæʤɪˈneɪʃən] ',
            translation: 'воображение ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'capability',
            transcription: '[ˌkeɪpəˈbɪlɪti] ',
            translation: 'способность ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fantasy',
            transcription: '[ˈfæntəsi] ',
            translation: 'фантазия ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sense',
            transcription: '[sɛns] ',
            translation: 'смысл ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'interest',
            transcription: '[ˈɪntrɪst] ',
            translation: 'интерес ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meaning',
            transcription: '[ˈmiːnɪŋ] ',
            translation: 'значение',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'interpretation',
            transcription: '[ɪnˌtɜːprɪˈteɪʃən] ',
            translation: 'интерпретация ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'assumption',
            transcription: '[əˈsʌmpʃ(ə)n] ',
            translation: 'предположение ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'perspective',
            transcription: '[pəˈspɛktɪv] ',
            translation: 'точка зрения, взгляд',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'planning',
            transcription: '[ˈplænɪŋ] ',
            translation: 'планирование ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'recognition',
            transcription: '[ˌrɛkəgˈnɪʃən] ',
            translation: 'узнавание',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'consideration',
            transcription: '[kənˌsɪdəˈreɪʃən] ',
            translation: 'рассмотрение ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'intention',
            transcription: '[ɪnˈtɛnʃən] ',
            translation: 'намерение ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'awareness',
            transcription: '[əˈweənəs] ',
            translation: 'осведомленность',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'controversy',
            transcription: '[ˈkɒntrəvɜːsi] ',
            translation: 'противоречие, несогласие по вопросу, бурная дискуссия',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'distinction',
            transcription: '[dɪsˈtɪŋkʃən] ',
            translation: 'различие ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'variation',
            transcription: '[ˌveərɪˈeɪʃən] ',
            translation: 'разновидность, вариация, изменение в чем-либо',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'list',
            transcription: '[lɪst] ',
            translation: 'список ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'expectation',
            transcription: '[ˌɛkspɛkˈteɪʃən] ',
            translation: 'ожидание ',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'initiative',
            transcription: '[ɪˈnɪʃɪətɪv] ',
            translation: 'инициатива, преимущество',
            count: '0',
            errors: '0',
            category: 'Мышление',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'psychology',
            transcription: '[saɪˈkɒləʤi] ',
            translation: 'психология',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'potential',
            transcription: '[pəʊˈtɛnʃəl] ',
            translation: 'потенциал ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'choice',
            transcription: '[ʧɔɪs] ',
            translation: 'выбор ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'burden',
            transcription: '[ˈbɜːdn] ',
            translation: 'бремя ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'significance',
            transcription: '[sɪgˈnɪfɪkəns] ',
            translation: 'значимость ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'experience',
            transcription: '[ɪksˈpɪərɪəns] ',
            translation: 'опыт ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'subject',
            transcription: '[ˈsʌbʤɪkt] ',
            translation: 'субъект, предмет, учебный предмет',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'behavior',
            transcription: '[bɪˈheɪvjə] ',
            translation: 'поведение ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'concern',
            transcription: '[kənˈsɜːn] ',
            translation: 'забота ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'truth',
            transcription: '[truːθ] ',
            translation: 'правда ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lie',
            transcription: '[laɪ] ',
            translation: 'неправда (ложь)',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'purpose',
            transcription: '[ˈpɜːpəs] ',
            translation: 'цель ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'honor',
            transcription: '[ˈɒnə] ',
            translation: 'честь ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'objective',
            transcription: '[əbˈʤɛktɪv] ',
            translation: 'цель ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'feeling',
            transcription: '[ˈfiːlɪŋ] ',
            translation: 'чувство ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fear',
            transcription: '[fɪə] ',
            translation: 'страх ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dream',
            transcription: '[driːm] ',
            translation: 'мечта, сон',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hope',
            transcription: '[həʊp] ',
            translation: 'надежда',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drive',
            transcription: '[draɪv] ',
            translation: 'воодушевление (прилив сил)',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'desire',
            transcription: '[dɪˈzaɪə] ',
            translation: 'желание (страсть)',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'confidence',
            transcription: '[ˈkɒnfɪdəns] ',
            translation: 'уверенность ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'depression',
            transcription: '[dɪˈprɛʃən] ',
            translation: 'депрессия ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'passion',
            transcription: '[ˈpæʃən] ',
            translation: 'страсть ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'habit',
            transcription: '[ˈhæbɪt] ',
            translation: 'привычка ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'anger',
            transcription: '[ˈæŋgə] ',
            translation: 'гнев ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'anxiety',
            transcription: '[æŋˈzaɪəti] ',
            translation: 'тревожность',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'impression',
            transcription: '[ɪmˈprɛʃən] ',
            translation: 'впечатление ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'terror',
            transcription: '[ˈtɛrə] ',
            translation: ' ужас',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'satisfaction',
            transcription: '[ˌsætɪsˈfækʃən] ',
            translation: 'удовлетворение ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pride',
            transcription: '[praɪd] ',
            translation: 'гордость ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'joy',
            transcription: '[ʤɔɪ] ',
            translation: 'радость ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fault',
            transcription: '[fɔːlt] ',
            translation: 'вина',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'emotion',
            transcription: '[ɪˈməʊʃən] ',
            translation: 'эмоции ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mood',
            transcription: '[muːd] ',
            translation: 'настроение ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stress',
            transcription: '[strɛs] ',
            translation: 'стресс',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'attitude',
            transcription: '[ˈætɪtjuːd] ',
            translation: 'отношение (к чему-то)',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pleasure',
            transcription: '[ˈplɛʒə] ',
            translation: 'удовольствие ',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'luck',
            transcription: '[lʌk] ',
            translation: 'удача',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'love',
            transcription: '[lʌv] ',
            translation: 'любовь',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'friendship',
            transcription: '[ˈfrɛndʃɪp] ',
            translation: 'дружба',
            count: '0',
            errors: '0',
            category: 'Психология, чувства',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'family',
            transcription: '[ˈfæmɪli] ',
            translation: 'семья',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'parents',
            transcription: '[ˈpeərənts] ',
            translation: 'родители',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mother',
            transcription: '[ˈmʌðə] ',
            translation: 'мать',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'father',
            transcription: '[ˈfɑːðə] ',
            translation: 'отец',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mom (Am.), mum (Br.)',
            transcription: '[mɒm] [mʌm]',
            translation: 'мама',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dad',
            transcription: '[dæd] ',
            translation: 'папа',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandmother',
            transcription: '[ˈgrænˌmʌðə] ',
            translation: 'бабушка',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'grandfather',
            transcription: '[ˈgrændˌfɑːðə] ',
            translation: 'дедушка',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brother',
            transcription: '[ˈbrʌðə] ',
            translation: 'брат',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sister',
            transcription: '[ˈsɪstə] ',
            translation: 'сестра',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cousin',
            transcription: '[ˈkʌzn] ',
            translation: 'кузен (двоюродные братья и сестры)',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wife',
            transcription: '[waɪf] ',
            translation: 'жена',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'husband',
            transcription: '[ˈhʌzbənd] ',
            translation: 'муж',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'son',
            transcription: '[sʌn] ',
            translation: 'сын',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'daughter',
            transcription: '[ˈdɔːtə] ',
            translation: 'дочь',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'baby',
            transcription: '[ˈbeɪbi] ',
            translation: 'маленький ребенок',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'children, kids',
            transcription: '[ˈʧɪldrən] [kɪdz] ',
            translation: 'дети',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teenager',
            transcription: '[ˈtiːnˌeɪʤə] ',
            translation: 'подросток',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'aunt',
            transcription: '[ɑːnt] ',
            translation: 'тетя',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'uncle',
            transcription: '[ˈʌŋkl] ',
            translation: 'дядя',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'niece',
            transcription: '[niːs] ',
            translation: 'племянница',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nephew',
            transcription: '[ˈnɛvju(ː)] ',
            translation: 'племянник',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'girlfriend',
            transcription: '[ˈgɜːlˌfrɛnd] ',
            translation: 'девушка (подруга)',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boyfriend',
            transcription: '[ˈbɔɪˌfrɛnd] ',
            translation: 'парень (бойфренд)',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'friend',
            transcription: '[frɛnd] ',
            translation: 'друг',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'relatives',
            transcription: '[ˈrɛlətɪvz] ',
            translation: 'родственники',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engagement',
            transcription: '[ɪnˈgeɪʤmənt] ',
            translation: 'помолвка',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'marriage',
            transcription: '[ˈmærɪʤ] ',
            translation: 'женитьба',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wedding',
            transcription: '[ˈwɛdɪŋ] ',
            translation: 'свадьба',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiancée, bride',
            transcription: 'fiancé[iː], [braɪd] ',
            translation: 'невеста',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiancé, groom (bridegroom)',
            transcription: 'fiancé, [grʊm] [ˈbraɪdgrʊm]',
            translation: 'жених',
            count: '0',
            errors: '0',
            category: 'Семья',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'relationships',
            transcription: '[rɪˈleɪʃənʃɪps] ',
            translation: 'отношения ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'love',
            transcription: '[lʌv] ',
            translation: 'любовь',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'friendship',
            transcription: '[ˈfrɛndʃɪp] ',
            translation: 'дружба',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'date',
            transcription: '[deɪt] ',
            translation: 'свидание',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'proposal',
            transcription: '[prəˈpəʊzəl] ',
            translation: 'предложение ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'affair',
            transcription: '[əˈfeə] ',
            translation: 'любовная связь (роман)',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lover',
            transcription: '[ˈlʌvə] ',
            translation: 'любовник, любовница',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'understanding',
            transcription: '[ˌʌndəˈstændɪŋ] ',
            translation: 'понимание ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jealousy',
            transcription: '[ˈʤɛləsi] ',
            translation: 'ревность',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'betrayal',
            transcription: '[bɪˈtreɪəl] ',
            translation: 'предательство',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'argument',
            transcription: '[ˈɑːgjʊmənt] ',
            translation: 'спор, ссора',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'quarrel',
            transcription: '[ˈkwɒrəl] ',
            translation: 'ссора',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'divorce',
            transcription: '[dɪˈvɔːs] ',
            translation: 'развод',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'influence',
            transcription: '[ˈɪnflʊəns] ',
            translation: 'влияние ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'smile',
            transcription: '[smaɪl] ',
            translation: 'улыбка ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'visit',
            transcription: '[ˈvɪzɪt] ',
            translation: 'визит ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'respect',
            transcription: '[rɪsˈpɛkt] ',
            translation: 'уважение ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'surprise',
            transcription: '[səˈpraɪz] ',
            translation: 'сюрприз ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fun',
            transcription: '[fʌn] ',
            translation: 'веселье',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guest',
            transcription: '[gɛst] ',
            translation: 'гость ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'neighbor',
            transcription: '[ˈneɪbə] ',
            translation: 'сосед ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stranger',
            transcription: '[ˈstreɪnʤə]',
            translation: 'незнакомец ',
            count: '0',
            errors: '0',
            category: 'Взаимоотношения',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'team',
            transcription: '[tiːm] ',
            translation: 'команда ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'support',
            transcription: '[səˈpɔːt] ',
            translation: 'поддержка ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'help',
            transcription: '[hɛlp] ',
            translation: 'помощь ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'partner',
            transcription: '[ˈpɑːtnə] ',
            translation: 'партнер ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'participant',
            transcription: '[pɑːˈtɪsɪpənt] ',
            translation: 'участник ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gift',
            transcription: '[gɪft] ',
            translation: 'подарок (дар) ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'colleague',
            transcription: '[ˈkɒliːg] ',
            translation: 'коллега ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'present',
            transcription: '[ˈprɛznt] ',
            translation: 'подарок',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'good',
            transcription: '[gʊd] ',
            translation: 'польза (добро)',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cooperation',
            transcription: '[kəʊˌɒpəˈreɪʃən] ',
            translation: 'сотрудничество ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'challenge',
            transcription: '[ˈʧælɪnʤ] ',
            translation: 'вызов, трудная задача',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'difficulty',
            transcription: '[ˈdɪfɪkəlti] ',
            translation: 'трудность ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'struggle',
            transcription: '[ˈstrʌgl] ',
            translation: 'борьба ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'resolution',
            transcription: '[ˌrɛzəˈluːʃən] ',
            translation: 'решение (задачи, проблемы)',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'competition',
            transcription: '[ˌkɒmpɪˈtɪʃən] ',
            translation: 'конкуренция',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'assistance',
            transcription: '[əˈsɪstəns] ',
            translation: 'помощь ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'opponent',
            transcription: '[əˈpəʊnənt] ',
            translation: 'оппонент',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'trouble',
            transcription: '[ˈtrʌbl] ',
            translation: 'беда ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'conflict',
            transcription: '[ˈkɒnflɪkt] ',
            translation: 'конфликт ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'criticism',
            transcription: '[ˈkrɪtɪsɪzm] ',
            translation: 'критика ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'request',
            transcription: '[rɪˈkwɛst] ',
            translation: 'запрос ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'participation',
            transcription: '[pɑːˌtɪsɪˈpeɪʃən] ',
            translation: 'участие ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'trust',
            transcription: '[trʌst] ',
            translation: 'доверие ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'complaint',
            transcription: '[kəmˈpleɪnt] ',
            translation: 'жалоба ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'consequence',
            transcription: '[ˈkɒnsɪkwəns] ',
            translation: 'последствие ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'thanks',
            transcription: '[θæŋks] ',
            translation: 'благодарности',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'contribution',
            transcription: '[ˌkɒntrɪˈbjuːʃən] ',
            translation: 'вклад ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'circumstance',
            transcription: '[ˈsɜːkəmstəns] ',
            translation: 'обстоятельство ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'offer',
            transcription: '[ˈɒfə] ',
            translation: 'предложение ',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'occasion',
            transcription: '[əˈkeɪʒən] ',
            translation: 'случай (возможность)',
            count: '0',
            errors: '0',
            category: 'Сотрудничество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drawing',
            transcription: '[ˈdrɔːɪŋ] ',
            translation: 'рисунок ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'art',
            transcription: '[ɑːt] ',
            translation: 'искусство, изобразительное искусство (и произведения)',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'event',
            transcription: '[ɪˈvɛnt] ',
            translation: 'мероприятие ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'image',
            transcription: '[ˈɪmɪʤ] ',
            translation: 'изображение ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'picture',
            transcription: '[ˈpɪkʧə] ',
            translation: 'картина, фото',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'artist',
            transcription: '[ˈɑːtɪst] ',
            translation: 'художник ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'design',
            transcription: '[dɪˈzaɪn] ',
            translation: 'дизайн, разработка',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'style',
            transcription: '[staɪl] ',
            translation: 'стиль ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'painting',
            transcription: '[ˈpeɪntɪŋ] ',
            translation: 'живопись, картина',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'camera',
            transcription: '[ˈkæmərə] ',
            translation: 'фотокамера, видеокамера',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'photo',
            transcription: '[ˈfəʊtəʊ] ',
            translation: 'фото ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'culture',
            transcription: '[ˈkʌlʧə] ',
            translation: 'культура ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'background',
            transcription: '[ˈbækgraʊnd] ',
            translation: 'фон, опыт, происхождение человека',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'photograph',
            transcription: '[ˈfəʊtəgrɑːf] ',
            translation: 'фотография ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exhibition',
            transcription: '[ˌɛksɪˈbɪʃən] ',
            translation: 'выставка ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'portrait',
            transcription: '[ˈpɔːtrɪt] ',
            translation: 'портрет ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'paint',
            transcription: '[peɪnt] ',
            translation: 'краска ',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pencil',
            transcription: '[ˈpɛnsl] ',
            translation: 'карандаш',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'charcoal',
            transcription: '[ˈʧɑːkəʊl] ',
            translation: 'уголь (худ.)',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brush',
            transcription: '[brʌʃ] ',
            translation: 'кисть',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pen',
            transcription: '[pɛn] ',
            translation: 'авторучка',
            count: '0',
            errors: '0',
            category: 'Живопись, фотография',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'movie',
            transcription: '[ˈmuːvi] ',
            translation: 'фильм ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'film',
            transcription: '[fɪlm] ',
            translation: 'фильм (кино\\фотопленка)',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'play',
            transcription: '[pleɪ] ',
            translation: 'пьеса',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'audience',
            transcription: '[ˈɔːdjəns] ',
            translation: 'аудитория (зрители)',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'video',
            transcription: '[ˈvɪdɪəʊ] ',
            translation: 'видео ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'actor',
            transcription: '[ˈæktə] ',
            translation: 'актер ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'series',
            transcription: '[ˈsɪəriːz] ',
            translation: 'серия, сериал',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stage',
            transcription: '[steɪʤ] ',
            translation: 'сцена (место)',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dancer',
            transcription: '[ˈdɑːnsə] ',
            translation: 'танцор',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'studio',
            transcription: '[ˈstjuːdɪəʊ] ',
            translation: 'студия ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'theater',
            transcription: '[ˈθɪətə] ',
            translation: 'театр ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'viewer',
            transcription: '[ˈvjuːə] ',
            translation: 'зритель ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'script (screenplay)',
            transcription: '[skrɪpt] [ˈskriːnpleɪ]',
            translation: 'сценарий ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'celebrity',
            transcription: '[sɪˈlɛbrɪti] ',
            translation: 'знаменитость',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'scene',
            transcription: '[siːn] ',
            translation: 'сцена ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'song',
            transcription: '[sɒŋ] ',
            translation: 'песня ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'band',
            transcription: '[bænd] ',
            translation: 'группа (муз.)',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'singer',
            transcription: '[ˈsɪŋə] ',
            translation: 'певец ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'musician',
            transcription: '[mju(ː)ˈzɪʃən] ',
            translation: 'музыкант ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'performance ',
            transcription: '[pəˈfɔːməns]',
            translation: 'выступление',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dance',
            transcription: '[dɑːns] ',
            translation: 'танец ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'concert',
            transcription: '[ˈkɒnsə(ː)t] ',
            translation: 'концерт ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bell',
            transcription: '[bɛl] ',
            translation: 'колокольчик (колокол)',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'string',
            transcription: '[strɪŋ] ',
            translation: 'струна',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'story',
            transcription: '[ˈstɔːri] ',
            translation: 'история ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guitar',
            transcription: '[gɪˈtɑː] ',
            translation: 'гитара',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'piano',
            transcription: '[pɪˈænəʊ]  [ˈpjɑːnəʊ]',
            translation: 'пианино',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'music',
            transcription: '[ˈmjuːzɪk] ',
            translation: 'музыка ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'role',
            transcription: '[rəʊl] ',
            translation: 'роль ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'show',
            transcription: '[ʃəʊ] ',
            translation: 'шоу ',
            count: '0',
            errors: '0',
            category: 'Кино, театр, музыка',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'book',
            transcription: '[bʊk] ',
            translation: 'книга',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'author',
            transcription: '[ˈɔːθə] ',
            translation: 'автор ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'page',
            transcription: '[peɪʤ] ',
            translation: 'страница ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'language',
            transcription: '[ˈlæŋgwɪʤ] ',
            translation: 'язык ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'article',
            transcription: '[ˈɑːtɪkl] ',
            translation: 'статья (напр. в газете)',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'character',
            transcription: '[ˈkærɪktə] ',
            translation: 'характер (персонаж)',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reader',
            transcription: '[ˈriːdə] ',
            translation: 'читатель ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'text',
            transcription: '[tɛkst] ',
            translation: 'текст ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'title',
            transcription: '[ˈtaɪtl] ',
            translation: 'название ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'critic',
            transcription: '[ˈkrɪtɪk] ',
            translation: 'критик ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'context',
            transcription: '[ˈkɒntɛkst] ',
            translation: 'контекст ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'writing',
            transcription: '[ˈraɪtɪŋ] ',
            translation: 'написание, почерк, процесс письма',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'literature',
            transcription: '[ˈlɪtərɪʧə] ',
            translation: 'литература ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reading',
            transcription: '[ˈriːdɪŋ] ',
            translation: 'чтение ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'novel',
            transcription: '[ˈnɒvəl] ',
            translation: 'роман ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tale',
            transcription: '[teɪl] ',
            translation: 'сказка, история',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'story',
            transcription: '[ˈstɔːri] ',
            translation: 'история, рассказ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mystery',
            transcription: '[ˈmɪstəri] ',
            translation: 'тайна, мистика',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'publication',
            transcription: '[ˌpʌblɪˈkeɪʃən] ',
            translation: 'публикация ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poem',
            transcription: '[ˈpəʊɪm] ',
            translation: 'стихотворение ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'essay',
            transcription: '[ˈɛseɪ] ',
            translation: 'эссе, сочинение',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drama',
            transcription: '[ˈdrɑːmə] ',
            translation: 'драма, телевизионная или театральная постановка',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fiction',
            transcription: '[ˈfɪkʃən] ',
            translation: 'вымысел',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'journal',
            transcription: '[ˈʤɜːnl] ',
            translation: 'дневник (журнал)',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'episode',
            transcription: '[ˈɛpɪsəʊd] ',
            translation: 'эпизод ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'adventure',
            transcription: '[ədˈvɛnʧə] ',
            translation: 'приключение',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tragedy',
            transcription: '[ˈtræʤɪdi] ',
            translation: 'трагедия ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poet',
            transcription: '[ˈpəʊɪt] ',
            translation: 'поэт ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poetry',
            transcription: '[ˈpəʊɪtri] ',
            translation: 'поэзия ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plot',
            transcription: '[plɒt] ',
            translation: 'сюжет ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'writer',
            transcription: '[ˈraɪtə] ',
            translation: 'писатель ',
            count: '0',
            errors: '0',
            category: 'Литература',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'god',
            transcription: '[gɒd] ',
            translation: 'бог',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'devil',
            transcription: '[ˈdɛvl]',
            translation: 'дьявол',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'belief',
            transcription: '[bɪˈliːf] ',
            translation: 'вера ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'religion',
            transcription: '[rɪˈlɪʤən] ',
            translation: 'религия ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'paradise',
            transcription: '[ˈpærədaɪs] ',
            translation: 'рай',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hell',
            transcription: '[hɛl] ',
            translation: 'ад ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'faith',
            transcription: '[feɪθ] ',
            translation: 'вера ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'prayer',
            transcription: '[preə] ',
            translation: 'молитва ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'priest',
            transcription: '[priːst] ',
            translation: 'священник ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'heaven',
            transcription: '[ˈhɛvn] ',
            translation: 'небеса ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Bible',
            transcription: '[ˈbaɪbl] ',
            translation: 'Библия ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sin',
            transcription: '[sɪn] ',
            translation: 'грех',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'church',
            transcription: '[ʧɜːʧ] ',
            translation: 'церковь ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'creation',
            transcription: '[kri(ː)ˈeɪʃən] ',
            translation: 'создание (акт/процесс создания)',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'being',
            transcription: '[ˈbiːɪŋ] ',
            translation: 'бытие',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spirit',
            transcription: '[ˈspɪrɪt] ',
            translation: 'дух ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'existence',
            transcription: '[ɪgˈzɪstəns] ',
            translation: 'существование ',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'christian',
            transcription: '[ˈkrɪstjən] ',
            translation: 'христианин',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'muslim',
            transcription: '[ˈmʊslɪm] ',
            translation: 'мусульманин',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'buddhist',
            transcription: '[ˈbʊdɪst] ',
            translation: 'буддист',
            count: '0',
            errors: '0',
            category: 'Религия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'player',
            transcription: '[ˈpleɪə] ',
            translation: 'игрок ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sport',
            transcription: '[spɔːt] ',
            translation: 'спорт ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'race',
            transcription: '[reɪs] ',
            translation: 'гонка ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'seat',
            transcription: '[siːt] ',
            translation: 'сиденье (место)',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ball',
            transcription: '[bɔːl] ',
            translation: 'мяч ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'score',
            transcription: '[skɔː] ',
            translation: 'счет (в игре)',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'turn',
            transcription: '[tɜːn] ',
            translation: 'ход (напр. в игре)',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fan',
            transcription: '[fæn]',
            translation: 'болельщик (поклонник)',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'run (running)',
            transcription: '[rʌn] ',
            translation: 'бег',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exercise',
            transcription: '[ˈɛksəsaɪz] ',
            translation: 'упражнение ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'workout, training',
            transcription: '[ˈwɜːkaʊt], [ˈtreɪnɪŋ] ',
            translation: 'тренировка',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'athlete',
            transcription: '[ˈæθliːt] ',
            translation: 'спортсмен ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'basketball',
            transcription: '[ˈbɑːskɪtˌbɔːl] ',
            translation: 'баскетбол ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'football',
            transcription: '[ˈfʊtbɔːl] ',
            translation: 'футбол ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'soccer',
            transcription: '[ˈsɒkə] ',
            translation: 'футбол',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hockey',
            transcription: '[ˈhɒki] ',
            translation: 'хоккей',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chess',
            transcription: '[ʧɛs]',
            translation: 'шахматы',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'league',
            transcription: '[liːg] ',
            translation: 'лига ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'championship',
            transcription: '[ˈʧæmpjənʃɪp] ',
            translation: 'чемпионат ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'round',
            transcription: '[raʊnd] ',
            translation: 'раунд',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'match',
            transcription: '[mæʧ] ',
            translation: 'матч ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'champion',
            transcription: '[ˈʧæmpjən] ',
            translation: 'чемпион',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tournament',
            transcription: '[ˈtʊənəmənt] ',
            translation: 'турнир ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'game',
            transcription: '[geɪm] ',
            translation: 'игра ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stake, bet',
            transcription: '[steɪk], [bɛt] ',
            translation: 'ставка',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'winner',
            transcription: '[ˈwɪnə] ',
            translation: 'победитель ',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'loser',
            transcription: '[ˈluːzə] ',
            translation: 'проигравший',
            count: '0',
            errors: '0',
            category: 'Спорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'question',
            transcription: '[ˈkwɛsʧən] ',
            translation: 'вопрос ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'note',
            transcription: '[nəʊt] ',
            translation: 'примечание, заметка, записка',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'statement',
            transcription: '[ˈsteɪtmənt] ',
            translation: 'заявление ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'conference',
            transcription: '[ˈkɒnfərəns] ',
            translation: 'конференция ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'detail',
            transcription: '[ˈdiːteɪl] ',
            translation: 'деталь (подробность)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'comment',
            transcription: '[ˈkɒmɛnt] ',
            translation: 'комментарий ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'advice',
            transcription: '[ədˈvaɪs] ',
            translation: 'советы, совет',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'theme, topic',
            transcription: '[θiːm], [ˈtɒpɪk] ',
            translation: 'тема ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'appeal',
            transcription: '[əˈpiːl] ',
            translation: 'обращение ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'secret',
            transcription: '[ˈsiːkrɪt] ',
            translation: 'секрет ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tip',
            transcription: '[tɪp] ',
            translation: 'совет',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tone',
            transcription: '[təʊn] ',
            translation: 'тон ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'promise',
            transcription: '[ˈprɒmɪs] ',
            translation: 'обещание ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sentence ',
            transcription: '[ˈsɛntəns]  ',
            translation: 'предложение (лингв.)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'explanation',
            transcription: '[ˌɛkspləˈneɪʃən] ',
            translation: 'объяснение ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'alternative',
            transcription: '[ɔːlˈtɜːnətɪv] ',
            translation: 'альтернатива ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'interaction',
            transcription: '[ˌɪntərˈækʃən] ',
            translation: 'взаимодействие ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'warning',
            transcription: '[ˈwɔːnɪŋ] ',
            translation: 'предупреждение ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'description',
            transcription: '[dɪsˈkrɪpʃən] ',
            translation: 'описание ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exposure (of a secret)',
            transcription: '[ɪksˈpəʊʒə]',
            translation: 'раскрытие (чего-то тайного)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'joke',
            transcription: '[ʤəʊk] ',
            translation: 'шутка ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'negotiation',
            transcription: '[nɪˌgəʊʃɪˈeɪʃən] ',
            translation: 'переговоры ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'involvement',
            transcription: '[ɪnˈvɒlvmənt] ',
            translation: 'участие (вовлеченность)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'emphasis',
            transcription: '[ˈɛmfəsɪs] ',
            translation: 'акцент (ударение) на что-то',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'suggestion',
            transcription: '[səˈʤɛsʧən] ',
            translation: 'предложение (т.е. предложить что-то)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'approval',
            transcription: '[əˈpruːvəl] ',
            translation: 'подтверждение',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'phrase',
            transcription: '[freɪz] ',
            translation: 'фраза ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dispute',
            transcription: '[dɪsˈpjuːt]',
            translation: 'спор ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dialogue',
            transcription: '[ˈdaɪəlɒg] ',
            translation: 'диалог ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lie',
            transcription: '[laɪ] ',
            translation: 'ложь ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'introduction',
            transcription: '[ˌɪntrəˈdʌkʃən] ',
            translation: 'введение, представление (при знакомстве)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'representation',
            transcription: '[ˌrɛprɪzɛnˈteɪʃən] ',
            translation: 'представление, представительство',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'instance',
            transcription: '[ˈɪnstəns] ',
            translation: 'пример',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'letter',
            transcription: '[ˈlɛtə] ',
            translation: 'письмо ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'response',
            transcription: '[rɪsˈpɒns] ',
            translation: 'ответ ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'answer',
            transcription: '[ˈɑːnsə] ',
            translation: 'ответ ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'talk',
            transcription: '[tɔːk] ',
            translation: 'обсуждение (разговор)',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'discussion',
            transcription: '[dɪsˈkʌʃən] ',
            translation: 'обсуждение ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'debate',
            transcription: '[dɪˈbeɪt] ',
            translation: 'дебаты',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'conversation',
            transcription: '[ˌkɒnvəˈseɪʃən] ',
            translation: 'разговор',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'argument',
            transcription: '[ˈɑːgjʊmənt] ',
            translation: 'аргумент ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exchange',
            transcription: '[ɪksˈʧeɪnʤ] ',
            translation: 'обмен ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'expression',
            transcription: '[ɪksˈprɛʃən] ',
            translation: 'выражение ',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'abuse',
            transcription: '[əˈbjuːs] ',
            translation: 'плохое отношение, причинение вреда',
            count: '0',
            errors: '0',
            category: 'Общение',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'study',
            transcription: '[ˈstʌdi] ',
            translation: 'изучение (исследование)',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'campus',
            transcription: '[ˈkæmpəs] ',
            translation: 'кампус ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'curriculum',
            transcription: '[kəˈrɪkjʊləm] ',
            translation: 'учебный план ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'laboratory (lab)',
            transcription: '[ləˈbɒrətəri] [læb]',
            translation: 'лаборатория ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'graduate',
            transcription: '[ˈgrædjʊət] ',
            translation: 'выпускник ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mark (US), grade (UK)',
            transcription: '[mɑːk] [greɪd] ',
            translation: 'оценка, отметка',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'library',
            transcription: '[ˈlaɪbrəri] ',
            translation: 'библиотека ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'discipline',
            transcription: '[ˈdɪsɪplɪn] ',
            translation: 'дисциплина ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'major',
            transcription: '[ˈmeɪʤə] ',
            translation: 'специальность (в учебе)',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'educator',
            transcription: '[ˈɛdju(ː)keɪtə] ',
            translation: 'педагог ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'testing',
            transcription: '[ˈtɛstɪŋ] ',
            translation: 'тестирование ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'specialist',
            transcription: '[ˈspɛʃəlɪst] ',
            translation: 'специалист ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teacher',
            transcription: '[ˈtiːʧə] ',
            translation: 'учитель ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'professor',
            transcription: '[prəˈfɛsə] ',
            translation: 'профессор',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'school',
            transcription: '[skuːl] ',
            translation: 'школа ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'student',
            transcription: '[ˈstjuːdənt] ',
            translation: 'студент ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'history',
            transcription: '[ˈhɪstəri] ',
            translation: 'история ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'education',
            transcription: '[ˌɛdju(ː)ˈkeɪʃən] ',
            translation: 'образование ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'college',
            transcription: '[ˈkɒlɪʤ] ',
            translation: 'колледж ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'class',
            transcription: '[klɑːs] ',
            translation: 'класс, урок',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'test',
            transcription: '[tɛst] ',
            translation: 'тест',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'degree',
            transcription: '[dɪˈgriː] ',
            translation: 'степень (в т.ч. ученая степень)',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'training',
            transcription: '[ˈtreɪnɪŋ] ',
            translation: 'обучение ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'knowledge',
            transcription: '[ˈnɒlɪʤ] ',
            translation: 'знание ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coach ',
            transcription: '[kəʊʧ]  ',
            translation: 'тренер ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'university',
            transcription: '[ˌjuːnɪˈvɜːsɪti] ',
            translation: 'университет ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lesson',
            transcription: '[ˈlɛsn] ',
            translation: 'урок ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'failure',
            transcription: '[ˈfeɪljə] ',
            translation: 'неудача',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'learning',
            transcription: '[ˈlɜːnɪŋ] ',
            translation: 'изучение, процесс учебы',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'classroom',
            transcription: '[ˈklɑːsrʊm] ',
            translation: 'класс (помещение)',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'session',
            transcription: '[ˈsɛʃən] ',
            translation: 'сеанс, период работы, деятельности, учебы',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'preparation',
            transcription: '[ˌprɛpəˈreɪʃən] ',
            translation: 'подготовка ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'draft',
            transcription: '[drɑːft] ',
            translation: 'набросок (черновик)',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'set',
            transcription: '[sɛt] ',
            translation: 'набор ',
            count: '0',
            errors: '0',
            category: 'Учеба',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'research',
            transcription: '[rɪˈsɜːʧ] ',
            translation: 'исследование ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'term',
            transcription: '[tɜːm] ',
            translation: 'термин',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'professor',
            transcription: '[prəˈfɛsə] ',
            translation: 'профессор ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'science',
            transcription: '[ˈsaɪəns] ',
            translation: 'наука (естественная)',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'expert',
            transcription: '[ˈɛkspɜːt] ',
            translation: 'эксперт ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'theory',
            transcription: '[ˈθɪəri] ',
            translation: 'теория ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'method',
            transcription: '[ˈmɛθəd] ',
            translation: 'метод ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pattern',
            transcription: '[ˈpætən] ',
            translation: 'модель, схема',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'scientist',
            transcription: '[ˈsaɪəntɪst] ',
            translation: 'ученый ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'speech',
            transcription: '[spiːʧ] ',
            translation: 'речь ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'concept',
            transcription: '[ˈkɒnsɛpt] ',
            translation: 'концепция, идея',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'researcher',
            transcription: '[rɪˈsɜːʧə] ',
            translation: 'исследователь ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'scale',
            transcription: '[skeɪl] ',
            translation: 'шкала ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'survey',
            transcription: '[ˈsɜːveɪ] ',
            translation: 'опрос ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sample',
            transcription: '[ˈsɑːmpl] ',
            translation: 'образец ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'technique',
            transcription: '[tɛkˈniːk] ',
            translation: 'техника (прием)',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'principle',
            transcription: '[ˈprɪnsəpl] ',
            translation: 'принцип ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'aspect',
            transcription: '[ˈæspɛkt] ',
            translation: 'аспект, сторона',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'experiment',
            transcription: '[ɪksˈpɛrɪmənt] ',
            translation: 'эксперимент ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'scholar',
            transcription: '[ˈskɒlə] ',
            translation: 'ученый (исследователь)',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'observation',
            transcription: '[ˌɒbzə(ː)ˈveɪʃən] ',
            translation: 'наблюдение ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'error',
            transcription: '[ˈɛrə] ',
            translation: 'ошибка ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'discovery',
            transcription: '[dɪsˈkʌvəri] ',
            translation: 'открытие ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'philosophy',
            transcription: '[fɪˈlɒsəfi] ',
            translation: 'философия ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'phenomenon',
            transcription: '[fɪˈnɒmɪnən] ',
            translation: 'феномен, явление',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'historian',
            transcription: '[hɪsˈtɔːrɪən] ',
            translation: 'историк ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'origin',
            transcription: '[ˈɒrɪʤɪn] ',
            translation: 'происхождение ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'satellite',
            transcription: '[ˈsætəlaɪt] ',
            translation: 'спутник',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'telescope',
            transcription: '[ˈtɛlɪskəʊp] ',
            translation: 'телескоп ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'object',
            transcription: '[ˈɒbʤɪkt] ',
            translation: 'объект ',
            count: '0',
            errors: '0',
            category: 'Наука',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'government',
            transcription: '[ˈgʌv(ə)nmənt] ',
            translation: 'правительство ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'right',
            transcription: '[raɪt] ',
            translation: 'право ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'power',
            transcription: '[ˈpaʊə] ',
            translation: 'власть',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'member',
            transcription: '[ˈmɛmbə] ',
            translation: 'член',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'community',
            transcription: '[kəˈmjuːnɪti] ',
            translation: 'сообщество ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'president',
            transcription: '[ˈprɛzɪdənt] ',
            translation: 'президент ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'party',
            transcription: '[ˈpɑːti] ',
            translation: 'партия ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'leader',
            transcription: '[ˈliːdə] ',
            translation: 'лидер ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'official',
            transcription: '[əˈfɪʃəl] ',
            translation: 'официальное лицо',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'administration',
            transcription: '[ədˌmɪnɪsˈtreɪʃ(ə)n] ',
            translation: 'администрация ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'campaign',
            transcription: '[kæmˈpeɪn] ',
            translation: 'кампания ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'terrorism',
            transcription: '[ˈtɛrərɪzm] ',
            translation: 'терроризм ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'election',
            transcription: '[ɪˈlɛkʃən] ',
            translation: 'выборы ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'authority',
            transcription: '[ɔːˈθɒrɪti] ',
            translation: 'полномочия (власть)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'peace',
            transcription: '[piːs] ',
            translation: 'мир (мирное время)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'politics',
            transcription: '[ˈpɒlɪtɪks] ',
            translation: 'политика ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'candidate',
            transcription: '[ˈkændɪdɪt] ',
            translation: 'кандидат ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'institution',
            transcription: '[ˌɪnstɪˈtjuːʃən] ',
            translation: 'учреждение ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vote',
            transcription: '[vəʊt] ',
            translation: 'голос (на выборах)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'citizen',
            transcription: '[ˈsɪtɪzn] ',
            translation: 'гражданин ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reform',
            transcription: '[rɪˈfɔːm] ',
            translation: 'реформа ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'act',
            transcription: '[ækt] ',
            translation: 'акт ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'freedom',
            transcription: '[ˈfriːdəm] ',
            translation: 'свобода ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'department',
            transcription: '[dɪˈpɑːtmənt] ',
            translation: 'департамент',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crisis',
            transcription: '[ˈkraɪsɪs] ',
            translation: 'кризис ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'committee',
            transcription: '[ˌkɒmɪˈtiː] ',
            translation: 'комитет ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'voter',
            transcription: '[ˈvəʊtə] ',
            translation: 'избиратель ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'democracy',
            transcription: '[dɪˈmɒkrəsi] ',
            translation: 'демократия ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poll',
            transcription: '[pəʊl] ',
            translation: 'опрос ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minority',
            transcription: '[maɪˈnɒrɪti] ',
            translation: 'меньшинство ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'majority',
            transcription: '[məˈʤɒrɪti] ',
            translation: 'большинство',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'union',
            transcription: '[ˈjuːnjən] ',
            translation: 'союз, профсоюз',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'regulation',
            transcription: '[ˌrɛgjʊˈleɪʃən] ',
            translation: 'регулирование, правила',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'politician',
            transcription: '[ˌpɒlɪˈtɪʃən] ',
            translation: 'политик ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'governor',
            transcription: '[ˈgʌvənə] ',
            translation: 'губернатор ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rating',
            transcription: '[ˈreɪtɪŋ] ',
            translation: 'рейтинг ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'regime',
            transcription: '[reɪˈʒiːm] ',
            translation: 'режим (правления)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'opposition',
            transcription: '[ˌɒpəˈzɪʃən] ',
            translation: 'оппозиция ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'minister',
            transcription: '[ˈmɪnɪstə] ',
            translation: 'министр ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'intervention',
            transcription: '[ˌɪntə(ː)ˈvɛnʃən] ',
            translation: 'вмешательство ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coalition',
            transcription: '[ˌkəʊəˈlɪʃən] ',
            translation: 'коалиция ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'independence',
            transcription: '[ˌɪndɪˈpɛndəns] ',
            translation: 'независимость ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'king',
            transcription: '[kɪŋ] ',
            translation: 'король ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'convention',
            transcription: '[kənˈvɛnʃən] ',
            translation: 'съезд',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'revolution',
            transcription: '[ˌrɛvəˈluːʃən] ',
            translation: 'революция ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'senator',
            transcription: '[ˈsɛnətə] ',
            translation: 'сенатор ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'founder',
            transcription: '[ˈfaʊndə] ',
            translation: 'основатель ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'council',
            transcription: '[ˈkaʊns(ə)l] ',
            translation: 'совет (совещание)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'activist',
            transcription: '[ˈæktɪvɪst] ',
            translation: 'активист ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'people',
            transcription: '[ˈpiːpl] ',
            translation: 'люди (народ) ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'state ',
            transcription: '[steɪt] ',
            translation: 'государство, штат',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'group',
            transcription: '[gruːp] ',
            translation: 'группа ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'country',
            transcription: '[ˈkʌntri] ',
            translation: 'страна, сельская местность',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nation',
            transcription: '[ˈneɪʃən] ',
            translation: 'нация, народ, страна',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'society',
            transcription: '[səˈsaɪəti] ',
            translation: 'общество ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'land',
            transcription: '[lænd] ',
            translation: 'земля (территория), страна',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'population',
            transcription: '[ˌpɒpjʊˈleɪʃən] ',
            translation: 'население ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'region',
            transcription: '[ˈriːʤən] ',
            translation: 'регион',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'public',
            transcription: '[ˈpʌblɪk] ',
            translation: 'общественность',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'status',
            transcription: '[ˈsteɪtəs] ',
            translation: 'статус',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'farm',
            transcription: '[fɑːm] ',
            translation: 'ферма ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'folk',
            transcription: '[fəʊk] ',
            translation: 'народ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'border',
            transcription: '[ˈbɔːdə] ',
            translation: 'граница',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'map',
            transcription: '[mæp] ',
            translation: 'карта ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'holiday',
            transcription: '[ˈhɒlədeɪ] ',
            translation: 'праздник ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'immigrant',
            transcription: '[ˈɪmɪgrənt] ',
            translation: 'иммигрант ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'territory',
            transcription: '[ˈtɛrɪtəri] ',
            translation: 'территория ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'volunteer',
            transcription: '[ˌvɒlənˈtɪə] ',
            translation: 'доброволец',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'symbol',
            transcription: '[ˈsɪmbəl] ',
            translation: 'символ ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'immigration',
            transcription: '[ˌɪmɪˈgreɪʃən] ',
            translation: 'иммиграция ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'supporter',
            transcription: '[səˈpɔːtə] ',
            translation: 'сторонник',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'strike',
            transcription: '[straɪk] ',
            translation: 'забастовка ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'speaker',
            transcription: '[ˈspiːkə] ',
            translation: 'спикер (выступающий с речью)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'refugee',
            transcription: '[ˌrɛfju(ː)ˈʤiː] ',
            translation: 'беженец',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cabinet ',
            transcription: '[ˈkæbɪnɪt]  ',
            translation: 'кабинет министров',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spokesman',
            transcription: '[ˈspəʊksmən] ',
            translation: 'докладчик, оратор',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'slave',
            transcription: '[sleɪv] ',
            translation: 'раб ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'terror',
            transcription: '[ˈtɛrə] ',
            translation: 'террор, ужас',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'elite',
            transcription: '[eɪˈliːt] ',
            translation: 'элита ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'conservative',
            transcription: '[kənˈsɜːvətɪv] ',
            translation: 'консерватор',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'protest',
            transcription: '[ˈprəʊtɛst] ',
            translation: 'протест ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shelter',
            transcription: '[ˈʃɛltə] ',
            translation: 'приют ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tribe',
            transcription: '[traɪb] ',
            translation: 'племя ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ally',
            transcription: '[ˈælaɪ] ',
            translation: 'союзник ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'army',
            transcription: '[ˈɑːmi] ',
            translation: 'армия ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'military',
            transcription: '[ˈmɪlɪtəri] ',
            translation: 'вооруженные силы, военные',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'enemy',
            transcription: '[ˈɛnɪmi] ',
            translation: 'враг',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'combat',
            transcription: '[ˈkɒmbæt] ',
            translation: 'сражение',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'strategy',
            transcription: '[ˈstrætɪʤi] ',
            translation: 'стратегия ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tactics',
            transcription: '[ˈtæktɪks] ',
            translation: 'тактика',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'soldier',
            transcription: '[ˈsəʊlʤə] ',
            translation: 'солдат ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'officer',
            transcription: '[ˈɒfɪsə] ',
            translation: 'офицер, должностное лицо',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'troops',
            transcription: '[truːps] ',
            translation: 'войска (пехота)',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'victory',
            transcription: '[ˈvɪktəri] ',
            translation: 'победа ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'defeat',
            transcription: '[dɪˈfiːt] ',
            translation: 'поражение',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hero',
            transcription: '[ˈhɪərəʊ] ',
            translation: 'герой ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'commander',
            transcription: '[kəˈmɑːndə] ',
            translation: 'командир ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flag',
            transcription: '[flæg] ',
            translation: 'флаг ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'banner',
            transcription: '[ˈbænə] ',
            translation: 'знамя',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rank',
            transcription: '[ræŋk] ',
            translation: 'звание ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'war',
            transcription: '[wɔː] ',
            translation: 'война ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'battle',
            transcription: '[ˈbætl] ',
            translation: 'битва ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shot',
            transcription: '[ʃɒt] ',
            translation: 'выстрел ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fight',
            transcription: '[faɪt] ',
            translation: 'борьба (драка)',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bomb',
            transcription: '[bɒm] ',
            translation: 'бомба ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bullet',
            transcription: '[ˈbʊlɪt] ',
            translation: 'пуля ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shell',
            transcription: '[ʃɛl]',
            translation: 'снаряд',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'missile',
            transcription: "['mɪsaɪl]",
            translation: 'ракета, реактивный снаряд',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ammunition (сокр. ammo)',
            transcription: "[ˌæmjə'nɪʃ(ə)n] ['æməu]",
            translation: 'боеприпасы',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shooting',
            transcription: '[ˈʃuːtɪŋ] ',
            translation: 'стрельба ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'casualty',
            transcription: "['kæʒjuəltɪ]",
            translation: 'жертва',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weapon',
            transcription: '[ˈwɛpən] ',
            translation: 'оружие ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gun',
            transcription: 'gʌn] ',
            translation: 'пистолет, оружие',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'machine gun',
            transcription: '[məˈʃiːn gʌn] ',
            translation: 'пулемет',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rifle',
            transcription: '[ˈraɪfl] ',
            translation: 'винтовка',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'armor',
            transcription: '[ˈɑːmə] ',
            translation: 'броня',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'attack',
            transcription: '[əˈtæk] ',
            translation: 'атака ',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'general',
            transcription: '[ˈʤɛnərəl] ',
            translation: 'генерал',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'division',
            transcription: '[dɪˈvɪʒən] ',
            translation: 'дивизия (подразделение)',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'unit',
            transcription: '[ˈjuːnɪt] ',
            translation: 'войсковая единица',
            count: '0',
            errors: '0',
            category: 'Армия',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'price',
            transcription: '[praɪs] ',
            translation: 'цена ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tax',
            transcription: '[tæks] ',
            translation: 'налог ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cost',
            transcription: '[kɒst] ',
            translation: 'стоимость ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'product',
            transcription: '[ˈprɒdʌkt] ',
            translation: 'продукт (товар)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'organization',
            transcription: '[ˌɔːgənaɪˈzeɪʃən] ',
            translation: 'организация ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'economy',
            transcription: '[i(ː)ˈkɒnəmi] ',
            translation: 'экономика ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bank',
            transcription: '[bæŋk] ',
            translation: 'банк',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'agency',
            transcription: '[ˈeɪʤənsi] ',
            translation: 'агентство ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'store',
            transcription: '[stɔː] ',
            translation: 'магазин (склад) ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fund',
            transcription: '[fʌnd] ',
            translation: 'фонд ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stock ',
            transcription: '[stɒk]',
            translation: 'акция',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'loss',
            transcription: '[lɒs] ',
            translation: 'ущерб',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'trade',
            transcription: '[treɪd] ',
            translation: 'торговля ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'deal',
            transcription: '[diːl] ',
            translation: 'сделка ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bill',
            transcription: '[bɪl] ',
            translation: 'счет (напр. в ресторане) ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'benefit',
            transcription: '[ˈbɛnɪfɪt] ',
            translation: 'выгода ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'firm',
            transcription: '[fɜːm] ',
            translation: 'фирма ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'management',
            transcription: '[ˈmænɪʤmənt] ',
            translation: 'управление (руководящий состав)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'charge',
            transcription: '[ʧɑːʤ] ',
            translation: 'плата (цена)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'property',
            transcription: '[ˈprɒpəti] ',
            translation: 'собственность',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'base',
            transcription: '[beɪs] ',
            translation: 'база, основание',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'owner',
            transcription: '[ˈəʊnə] ',
            translation: 'владелец ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'investment',
            transcription: '[ɪnˈvɛstmənt] ',
            translation: 'инвестиции ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'consumer',
            transcription: '[kənˈsjuːmə] ',
            translation: 'потребитель ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'budget',
            transcription: '[ˈbʌʤɪt] ',
            translation: 'бюджет ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'agreement',
            transcription: '[əˈgriːmənt] ',
            translation: 'соглашение ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'capital',
            transcription: '[ˈkæpɪtl] ',
            translation: 'капитал ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'account',
            transcription: '[əˈkaʊnt] ',
            translation: 'счет (в банке)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'credit',
            transcription: '[ˈkrɛdɪt] ',
            translation: 'кредит ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'income',
            transcription: '[ˈɪnkʌm] ',
            translation: 'доход ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'insurance',
            transcription: '[ɪnˈʃʊərəns] ',
            translation: 'страхование ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sales',
            transcription: '[seɪlz] ',
            translation: 'продажи',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'contract',
            transcription: '[ˈkɒntrækt] ',
            translation: 'контракт ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'demand',
            transcription: '[dɪˈmɑːnd] ',
            translation: 'спрос (требование)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'share',
            transcription: '[ʃeə] ',
            translation: 'доля, акция',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'competition',
            transcription: '[ˌkɒmpɪˈtɪʃən] ',
            translation: 'конкуренция',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'claim',
            transcription: '[kleɪm] ',
            translation: 'претензия, заявление',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'supply (econom.)',
            transcription: '[səˈplaɪ]',
            translation: 'предложение (эконом.)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'supply (provision)',
            transcription: '[səˈplaɪ]',
            translation: 'обеспечение (материальное)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'market',
            transcription: '[ˈmɑːkɪt] ',
            translation: 'рынок ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'assessment',
            transcription: '[əˈsɛsmənt] ',
            translation: 'оценка ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'revenue',
            transcription: '[ˈrɛvɪnjuː] ',
            translation: 'доход ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'loan',
            transcription: '[ləʊn] ',
            translation: 'кредит (заем)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'investor',
            transcription: '[ɪnˈvɛstə] ',
            translation: 'инвестор ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'profit',
            transcription: '[ˈprɒfɪt] ',
            translation: 'прибыль ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cash',
            transcription: '[kæʃ] ',
            translation: 'наличные ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'advertisement (сокр. ad)',
            transcription: '[ədˈvɜːtɪsmənt]  [æd]',
            translation: 'реклама (объявление)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'real estate',
            transcription: '[rɪəl ɪsˈteɪt] ',
            translation: 'недвижимость',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'branch',
            transcription: '[brɑːnʧ] ',
            translation: 'филиал ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fee',
            transcription: '[fiː] ',
            translation: 'плата (вознаграждение)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'division',
            transcription: '[dɪˈvɪʒən] ',
            translation: 'подразделение (административное\\политическое)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'debt',
            transcription: '[dɛt] ',
            translation: 'долг (в значении "денежный долг")',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'check',
            transcription: '[ʧɛk] ',
            translation: 'чек',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'check',
            transcription: '[ʧɛk] ',
            translation: 'проверка',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'welfare',
            transcription: '[ˈwɛlfeə] ',
            translation: 'благосостояние, пособие по безработице',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'representative',
            transcription: '[ˌrɛprɪˈzɛntətɪv] ',
            translation: 'представитель ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'association',
            transcription: '[əˌsəʊsɪˈeɪʃ(ə)n] ',
            translation: 'ассоциация ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'asset',
            transcription: '[ˈæsɛt] ',
            translation: 'актив (вклад)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'payment',
            transcription: '[ˈpeɪmənt] ',
            translation: 'оплата ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'expense',
            transcription: '[ɪksˈpɛns] ',
            translation: 'расход',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'funding',
            transcription: '[ˈfʌndɪŋ] ',
            translation: 'финансирование ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'savings',
            transcription: '[ˈseɪvɪŋz] ',
            translation: 'сбережения',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gain',
            transcription: '[geɪn] ',
            translation: 'прибыль',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sale',
            transcription: '[seɪl] ',
            translation: 'продажа (распродажа)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'foundation',
            transcription: '[faʊnˈdeɪʃən] ',
            translation: 'основание (создание чего-то)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'goods',
            transcription: '[gʊdz] ',
            translation: 'товары',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'marketing',
            transcription: '[ˈmɑːkɪtɪŋ] ',
            translation: 'маркетинг ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'poverty',
            transcription: '[ˈpɒvəti] ',
            translation: 'бедность ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spendings',
            transcription: '[ˈspɛndɪŋz] ',
            translation: 'расходы ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'evaluation',
            transcription: '[ɪˌvæljʊˈeɪʃən] ',
            translation: 'оценка ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'commission',
            transcription: '[kəˈmɪʃən] ',
            translation: 'комиссия ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'deficit',
            transcription: '[ˈdɛfɪsɪt] ',
            translation: 'дефицит ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'estimate',
            transcription: '[ˈɛstɪmɪt] ',
            translation: 'оценка ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'enterprise',
            transcription: '[ˈɛntəpraɪz] ',
            translation: 'предприятие ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employment',
            transcription: '[ɪmˈplɔɪmənt] ',
            translation: 'трудовая занятость',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wealth',
            transcription: '[wɛlθ] ',
            translation: 'богатство ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'brand',
            transcription: '[brænd] ',
            translation: 'бренд ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stake',
            transcription: '[steɪk] ',
            translation: 'акция',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'corporation',
            transcription: '[ˌkɔːpəˈreɪʃən] ',
            translation: 'корпорация ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'provision',
            transcription: '[prəˈvɪʒən] ',
            translation: 'снабжение, обеспечение',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fortune',
            transcription: '[ˈfɔːʧən] ',
            translation: 'состояние (денежн.)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shopping',
            transcription: '[ˈʃɒpɪŋ] ',
            translation: 'покупка товаров ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'finance',
            transcription: '[faɪˈnæns] ',
            translation: 'финансы ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'transfer',
            transcription: '[ˈtrænsfə(ː)] ',
            translation: 'передача, перевод (напр. денежный)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'treaty',
            transcription: '[ˈtriːti] ',
            translation: 'договор (между странами), переговоры',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'licence (Br.) license (Am.)',
            transcription: '[ˈlaɪsəns]',
            translation: 'лицензия ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'establishment',
            transcription: '[ɪsˈtæblɪʃmənt] ',
            translation: 'основание (создание чего-то)',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'partnership',
            transcription: '[ˈpɑːtnəʃɪp] ',
            translation: 'партнерство ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'buyer',
            transcription: '[ˈbaɪə] ',
            translation: 'покупатель ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stability',
            transcription: '[stəˈbɪlɪti] ',
            translation: 'стабильность ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'customer',
            transcription: '[ˈkʌstəmə] ',
            translation: 'клиент, покупатель',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'client',
            transcription: '[ˈklaɪənt] ',
            translation: 'клиент ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'package',
            transcription: '[ˈpækɪʤ] ',
            translation: 'посылка',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'business',
            transcription: '[ˈbɪznɪs] ',
            translation: 'бизнес ',
            count: '0',
            errors: '0',
            category: 'Экономика, бизнес',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'resource',
            transcription: '[rɪˈsɔːs] ',
            translation: 'ресурс ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'oil',
            transcription: '[ɔɪl] ',
            translation: 'нефть',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gas',
            transcription: '[gæs] ',
            translation: 'газ (бензин)',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'industry',
            transcription: '[ˈɪndəstri] ',
            translation: 'промышленность ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'technology',
            transcription: '[tɛkˈnɒləʤi] ',
            translation: 'технология ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'energy',
            transcription: '[ˈɛnəʤi] ',
            translation: 'энергия ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plant ',
            transcription: '[plɑːnt]  ',
            translation: 'завод',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'machine',
            transcription: '[məˈʃiːn] ',
            translation: 'машина (напр.станок)',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'facility',
            transcription: '[fəˈsɪlɪti] ',
            translation: 'промышленное здание',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'equipment',
            transcription: '[ɪˈkwɪpmənt] ',
            translation: 'оборудование ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'manufacturer',
            transcription: '[ˌmænjʊˈfækʧərə] ',
            translation: 'производитель ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mine',
            transcription: '[maɪn] ',
            translation: 'шахта',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'factory',
            transcription: '[ˈfæktəri] ',
            translation: 'фабрика',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engineering',
            transcription: '[ˌɛnʤɪˈnɪərɪŋ] ',
            translation: 'инженерия',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'storage',
            transcription: '[ˈstɔːrɪʤ] ',
            translation: 'хранилище, хранение',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'production',
            transcription: '[prəˈdʌkʃən] ',
            translation: 'производство ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'silver',
            transcription: '[ˈsɪlvə] ',
            translation: 'серебро ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gold',
            transcription: '[gəʊld] ',
            translation: 'золото ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crop',
            transcription: '[krɒp] ',
            translation: 'урожай ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'maker',
            transcription: '[ˈmeɪkə] ',
            translation: 'производитель ',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'waste',
            transcription: '[weɪst] ',
            translation: 'отходы',
            count: '0',
            errors: '0',
            category: 'Промышленность',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'case',
            transcription: '[keɪs] ',
            translation: 'дело (случай)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'company',
            transcription: '[ˈkʌmpəni] ',
            translation: 'компания ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'work',
            transcription: '[wɜːk] ',
            translation: 'работа ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'money',
            transcription: '[ˈmʌni] ',
            translation: 'деньги ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'job',
            transcription: '[ʤɒb] ',
            translation: 'работа ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'service',
            transcription: '[ˈsɜːvɪs] ',
            translation: 'услуга (обслуживание) ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'office',
            transcription: '[ˈɒfɪs] ',
            translation: 'офис ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'policy',
            transcription: '[ˈpɒlɪsi] ',
            translation: 'политика (в знач. стратегия, линия поведения)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plan',
            transcription: '[plæn] ',
            translation: 'план ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'control',
            transcription: '[kənˈtrəʊl] ',
            translation: 'контроль ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'report',
            transcription: '[rɪˈpɔːt] ',
            translation: 'отчет (доклад)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'site',
            transcription: '[saɪt] ',
            translation: 'объект (напр. строительный) ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'performance',
            transcription: '[pəˈfɔːməns] ',
            translation: 'производительность',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'effort',
            transcription: '[ˈɛfət] ',
            translation: 'усилие (труд)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'action',
            transcription: '[ˈækʃ(ə)n] ',
            translation: 'действие ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'activity',
            transcription: '[ækˈtɪvɪti] ',
            translation: 'деятельность ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'practice',
            transcription: '[ˈpræktɪs] ',
            translation: 'практика',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'skill',
            transcription: '[skɪl] ',
            translation: 'умение, навык',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'order',
            transcription: '[ˈɔːdə] ',
            translation: 'порядок, приказ, заказ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meeting',
            transcription: '[ˈmiːtɪŋ] ',
            translation: 'встреча ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'operation',
            transcription: '[ˌɒpəˈreɪʃən] ',
            translation: 'операция ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'interview',
            transcription: '[ˈɪntəvjuː] ',
            translation: 'интервью (собеседование)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'quality',
            transcription: '[ˈkwɒlɪti] ',
            translation: 'качество ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'success',
            transcription: '[səkˈsɛs] ',
            translation: 'успех ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'task',
            transcription: '[tɑːsk] ',
            translation: 'задача ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'break ',
            transcription: '[breɪk]  ',
            translation: 'перерыв ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mission',
            transcription: '[ˈmɪʃən] ',
            translation: 'миссия ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'labor',
            transcription: '[ˈleɪbə] ',
            translation: 'труд',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'weekend',
            transcription: '[ˈwiːkˈɛnd] ',
            translation: 'уикэнд, выходные (сб, вс)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'attempt',
            transcription: '[əˈtɛmpt] ',
            translation: 'попытка ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'day off',
            transcription: '[deɪ ɒf] ',
            translation: 'выходной день',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lack (of something)',
            transcription: '[læk] ',
            translation: 'нехватка',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'target',
            transcription: '[ˈtɑːgɪt] ',
            translation: 'цель ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tool',
            transcription: '[tuːl] ',
            translation: 'инструмент ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'leadership',
            transcription: '[ˈliːdəʃɪp] ',
            translation: 'руководство (лидерство)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'procedure',
            transcription: '[prəˈsiːʤə] ',
            translation: 'процедура (порядок выполнения действий)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'document',
            transcription: '[ˈdɒkjʊmənt] ',
            translation: 'документ ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'contacts',
            transcription: '[ˈkɒntækts] ',
            translation: 'контактные данные',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'progress',
            transcription: '[ˈprəʊgrəs] ',
            translation: 'прогресс ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'application ',
            transcription: '[ˌæplɪˈkeɪʃ(ə)n]',
            translation: 'заявка',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'instruction',
            transcription: '[ɪnˈstrʌkʃən] ',
            translation: 'инструкция ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'instrument',
            transcription: '[ˈɪnstrʊmənt] ',
            translation: 'инструмент ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'file',
            transcription: '[faɪl] ',
            translation: 'файл, документ, личное дело',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'outcome',
            transcription: '[ˈaʊtkʌm] ',
            translation: 'итог (результат)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'duty',
            transcription: '[ˈdjuːti] ',
            translation: 'долг (должностная обязанность)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'manner (in that manner)',
            transcription: '[ˈmænə] ',
            translation: 'способ выполнения действия',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'requirement',
            transcription: '[rɪˈkwaɪəmənt] ',
            translation: 'требование ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'copy',
            transcription: '[ˈkɒpi] ',
            translation: 'экземпляр книги, копия чего-либо',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tips (money)',
            transcription: '[tɪps] ',
            translation: 'чаевые',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'achievement',
            transcription: '[əˈʧiːvmənt] ',
            translation: 'достижение ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'characteristic',
            transcription: '[ˌkærɪktəˈrɪstɪk] ',
            translation: 'характеристика, черта',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'signal',
            transcription: '[ˈsɪgnl] ',
            translation: 'сигнал ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'agenda',
            transcription: '[əˈʤɛndə] ',
            translation: 'повестка дня ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'schedule',
            transcription: '[ˈʃɛdjuːl] ',
            translation: 'график ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'print',
            transcription: '[prɪnt] ',
            translation: 'печать (печатная продукция), отпечаток',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stamp',
            transcription: '[stæmp] ',
            translation: 'печать, штамп',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pass',
            transcription: '[pɑːs] ',
            translation: 'пропуск',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employer',
            transcription: '[ɪmˈplɔɪə] ',
            translation: 'работодатель ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'prospect',
            transcription: '[ˈprɒspɛkt] ',
            translation: 'перспектива ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'entry',
            transcription: '[ˈɛntri] ',
            translation: 'запись (напр.в журнале)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'disorder',
            transcription: '[dɪsˈɔːdə] ',
            translation: 'беспорядок',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'distribution',
            transcription: '[ˌdɪstrɪˈbjuːʃən] ',
            translation: 'распределение, распространение',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'command',
            transcription: '[kəˈmɑːnd] ',
            translation: 'команда (приказ)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'veteran',
            transcription: '[ˈvɛtərən] ',
            translation: 'ветеран ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'recovery',
            transcription: '[rɪˈkʌvəri] ',
            translation: 'восстановление ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'salary',
            transcription: '[ˈsæləri] ',
            translation: 'зарплата ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'observer',
            transcription: '[əbˈzɜːvə] ',
            translation: 'наблюдатель ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'award',
            transcription: '[əˈwɔːd] ',
            translation: 'награда ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'routine',
            transcription: '[ruːˈtiːn] ',
            translation: 'заведенный порядок (определенная последовательность действий)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wage',
            transcription: '[weɪʤ] ',
            translation: 'зарплата',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pay',
            transcription: '[peɪ] ',
            translation: 'оплата',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'recommendation',
            transcription: '[ˌrɛkəmɛnˈdeɪʃən] ',
            translation: 'рекомендация ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'delivery',
            transcription: '[dɪˈlɪvəri] ',
            translation: 'доставка ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'craft',
            transcription: '[krɑːft] ',
            translation: 'ремесло ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'headquarters',
            transcription: '[ˈhɛdˈkwɔːtəz] ',
            translation: 'штаб, главный офис',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'earnings',
            transcription: '[ˈɜːnɪŋz] ',
            translation: 'заработки',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'load, cargo',
            transcription: '[ləʊd], [ˈkɑːgəʊ] ',
            translation: 'груз',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sheet',
            transcription: '[ʃiːt] ',
            translation: 'лист (бумаги)',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'possibility',
            transcription: '[ˌpɒsəˈbɪlɪti] ',
            translation: 'возможность ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'advantage',
            transcription: '[ədˈvɑːntɪʤ] ',
            translation: 'преимущество ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'project',
            transcription: '[ˈprɒʤɛkt] ',
            translation: 'проект ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'use',
            transcription: '[juːs] ',
            translation: 'использование ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reputation',
            transcription: '[ˌrɛpju(ː)ˈteɪʃən] ',
            translation: 'репутация ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'career',
            transcription: '[kəˈrɪə] ',
            translation: 'карьера ',
            count: '0',
            errors: '0',
            category: 'Работа, карьера',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'director',
            transcription: '[dɪˈrɛktə] ',
            translation: 'директор, режиссер',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'position',
            transcription: '[pəˈzɪʃən] ',
            translation: 'положение (должность )',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'worker',
            transcription: '[ˈwɜːkə] ',
            translation: 'работник ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'staff',
            transcription: '[stɑːf] ',
            translation: 'персонал ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lawyer',
            transcription: '[ˈlɔːjə] ',
            translation: 'адвокат ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'executive',
            transcription: '[ɪgˈzɛkjʊtɪv] ',
            translation: 'управленец, топ-менеджер',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'manager',
            transcription: '[ˈmænɪʤə] ',
            translation: 'менеджер ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'employee',
            transcription: '[ˌɛmplɔɪˈiː] ',
            translation: 'сотрудник ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'agent',
            transcription: '[ˈeɪʤənt] ',
            translation: 'агент ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'farmer',
            transcription: '[ˈfɑːmə] ',
            translation: 'фермер ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'analyst',
            transcription: '[ˈænəlɪst] ',
            translation: 'аналитик ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engineer',
            transcription: '[ˌɛnʤɪˈnɪə] ',
            translation: 'инженер ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'secretary',
            transcription: '[ˈsɛkrətri] ',
            translation: 'секретарь ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'physician',
            transcription: '[fɪˈzɪʃən] ',
            translation: 'врач ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'journalist',
            transcription: '[ˈʤɜːnəlɪst] ',
            translation: 'журналист ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'designer',
            transcription: '[dɪˈzaɪnə] ',
            translation: 'дизайнер ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'retirement',
            transcription: '[rɪˈtaɪəmənt] ',
            translation: 'выход на пенсию ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'consultant',
            transcription: '[kənˈsʌltənt] ',
            translation: 'консультант ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'doctor ',
            transcription: '[ˈdɒktə]  ',
            translation: 'врач ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'teacher',
            transcription: '[ˈtiːʧə] ',
            translation: 'учитель',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'driver',
            transcription: '[ˈdraɪvə] ',
            translation: 'водитель',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cook',
            transcription: '[kʊk] ',
            translation: 'повар',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'artist',
            transcription: '[ˈɑːtɪst] ',
            translation: 'художник',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'administrator',
            transcription: '[ədˈmɪnɪstreɪtə] ',
            translation: 'администратор ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'CEO',
            transcription: '[siː-iː-əʊ] ',
            translation: 'генеральный директор ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'deputy',
            transcription: '[ˈdɛpjʊti] ',
            translation: 'заместитель ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'assistant',
            transcription: '[əˈsɪstənt] ',
            translation: 'ассистент',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'correspondent',
            transcription: '[ˌkɒrɪsˈpɒndənt] ',
            translation: 'корреспондент ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'counselor',
            transcription: '[ˈkaʊns(ə)lə] ',
            translation: 'советник, консультант',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'editor',
            transcription: '[ˈɛdɪtə] ',
            translation: 'редактор, главный редактор',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'producer',
            transcription: '[prəˈdjuːsə] ',
            translation: 'производитель (продюсер)',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'master',
            transcription: '[ˈmɑːstə] ',
            translation: 'мастер (капитан корабля)',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boss',
            transcription: '[bɒs] ',
            translation: 'босс ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'personnel',
            transcription: '[ˌpɜːsəˈnɛl] ',
            translation: 'персонал ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dealer',
            transcription: '[ˈdiːlə] ',
            translation: 'дилер, продавец',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'head (of something)',
            transcription: '[hɛd] ',
            translation: 'руководитель',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'reporter',
            transcription: '[rɪˈpɔːtə] ',
            translation: 'репортер ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chairman',
            transcription: '[ˈʧeəmən] ',
            translation: 'председатель ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chief',
            transcription: '[ʧiːf] ',
            translation: 'шеф (глава)',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'adviser',
            transcription: '[ədˈvaɪzə] ',
            translation: 'советник ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'profession',
            transcription: '[prəˈfɛʃən] ',
            translation: 'профессия ',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'professional',
            transcription: '[prəˈfɛʃənl] ',
            translation: 'профессионал',
            count: '0',
            errors: '0',
            category: 'Профессии, должности',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'city',
            transcription: '[ˈsɪti] ',
            translation: 'большой город',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'town',
            transcription: '[taʊn] ',
            translation: 'маленький город',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'road',
            transcription: '[rəʊd] ',
            translation: 'дорога ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'building',
            transcription: '[ˈbɪldɪŋ] ',
            translation: 'здание ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'street',
            transcription: '[striːt] ',
            translation: 'улица ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bar',
            transcription: '[bɑː] ',
            translation: 'бар',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'station',
            transcription: '[ˈsteɪʃən] ',
            translation: 'станция ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'trip',
            transcription: '[trɪp] ',
            translation: 'поездка ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hotel',
            transcription: '[həʊˈtɛl] ',
            translation: 'отель ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'yard',
            transcription: '[jɑːd] ',
            translation: 'двор ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'neighborhood',
            transcription: '[ˈneɪbəhʊd] ',
            translation: 'район (окрестность)',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'park',
            transcription: '[pɑːk] ',
            translation: 'парк ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'village',
            transcription: '[ˈvɪlɪʤ] ',
            translation: 'деревня ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'resident',
            transcription: '[ˈrɛzɪdənt] ',
            translation: 'житель ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'club',
            transcription: '[klʌb] ',
            translation: 'клуб ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'district',
            transcription: '[ˈdɪstrɪkt] ',
            translation: 'район ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crowd',
            transcription: '[kraʊd] ',
            translation: 'толпа ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'block',
            transcription: '[blɒk] ',
            translation: 'квартал',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shop',
            transcription: '[ʃɒp] ',
            translation: 'магазин ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'construction',
            transcription: '[kənˈstrʌkʃən] ',
            translation: 'строительство ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tour',
            transcription: '[tʊə] ',
            translation: 'тур ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'restaurant',
            transcription: '[ˈrɛst(ə)ˌrɒŋ] ',
            translation: 'ресторан ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bridge',
            transcription: '[brɪʤ] ',
            translation: 'мост ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'traffic',
            transcription: '[ˈtræfɪk] ',
            translation: 'дорожное движение',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'museum',
            transcription: '[mju(ː)ˈzɪəm] ',
            translation: 'музей ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'emergency',
            transcription: '[ɪˈmɜːʤənsi] ',
            translation: 'чрезвычайная ситуация',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'airport',
            transcription: '[ˈeəpɔːt] ',
            translation: 'аэропорт ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'address',
            transcription: '[əˈdrɛs] ',
            translation: 'адрес ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'beach',
            transcription: '[biːʧ] ',
            translation: 'пляж ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'opening',
            transcription: '[ˈəʊpnɪŋ] ',
            translation: 'открытие ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'route',
            transcription: '[ruːt] ',
            translation: 'маршрут ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'post office',
            transcription: '[pəʊst] ',
            translation: 'почта',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'settlement',
            transcription: '[ˈsɛtlmənt] ',
            translation: 'поселение',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'parking lot (Am.), car park (Br.)',
            transcription: '[ˈpɑːkɪŋ lɒt], [kɑː pɑːk]',
            translation: 'парковка ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stop',
            transcription: '[stɒp] ',
            translation: 'остановка',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tower',
            transcription: '[ˈtaʊə] ',
            translation: 'башня ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mayor',
            transcription: '[meə] ',
            translation: 'мэр ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'highway',
            transcription: '[ˈhaɪweɪ] ',
            translation: 'шоссе ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bench',
            transcription: '[bɛnʧ] ',
            translation: 'скамья ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sightseeing',
            transcription: '[ˈsaɪtˌsiːɪŋz] ',
            translation: 'осмотр достопримечательностей',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'column',
            transcription: '[ˈkɒləm] ',
            translation: 'колонна',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'resort',
            transcription: '[rɪˈzɔːt] ',
            translation: 'курорт ',
            count: '0',
            errors: '0',
            category: 'Город',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'car',
            transcription: '[kɑː] ',
            translation: 'автомобиль ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ship',
            transcription: '[ʃɪp] ',
            translation: 'корабль ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plane',
            transcription: '[pleɪn] ',
            translation: 'самолет ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'driver',
            transcription: '[ˈdraɪvə] ',
            translation: 'водитель ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boat',
            transcription: '[bəʊt] ',
            translation: 'лодка ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'truck',
            transcription: '[trʌk] ',
            translation: 'грузовик ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vehicle',
            transcription: '[ˈviːɪkl] ',
            translation: 'автомобиль ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flight',
            transcription: '[flaɪt] ',
            translation: 'полет ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bus',
            transcription: '[bʌs] ',
            translation: 'автобус ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fuel',
            transcription: '[fjʊəl] ',
            translation: 'топливо',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'engine',
            transcription: '[ˈɛnʤɪn] ',
            translation: 'двигатель ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ticket',
            transcription: '[ˈtɪkɪt] ',
            translation: 'билет ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'train',
            transcription: '[treɪn] ',
            translation: 'поезд ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crew',
            transcription: '[kruː] ',
            translation: 'экипаж ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'accident',
            transcription: '[ˈæksɪdənt] ',
            translation: 'авария ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pilot',
            transcription: '[ˈpaɪlət] ',
            translation: 'пилот ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wheel',
            transcription: '[wiːl] ',
            translation: 'колесо',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ride',
            transcription: '[raɪd] ',
            translation: 'поездка ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'passenger',
            transcription: '[ˈpæsɪnʤə] ',
            translation: 'пассажир ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'airline',
            transcription: '[ˈeəlaɪn] ',
            translation: 'авиакомпания ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bike',
            transcription: '[baɪk] ',
            translation: 'велосипед (мотоцикл)',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'transportation',
            transcription: '[ˌtrænspɔːˈteɪʃən] ',
            translation: 'транспортировка',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'deck',
            transcription: '[dɛk] ',
            translation: 'палуба ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'aircraft',
            transcription: '[ˈeəkrɑːft] ',
            translation: 'самолет, воздушное судно',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crash',
            transcription: '[kræʃ] ',
            translation: 'авария',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vessel',
            transcription: '[ˈvɛsl] ',
            translation: 'судно ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'port',
            transcription: '[pɔːt] ',
            translation: 'порт ',
            count: '0',
            errors: '0',
            category: 'Транспорт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'victim',
            transcription: '[ˈvɪktɪm] ',
            translation: 'жертва ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'threat',
            transcription: '[θrɛt] ',
            translation: 'угроза ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'felony',
            transcription: '[ˈfɛləni] ',
            translation: 'преступление (тяжелое, уголовное)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'misdemeanor',
            transcription: '[ˌmɪsdɪˈmiːnə] ',
            translation: 'мелкое преступление',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'attorney',
            transcription: '[əˈtɜːni] ',
            translation: 'адвокат ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'judge',
            transcription: '[ˈʤʌʤ] ',
            translation: 'судья ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'safety',
            transcription: '[ˈseɪfti] ',
            translation: 'безопасность ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'investigation',
            transcription: '[ɪnˌvɛstɪˈgeɪʃən] ',
            translation: 'расследование ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'murder',
            transcription: '[ˈmɜːdə] ',
            translation: 'убийство ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'justice',
            transcription: '[ˈʤʌstɪs] ',
            translation: 'справедливость ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'danger',
            transcription: '[ˈdeɪnʤə] ',
            translation: 'опасность ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jury',
            transcription: '[ˈʤʊəri] ',
            translation: 'жюри (присяжные)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'judgment',
            transcription: '[ˈʤʌʤmənt] ',
            translation: 'суждение (решение суда)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'witness',
            transcription: '[ˈwɪtnɪs] ',
            translation: 'свидетель ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'incident',
            transcription: '[ˈɪnsɪdənt] ',
            translation: 'инцидент ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'legislation',
            transcription: '[ˌlɛʤɪsˈleɪʃən] ',
            translation: 'законодательство, законы',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sentence',
            transcription: '[ˈsɛntəns] ',
            translation: 'приговор',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'prosecutor',
            transcription: '[ˈprɒsɪkjuːtə] ',
            translation: 'прокурор ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'investigator',
            transcription: '[ɪnˈvɛstɪgeɪtə] ',
            translation: 'следователь ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lawyer',
            transcription: '[ˈlɔːjə] ',
            translation: 'адвокат',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'suicide',
            transcription: '[ˈsjʊɪsaɪd] ',
            translation: 'самоубийство ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'enforcement',
            transcription: '[ɪnˈfɔːsmənt] ',
            translation: 'принуждение к исполнению закона',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'prisoner',
            transcription: '[ˈprɪznə] ',
            translation: 'заключенный, пленник',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'inmate',
            transcription: '[ˈɪnmeɪt] ',
            translation: 'заключенный',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jail',
            transcription: '[ʤeɪl] ',
            translation: 'тюрьма ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'killer',
            transcription: '[ˈkɪlə] ',
            translation: 'убийца ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gang',
            transcription: '[gæŋ] ',
            translation: 'банда ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'advocate',
            transcription: '[ˈædvəkɪt] ',
            translation: 'адвокат',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lawsuit',
            transcription: '[ˈlɔːsjuːt] ',
            translation: 'иск ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'testimony',
            transcription: '[ˈtɛstɪməni] ',
            translation: 'свидетельство, показания',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'penalty',
            transcription: '[ˈpɛnlti] ',
            translation: 'карательная мера',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'offense',
            transcription: '[əˈfɛns] ',
            translation: 'правонарушение',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'terrorist',
            transcription: '[ˈtɛrərɪst] ',
            translation: 'террорист ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'assault',
            transcription: '[əˈsɔːlt] ',
            translation: 'нападение ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'proof',
            transcription: '[pruːf] ',
            translation: 'доказательство ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'violation',
            transcription: '[ˌvaɪəˈleɪʃən] ',
            translation: 'нарушение ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'crime',
            transcription: '[kraɪm] ',
            translation: 'преступление ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cell (prison)',
            transcription: '[sɛl] ',
            translation: 'камера (тюремная), клетка',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'trial',
            transcription: '[ˈtraɪəl] ',
            translation: 'испытание (судебный процесс)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'prison',
            transcription: '[ˈprɪzn] ',
            translation: 'тюрьма ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'evidence',
            transcription: '[ˈɛvɪdəns] ',
            translation: 'улика ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gun',
            transcription: '[gʌn] ',
            translation: 'пистолет',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'protection',
            transcription: '[prəˈtɛkʃən] ',
            translation: 'защита ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'court ',
            transcription: '[kɔːt]  ',
            translation: 'суд',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'security',
            transcription: '[sɪˈkjʊərɪti] ',
            translation: 'безопасность (охрана)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'officer',
            transcription: '[ˈɒfɪsə] ',
            translation: 'офицер, должностное лицо',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cop',
            transcription: '[kɒp] ',
            translation: 'коп (полицейский)',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'police',
            transcription: '[pəˈliːs] ',
            translation: 'полиция ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guard',
            transcription: '[gɑːd] ',
            translation: 'охранник ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'law',
            transcription: '[lɔː] ',
            translation: 'закон ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'will',
            transcription: '[wɪl]',
            translation: 'завещание',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'violence',
            transcription: '[ˈvaɪələns] ',
            translation: 'насилие ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'responsibility',
            transcription: '[rɪsˌpɒnsəˈbɪlɪti] ',
            translation: 'ответственность ',
            count: '0',
            errors: '0',
            category: 'Закон',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'home',
            transcription: '[həʊm] ',
            translation: 'дом',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'room',
            transcription: '[ruːm] ',
            translation: 'комната',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'house',
            transcription: '[haʊs] ',
            translation: 'дом (здание)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'door',
            transcription: '[dɔː] ',
            translation: 'дверь ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'view',
            transcription: '[vjuː] ',
            translation: 'вид ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'table',
            transcription: '[ˈteɪbl] ',
            translation: 'стол ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'court',
            transcription: '[kɔːt] ',
            translation: 'дворик ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wall',
            transcription: '[wɔːl] ',
            translation: 'стена ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'window',
            transcription: '[ˈwɪndəʊ] ',
            translation: 'окно ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'floor',
            transcription: '[flɔː] ',
            translation: 'пол (этаж)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bed',
            transcription: '[bɛd] ',
            translation: 'кровать ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chair',
            transcription: '[ʧeə] ',
            translation: 'стул ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'garden',
            transcription: '[ˈgɑːdn] ',
            translation: 'сад ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'kitchen',
            transcription: '[ˈkɪʧɪn] ',
            translation: 'кухня ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bedroom',
            transcription: '[ˈbɛdru(ː)m] ',
            translation: 'спальня',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'living room',
            transcription: '[ˈlɪvɪŋ ruːm] ',
            translation: 'гостиная',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bathroom',
            transcription: '[ˈbɑːθru(ː)m] ',
            translation: 'туалет, ванная',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'basement',
            transcription: '[ˈbeɪsmənt] ',
            translation: 'подвал',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fan',
            transcription: '[fæn] ',
            translation: 'вентилятор ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spot',
            transcription: '[spɒt] ',
            translation: 'пятно ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'screen',
            transcription: '[skriːn] ',
            translation: 'экран ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'flat (Br.) apartment (Am.)',
            transcription: '[flæt] [əˈpɑːtmənt] ',
            translation: 'квартира ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'living',
            transcription: '[ˈlɪvɪŋ] ',
            translation: 'проживание',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'key',
            transcription: '[kiː] ',
            translation: 'ключ ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pool',
            transcription: '[puːl] ',
            translation: 'бассейн ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'desk',
            transcription: '[dɛsk] ',
            translation: 'стол (письменный, рабочий)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'visitor',
            transcription: '[ˈvɪzɪtə] ',
            translation: 'посетитель ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'guest',
            transcription: '[gɛst]',
            translation: 'гость',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hall',
            transcription: '[hɔːl] ',
            translation: 'зал ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mirror',
            transcription: '[ˈmɪrə] ',
            translation: 'зеркало ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'telephone',
            transcription: '[ˈtɛlɪfəʊn] ',
            translation: 'телефон ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'household',
            transcription: '[ˈhaʊshəʊld] ',
            translation: 'домашнее хозяйство',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gate',
            transcription: '[geɪt] ',
            translation: 'ворота ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'roof',
            transcription: '[ruːf] ',
            translation: 'крыша ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'housing',
            transcription: '[ˈhaʊzɪŋ] ',
            translation: 'жилье',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dormitory, dorm',
            transcription: "['dɔːmɪt(ə)rɪ] [dɔːm]",
            translation: 'общежитие (студенческое)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pot',
            transcription: '[pɒt] ',
            translation: 'горшок ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'knife',
            transcription: '[naɪf] ',
            translation: 'нож ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'recipe',
            transcription: '[ˈrɛsɪpi] ',
            translation: 'рецепт ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'roll',
            transcription: '[rəʊl] ',
            translation: 'рулон',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clock',
            transcription: '[klɒk] ',
            translation: 'часы (настенные)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ceiling',
            transcription: '[ˈsiːlɪŋ] ',
            translation: 'потолок ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fence',
            transcription: '[fɛns] ',
            translation: 'забор ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'furniture',
            transcription: '[ˈfɜːnɪʧə] ',
            translation: 'мебель ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wardrobe',
            transcription: '[ˈwɔːdrəʊb]',
            translation: 'шкаф (для одежды)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stair',
            transcription: '[steə] ',
            translation: 'ступенька, лестница',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'entrance',
            transcription: '[ˈɛntrəns] ',
            translation: 'вход ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'exit',
            transcription: '[ˈɛksɪt]',
            translation: 'выход',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'oven',
            transcription: '[ˈʌvn] ',
            translation: 'печь ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'comfort',
            transcription: '[ˈkʌmfət] ',
            translation: 'комфорт ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shelf',
            transcription: '[ʃɛlf] ',
            translation: 'полка ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'can',
            transcription: '[kæn] ',
            translation: 'консервная банка',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lawn',
            transcription: '[lɔːn] ',
            translation: 'газон ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'case',
            transcription: '[keɪs] ',
            translation: 'кейс (футляр)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'card',
            transcription: '[kɑːd] ',
            translation: 'карточка',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'stuff',
            transcription: '[stʌf] ',
            translation: 'вещи, хлам, барахло',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'box',
            transcription: '[bɒks] ',
            translation: 'коробка ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'item',
            transcription: '[ˈaɪtəm] ',
            translation: 'предмет',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'collection',
            transcription: '[kəˈlɛkʃən] ',
            translation: 'коллекция ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tape',
            transcription: '[teɪp] ',
            translation: 'лента ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cover',
            transcription: '[ˈkʌvə] ',
            translation: 'крышка, покрытие, обложка',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lid',
            transcription: '[lɪd]',
            translation: 'крышка',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bowl',
            transcription: '[bəʊl] ',
            translation: 'чаша ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'frame',
            transcription: '[freɪm] ',
            translation: 'рамка ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'album',
            transcription: '[ˈælbəm] ',
            translation: 'альбом ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tube',
            transcription: '[tjuːb] ',
            translation: 'тюбик (трубка)',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pack',
            transcription: '[pæk] ',
            translation: 'упаковка ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'a bunch of ',
            transcription: '[ə bʌnʧ ɒv]  ',
            translation: 'куча чего-то',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'match',
            transcription: '[mæʧ] ',
            translation: 'спичка',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cigarette',
            transcription: '[ˌsɪgəˈrɛt] ',
            translation: 'сигарета',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'thing',
            transcription: '[θɪŋ] ',
            translation: 'вещь ',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'glass',
            transcription: '[glɑːs] ',
            translation: 'стакан',
            count: '0',
            errors: '0',
            category: 'Дом, быт',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'breakfast',
            transcription: '[ˈbrɛkfəst] ',
            translation: 'завтрак ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'lunch',
            transcription: '[lʌnʧ] ',
            translation: 'обед (ланч)',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dinner',
            transcription: '[ˈdɪnə] ',
            translation: 'обед ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'supper',
            transcription: '[ˈsʌpə] ',
            translation: 'ужин',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'food',
            transcription: '[fuːd] ',
            translation: 'еда ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coffee',
            transcription: '[ˈkɒfi] ',
            translation: 'кофе ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'wine',
            transcription: '[waɪn] ',
            translation: 'вино ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'salt',
            transcription: '[sɔːlt] ',
            translation: 'соль ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fat',
            transcription: '[fæt] ',
            translation: 'жир ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sugar',
            transcription: '[ˈʃʊgə] ',
            translation: 'сахар ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fruit',
            transcription: '[fruːt] ',
            translation: 'фрукты ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meal',
            transcription: '[miːl] ',
            translation: 'еда (блюдо)',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bottle',
            transcription: '[ˈbɒtl] ',
            translation: 'бутылка ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'meat',
            transcription: '[miːt] ',
            translation: 'мясо ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'beer',
            transcription: '[bɪə] ',
            translation: 'пиво ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pepper',
            transcription: '[ˈpɛpə] ',
            translation: 'перец ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'vegetables',
            transcription: '[ˈvɛʤɪtəblz] ',
            translation: 'овощи',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dish',
            transcription: '[dɪʃ] ',
            translation: 'блюдо ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cream',
            transcription: '[kriːm] ',
            translation: 'сливки',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drink',
            transcription: '[drɪŋk] ',
            translation: 'напиток ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'taste',
            transcription: '[teɪst] ',
            translation: 'вкус ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'milk',
            transcription: '[mɪlk] ',
            translation: 'молоко ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cheese',
            transcription: '[ʧiːz] ',
            translation: 'сыр ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bread',
            transcription: '[brɛd] ',
            translation: 'хлеб ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tea',
            transcription: '[tiː] ',
            translation: 'чай ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'alcohol',
            transcription: '[ˈælkəhɒl] ',
            translation: 'алкоголь ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'potato',
            transcription: '[pəˈteɪtəʊ] ',
            translation: 'картофель ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'sauce',
            transcription: '[sɔːs] ',
            translation: 'соус ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'juice',
            transcription: '[ʤuːs] ',
            translation: 'сок ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'beans',
            transcription: '[biːnz] ',
            translation: 'бобы',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tomato',
            transcription: '[təˈmɑːtəʊ] ',
            translation: 'помидор',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'butter',
            transcription: '[ˈbʌtə] ',
            translation: 'сливочное масло',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'spoon',
            transcription: '[spuːn] ',
            translation: ' ложка',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fork',
            transcription: '[fɔːk]',
            translation: 'вилка',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'knife',
            transcription: '[naɪf]',
            translation: 'нож',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'corn',
            transcription: '[kɔːn] ',
            translation: 'кукуруза ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cake',
            transcription: '[keɪk] ',
            translation: 'пирог, торт',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'onion',
            transcription: '[ˈʌnjən] ',
            translation: 'лук ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ingredient',
            transcription: '[ɪnˈgriːdjənt] ',
            translation: 'ингредиент ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chocolate',
            transcription: '[ˈʧɒkəlɪt] ',
            translation: 'шоколад ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'apple',
            transcription: '[ˈæpl] ',
            translation: 'яблоко ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'rice',
            transcription: '[raɪs] ',
            translation: 'рис',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'salad',
            transcription: '[ˈsæləd] ',
            translation: 'салат ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'honey',
            transcription: '[ˈhʌni] ',
            translation: 'мед ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'garlic',
            transcription: '[ˈgɑːlɪk] ',
            translation: 'чеснок ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cup',
            transcription: '[kʌp] ',
            translation: 'чашка ',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'plate',
            transcription: '[pleɪt] ',
            translation: 'тарелка',
            count: '0',
            errors: '0',
            category: 'Еда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shoes',
            transcription: '[ʃuːz] ',
            translation: 'обувь',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clothes',
            transcription: '[kləʊðz] ',
            translation: 'одежда ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'ring',
            transcription: '[rɪŋ] ',
            translation: 'кольцо ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'dress',
            transcription: '[drɛs] ',
            translation: 'платье ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shirt',
            transcription: '[ʃɜːt] ',
            translation: 'рубашка ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'fashion',
            transcription: '[ˈfæʃən] ',
            translation: 'мода ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tie',
            transcription: '[taɪ] ',
            translation: 'галстук ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hat',
            transcription: '[hæt] ',
            translation: 'шляпа ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'coat',
            transcription: '[kəʊt] ',
            translation: 'пальто ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'jacket',
            transcription: '[ˈʤækɪt] ',
            translation: 'куртка (пиджак)',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cap',
            transcription: '[ˈkæp] ',
            translation: 'кепка',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'boots',
            transcription: '[buːts] ',
            translation: 'ботинки',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'belt',
            transcription: '[bɛlt] ',
            translation: 'ремень ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'watch',
            transcription: '[wɒʧ] ',
            translation: 'наручные часы',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'label',
            transcription: '[ˈleɪbl] ',
            translation: 'этикетка ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'button',
            transcription: '[ˈbʌtn] ',
            translation: 'кнопка (пуговица)',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pants, trousers',
            transcription: '[pænts] [ˈtraʊzəz]',
            translation: 'брюки',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'glasses',
            transcription: '[ˈglɑːsɪz] ',
            translation: 'очки',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'bag',
            transcription: '[bæg] ',
            translation: 'сумка ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'purse',
            transcription: '[pɜːs] ',
            translation: 'дамская сумочка, кошелек',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'suit',
            transcription: '[sjuːt] ',
            translation: 'костюм ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pocket',
            transcription: '[ˈpɒkɪt] ',
            translation: 'карман ',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'skirt',
            transcription: '[skɜːt] ',
            translation: 'юбка',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'T-shirt',
            transcription: '[ˈtiːʃɜːt] ',
            translation: 'футболка',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'zip',
            transcription: '[zɪp] ',
            translation: 'молния (застежка)',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'gloves',
            transcription: '[glʌvz] ',
            translation: 'перчатки',
            count: '0',
            errors: '0',
            category: 'Одежда',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'health',
            transcription: '[hɛlθ] ',
            translation: 'здоровье ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'care',
            transcription: '[keə] ',
            translation: 'уход ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'drug',
            transcription: '[drʌg] ',
            translation: 'лекарство (наркотик)',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'doctor',
            transcription: '[ˈdɒktə] ',
            translation: 'доктор',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'patient',
            transcription: '[ˈpeɪʃənt] ',
            translation: 'пациент ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hospital',
            transcription: '[ˈhɒspɪtl] ',
            translation: 'больница ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'blood',
            transcription: '[blʌd] ',
            translation: 'кровь ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'treatment',
            transcription: '[ˈtriːtmənt] ',
            translation: 'лечение ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pain',
            transcription: '[peɪn] ',
            translation: 'боль ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'disease',
            transcription: '[dɪˈziːz] ',
            translation: 'болезнь ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cancer',
            transcription: '[ˈkænsə] ',
            translation: 'рак (болезнь)',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'pills',
            transcription: '[pɪlz] ',
            translation: 'таблетки',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'medicine',
            transcription: '[ˈmɛdsɪn] ',
            translation: 'медицина, лекарство',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'cut',
            transcription: '[kʌt] ',
            translation: 'порез',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'injury',
            transcription: '[ˈɪnʤəri] ',
            translation: 'травма',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'aid (first aid)',
            transcription: '[eɪd]',
            translation: 'помощь (напр. первая помощь)',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'surgery',
            transcription: '[ˈsɜːʤəri] ',
            translation: 'хирургия (операция)',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'nurse',
            transcription: '[nɜːs] ',
            translation: 'медсестра (сиделка)',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'abortion',
            transcription: '[əˈbɔːʃ(ə)n] ',
            translation: 'аборт ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'diet',
            transcription: '[ˈdaɪət] ',
            translation: 'диета ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'therapy',
            transcription: '[ˈθɛrəpi] ',
            translation: 'терапия ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'symptom',
            transcription: '[ˈsɪmptəm] ',
            translation: 'симптом ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'shock',
            transcription: '[ʃɒk] ',
            translation: 'шок ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'illness',
            transcription: '[ˈɪlnɪs] ',
            translation: 'болезнь ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'clinic',
            transcription: '[ˈklɪnɪk] ',
            translation: 'клиника ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'protein',
            transcription: '[ˈprəʊtiːn] ',
            translation: 'белок ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'survival',
            transcription: '[səˈvaɪvəl] ',
            translation: 'выживание ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'infection',
            transcription: '[ɪnˈfɛkʃən] ',
            translation: 'инфекция ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'virus',
            transcription: '[ˈvaɪərəs] ',
            translation: 'вирус ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'disability',
            transcription: '[ˌdɪsəˈbɪlɪti] ',
            translation: 'инвалидность ',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'insurance',
            transcription: '[ɪnˈʃʊərəns] ',
            translation: 'страховка',
            count: '0',
            errors: '0',
            category: 'Медицина',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'system',
            transcription: '[ˈsɪstɪm] ',
            translation: 'система ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'programme (Br.) program (Am.)',
            transcription: '[ˈprəʊgræm]',
            translation: 'программа ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'phone',
            transcription: '[fəʊn] ',
            translation: 'телефон ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'data',
            transcription: '[ˈdeɪtə] ',
            translation: 'данные ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'computer',
            transcription: '[kəmˈpjuːtə] ',
            translation: 'компьютер ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'call',
            transcription: '[kɔːl] ',
            translation: 'телефонный звонок',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'message',
            transcription: '[ˈmɛsɪʤ] ',
            translation: 'сообщение ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'network',
            transcription: '[ˈnɛtwɜːk] ',
            translation: 'компьютерная сеть',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'radio',
            transcription: '[ˈreɪdɪəʊ] ',
            translation: 'радио (рация)',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'communication',
            transcription: '[kəˌmjuːnɪˈkeɪʃən] ',
            translation: 'связь (коммуникация)',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'connection',
            transcription: '[kəˈnɛkʃən] ',
            translation: 'подключение (связь)',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'Internet',
            transcription: '[ˈɪntəˌnɛt] ',
            translation: 'интернет ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'device',
            transcription: '[dɪˈvaɪs] ',
            translation: 'устройство ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'application',
            transcription: '[ˌæplɪˈkeɪʃ(ə)n] ',
            translation: 'приложение, программа',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'hardware',
            transcription: '[ˈhɑːdweə] ',
            translation: 'компьютерное "железо"',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'software',
            transcription: '[ˈsɒftweə] ',
            translation: 'программное обеспечение ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'email',
            transcription: "['iːmeɪl]",
            translation: 'электронная почта',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'settings',
            transcription: '[ˈsɛtɪŋz] ',
            translation: 'настройки',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'user',
            transcription: '[ˈjuːzə] ',
            translation: 'пользователь ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'resolution',
            transcription: '[ˌrɛzəˈluːʃən] ',
            translation: 'разрешение (экрана)',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'chip',
            transcription: '[ʧɪp]',
            translation: 'чип (комп.)',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'link',
            transcription: '[lɪŋk]',
            translation: 'ссылка (в интернете) ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'display',
            transcription: '[dɪsˈpleɪ] ',
            translation: 'дисплей ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'keyboard',
            transcription: '[ˈkiːbɔːd] ',
            translation: 'клавиатура',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'laptop',
            transcription: '[ˈlæpˌtɒp] ',
            translation: 'ноутбук',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'PC (personal computer)',
            transcription: '[piː-siː] [ˈpɜːsnl kəmˈpjuːtə]',
            translation: 'ПК, персональный компьютер',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'tablet',
            transcription: '[ˈtæblɪt] ',
            translation: 'планшетный компьютер',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'mail',
            transcription: '[meɪl] ',
            translation: 'почта ',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'net',
            transcription: '[nɛt] ',
            translation: 'сеть',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'content',
            transcription: '[ˈkɒntɛnt] ',
            translation: 'содержание (контент)',
            count: '0',
            errors: '0',
            category: 'Информационные технологии',
            partOfSpeach: 'Существительные'
          },
          {
            text: 'old',
            transcription: '[əʊld] ',
            translation: 'старый ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'young',
            transcription: '[jʌŋ] ',
            translation: 'молодой ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'early',
            transcription: '[ˈɜːli] ',
            translation: 'ранний',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'late',
            transcription: '[leɪt] ',
            translation: 'поздний',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'recent',
            transcription: '[ˈriːsnt] ',
            translation: 'недавний',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'current',
            transcription: '[ˈkʌrənt] ',
            translation: 'текущий (нынешный)',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'past',
            transcription: '[pɑːst] ',
            translation: 'прошедший',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'modern',
            transcription: '[ˈmɒdən] ',
            translation: 'современный ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'senior',
            transcription: '[ˈsiːnjə] ',
            translation: 'старший ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'future',
            transcription: '[ˈfjuːʧə] ',
            translation: 'будущий',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'previous',
            transcription: '[ˈpriːvjəs] ',
            translation: 'предыдущий',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'next',
            transcription: '[nɛkst] ',
            translation: 'следующий',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'annual',
            transcription: '[ˈænjʊəl] ',
            translation: 'ежегодный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'following',
            transcription: '[ˈfɒləʊɪŋ] ',
            translation: 'последующий',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'daily',
            transcription: '[ˈdeɪli] ',
            translation: 'ежедневный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'primary',
            transcription: '[ˈpraɪməri] ',
            translation: 'первичный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ancient',
            transcription: '[ˈeɪnʃ(ə)nt] ',
            translation: 'древний',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'initial',
            transcription: '[ɪˈnɪʃəl] ',
            translation: 'начальный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'contemporary',
            transcription: '[kənˈtɛmpərəri] ',
            translation: 'современный ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'present',
            transcription: '[ˈprɛznt] ',
            translation: 'настоящий (в наст. времени), присутствующий',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'long-term',
            transcription: '[ˈlɒŋtɜːm] ',
            translation: 'долгосрочный ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'junior',
            transcription: '[ˈʤuːnjə] ',
            translation: 'младший ',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'brief',
            transcription: '[briːf] ',
            translation: 'краткий',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'immediate',
            transcription: '[ɪˈmiːdjət] ',
            translation: 'немедленный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'constant',
            transcription: '[ˈkɒnstənt] ',
            translation: 'постоянный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'permanent',
            transcription: '[ˈpɜːmənənt] ',
            translation: 'постоянный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'regular',
            transcription: '[ˈrɛgjʊlə] ',
            translation: 'регулярный (обычный)',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ongoing',
            transcription: '[ˈɒŋˌgəʊɪŋ] ',
            translation: 'продолжающийся',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sudden',
            transcription: '[ˈsʌdn] ',
            translation: 'внезапный',
            count: '0',
            errors: '0',
            category: 'Время',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sure',
            transcription: '[ʃʊə] ',
            translation: 'уверенный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'able',
            transcription: '[ˈeɪbl] ',
            translation: 'способный (сделать что-то, быть кем-то)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'human',
            transcription: '[ˈhjuːmən] ',
            translation: 'человеческий',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'strong',
            transcription: '[strɒŋ] ',
            translation: 'сильный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'free',
            transcription: '[friː] ',
            translation: 'свободный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'certain',
            transcription: '[ˈsɜːtn] ',
            translation: 'уверенный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'personal',
            transcription: '[ˈpɜːsnl] ',
            translation: 'личный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'single',
            transcription: '[ˈsɪŋgl] ',
            translation: 'одинокий (неженатый\\незамужняя)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'private',
            transcription: '[ˈpraɪvɪt] ',
            translation: 'личный (напр. личная жизнь)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'common',
            transcription: '[ˈkɒmən] ',
            translation: 'обычный, распространенный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dead',
            transcription: '[dɛd] ',
            translation: 'мертвый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'happy',
            transcription: '[ˈhæpi] ',
            translation: 'счастливый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'serious',
            transcription: '[ˈsɪərɪəs] ',
            translation: 'серьезный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ready',
            transcription: '[ˈrɛdi] ',
            translation: 'готовый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'simple',
            transcription: '[ˈsɪmpl] ',
            translation: 'простой ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'religious',
            transcription: '[rɪˈlɪʤəs] ',
            translation: 'религиозный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'individual',
            transcription: '[ˌɪndɪˈvɪdjʊəl] ',
            translation: 'индивидуальный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tough',
            transcription: '[tʌf] ',
            translation: 'крепкий, сильный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'positive',
            transcription: '[ˈpɒzətɪv] ',
            translation: 'положительный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'successful',
            transcription: '[səkˈsɛsfʊl] ',
            translation: 'успешный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'concerned',
            transcription: '[kənˈsɜːnd] ',
            translation: 'обеспокоенный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'willing',
            transcription: '[ˈwɪlɪŋ] ',
            translation: 'желающий (готовый к чему-то)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'interested',
            transcription: '[ˈɪntrɪstɪd] ',
            translation: 'заинтересованный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'responsible',
            transcription: '[rɪsˈpɒnsəbl] ',
            translation: 'ответственный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'afraid',
            transcription: '[əˈfreɪd] ',
            translation: 'испуганный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'native',
            transcription: '[ˈneɪtɪv] ',
            translation: 'родной (язык), коренной (житель)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'aware ',
            transcription: '[əˈweə]  ',
            translation: 'знающий (осведомленный)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'active',
            transcription: '[ˈæktɪv] ',
            translation: 'активный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'chief',
            transcription: '[ʧiːf] ',
            translation: 'главный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cool (slang)',
            transcription: '[kuːl]',
            translation: 'крутой (клевый)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'direct',
            transcription: '[dɪˈrɛkt] ',
            translation: 'прямой ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'famous',
            transcription: '[ˈfeɪməs] ',
            translation: 'известный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'familiar',
            transcription: '[fəˈmɪljə] ',
            translation: 'знакомый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'male',
            transcription: '[meɪl] ',
            translation: 'мужской',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'alive',
            transcription: '[əˈlaɪv] ',
            translation: 'живой',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'strange',
            transcription: '[streɪnʤ] ',
            translation: 'странный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'married',
            transcription: '[ˈmærɪd] ',
            translation: 'женатый (замужняя)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'alone',
            transcription: '[əˈləʊn] ',
            translation: 'одинокий',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sick',
            transcription: '[sɪk] ',
            translation: 'больной',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'smart',
            transcription: '[smɑːt] ',
            translation: 'умный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'mean',
            transcription: '[miːn] ',
            translation: 'подлый (злой)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'surprised',
            transcription: '[səˈpraɪzd] ',
            translation: 'удивленный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'busy',
            transcription: '[ˈbɪzi] ',
            translation: 'занятый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'careful',
            transcription: '[ˈkeəfʊl] ',
            translation: 'осторожный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tired',
            transcription: '[ˈtaɪəd] ',
            translation: 'уставший',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'proud',
            transcription: '[praʊd] ',
            translation: 'гордый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'healthy',
            transcription: '[ˈhɛlθi] ',
            translation: 'здоровый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'creative',
            transcription: '[kri(ː)ˈeɪtɪv] ',
            translation: 'творческий ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'lucky',
            transcription: '[ˈlʌki] ',
            translation: 'везучий',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'silent',
            transcription: '[ˈsaɪlənt] ',
            translation: 'молчаливый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'leading',
            transcription: '[ˈliːdɪŋ] ',
            translation: 'ведущий ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'glad',
            transcription: '[glæd] ',
            translation: 'довольный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fat',
            transcription: '[fæt] ',
            translation: 'полный (о фигуре)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'slim',
            transcription: '[slɪm] ',
            translation: 'стройный (о фигуре)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'lean',
            transcription: '[liːn] ',
            translation: 'стройный, тощий (о фигуре)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'nervous',
            transcription: '[ˈnɜːvəs] ',
            translation: 'нервный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pretty',
            transcription: '[ˈprɪti] ',
            translation: 'симпатичная (о женщине)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'handsome',
            transcription: '[ˈhænsəm] ',
            translation: 'симпатичный (о мужчине)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sensitive',
            transcription: '[ˈsɛnsɪtɪv] ',
            translation: 'чувствительный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'reasonable',
            transcription: '[ˈriːznəbl] ',
            translation: 'разумный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'aggressive',
            transcription: '[əˈgrɛsɪv] ',
            translation: 'агрессивный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'mad',
            transcription: '[mæd] ',
            translation: 'безумный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pregnant',
            transcription: '[ˈprɛgnənt] ',
            translation: 'беременная',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'stupid',
            transcription: '[ˈstjuːpɪd] ',
            translation: 'глупый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'blind',
            transcription: '[blaɪnd] ',
            translation: 'слепой ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'friendly',
            transcription: '[ˈfrɛndli] ',
            translation: 'дружелюбный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'innocent',
            transcription: '[ˈɪnəsənt] ',
            translation: 'невиновный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'attractive',
            transcription: '[əˈtræktɪv] ',
            translation: 'привлекательный ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'intellectual',
            transcription: '[ˌɪntɪˈlɛktjʊəl] ',
            translation: 'интеллектуальный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'confident',
            transcription: '[ˈkɒnfɪdənt] ',
            translation: 'уверенный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pale',
            transcription: '[peɪl] ',
            translation: 'бледный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ill',
            transcription: '[ɪl] ',
            translation: 'больной',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'scared',
            transcription: '[skeəd] ',
            translation: 'испуганный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'capable',
            transcription: '[ˈkeɪpəbl] ',
            translation: 'способный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fellow',
            transcription: '[ˈfɛləʊ] ',
            translation: 'товарищеский',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'advanced',
            transcription: '[ədˈvɑːnst] ',
            translation: 'продвинутый (расширенный)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'favorite',
            transcription: '[ˈfeɪvərɪt] ',
            translation: 'любимый ',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wonderful',
            transcription: '[ˈwʌndəfʊl] ',
            translation: 'чудесный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'emotional',
            transcription: '[ɪˈməʊʃənl] ',
            translation: 'эмоциональный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'angry',
            transcription: '[ˈæŋgri] ',
            translation: 'сердитый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'crazy',
            transcription: '[ˈkreɪzi] ',
            translation: 'сумасшедший',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'interesting',
            transcription: '[ˈɪntrɪstɪŋ] ',
            translation: 'интересный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fun',
            transcription: '[fʌn] ',
            translation: 'веселый',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'spiritual',
            transcription: '[ˈspɪrɪtjʊəl] ',
            translation: 'духовный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dramatic',
            transcription: '[drəˈmætɪk] ',
            translation: 'драматичный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sad',
            transcription: '[sæd] ',
            translation: 'грустный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'amazing',
            transcription: '[əˈmeɪzɪŋ] ',
            translation: 'удивительный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'psychological',
            transcription: '[ˌsaɪkəˈlɒʤɪkəl] ',
            translation: 'психологический',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'surprising',
            transcription: '[səˈpraɪzɪŋ] ',
            translation: 'удивительный',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'exciting',
            transcription: '[ɪkˈsaɪtɪŋ] ',
            translation: 'увлекательный (захватывающий)',
            count: '0',
            errors: '0',
            category: 'Человек',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'true',
            transcription: '[truː] ',
            translation: 'правдивый, настоящий',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wrong',
            transcription: '[rɒŋ] ',
            translation: 'неверный, неправильный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'nice',
            transcription: '[naɪs] ',
            translation: 'хороший, милый, приятный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'popular',
            transcription: '[ˈpɒpjʊlə] ',
            translation: 'популярный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dangerous',
            transcription: '[ˈdeɪnʤrəs] ',
            translation: 'опасный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'moral',
            transcription: '[ˈmɒrəl] ',
            translation: 'моральный ',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'negative',
            transcription: '[ˈnɛgətɪv] ',
            translation: 'отрицательный (негативный)',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fair',
            transcription: '[feə] ',
            translation: 'честный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'funny',
            transcription: '[ˈfʌni] ',
            translation: 'смешной',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'correct',
            transcription: '[kəˈrɛkt] ',
            translation: 'правильный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'just',
            transcription: '[ʤʌst] ',
            translation: 'справедливый',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'terrible',
            transcription: '[ˈtɛrəbl] ',
            translation: 'ужасный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'criminal',
            transcription: '[ˈkrɪmɪnl] ',
            translation: 'преступный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'guilty',
            transcription: '[ˈgɪlti] ',
            translation: 'виновный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'illegal',
            transcription: '[ɪˈliːgəl] ',
            translation: 'незаконный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'violent',
            transcription: '[ˈvaɪələnt] ',
            translation: 'жестокий (насильственный)',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'holy',
            transcription: '[ˈhəʊli] ',
            translation: 'святой ',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'false',
            transcription: '[fɔːls] ',
            translation: 'ложный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'honest',
            transcription: '[ˈɒnɪst] ',
            translation: 'честный',
            count: '0',
            errors: '0',
            category: 'Мораль, поведение',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'similar',
            transcription: '[ˈsɪmɪlə] ',
            translation: 'похожий',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'other',
            transcription: '[ˈʌðə] ',
            translation: 'другой ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'different',
            transcription: '[ˈdɪfrənt] ',
            translation: 'другой (отличный от чего-то)',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'various',
            transcription: '[ˈveərɪəs] ',
            translation: 'различные',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'general',
            transcription: '[ˈʤɛnərəl] ',
            translation: 'общий (обычный)',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'special',
            transcription: '[ˈspɛʃəl] ',
            translation: 'особенный (специальный)',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'specific',
            transcription: '[spɪˈsɪfɪk] ',
            translation: 'конкретный',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'only',
            transcription: '[ˈəʊnli] ',
            translation: 'единственный',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'final',
            transcription: '[ˈfaɪnl] ',
            translation: 'окончательный ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'average',
            transcription: '[ˈævərɪʤ] ',
            translation: 'средний',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'unique',
            transcription: '[juːˈniːk] ',
            translation: 'уникальный ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'equal',
            transcription: '[ˈiːkwəl] ',
            translation: 'равный',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'typical',
            transcription: '[ˈtɪpɪk(ə)l] ',
            translation: 'типичный ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'standard',
            transcription: '[ˈstændəd] ',
            translation: 'стандартный',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'rare',
            transcription: '[reə] ',
            translation: 'редкий',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'separate',
            transcription: '[ˈsɛprɪt] ',
            translation: 'отдельный ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'common',
            transcription: '[ˈkɒmən] ',
            translation: 'общий',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'multiple',
            transcription: '[ˈmʌltɪpl] ',
            translation: 'многочисленные',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'basic',
            transcription: '[ˈbeɪsɪk] ',
            translation: 'базовый',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'complete',
            transcription: '[kəmˈpliːt] ',
            translation: 'полный (завершенный)',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'diverse',
            transcription: '[daɪˈvɜːs] ',
            translation: 'разнообразный',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'classic',
            transcription: '[ˈklæsɪk] ',
            translation: 'классический ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'universal',
            transcription: '[ˌjuːnɪˈvɜːsəl] ',
            translation: 'универсальный ',
            count: '0',
            errors: '0',
            category: 'Разнообразие',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fine',
            transcription: '[faɪn] ',
            translation: 'изящный (отличный)',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dark',
            transcription: '[dɑːk] ',
            translation: 'темный',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'beautiful',
            transcription: '[ˈbjuːtəfʊl] ',
            translation: 'красивый',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'light',
            transcription: '[laɪt] ',
            translation: 'светлый, легкий',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bright',
            transcription: '[braɪt] ',
            translation: 'яркий ',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'warm',
            transcription: '[wɔːm] ',
            translation: 'теплый ',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sweet',
            transcription: '[swiːt] ',
            translation: 'сладкий ',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'visible',
            transcription: '[ˈvɪzəbl] ',
            translation: 'видимый (заметный)',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hot',
            transcription: '[hɒt] ',
            translation: 'острый, горячий',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ugly',
            transcription: '[ˈʌgli] ',
            translation: 'отвратительный (о внешности)',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bitter',
            transcription: '[ˈbɪtə] ',
            translation: 'горький',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'supposed',
            transcription: '[səˈpəʊzd] ',
            translation: 'предполагаемый, подразумеваемый',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'appropriate',
            transcription: '[əˈprəʊprɪɪt] ',
            translation: 'подходящий (уместный)',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'relevant',
            transcription: '[ˈrɛlɪvənt] ',
            translation: 'релевантный (имеющий отношение к чему-то)',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'unknown',
            transcription: '[ʌnˈnəʊn] ',
            translation: 'неизвестный',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'secret',
            transcription: '[ˈsiːkrɪt] ',
            translation: 'тайный',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'consistent',
            transcription: '[kənˈsɪstənt] ',
            translation: 'последовательный',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'alternative',
            transcription: '[ɔːlˈtɜːnətɪv] ',
            translation: 'альтернативный ',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ultimate',
            transcription: '[ˈʌltɪmɪt] ',
            translation: 'окончательный',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'comprehensive',
            transcription: '[ˌkɒmprɪˈhɛnsɪv] ',
            translation: 'всеобъемлющий',
            count: '0',
            errors: '0',
            category: 'Ощущения, логика',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'new',
            transcription: '[njuː] ',
            translation: 'новый ',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'good',
            transcription: '[gʊd] ',
            translation: 'хороший ',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'great',
            transcription: '[greɪt] ',
            translation: 'великий',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bad',
            transcription: '[bæd] ',
            translation: 'плохой',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'best',
            transcription: '[bɛst] ',
            translation: 'лучший',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'used',
            transcription: '[juːzd] ',
            translation: 'использованный (подержанный)',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'original',
            transcription: '[əˈrɪʤənl] ',
            translation: 'оригинальный ',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'normal',
            transcription: '[ˈnɔːməl] ',
            translation: 'нормальный ',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'useful',
            transcription: '[ˈjuːsfʊl] ',
            translation: 'полезный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'proper',
            transcription: '[ˈprɒpə] ',
            translation: 'тщательный (правильный)',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'weak',
            transcription: '[wiːk] ',
            translation: 'слабый',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'excellent',
            transcription: '[ˈɛksələnt] ',
            translation: 'отличный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'extreme',
            transcription: '[ɪksˈtriːm] ',
            translation: 'экстремальный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'conventional',
            transcription: '[kənˈvɛnʃənl] ',
            translation: 'обычный, традиционный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'super',
            transcription: '[ˈs(j)uːpə] ',
            translation: 'супер ',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'odd',
            transcription: '[ɒd] ',
            translation: 'странный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'simple',
            transcription: '[ˈsɪmpl] ',
            translation: 'простой',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'intense',
            transcription: '[ɪnˈtɛns] ',
            translation: 'интенсивный, плотный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'perfect',
            transcription: '[ˈpɜːfɪkt] ',
            translation: 'идеальный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ideal',
            transcription: '[aɪˈdɪəl] ',
            translation: 'идеальный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'effective',
            transcription: '[ɪˈfɛktɪv] ',
            translation: 'эффективный',
            count: '0',
            errors: '0',
            category: 'Качество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'high',
            transcription: '[haɪ] ',
            translation: 'высокий ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'big',
            transcription: '[bɪg] ',
            translation: 'большой ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'small',
            transcription: '[smɔːl] ',
            translation: 'маленький',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'large',
            transcription: '[lɑːʤ] ',
            translation: 'большой ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'long',
            transcription: '[lɒŋ] ',
            translation: 'длинный (долгий)',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'little',
            transcription: '[ˈlɪtl] ',
            translation: 'маленький',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'low',
            transcription: '[ləʊ] ',
            translation: 'низкий ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'short',
            transcription: '[ʃɔːt] ',
            translation: 'короткий',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'huge',
            transcription: '[hjuːʤ] ',
            translation: 'огромный ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wide',
            transcription: '[waɪd] ',
            translation: 'широкий ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tiny',
            transcription: '[ˈtaɪni] ',
            translation: 'крошечный ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'broad',
            transcription: '[brɔːd] ',
            translation: 'широкий',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tall',
            transcription: '[tɔːl] ',
            translation: 'высокий ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'thin',
            transcription: '[θɪn] ',
            translation: 'тонкий ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'thick',
            transcription: '[θɪk] ',
            translation: 'толстый',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'increased',
            transcription: '[ɪnˈkriːst] ',
            translation: 'увеличившийся',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'enormous',
            transcription: '[ɪˈnɔːməs] ',
            translation: 'громадный',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'massive',
            transcription: '[ˈmæsɪv] ',
            translation: 'массивный, массовый',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'narrow',
            transcription: '[ˈnærəʊ] ',
            translation: 'узкий',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'straight',
            transcription: '[streɪt] ',
            translation: 'прямой',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'giant',
            transcription: '[ˈʤaɪənt] ',
            translation: 'гигантский',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'flat',
            transcription: '[flæt] ',
            translation: 'плоский',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'square',
            transcription: '[skweə] ',
            translation: 'квадратный',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tremendous',
            transcription: '[trɪˈmɛndəs] ',
            translation: 'огромный ',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'round',
            transcription: '[raʊnd] ',
            translation: 'круглый',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'prominent',
            transcription: '[ˈprɒmɪnənt] ',
            translation: 'заметный (выступающий)',
            count: '0',
            errors: '0',
            category: 'Размер, форма',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'clear',
            transcription: '[klɪə] ',
            translation: 'ясный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'open',
            transcription: '[ˈəʊpən] ',
            translation: 'открытый',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hot',
            transcription: '[hɒt] ',
            translation: 'горячий',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cold',
            transcription: '[kəʊld] ',
            translation: 'холодный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'heavy',
            transcription: '[ˈhɛvi] ',
            translation: 'тяжелый ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tough',
            transcription: '[tʌf] ',
            translation: 'жесткий',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'powerful',
            transcription: '[ˈpaʊəfʊl] ',
            translation: 'мощный ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'quick',
            transcription: '[kwɪk] ',
            translation: 'быстрый',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'soft',
            transcription: '[sɒft] ',
            translation: 'мягкий',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'quiet',
            transcription: '[ˈkwaɪət] ',
            translation: 'тихий',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cool',
            transcription: '[kuːl]',
            translation: 'прохладный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dry',
            transcription: '[draɪ] ',
            translation: 'сухой ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'slow',
            transcription: '[sləʊ] ',
            translation: 'медленный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'solid',
            transcription: '[ˈsɒlɪd] ',
            translation: 'твердый ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'sharp',
            transcription: '[ʃɑːp]',
            translation: 'острый (предмет, звук)',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'live',
            transcription: '[laɪv] ',
            translation: 'живой (в т.ч в значении "прямой эфир")',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'mass',
            transcription: '[mæs] ',
            translation: 'массовый',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'smooth',
            transcription: '[smuːð] ',
            translation: 'гладкий',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wet',
            transcription: '[wɛt] ',
            translation: 'мокрый ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fast',
            transcription: '[fɑːst] ',
            translation: 'быстрый',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'rough',
            transcription: '[rʌf] ',
            translation: 'грубый',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'tight',
            transcription: '[taɪt] ',
            translation: 'плотный, узкий',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'raw',
            transcription: '[rɔː] ',
            translation: 'сырой',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dirty',
            transcription: '[ˈdɜːti] ',
            translation: 'грязный ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'still',
            transcription: '[stɪl] ',
            translation: 'замерший',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pure (water)',
            transcription: '[pjʊə]',
            translation: 'чистый (без примесей)',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'steady',
            transcription: '[ˈstɛdi] ',
            translation: 'устойчивый ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'stable',
            transcription: '[ˈsteɪbl] ',
            translation: 'стабильный ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'vulnerable',
            transcription: '[ˈvʌlnərəbl] ',
            translation: 'уязвимый',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'loose',
            transcription: '[luːs] ',
            translation: 'свободный (ненатянутый, напр. об одежде)',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'accurate',
            transcription: '[ˈækjʊrɪt] ',
            translation: 'точный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'whole',
            transcription: '[həʊl] ',
            translation: 'весь (целиком)',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'full',
            transcription: '[fʊl] ',
            translation: 'полный ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'physical',
            transcription: '[ˈfɪzɪkəl] ',
            translation: 'физический',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'entire',
            transcription: '[ɪnˈtaɪə] ',
            translation: 'весь (целиком)',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'clean',
            transcription: '[kliːn] ',
            translation: 'чистый ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'empty',
            transcription: '[ˈɛmpti] ',
            translation: 'пустой',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'golden',
            transcription: '[ˈgəʊldən] ',
            translation: 'золотой ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wooden',
            transcription: '[ˈwʊdn] ',
            translation: 'деревянный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'broken',
            transcription: '[ˈbrəʊkən] ',
            translation: 'сломанный ',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'visual',
            transcription: '[ˈvɪzjʊəl] ',
            translation: 'визуальный',
            count: '0',
            errors: '0',
            category: 'Физические качества',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'economic',
            transcription: '[ˌiːkəˈnɒmɪk] ',
            translation: 'экономический ',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'free ',
            transcription: '[friː]  ',
            translation: 'бесплатный',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'financial',
            transcription: '[faɪˈnænʃəl] ',
            translation: 'финансовый ',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'commercial',
            transcription: '[kəˈmɜːʃəl] ',
            translation: 'коммерческий ',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'rich',
            transcription: '[rɪʧ] ',
            translation: 'богатый',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'expensive',
            transcription: '[ɪksˈpɛnsɪv] ',
            translation: 'дорогой',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cheap',
            transcription: '[ʧiːp] ',
            translation: 'дешевый',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'competitive',
            transcription: '[kəmˈpɛtɪtɪv] ',
            translation: 'конкурентоспособный',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'valuable',
            transcription: '[ˈvæljʊəbl] ',
            translation: 'ценный ',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'poor',
            transcription: '[pʊə] ',
            translation: 'бедный',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'remaining',
            transcription: '[rɪˈmeɪnɪŋ] ',
            translation: 'оставшийся',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'double',
            transcription: '[ˈdʌbl] ',
            translation: 'двойной',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'numerous',
            transcription: '[ˈnjuːmərəs] ',
            translation: 'многочисленные',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'increasing',
            transcription: '[ɪnˈkriːsɪŋ] ',
            translation: 'увеличивающийся',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'total (total number)',
            transcription: '[ˈtəʊtl] ',
            translation: 'общий (напр.общее количество)',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'single ',
            transcription: '[ˈsɪŋgl] ',
            translation: 'одиночный, отдельный',
            count: '0',
            errors: '0',
            category: 'Деньги, количество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'main',
            transcription: '[meɪn] ',
            translation: 'главный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'major',
            transcription: '[ˈmeɪʤə] ',
            translation: 'основной, более важный, крупный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'significant',
            transcription: '[sɪgˈnɪfɪkənt] ',
            translation: 'значительный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'particular',
            transcription: '[pəˈtɪkjʊlə] ',
            translation: 'специфический (особенный)',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'critical',
            transcription: '[ˈkrɪtɪkəl] ',
            translation: 'критический, решающий',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'essential',
            transcription: '[ɪˈsɛnʃəl] ',
            translation: 'важный (существенный)',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'key',
            transcription: '[kiː] ',
            translation: 'ключевой',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'crucial',
            transcription: '[ˈkruːʃəl] ',
            translation: 'решающий (значимый)',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'extraordinary',
            transcription: '[ɪksˈtrɔːdnri] ',
            translation: 'необычайный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'vital',
            transcription: '[ˈvaɪtl] ',
            translation: 'жизненный (жизненно важный)',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'substantial',
            transcription: '[səbˈstænʃəl] ',
            translation: 'существенный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'minor',
            transcription: '[ˈmaɪnə] ',
            translation: 'незначительный, младший',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'considerable',
            transcription: '[kənˈsɪdərəbl] ',
            translation: 'значительный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'extra',
            transcription: '[ˈɛkstrə] ',
            translation: 'дополнительный ',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'actual',
            transcription: '[ˈækʧʊəl] ',
            translation: 'актуальный (настоящий)',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'practical',
            transcription: '[ˈpræktɪkəl] ',
            translation: 'практический',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fundamental',
            transcription: '[ˌfʌndəˈmɛntl] ',
            translation: 'фундаментальный ',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'real',
            transcription: '[rɪəl] ',
            translation: 'реальный, настоящий',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'possible',
            transcription: '[ˈpɒsəbl] ',
            translation: 'возможный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'likely',
            transcription: '[ˈlaɪkli] ',
            translation: 'вероятный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'necessary',
            transcription: '[ˈnɛsɪsəri] ',
            translation: 'необходимый',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'opposite',
            transcription: '[ˈɒpəzɪt] ',
            translation: 'противоположный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'supposed',
            transcription: '[səˈpəʊzd] ',
            translation: 'предполагаемый',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'potential',
            transcription: '[pəʊˈtɛnʃəl] ',
            translation: 'потенциальный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'appropriate',
            transcription: '[əˈprəʊprɪɪt] ',
            translation: 'подходящий (уместный)',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'unlikely',
            transcription: '[ʌnˈlaɪkli] ',
            translation: 'маловероятный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'important',
            transcription: '[ɪmˈpɔːtənt] ',
            translation: 'важный',
            count: '0',
            errors: '0',
            category: 'Важность, вероятность',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'national',
            transcription: '[ˈnæʃənl] ',
            translation: 'национальный, государственный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'political',
            transcription: '[pəˈlɪtɪkəl] ',
            translation: 'политический',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'social',
            transcription: '[ˈsəʊʃəl] ',
            translation: 'социальный, общественный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'public',
            transcription: '[ˈpʌblɪk] ',
            translation: 'общественный, государственный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'military',
            transcription: '[ˈmɪlɪtəri] ',
            translation: 'военный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'federal',
            transcription: '[ˈfɛdərəl] ',
            translation: 'федеральный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'international',
            transcription: '[ˌɪntə(ː)ˈnæʃənl] ',
            translation: 'международный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'foreign',
            transcription: '[ˈfɒrɪn] ',
            translation: 'иностранный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'democratic',
            transcription: '[ˌdɛməˈkrætɪk] ',
            translation: 'демократический',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'legal',
            transcription: '[ˈliːgəl] ',
            translation: 'законный (правовой)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'traditional',
            transcription: '[trəˈdɪʃənl] ',
            translation: 'традиционный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'cultural',
            transcription: '[ˈkʌlʧərəl] ',
            translation: 'культурный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'civil',
            transcription: '[ˈsɪvl] ',
            translation: 'гражданский',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'safe',
            transcription: '[seɪf] ',
            translation: 'безопасный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'nuclear',
            transcription: '[ˈnjuːklɪə] ',
            translation: 'ядерный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'independent',
            transcription: '[ˌɪndɪˈpɛndənt] ',
            translation: 'независимый ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'united',
            transcription: '[jʊˈnaɪtɪd] ',
            translation: 'объединенный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'domestic',
            transcription: '[dəʊˈmɛstɪk] ',
            translation: 'домашний (внутренний - в политич.смысле)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'corporate',
            transcription: '[ˈkɔːpərɪt] ',
            translation: 'корпоративный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'urban',
            transcription: '[ˈɜːbən] ',
            translation: 'городской ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'regional',
            transcription: '[ˈriːʤənl] ',
            translation: 'региональный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ethnic',
            transcription: '[ˈɛθnɪk] ',
            translation: 'этнический',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'conservative',
            transcription: '[kənˈsɜːvətɪv] ',
            translation: 'консервативный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'industrial',
            transcription: '[ɪnˈdʌstrɪəl] ',
            translation: 'промышленный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'historical',
            transcription: '[hɪsˈtɒrɪkəl] ',
            translation: 'исторический',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'presidential',
            transcription: '[ˌprɛzɪˈdɛnʃəl] ',
            translation: 'президентский',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'liberal',
            transcription: '[ˈlɪbərəl] ',
            translation: 'либеральный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'rural',
            transcription: '[ˈrʊərəl] ',
            translation: 'сельский',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'historic',
            transcription: '[hɪsˈtɒrɪk] ',
            translation: 'исторический ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'armed',
            transcription: '[ɑːmd] ',
            translation: 'вооруженный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'constitutional',
            transcription: '[ˌkɒnstɪˈtjuːʃənl] ',
            translation: 'конституционный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'strategic',
            transcription: '[strəˈtiːʤɪk] ',
            translation: 'стратегический',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'defensive',
            transcription: '[dɪˈfɛnsɪv] ',
            translation: 'оборонительный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'joint',
            transcription: '[ʤɔɪnt] ',
            translation: 'совместный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'mutual',
            transcription: '[ˈmjuːtjʊəl] ',
            translation: 'взаимный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'official',
            transcription: '[əˈfɪʃəl] ',
            translation: 'официальный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'Трудный\\легкий, обычный\\необычный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'hard',
            transcription: '[hɑːd] ',
            translation: 'трудный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'easy',
            transcription: '[ˈiːzi] ',
            translation: 'легкий',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'difficult',
            transcription: '[ˈdɪfɪkəlt] ',
            translation: 'трудный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'complex',
            transcription: '[ˈkɒmplɛks] ',
            translation: 'сложный (комплексный)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'impossible',
            transcription: '[ɪmˈpɒsəbl] ',
            translation: 'невозможный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'obvious',
            transcription: '[ˈɒbvɪəs] ',
            translation: 'очевидный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'comfortable',
            transcription: '[ˈkʌmfətəbl] ',
            translation: 'удобный, комфортный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'convenient',
            transcription: '[kənˈviːnjənt] ',
            translation: 'удобный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'handy',
            transcription: '[ˈhændi] ',
            translation: 'удобный, сподручный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'complicated',
            transcription: '[ˈkɒmplɪkeɪtɪd] ',
            translation: 'сложный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'severe (pain)',
            transcription: '[sɪˈvɪə]',
            translation: 'жестокий (напр. условия, боль, погода)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'apparent',
            transcription: '[əˈpærənt] ',
            translation: 'очевидный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'elementary',
            transcription: '[ˌɛlɪˈmɛntəri] ',
            translation: 'элементарный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'regular',
            transcription: '[ˈrɛgjʊlə] ',
            translation: 'регулярный (обычный)',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'extra',
            transcription: '[ˈɛkstrə] ',
            translation: 'дополнительный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'unusual',
            transcription: '[ʌnˈjuːʒʊəl] ',
            translation: 'необычный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'formal',
            transcription: '[ˈfɔːməl] ',
            translation: 'формальный',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'ordinary',
            transcription: '[ˈɔːdnri] ',
            translation: 'обычный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'usual',
            transcription: '[ˈjuːʒʊəl] ',
            translation: 'обычный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'so-called',
            transcription: '[ˈsəʊˈkɔːld] ',
            translation: 'так называемый',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'assistant',
            transcription: '[əˈsɪstənt] ',
            translation: 'вспомогательный, помощник',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'additional',
            transcription: '[əˈdɪʃənl] ',
            translation: 'дополнительный ',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'remarkable',
            transcription: '[rɪˈmɑːkəbl] ',
            translation: 'примечательный, выдающийся',
            count: '0',
            errors: '0',
            category: 'Государство и общество',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'top',
            transcription: '[tɒp] ',
            translation: 'верхний (главный)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'right',
            transcription: '[raɪt] ',
            translation: 'правильный (правый)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'local',
            transcription: '[ˈləʊkəl] ',
            translation: 'местный ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'available',
            transcription: '[əˈveɪləbl] ',
            translation: 'доступный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'central',
            transcription: '[ˈsɛntrəl] ',
            translation: 'центральный ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'left',
            transcription: '[lɛft] ',
            translation: 'левый (оставшийся)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'close',
            transcription: '[kləʊs] ',
            translation: 'близкий (закрытый)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'far',
            transcription: '[fɑː] ',
            translation: 'далекий',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'deep',
            transcription: '[diːp] ',
            translation: 'глубокий',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'middle',
            transcription: '[ˈmɪdl] ',
            translation: 'средний ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'western',
            transcription: '[ˈwɛstən] ',
            translation: 'западный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'southern',
            transcription: '[ˈsʌðən] ',
            translation: 'южный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'front',
            transcription: '[frʌnt] ',
            translation: 'передний',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'eastern',
            transcription: '[ˈiːstən] ',
            translation: 'восточный ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'northern',
            transcription: '[ˈnɔːðən] ',
            translation: 'северный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'internal',
            transcription: '[ɪnˈtɜːnl] ',
            translation: 'внутренний ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'upper',
            transcription: '[ˈʌpə] ',
            translation: 'верхний',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'vast',
            transcription: '[vɑːst] ',
            translation: 'широкий (обширный)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'limited',
            transcription: '[ˈlɪmɪtɪd] ',
            translation: 'ограниченный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'outside',
            transcription: '[ˌaʊtˈsaɪd] ',
            translation: 'внешний ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'nearby',
            transcription: '[ˈnɪəbaɪ] ',
            translation: 'находящийся поблизости',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'inner',
            transcription: '[ˈɪnə] ',
            translation: 'внутренний ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'biological',
            transcription: '[ˌbaɪəʊˈlɒʤɪkəl] ',
            translation: 'биологический',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'distant',
            transcription: '[ˈdɪstənt] ',
            translation: 'удаленный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'bottom',
            transcription: '[ˈbɒtəm] ',
            translation: 'нижний',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'remote',
            transcription: '[rɪˈməʊt] ',
            translation: 'удаленный (дистанционный)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'external',
            transcription: '[ɛksˈtɜːnl] ',
            translation: 'внешний ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'lost',
            transcription: '[lɒst] ',
            translation: 'потерянный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'extensive',
            transcription: '[ɪksˈtɛnsɪv] ',
            translation: 'обширный',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'natural',
            transcription: '[ˈnæʧrəl] ',
            translation: 'природный (естественный)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'environmental',
            transcription: '[ɪnˌvaɪərənˈmɛntl] ',
            translation: 'относящийся к окружающей среде ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'fresh',
            transcription: '[frɛʃ] ',
            translation: 'свежий ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'global',
            transcription: '[ˈgləʊbəl] ',
            translation: 'глобальный ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'wild',
            transcription: '[waɪld] ',
            translation: 'дикий ',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'growing',
            transcription: '[ˈgrəʊɪŋ] ',
            translation: 'растущий',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'living',
            transcription: '[ˈlɪvɪŋ] ',
            translation: 'живущий',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'racial',
            transcription: '[ˈreɪʃəl] ',
            translation: 'расовый',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'solar',
            transcription: '[ˈsəʊlə] ',
            translation: 'солнечный (напр. Солнечная система)',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'existing',
            transcription: '[ɪgˈzɪstɪŋ] ',
            translation: 'существующий',
            count: '0',
            errors: '0',
            category: 'Пространство и природа',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'medical',
            transcription: '[ˈmɛdɪkəl] ',
            translation: 'медицинский',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'professional',
            transcription: '[prəˈfɛʃənl] ',
            translation: 'профессиональный ',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'academic',
            transcription: '[ˌækəˈdɛmɪk] ',
            translation: 'академический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'educational',
            transcription: '[ˌɛdju(ː)ˈkeɪʃənl] ',
            translation: 'образовательный',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'scientific',
            transcription: '[ˌsaɪənˈtɪfɪk] ',
            translation: 'научный',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'online',
            transcription: '[ˈɒnˌlaɪn] ',
            translation: 'онлайн ',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'digital',
            transcription: '[ˈdɪʤɪtl] ',
            translation: 'цифровой ',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'electronic',
            transcription: '[ɪlɛkˈtrɒnɪk] ',
            translation: 'электронный ',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'electric',
            transcription: '[ɪˈlɛktrɪk] ',
            translation: 'электрический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'genetic',
            transcription: '[ʤɪˈnɛtɪk] ',
            translation: 'генетический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'chemical',
            transcription: '[ˈkɛmɪkəl] ',
            translation: 'химический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'working',
            transcription: '[ˈwɜːkɪŋ] ',
            translation: 'работающий',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'technical',
            transcription: '[ˈtɛknɪkəl] ',
            translation: 'технический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'musical',
            transcription: '[ˈmjuːzɪkəl] ',
            translation: 'музыкальный',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'literary',
            transcription: '[ˈlɪtərəri] ',
            translation: 'литературный ',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'clinical',
            transcription: '[ˈklɪnɪkəl] ',
            translation: 'клинический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'developing',
            transcription: '[dɪˈvɛləpɪŋ] ',
            translation: 'находящийся в разработке',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'technical',
            transcription: '[ˈtɛknɪkəl] ',
            translation: 'технический',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'musical',
            transcription: '[ˈmjuːzɪkəl] ',
            translation: 'музыкальный',
            count: '0',
            errors: '0',
            category: 'Наука, искусство',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'colour (Br.) color (Am.)',
            transcription: '[ˈkʌlə]',
            translation: 'цвет',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'black',
            transcription: '[blæk] ',
            translation: 'черный',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'white',
            transcription: '[waɪt] ',
            translation: 'белый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'dark',
            transcription: '[dɑːk] ',
            translation: 'темный',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'light',
            transcription: '[laɪt] ',
            translation: 'светлый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'red',
            transcription: '[rɛd] ',
            translation: 'красный',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'orange',
            transcription: '[ˈɒrɪnʤ] ',
            translation: 'оранжевый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'yellow',
            transcription: '[ˈjɛləʊ] ',
            translation: 'желтый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'green',
            transcription: '[griːn] ',
            translation: 'зеленый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'blue',
            transcription: '[bluː] ',
            translation: 'голубой, синий',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'purple',
            transcription: '[ˈpɜːpl] ',
            translation: 'фиолетовый (пурпурный)',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'violet',
            transcription: '[ˈvaɪəlɪt] ',
            translation: 'темно-фиолетовый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'pink',
            transcription: '[pɪŋk] ',
            translation: 'розовый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'silver',
            transcription: '[ˈsɪlvə] ',
            translation: 'серебристый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'gold',
            transcription: '[gəʊld] ',
            translation: 'золотой',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'brown',
            transcription: '[braʊn] ',
            translation: 'коричневый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'grey (Br.) gray (Am.)',
            transcription: '[greɪ]',
            translation: 'серый',
            count: '0',
            errors: '0',
            category: 'Цвета',
            partOfSpeach: 'Прилагательные'
          },
          {
            text: 'now',
            transcription: '[naʊ] ',
            translation: 'сейчас ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'then',
            transcription: '[ðɛn] ',
            translation: 'затем ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'never',
            transcription: '[ˈnɛvə] ',
            translation: 'никогда ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'again',
            transcription: '[əˈgɛn] ',
            translation: 'снова ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'always',
            transcription: '[ˈɔːlweɪz] ',
            translation: 'всегда ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'today',
            transcription: '[təˈdeɪ] ',
            translation: 'сегодня ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'long',
            transcription: '[lɒŋ] ',
            translation: 'долго ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'ever',
            transcription: '[ˈɛvə] ',
            translation: 'вечно',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'later',
            transcription: '[ˈleɪtə] ',
            translation: 'позже ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: '(one year) ago',
            transcription: '[əˈgəʊ] ',
            translation: '(один год) назад ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'early',
            transcription: '[ˈɜːli] ',
            translation: 'рано ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'soon',
            transcription: '[suːn] ',
            translation: 'скоро ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'recently',
            transcription: '[ˈriːsntli] ',
            translation: 'недавно ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'before',
            transcription: '[bɪˈfɔː] ',
            translation: 'до ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'PM',
            transcription: '[piː-ɛm] ',
            translation: 'после полудня',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'tonight',
            transcription: '[təˈnaɪt] ',
            translation: 'этой ночью (вечером)',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'AM',
            transcription: '[æm] ',
            translation: 'до полудня',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'late',
            transcription: '[leɪt] ',
            translation: 'поздно ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'forever',
            transcription: '[fəˈrɛvə] ',
            translation: 'навсегда ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'rarely',
            transcription: '[ˈreəli] ',
            translation: 'редко ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'tomorrow',
            transcription: '[təˈmɒrəʊ] ',
            translation: 'завтра ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'yesterday',
            transcription: '[ˈjɛstədeɪ] ',
            translation: 'вчера ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'currently',
            transcription: '[ˈkʌrəntli] ',
            translation: 'в настоящее время ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'already',
            transcription: '[ɔːlˈrɛdi] ',
            translation: 'уже ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'previously',
            transcription: '[ˈpriːvjəsli] ',
            translation: 'ранее, в прошлый раз',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'whenever',
            transcription: '[wɛnˈɛvə] ',
            translation: 'всякий раз, когда ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'just',
            transcription: '[ʤʌst] ',
            translation: 'только что (всего лишь)',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'sometimes',
            transcription: '[ˈsʌmtaɪmz] ',
            translation: 'иногда ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'finally',
            transcription: '[ˈfaɪnəli] ',
            translation: 'наконец ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'quickly',
            transcription: '[ˈkwɪkli] ',
            translation: 'быстро ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'suddenly',
            transcription: '[ˈsʌdnli] ',
            translation: 'вдруг ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'immediately',
            transcription: '[ɪˈmiːdjətli] ',
            translation: 'немедленно ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'frequently',
            transcription: '[ˈfriːkwəntli] ',
            translation: 'часто ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'meanwhile',
            transcription: '[ˈmiːnˈwaɪl] ',
            translation: 'тем временем',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'occasionally',
            transcription: '[əˈkeɪʒnəli] ',
            translation: 'иногда ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'initially',
            transcription: '[ɪˈnɪʃəli] ',
            translation: 'изначально ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'shortly',
            transcription: '[ˈʃɔːtli] ',
            translation: 'коротко, вскоре ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'gradually',
            transcription: '[ˈgrædjʊəli] ',
            translation: 'постепенно ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'ultimately',
            transcription: '[ˈʌltɪmɪtli] ',
            translation: 'в конечном счете',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'regularly',
            transcription: '[ˈrɛgjʊləli] ',
            translation: 'регулярно ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'eventually',
            transcription: '[ɪˈvɛnʧəli] ',
            translation: 'в конечном итоге ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'rapidly',
            transcription: '[ˈræpɪdli] ',
            translation: 'быстро ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'newly',
            transcription: '[ˈnjuːli] ',
            translation: 'вновь, только что',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'primarily',
            transcription: '[ˈpraɪmərɪli] ',
            translation: 'в первую очередь ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'constantly',
            transcription: '[ˈkɒnstəntli] ',
            translation: 'постоянно ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'originally',
            transcription: '[əˈrɪʤɪnəli] ',
            translation: 'изначально (по происхождению)',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'often',
            transcription: '[ˈɒf(ə)n] [ˈɒft(ə)n]',
            translation: 'часто ',
            count: '0',
            errors: '0',
            category: 'Наречия времени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'fast',
            transcription: '[fɑːst] ',
            translation: 'быстро ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'well',
            transcription: '[wɛl] ',
            translation: 'хорошо ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'even',
            transcription: '[ˈiːvən] ',
            translation: 'даже ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'too',
            transcription: '[tuː] ',
            translation: 'слишком ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'usually',
            transcription: '[ˈjuːʒʊəli] ',
            translation: 'обычно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'exactly',
            transcription: '[ɪgˈzæktli] ',
            translation: 'точно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'ok',
            transcription: '[ˈəʊˈkeɪ] ',
            translation: 'хорошо',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'clearly',
            transcription: '[ˈklɪəli] ',
            translation: 'ясно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'directly',
            transcription: '[dɪˈrɛktli] ',
            translation: 'непосредственно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'absolutely',
            transcription: '[ˈæbsəluːtli] ',
            translation: 'абсолютно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'completely',
            transcription: '[kəmˈpliːtli] ',
            translation: 'полностью ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'easily',
            transcription: '[ˈiːzɪli] ',
            translation: 'с легкостью',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'slowly',
            transcription: '[ˈsləʊli] ',
            translation: 'медленно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'highly',
            transcription: '[ˈhaɪli] ',
            translation: 'высоко ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'mostly',
            transcription: '[ˈməʊstli] ',
            translation: 'в основном ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'seriously',
            transcription: '[ˈsɪərɪəsli] ',
            translation: 'серьезно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'totally',
            transcription: '[ˈtəʊtli] ',
            translation: 'полностью ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'merely',
            transcription: '[ˈmɪəli] ',
            translation: 'просто ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'typically',
            transcription: '[ˈtɪpɪk(ə)li] ',
            translation: 'обычно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'simply',
            transcription: '[ˈsɪmpli] ',
            translation: 'просто ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'nearly',
            transcription: '[ˈnɪəli] ',
            translation: 'почти ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'carefully',
            transcription: '[ˈkeəfli] ',
            translation: 'тщательно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'somehow',
            transcription: '[ˈsʌmhaʊ] ',
            translation: 'как-нибудь',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'truly',
            transcription: '[ˈtruːli] ',
            translation: 'действительно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'hardly',
            transcription: '[ˈhɑːdli] ',
            translation: 'с трудом',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'significantly',
            transcription: '[sɪgˈnɪfɪkəntli] ',
            translation: 'значительно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'entirely',
            transcription: '[ɪnˈtaɪəli] ',
            translation: 'полностью ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'necessarily',
            transcription: '[ˈnɛsɪsərɪli] ',
            translation: 'обязательно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'specifically',
            transcription: '[spəˈsɪfɪk(ə)li] ',
            translation: 'специально ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'surely',
            transcription: '[ˈʃʊəli] ',
            translation: 'уверенно, безусловно',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'heavily',
            transcription: '[ˈhɛvɪli] ',
            translation: 'сильно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'strongly',
            transcription: '[ˈstrɒŋli] ',
            translation: 'сильно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'quietly',
            transcription: '[ˈkwaɪətli] ',
            translation: 'тихо',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'effectively',
            transcription: '[ɪˈfɛktɪvli] ',
            translation: 'эффективно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'precisely',
            transcription: '[prɪˈsaɪsli] ',
            translation: 'точно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'normally',
            transcription: '[ˈnɔːməli] ',
            translation: 'обычно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'roughly',
            transcription: '[ˈrʌfli] ',
            translation: 'примерно (грубо)',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'gently',
            transcription: '[ˈʤɛntli] ',
            translation: 'мягко ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'naturally',
            transcription: '[ˈnæʧrəli] ',
            translation: 'естественно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'partly',
            transcription: '[ˈpɑːtli] ',
            translation: 'частично ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'properly',
            transcription: '[ˈprɒpəli] ',
            translation: 'правильно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'slightly',
            transcription: '[ˈslaɪtli] ',
            translation: 'немного ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'straight',
            transcription: '[streɪt] ',
            translation: 'прямо ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'definitely',
            transcription: '[ˈdɛfɪnɪtli] ',
            translation: 'определенно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'virtually',
            transcription: '[ˈvɜːtjʊəli] ',
            translation: 'практически ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'literally',
            transcription: '[ˈlɪtərəli] ',
            translation: 'буквально ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'politically',
            transcription: '[pəˈlɪtɪkəli] ',
            translation: 'политически ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'relatively',
            transcription: '[ˈrɛlətɪvli] ',
            translation: 'относительно ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'personally',
            transcription: '[ˈpɜːsnəli] ',
            translation: 'лично ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'likely',
            transcription: '[ˈlaɪkli] ',
            translation: 'вероятно',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'similarly',
            transcription: '[ˈsɪmɪləli] ',
            translation: 'аналогично, похоже',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'potentially',
            transcription: '[pəʊˈtɛnʃəli] ',
            translation: 'потенциально ',
            count: '0',
            errors: '0',
            category: 'Образа действия',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'here',
            transcription: '[hɪə] ',
            translation: 'здесь ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'around',
            transcription: '[əˈraʊnd] ',
            translation: 'вокруг ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'forward',
            transcription: '[ˈfɔːwəd] ',
            translation: 'вперед ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'close',
            transcription: '[kləʊs] ',
            translation: 'близко ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'forth',
            transcription: '[fɔːθ] ',
            translation: 'вперед ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'anywhere',
            transcription: '[ˈɛnɪweə] ',
            translation: 'в любом месте ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'deeply',
            transcription: '[ˈdiːpli] ',
            translation: 'глубоко ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'ahead (go ahed)',
            transcription: '[əˈhɛd]',
            translation: 'вперед ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'somewhere',
            transcription: '[ˈsʌmweə] ',
            translation: 'где-то',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'everywhere',
            transcription: '[ˈɛvrɪweə] ',
            translation: 'везде ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'back',
            transcription: '[bæk] ',
            translation: 'назад ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'there',
            transcription: '[ðeə] ',
            translation: 'там',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'far',
            transcription: '[fɑː] ',
            translation: 'далеко ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'away',
            transcription: '[əˈweɪ] ',
            translation: 'вдали от чего-то',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'along',
            transcription: '[əˈlɒŋ] ',
            translation: 'вдоль',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'below',
            transcription: '[bɪˈləʊ] ',
            translation: 'ниже ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'apart',
            transcription: '[əˈpɑːt] ',
            translation: 'отдельно от чего-то',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'widely',
            transcription: '[ˈwaɪdli] ',
            translation: 'широко ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'outside',
            transcription: '[ˌaʊtˈsaɪd] ',
            translation: 'вне ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'aside',
            transcription: '[əˈsaɪd] ',
            translation: 'в сторону ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'closely',
            transcription: '[ˈkləʊsli] ',
            translation: 'близко',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'nowhere',
            transcription: '[ˈnəʊweə] ',
            translation: 'никуда ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'elsewhere',
            transcription: '[ˈɛlsˈweə] ',
            translation: 'в другом месте ',
            count: '0',
            errors: '0',
            category: 'Места',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'a little',
            transcription: '[ə ˈlɪtl] ',
            translation: 'немного ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'only',
            transcription: '[ˈəʊnli] ',
            translation: 'только ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'alone',
            transcription: '[əˈləʊn] ',
            translation: 'в одиночку',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'at least',
            transcription: '[ət liːst] ',
            translation: 'по меньшей мере ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'together',
            transcription: '[təˈgɛðə] ',
            translation: 'вместе ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'a lot',
            transcription: '[ə lɒt] ',
            translation: 'много ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'bit',
            transcription: '[bɪt] ',
            translation: 'немного ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'twice',
            transcription: '[twaɪs] ',
            translation: 'дважды ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'fully',
            transcription: '[ˈfʊli] ',
            translation: 'полностью ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'increasingly',
            transcription: '[ɪnˈkriːsɪŋli] ',
            translation: 'более ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'anymore',
            transcription: '[ˌɛniˈmɔː] ',
            translation: '(еще) больше ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'also',
            transcription: '[ˈɔːlsəʊ] ',
            translation: 'также ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'else (something else)',
            transcription: '[ɛls] ',
            translation: 'еще (что-нибудь еще)',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'more',
            transcription: '[mɔː] ',
            translation: 'больше',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'much',
            transcription: '[mʌʧ] ',
            translation: 'много ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'less',
            transcription: '[lɛs] ',
            translation: 'меньше ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'all',
            transcription: '[ɔːl] ',
            translation: 'все ',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'once',
            transcription: '[wʌns] ',
            translation: 'раз (однажды)',
            count: '0',
            errors: '0',
            category: 'Количества',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'enough',
            transcription: '[ɪˈnʌf] ',
            translation: 'достаточно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'largely',
            transcription: '[ˈlɑːʤli] ',
            translation: 'в значительной степени ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'deep',
            transcription: '[diːp] ',
            translation: 'глубоко ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'extremely',
            transcription: '[ɪksˈtriːmli] ',
            translation: 'чрезвычайно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'partly',
            transcription: '[ˈpɑːtli] ',
            translation: 'частично',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'barely',
            transcription: '[ˈbeəli] ',
            translation: 'едва',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'fairly',
            transcription: '[ˈfeəli] ',
            translation: 'довольно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'essentially',
            transcription: '[ɪˈsɛnʃəli] ',
            translation: 'существенно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'approximately',
            transcription: '[əˈprɒksɪmɪtli] ',
            translation: 'примерно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'equally',
            transcription: '[ˈiːkwəli] ',
            translation: 'одинаково ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'perfectly',
            transcription: '[ˈpɜːfɪktli] ',
            translation: 'отлично ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'pretty',
            transcription: '[ˈprɪti] ',
            translation: 'довольно',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'very',
            transcription: '[ˈvɛri] ',
            translation: 'очень ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'better',
            transcription: '[ˈbɛtə] ',
            translation: 'лучше',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'hard',
            transcription: '[hɑːd] ',
            translation: 'трудно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'best',
            transcription: '[bɛst] ',
            translation: 'лучший',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'really',
            transcription: '[ˈrɪəli] ',
            translation: 'действительно ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'most',
            transcription: '[məʊst] ',
            translation: 'наиболее ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'still',
            transcription: '[stɪl] ',
            translation: 'еще (все еще)',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'yet (not yet)',
            transcription: '[jɛt]',
            translation: 'еще (еще нет)',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'almost',
            transcription: '[ˈɔːlməʊst] ',
            translation: 'почти ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'easy',
            transcription: '[ˈiːzi] ',
            translation: 'легко ',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'quite',
            transcription: '[kwaɪt] ',
            translation: 'вполне (довольно)',
            count: '0',
            errors: '0',
            category: 'Меры, степени',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'maybe',
            transcription: '[ˈmeɪbiː] ',
            translation: 'может быть',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'actually',
            transcription: '[ˈækʧʊəli] ',
            translation: 'на самом деле (вообще-то)',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'probably',
            transcription: '[ˈprɒbəbli] ',
            translation: 'вероятно',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'of course',
            transcription: '[əv] [kɔːs] ',
            translation: 'конечно ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'perhaps',
            transcription: '[pəˈhæps] ',
            translation: 'возможно',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'possibly',
            transcription: '[ˈpɒsəbli] ',
            translation: 'возможно ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'unfortunately',
            transcription: '[ʌnˈfɔːʧnɪtli] ',
            translation: 'к сожалению ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'certainly',
            transcription: '[ˈsɜːtnli] ',
            translation: 'конечно ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'apparently',
            transcription: '[əˈpærəntli] ',
            translation: 'по-видимому',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'indeed',
            transcription: '[ɪnˈdiːd] ',
            translation: 'действительно ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'basically',
            transcription: '[ˈbeɪsɪkəli] ',
            translation: 'в основном ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'mainly',
            transcription: '[ˈmeɪnli] ',
            translation: 'в основном ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'especially',
            transcription: '[ɪsˈpɛʃəli] ',
            translation: 'особенно ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'particularly',
            transcription: '[pəˈtɪkjʊləli] ',
            translation: 'особенно ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'generally',
            transcription: '[ˈʤɛnərəli] ',
            translation: 'в общем',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'anyway',
            transcription: '[ˈɛnɪweɪ] ',
            translation: 'в любом случае ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'particularly',
            transcription: '[pəˈtɪkjʊləli] ',
            translation: 'в особенности',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'obviously',
            transcription: '[ˈɒbvɪəsli] ',
            translation: 'очевидно',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'moreover',
            transcription: '[mɔːˈrəʊvə] ',
            translation: 'более того ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'nevertheless',
            transcription: '[ˌnɛvəðəˈlɛs] ',
            translation: 'тем не менее',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'however',
            transcription: '[haʊˈɛvə] ',
            translation: 'однако ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'rather',
            transcription: '[ˈrɑːðə] ',
            translation: 'скорее (скорее…, чем…)',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'though',
            transcription: '[ðəʊ] ',
            translation: 'хотя ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'thus',
            transcription: '[ðʌs] ',
            translation: 'Таким образом... ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'so',
            transcription: '[səʊ] ',
            translation: 'так ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'otherwise',
            transcription: '[ˈʌðəwaɪz] ',
            translation: 'в противном случае ',
            count: '0',
            errors: '0',
            category: 'Вводные и соединительные слова',
            partOfSpeach: 'Наречия'
          },
          {
            text: 'around (around the world)',
            transcription: '[əˈraʊnd]',
            translation: 'вокруг (вокруг света)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'at (at the gate)',
            transcription: '[æt]',
            translation: 'у (у ворот)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'by (house by the lake)',
            transcription: '[baɪ]',
            translation: 'около, у (дом у реки)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'in (in the room)',
            transcription: '[ɪn]',
            translation: 'в (в комнате)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'above (above the table)',
            transcription: '[əˈbʌv]',
            translation: 'над (над столом)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'among (the wolf among us)',
            transcription: '[əˈmʌŋ]',
            translation: 'среди (волк среди нас)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'behind (behind the building)',
            transcription: '[bɪˈhaɪnd]',
            translation: 'позади (позади здания)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'beside (beside the house)',
            transcription: '[bɪˈsaɪd]',
            translation: 'рядом с (рядом с домом)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'between (between two mountains)',
            transcription: '[bɪˈtwiːn]',
            translation: 'между (между двух гор)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'beyond (beyond the river)',
            transcription: '[bɪˈjɒnd]',
            translation: 'по ту сторону, за (за рекой)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'in front of (in front of TV)',
            transcription: '[ɪn frʌntnɒv]',
            translation: 'перед (перед телевизором)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'inside (inside the box)',
            transcription: '[ɪnˈsaɪd]',
            translation: 'внутри (внутри коробки)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'on (The cat is on the roof)',
            transcription: '[ɒn]',
            translation: 'на (кошка на крыше)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'out (to walk out)',
            transcription: '[aʊt]',
            translation: 'вне, наружу (выйти наружу)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'outside (Is there anybody outside?)',
            transcription: '[ˌaʊtˈsaɪd]',
            translation: 'снаружи (Есть кто-нибудь снаружи?)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'under (underground is under ground)',
            transcription: '[ˈʌndə] ',
            translation: 'под (подземка под землей)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'within (within my heart)',
            transcription: '[wɪˈðɪn] ',
            translation: 'внутри, в (в моем сердце)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'below (below sea level)',
            transcription: '[bɪˈləʊ]',
            translation: 'ниже (ниже уровня моря)',
            count: '0',
            errors: '0',
            category: 'Предлоги места',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "around (around nine o'clock)",
            transcription: '[əˈraʊnd]',
            translation: 'около (около 9 часов)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'at (at the midday)',
            transcription: '[æt]',
            translation: 'в (в полдень)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'before (before breakfast)',
            transcription: '[bɪˈfɔː]',
            translation: 'до (до завтрака)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "by (by two o'clock)",
            transcription: '[baɪ]',
            translation: 'к какому-то времени (к двум часам)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "in (I'll be back in ten minutes)",
            transcription: '[ɪn]',
            translation: 'через какое-то время (вернусь через 10 минут)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "for (I've been waiting for you for an hour)",
            transcription: '[fɔː]',
            translation: 'на протяжении (я ждал тебя на протяжении часа)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'since (I’ve been studying English since I was 10)',
            transcription: '[sɪns]',
            translation: 'с какого-то времени (я учу английский с 10 лет)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'during (during the war)',
            transcription: '[ˈdjʊərɪŋ]',
            translation: 'во время (во время войны)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "within (He's got to be here within an hour)",
            transcription: '[wɪˈðɪn]',
            translation: 'в течение (Он должен появиться здесь в течение часа)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'on (on Monday)',
            transcription: '[ɒn]',
            translation: 'в какой-то день недели (в понедельник)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "after (Don't call me after 9PM)",
            transcription: '[ˈɑːftə]',
            translation: 'после (не звони мне после 9 вечера)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'till (from dusk till dawn)',
            transcription: '[tɪl]',
            translation: 'до (от рассвета до заката)',
            count: '0',
            errors: '0',
            category: 'Предлоги времени',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'down (down the street)',
            transcription: '[daʊn]',
            translation: 'вниз (вниз по улице)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'up (up the street)',
            transcription: '[ʌp]',
            translation: 'вверх (вверх по улице)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'from (I am from Russia)',
            transcription: '[frɒm]',
            translation: 'из (я из России)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'across (go across the river)',
            transcription: '[əˈkrɒs]',
            translation: 'через (иди через реку)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'along (along the wall)',
            transcription: '[əˈlɒŋ]',
            translation: 'вдоль (вдоль стены)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'into (into the cave)',
            transcription: '[ˈɪntuː]',
            translation: 'в, внутрь (в пещеру)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'to (to the next stop)',
            transcription: '[tuː]',
            translation: 'к чему-то (к следующей остановке)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'toward (toward the city)',
            transcription: '[təˈwɔːd]',
            translation: 'по направлению к (по направлению к городу)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'through (through the forest)',
            transcription: '[θruː]',
            translation: 'через (через лес)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'over (over the fence)',
            transcription: '[ˈəʊvə]',
            translation: 'через (через забор)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'off (off here)',
            transcription: '[ɒf]',
            translation: 'из, откуда-то (отсюда)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'out of (out of the coverage area)',
            transcription: '[aʊt ɒv]',
            translation: 'наружу, вне (вне зоны покрытия)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'via (go via Moscow)',
            transcription: '[ˈvaɪə]',
            translation: 'через (ехать через Москву)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'past (go past the church)',
            transcription: '[pɑːst]',
            translation: 'мимо (пройти мимо церкви)',
            count: '0',
            errors: '0',
            category: 'Предлоги направления',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'with (coffe with sugar)',
            transcription: '[wɪð]',
            translation: 'с (кофе с сахаром)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'about (tell me about yourself)',
            transcription: '[əˈbaʊt]',
            translation: 'о (расскажите мне о себе)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'against (against war)',
            transcription: '[əˈgɛnst]',
            translation: 'против (против войны)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'without (without you)',
            transcription: '[wɪˈðaʊt]',
            translation: 'без (без тебя)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'including (two cars including one broken)',
            transcription: '[ɪnˈkluːdɪŋ]',
            translation: 'включая (две машины, включая одну сломанную)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'according to (according to the rules)',
            transcription: '[əˈkɔːdɪŋ tʊ]',
            translation: 'в соответствии с (в соответствии с правилами)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'because of (because of the car accident)',
            transcription: '[bɪˈkəz ɒv]',
            translation: 'из-за (из-за автомобильной аварии)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'despite (despite the bad weather)',
            transcription: '[dɪsˈpaɪt]',
            translation: 'несмотря на (несмотря на плохую погоду)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'instead of (new part instead of broken one)',
            transcription: '[ɪnˈstɛd ɒv]',
            translation: 'вместо (новая запчасть вместо сломанной)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'in spite of (in spite of the rain)',
            transcription: '[ɪn spaɪt ɒv]',
            translation: 'несмотря на (несмотря на дождь)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'regardless of (regardless of what you say)',
            transcription: '[rɪˈgɑːdlɪs ɒv]',
            translation: 'несмотря на, независимо от (несмотря на то, что ты скажешь)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "thanks to (thanks to the doctor, I'm feeling fine)",
            transcription: '[θæŋks tʊ]',
            translation: 'благодаря (благодаря доктору, я чувствую себя отлично)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'by means of (by means of tools)',
            transcription: '[baɪ miːnz ɒv]',
            translation: 'с помощью (с помощью инструментов)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'on behalf of (on behalf of my boss)',
            transcription: '[ɒn bɪˈhɑːf ɒv]',
            translation: 'от имени (от имени моего босса)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'for (this gift is for you)',
            transcription: '[fɔː]',
            translation: 'для (этот подарок для тебя)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'compare to (This is nothing compare to the real troubles)',
            transcription: '[kəmˈpeə tʊ]',
            translation: 'в сравнении с (это ничто в сравнении с настоящими трудностями)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "rather… than (they'd rather buy fish than meat)",
            transcription: '[ˈrɑːðə]… [ðæn]',
            translation: 'скорее, чем  (они купят скорее рыбу, чем мясо)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: "rather than (they'd buy fish rather than meat)",
            transcription: '[ˈrɑːðə ðæn]',
            translation: 'скорее, чем\\а не (они купят рыбу, а не мясо)',
            count: '0',
            errors: '0',
            category: 'Разные предлоги',
            partOfSpeach: 'Предлоги'
          },
          {
            text: 'and (You and me)',
            transcription: '[ænd]',
            translation: 'и (Ты и я)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'that (I know that you’ll like it)',
            transcription: '[ðæt]',
            translation: 'что (Я знаю, что тебе это понравится) ',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'but (Proud but small)',
            transcription: '[bʌt]',
            translation: 'но (Гордая, но маленькая)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'or (To be or not to be)',
            transcription: '[ɔː]',
            translation: 'или (Быть или не быть)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'as (As you can see…)',
            transcription: '[æz]',
            translation: 'как (Как вы можете видеть…)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'if (If you trust me)',
            transcription: '[ɪf]',
            translation: 'если (Если ты доверяешь мне)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'when (Call me when you are ready)',
            transcription: '[wɛn]',
            translation: 'когда (Позвони мне, когда будешь готов)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'than (It’s more than nothing)',
            transcription: '[ðæn] ',
            translation: 'чем (Это больше, чем ничего)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'because (Keep smiling, because life is a beautiful thing)',
            transcription: '[bɪˈkɒz]',
            translation: 'потому что (Продолжайте улыбаться, потому что жизнь - прекрасная штука)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'while (Life is what happens while you are busy making other plans)',
            transcription: '[waɪl]',
            translation:
              'в то время, как (Жизнь - это то, что происходит в то время, как вы заняты построением других планов)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'where (No matter where you are, I’ll find you)',
            transcription: '[weə]',
            translation: 'где (Неважно где ты, я найду тебя)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'so (Just so you know)',
            transcription: '[səʊ]',
            translation: 'чтобы (Просто, чтобы вы знали)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'So that (She wrote his phone number on her hand so that she wouldn’t forget it)',
            transcription: '[səʊ ðæt]',
            translation: 'чтобы (Она записила его номер телефона у себя на руке, чтобы не забыть его)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'though (He failed the exam though he studied hard)',
            transcription: '[ðəʊ] ',
            translation: 'хотя (Он не сдал экзамен, хотя и учился как следует)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'after (They weren’t much happy after their divorce)',
            transcription: '[ˈɑːftə]',
            translation: 'после (Они не были особо счастливы после развода)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'until (Your carriage is ok until the midnight)',
            transcription: '[ənˈtɪl]',
            translation: 'до какого-то времени (С твоей каретой все будет в порядке до полуночи)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'Whether… or (You have to make your choice wheter you like it or not.)',
            transcription: '[ˈwɛðə]… [ɔː]',
            translation:
              'используется перед конструкцией с двумя вариантами, типа «или…или» (Ты должен сделать выбор, нравится тебе это или нет)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'before (Don’t watch horror movies before you sleep)',
            transcription: '[bɪˈfɔː] ',
            translation: 'До, перед (Не смотри ужасы перед сном)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'although (My cell phone doesn’t work although it’s new)',
            transcription: '[ɔːlˈðəʊ]',
            translation: 'Хотя (Мой сотовый телефон не работает, хотя он новый)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'like (Sweet like a candy)',
            transcription: '[laɪk]',
            translation: 'Как (Сладкая, как конфета)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: "unless (She won't be able to keep her job, unless she can control her anger)",
            transcription: '[ənˈlɛs]',
            translation: 'Если … не (Она не сможет сохранить работу, если не научится сдерживать гнев)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          },
          {
            text: 'except (Everyone passed the exam exept me)',
            transcription: '[ɪkˈsɛpt]',
            translation: 'За исключением, кроме (Все сдали экзамен, кроме меня)',
            count: '0',
            errors: '0',
            partOfSpeach: 'Союзы'
          }
        ]
      }
    ];
    return { dictionaries };
  }
}
