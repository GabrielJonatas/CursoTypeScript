type Idade = number;
interface Pessoa {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
}
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Luiz',
  idade: 30,
  salario: 200_000, // 200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
