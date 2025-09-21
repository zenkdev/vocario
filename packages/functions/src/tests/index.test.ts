/* eslint-disable @typescript-eslint/no-explicit-any */

import initialize from 'firebase-functions-test';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';

import { statisticsOnWrite, synthesize } from '../index';

const test = initialize();

const mockedTransaction = vi.fn<(...args: any[]) => any>();

vi.mock('firebase-admin', () => ({
  initializeApp: vi.fn(),
  database: () => ({
    ref: () => ({
      transaction: mockedTransaction,
      once: () => ({
        val: () => ({ text: 'hello' }),
      }),
    }),
  }),
  storage: vi.fn(() => ({
    bucket: vi.fn(() => ({
      getFiles: vi.fn(() => [[]]),
      file: vi.fn((fileName: string) => {
        const file = new File([], fileName);
        Object.assign(file, {
          createReadStream: vi.fn(() => ({
            on: vi.fn((event, cb) => {
              if (event === 'end') (cb as () => void)();
              return this;
            }),
            end: vi.fn((cb: () => void) => {
              cb();
            }),
            pipe: vi.fn(),
          })),
          createWriteStream: vi.fn(() => ({
            on: vi.fn((event, cb) => {
              if (event === 'finish') (cb as () => void)();
              return this;
            }),
            end: vi.fn((cb: () => void) => {
              cb();
            }),
            write: vi.fn((_data: any, cb: () => void) => {
              cb();
            }),
          })),
        });

        return file;
      }),
    })),
  })),
}));

vi.mock('mime', () => ({
  default: {
    getType: vi.fn(() => null),
  },
}));

vi.mock('../text-to-speech', () => ({
  default: vi.fn(() => Buffer.alloc(1, 0)),
  audioEncodingFromExt: vi.fn(),
}));

const dictionaryId = 'd111';
const uid = 'u222';
const wordId = 'w333';

describe('functions', () => {
  afterEach(() => {
    mockedTransaction.mockReset();
  });

  afterAll(() => test.cleanup());

  it('should increase counter on create', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({}));

    // Make snapshot for state of database after the change
    const afterSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', '', ''] }, `/statistics/${uid}/${wordId}`);
    // create an event object
    const event = { params: { uid, wordId }, data: test.makeChange(null, afterSnap) };

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(event);

    expect(mockedTransaction).toHaveBeenCalledTimes(1);
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 1);
  });

  it('should decrease counter on delete', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 2 } }));

    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', '', ''] }, `/statistics/${uid}/${wordId}`);
    // create an event object
    const event = { params: { uid, wordId }, data: test.makeChange(beforeSnap, null) };

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(event);

    expect(mockedTransaction).toHaveLastReturnedWith(
      expect.objectContaining({
        wordsCompleted: expect.any(Object),
      }),
    );
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 1);
  });

  it('should remove uid on delete if counter===0', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 1 } }));

    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', '', ''] }, `/statistics/${uid}/${wordId}`);
    // create an event object
    const event = { params: { uid, wordId }, data: test.makeChange(beforeSnap, null) };

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(event);

    expect(mockedTransaction).toHaveLastReturnedWith(
      expect.objectContaining({
        wordsCompleted: expect.any(Object),
      }),
    );
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toEqual({});
  });

  it('should increase counter on update', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 1 } }));

    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', ''] }, `/statistics/${uid}/${wordId}`);
    // Make snapshot for state of database after the change
    const afterSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', '', ''] }, `/statistics/${uid}/${wordId}`);
    // create an event object
    const event = { params: { uid, wordId }, data: test.makeChange(beforeSnap, afterSnap) };

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(event);

    expect(mockedTransaction).toHaveLastReturnedWith(
      expect.objectContaining({
        wordsCompleted: expect.any(Object),
      }),
    );
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 2);
  });

  it('should decrease counter on update', async () => {
    mockedTransaction.mockImplementationOnce(callback => callback({ wordsCompleted: { [uid]: 2 } }));

    // Make snapshot for state of database beforehand
    const beforeSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', '', ''] }, `/statistics/${uid}/${wordId}`);
    // Make snapshot for state of database after the change
    const afterSnap = test.database.makeDataSnapshot({ dictionaryId, occurs: ['', '', ''] }, `/statistics/${uid}/${wordId}`);
    // create an event object
    const event = { params: { uid, wordId }, data: test.makeChange(beforeSnap, afterSnap) };

    // Call wrapped function with the Change object
    const wrapped = test.wrap(statisticsOnWrite);
    // Call the wrapped function with the snapshot you constructed.
    await wrapped(event);

    expect(mockedTransaction).toHaveLastReturnedWith(
      expect.objectContaining({
        wordsCompleted: expect.any(Object),
      }),
    );
    const { value } = mockedTransaction.mock.results[0];
    expect(value).toHaveProperty('wordsCompleted');
    expect(value.wordsCompleted).toHaveProperty(uid, 1);
  });

  it('should return 403 for non GET requests', async () =>
    new Promise<void>(done => {
      // A fake request object
      const req: any = { method: 'POST', headers: {}, params: {} };
      // A fake response object
      const res: any = {
        getHeader: vi.fn(),
        setHeader: vi.fn(),
        attachment: vi.fn(() => res),
        contentType: vi.fn(() => res),
        status: vi.fn(() => res),
        send: vi.fn(() => res),
        end: () => {
          expect(res.status).toHaveBeenCalledWith(403);
          expect(res.send).toHaveBeenCalledWith('Forbidden!');
          done();
        },
      };

      // Invoke synthesize with our fake request and response objects.
      // This will cause the assertions in the response object to be evaluated.
      synthesize(req, res);
    }));

  it('should return 404 if no word was sent', async () =>
    new Promise<void>(done => {
      // A fake request object
      const req: any = { method: 'GET', headers: {}, params: {} };
      // A fake response object
      const res: any = {
        getHeader: vi.fn(),
        setHeader: vi.fn(),
        attachment: vi.fn(() => res),
        contentType: vi.fn(() => res),
        status: vi.fn(() => res),
        send: vi.fn(() => res),
        end: () => {
          expect(res.status).toHaveBeenCalledWith(404);
          done();
        },
      };

      // Invoke synthesize with our fake request and response objects.
      // This will cause the assertions in the response object to be evaluated.
      synthesize(req, res);
    }));

  it('should return mp3 file if valid word was sent', async () =>
    new Promise<void>(done => {
      // A fake request object
      const req: any = { method: 'GET', headers: {}, params: { 0: wordId } };
      // A fake response object
      const res: any = {
        header: vi.fn(),
        getHeader: vi.fn(),
        setHeader: vi.fn(),
        attachment: vi.fn(() => res),
        contentType: vi.fn(() => res),
        status: vi.fn(() => res),
        send: vi.fn(() => res),
        end: vi.fn(() => {
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.contentType).toHaveBeenCalledWith('.mp3');
          expect(res.send).toHaveBeenCalled();
          done();
        }),
      };

      // Invoke synthesize with our fake request and response objects.
      // This will cause the assertions in the response object to be evaluated.
      synthesize(req, res);
    }));
});
