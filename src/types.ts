export type IonInputEvent = CustomEvent<{ value: string | null | undefined }>;
export type IonToggleEvent = CustomEvent<{ checked: boolean; value: string | null | undefined }>;

export enum Answer {
  empty = 'empty',
  valid = 'valid',
  invalid = 'invalid',
}
