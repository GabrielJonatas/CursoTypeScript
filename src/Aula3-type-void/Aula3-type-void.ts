function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Luiz',
  surname: 'Otávio',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

withoutReturn('Luiz', 'Otavio');
person.showName();

export { person };
