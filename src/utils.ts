export function compareStringsIgnoreCase(str1?: string, str2?: string): boolean {
  return typeof str1 === 'string' && typeof str2 === 'string' && str1.trim().toLocaleLowerCase() === str2.trim().toLocaleLowerCase();
}

/**
 * generate a random integer between min and max
 * @param {Number} min
 * @param {Number} max
 * @return {Number} random generated integer
 */
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function percent(value?: number, base?: number): number {
  return !value || !base ? 0 : Math.round((value / base) * 100) / 100;
}

export function isToday(someDate: Date): boolean {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() && someDate.getMonth() === today.getMonth() && someDate.getFullYear() === today.getFullYear()
  );
}
