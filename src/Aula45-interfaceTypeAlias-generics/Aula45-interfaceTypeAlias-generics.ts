interface PessoaProtocolo<T,U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo1<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocolo<string,number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

const aluno1: PessoaProtocolo<number,number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno2: PessoaProtocolo1<number,number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

console.log(aluno, aluno1, aluno2);
