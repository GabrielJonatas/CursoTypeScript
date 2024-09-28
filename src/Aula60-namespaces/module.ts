namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public name: string) {

    }
  }

  const pessoa = new PessoaDoNamespace('Luiz');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Luiz';
  }
}

const PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
console.log(PessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

const constDoNamespace = 'Valor da const do namespace';
