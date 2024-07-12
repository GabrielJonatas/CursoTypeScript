type FilterCallback<U> = (
  value: U,
  array?: U[],
  index?: number,
) => boolean;

export function meuFilter<T>(
  array: T[],
  callbackfn: FilterCallback<T>,
): T[] {
  const novoArray = [];

  for(let i = 0; i < array.length; i++) {
    if(callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const vetor = [1,2,3,4,5,6,7,8,9,10];

const vetorFiltradoOriginal = vetor.filter((value) => value < 5);
console.log(vetorFiltradoOriginal);

const vetorFiltrado = meuFilter(vetor, (value) => value < 5);
console.log(vetorFiltrado);
