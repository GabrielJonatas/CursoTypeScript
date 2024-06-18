// type TipoPessoa = {
//   nome: string;
//   sobrenome: string;
//   nomeCompleto: () => string;
// };

interface TipoNome {
  nome: string;
};

interface TipoSobrenome {
  sobrenome: string;
};

interface TipoNomeCompleto {
  nomeCompleto() : string;
}

type Numero = number | string;

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nome: "Carlos",
  sobrenome: "Magno",
  nomeCompleto: function (): string {
    return this.nome + this.sobrenome;
  }
};

const pessoa = new Pessoa('Luiz','Miranda');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
