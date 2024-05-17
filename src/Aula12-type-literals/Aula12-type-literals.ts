let x = 10;// eslint-disable-line
x = 0b1010;
const y = 10; // literal type beacause its a constant
let a = 100 as const; // eslint-disable-line

const person = {
  name: 'Luiz' as const,
  surname: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Amarelo'));

// Module mode
export default 1;
