// Tuple
const clientData: readonly [number, string] = [1, 'Luiz']; // immutable
const clientData2: [number, string, string] = [1, 'Luiz', 'Miranda']; // mutable
const clientData3: [number, string, string?] = [1, 'Luiz', 'Miranda'];
const clientData4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

console.log(clientData);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly array
const array: readonly string[] = ['Luiz', 'Otávio'];

console.log(array);
