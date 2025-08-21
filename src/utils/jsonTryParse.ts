export default function jsonTryParse(value: string | null | undefined) {
  try {
    return value && JSON.parse(value);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    if (value === 'undefined') {
      return void 0;
    }
    return value;
  }
}
