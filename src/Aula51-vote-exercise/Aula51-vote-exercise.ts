type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addVotationOption(VotationOption: VotationOption): void {
    this._votationOptions.push(VotationOption);
  }

  vote(votationIndex: number): void {
    if(!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes++;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(Votation: Votation): void {
    this.votations.push(Votation);
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for(const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0});
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0});
votation1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0});
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(1);

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0});
votation2.addVotationOption({ option: 'Verde', numberOfVotes: 0});
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0});
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(0);
votation2.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotation();
