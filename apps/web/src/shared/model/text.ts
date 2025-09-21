import { stringUtils } from '@/shared/lib';

export type Text = {
  index: number;
  text: string;
  transcription?: string | null;
  lang?: string | null;
};

function parseKey(value: string): [string, number] {
  let index = '';
  let str = value;
  while (str && str.length) {
    const ch = str.charAt(str.length - 1);
    if (!stringUtils.isNumber(ch)) {
      break;
    }
    index = ch + index;
    str = str.substring(0, str.length - 1);
  }
  return [str, Number(index)];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createTextArray(payload: any): Text[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Object.entries(payload).reduce((acc: any[], [k, value]) => {
    if (k.startsWith('text') || k.startsWith('transcription') || k.startsWith('lang')) {
      const [key, index] = parseKey(k);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const option: any = acc.find(x => x.index === index);
      if (option) {
        option[key] = value;
      } else {
        acc.push({ index, [key]: value });
      }
    }
    return acc;
  }, []);
}

export function createPlainJS(texts: Text[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const poco: any = {};
  for (let i = 0; i < texts.length; i += 1) {
    const { index, ...rest } = texts[i];
    Object.entries(rest).forEach(([key, value]) => {
      if (index) {
        poco[`${key}${index}`] = value;
      } else {
        poco[key] = value;
      }
    });
  }
  return poco;
}
