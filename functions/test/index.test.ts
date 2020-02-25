import * as initialize from 'firebase-functions-test';

import { statisticsOnWrite } from '../src';

const test = initialize();

const mockedTransaction = jest.fn();

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  database: () => ({
    ref: () => ({
      transaction: mockedTransaction,
    }),
  }),
}));

const dictionaryId = 'd111';
const uid = 'u222';
const wordId = 'w333';

describe('functions', () => {
  afterEach(() => mockedTransaction.mockReset());

  afterAll(() => test.cleanup());

  it('should increase counter on create', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({}));

    // create a context object
    const context = { params: { uid, wordId } };
    // Make snapshot for state of database after the change
    const afterSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null, null] }, `/statistics/${uid}/${wordId}`);
    const change = test.makeChange(null, afterSnap);

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(change, context);

    expect(mockedTransaction).toBeCalledTimes(1);
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 1);
  });

  it('should decrease counter on delete', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 2 } }));

    // create a context object
    const context = { params: { uid, wordId } };
    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null, null] }, `/statistics/${uid}/${wordId}`);
    const change = test.makeChange(beforeSnap, null);

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(change, context);

    expect(mockedTransaction).toBeCalledTimes(1);
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 1);
  });

  it('should remove uid on delete if counter===0', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 1 } }));

    // create a context object
    const context = { params: { uid, wordId } };
    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null, null] }, `/statistics/${uid}/${wordId}`);
    const change = test.makeChange(beforeSnap, null);

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(change, context);

    expect(mockedTransaction).toBeCalledTimes(1);
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toEqual({});
  });

  it('should increase counter on update', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 1 } }));

    // create a context object
    const context = { params: { uid, wordId } };
    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null] }, `/statistics/${uid}/${wordId}`);
    // Make snapshot for state of database after the change
    const afterSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null, null] }, `/statistics/${uid}/${wordId}`);
    const change = test.makeChange(beforeSnap, afterSnap);

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(change, context);

    expect(mockedTransaction).toBeCalledTimes(1);
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 2);
  });

  it('should decrease counter on update', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 2 } }));

    // create a context object
    const context = { params: { uid, wordId } };
    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null, null] }, `/statistics/${uid}/${wordId}`);
    // Make snapshot for state of database after the change
    const afterSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: [null, null, null] }, `/statistics/${uid}/${wordId}`);
    const change = test.makeChange(beforeSnap, afterSnap);

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(change, context);

    expect(mockedTransaction).toBeCalledTimes(1);
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 1);
  });
});
