type Constructor = {
  new (...args: any[]): any;
};

function inverteNomeECor(param1: string, param2: string) {
  // Clousure
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[0]);
      }

      inverte(valor: string) {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2;
      }
    };
  }
}

function outroDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + ' ' + param1);
    return target;
  }
}

@outroDecorator('O parametro do outro decorador')
@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Luiz','roxo');
console.log(animal);
