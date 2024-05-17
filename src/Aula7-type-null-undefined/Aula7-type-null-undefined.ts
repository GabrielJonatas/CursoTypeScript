let x;
if (typeof x == 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOF(x: any) {
  if (typeof x == 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOF(2);
const squareOfTwoString = squareOF('2');

if (squareOfTwoNumber == null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}

// its recommended to use null type than udefined, undefined is used by typescript
