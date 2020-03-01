/* eslint-disable @typescript-eslint/no-explicit-any */
import * as initialize from 'firebase-functions-test';

const test = initialize();

const mockedTransaction = jest.fn();

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  database: () => ({
    ref: () => ({
      transaction: mockedTransaction,
      once: () => ({
        val: () => ({ text: 'hello' }),
      }),
    }),
  }),
}));

const dictionaryId = 'd111';
const uid = 'u222';
const wordId = 'w333';

// eslint-disable-next-line import/first
import { statisticsOnWrite, synthesize } from '../src';

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

  it('should return 403 for non GET requests', done => {
    // A fake request object
    const req: any = { method: 'POST', headers: {}, params: {} };
    // A fake response object
    const res: any = {
      getHeader: jest.fn(),
      setHeader: jest.fn(),
      attachment: jest.fn(() => res),
      contentType: jest.fn(() => res),
      status: jest.fn(() => res),
      send: jest.fn(() => res),
      end: () => {
        expect(res.status).toBeCalledWith(403);
        expect(res.send).toBeCalledWith('Forbidden!');
        done();
      },
    };

    // Invoke synthesize with our fake request and response objects.
    // This will cause the assertions in the response object to be evaluated.
    synthesize(req, res);
  });

  it('should return 404 if no word was sent', done => {
    // A fake request object
    const req: any = { method: 'GET', headers: {}, params: {} };
    // A fake response object
    const res: any = {
      getHeader: jest.fn(),
      setHeader: jest.fn(),
      attachment: jest.fn(() => res),
      contentType: jest.fn(() => res),
      status: jest.fn(() => res),
      send: jest.fn(() => res),
      end: () => {
        expect(res.status).toBeCalledWith(404);
        done();
      },
    };

    // Invoke synthesize with our fake request and response objects.
    // This will cause the assertions in the response object to be evaluated.
    synthesize(req, res);
  });

  it('should return plain text if valid word was sent', done => {
    // A fake request object
    const req: any = { method: 'GET', headers: {}, params: { 0: wordId } };
    // A fake response object
    const res: any = {
      getHeader: jest.fn(),
      setHeader: jest.fn(),
      attachment: jest.fn(() => res),
      contentType: jest.fn(() => res),
      status: jest.fn(() => res),
      send: jest.fn(() => res),
      end: () => {
        expect(res.status).toBeCalledWith(200);
        expect(res.contentType).toBeCalledWith('mp3');
        expect(res.send).toBeCalled();
        const args = res.send.mock.calls[0];
        expect(args[0]).toBeInstanceOf(Buffer);
        done();
      },
    };

    // Invoke synthesize with our fake request and response objects.
    // This will cause the assertions in the response object to be evaluated.
    synthesize(req, res);
  });
});
