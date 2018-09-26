/**
 * generate a random integer between min and max
 * @param {Number} min 
 * @param {Number} max
 * @return {Number} random generated integer 
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
