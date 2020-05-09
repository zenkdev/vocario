export default function isEmpty<T>(value: Array<T> | undefined): value is undefined {
  return value == null || !Array.isArray(value) || value.length === 0;
}
