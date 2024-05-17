// variavel: type -> type annotation

/* eslint-disable */

// tipos básicos (aqui ocorre inferência de tipos)
let names: string =  'Luiz'; // Qualquer tipo de strings: "" '' ``
let age: number = 30; // 10, 1.57, -5.55, 0xf00d
let adult: boolean = true; // true or false
let simbol: symbol = Symbol('any-symbol'); // symbol
// let big: bigint = 10n; //bigint


// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfStrings2: string[] = ['a', 'b'];

// Objecs
let person: {name: string, age: number, adult?: boolean} = {
  age: 50,
  name: 'Luis',
}

// Function

function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y:number) => number = (x,y) => x+y;


const result = soma(2,2);
