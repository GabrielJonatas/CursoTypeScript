// Array<T> - T[]
export function multiplyArgs(...args: number[]): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatenateString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concatenate = concatenateString('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'c');

console.log(upperCase);
console.log(result);
console.log(concatenate);
