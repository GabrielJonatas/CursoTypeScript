interface TemNome {
  nome: string;
}
interface temSobrenome {
  sobrenome: string;
}
interface TemIdade {
  idade: number;
}
type Pessoa = TemNome & temSobrenome & TemIdade; //  AND
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa);

export { pessoa };
