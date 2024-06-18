export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleo(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleo(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleo(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleo());
console.log(aluno.getNomeCompleo());
console.log(cliente.getNomeCompleo());
