function maquinaDeFalar(value: string){
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('fui executado' + value);
  };
}

class galinha {
  constructor(public nome: string) {}

  @maquinaDeFalar('Hey bro')
  fala(): string {
    return 'cocorico';
  }
}

const galinha1 = new galinha('Samantha');
galinha1.fala();
