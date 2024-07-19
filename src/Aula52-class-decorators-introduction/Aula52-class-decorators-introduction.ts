@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[0]);
    }

    inverte(valor: string) {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Luiz','roxo');
console.log(animal);
