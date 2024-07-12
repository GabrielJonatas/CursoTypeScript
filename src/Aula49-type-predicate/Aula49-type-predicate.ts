export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if(isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1,2,3));
console.log(soma<number | string>(...[1, 2, 3, 'a', 'b', 'c']));
console.log(soma('c','b', 'a'));
