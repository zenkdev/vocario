export function count<T>(arr: Array<T>, callback: (value: T) => boolean): number {
  return arr.filter(callback).length;
}
