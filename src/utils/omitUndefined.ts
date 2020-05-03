export default function omitUndefined<T extends Record<string, any>>(value: T): T {
  const clone = { ...value };
  const keys = Object.keys(clone);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (clone[key] === undefined) {
      delete clone[key];
    }
  }
  return clone;
}
