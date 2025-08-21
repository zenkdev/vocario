import type { SegmentChangeEventDetail } from '@ionic/react';

type RangeValue =
  | number
  | {
      lower: number;
      upper: number;
    };

export type IonInputEvent = CustomEvent<{ value: string | null | undefined }>;
export type IonToggleEvent = CustomEvent<{ checked: boolean; value: string | null | undefined }>;
export type IonRangeEvent = CustomEvent<{ value: RangeValue }>;
export type IonSegmentChangeEvent = CustomEvent<SegmentChangeEventDetail>;

export enum Answer {
  empty = 'empty',
  valid = 'valid',
  invalid = 'invalid',
}

export type Func<TReturnValue = void> = () => TReturnValue;
