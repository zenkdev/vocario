/**
 * Checks value to determine whether a default value should be returned in its place.
 * The defaultValue is returned if value is NaN, null, or undefined.
 */
export function defaultTo<T>(value: T, defaultValue: NonNullable<T>): NonNullable<T> {
  if (value === undefined || value === null || Number.isNaN(value as unknown as number)) {
    return defaultValue;
  }
  return value as NonNullable<T>;
}
