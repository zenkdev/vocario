export default function jsonTryParse(value: string | null | undefined) {
  try {
    return value && JSON.parse(value);
  } catch (e) {
    if (value === 'undefined') {
      // eslint-disable-next-line no-void
      return void 0;
    }
    return value;
  }
}
