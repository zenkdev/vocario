/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Observable from './Observable';

it('Can subscribe', () => {
  const observable = new Observable<string>();
  const subscriber = jest.fn(value => console.log(value));
  const unsubscribe = observable.subscribe(subscriber);

  // @ts-ignore
  const { subscribers } = observable;

  expect(subscribers).toBeDefined();
  expect(Object.keys(subscribers)).toHaveLength(1);

  observable.next('first');
  observable.next('second');

  unsubscribe();

  observable.next('third');

  expect(Object.keys(subscribers)).toHaveLength(0);
  expect(subscriber).toBeCalledTimes(2);
  expect(subscriber).lastCalledWith('second');
});
