const COUNT_TO_COMPLETE = Number(process.env.REACT_APP_COUNT_TO_COMPLETE);

const isEmpty = <T>(value: Array<T> | undefined): boolean => value == null || !Array.isArray(value) || value.length === 0;

export const isCompleted = (occurs?: string[]): boolean => !isEmpty(occurs) && (occurs as string[]).length > COUNT_TO_COMPLETE;

export const trimLeft = (str: string | null | undefined, trimChar = ' '): string | null | undefined => {
  if (str == null) {
    return str;
  }
  let trim = str;
  while (trim.length > 0 && trim.substring(0, 1) === trimChar) {
    trim = trim.substring(1);
  }
  return trim;
};

export const createText = (payload: Record<string, string>): string =>
  Object.entries(payload)
    .map(([key, value]) => (key.startsWith('text') ? value : null))
    .filter(Boolean)
    .join(',');
