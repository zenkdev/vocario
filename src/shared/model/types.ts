export enum Answer {
  empty = 'empty',
  valid = 'valid',
  invalid = 'invalid',
}

export type Func<TReturnValue = void> = () => TReturnValue;
