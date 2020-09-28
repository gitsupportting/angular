export interface IWordClass {
  total: number;
  text: string;
}

export class WordClass implements IWordClass {
  total: number;
  text: string;

  constructor(initObject?: IWordClass) {
    this.total = initObject && initObject.total;
    this.text = initObject && initObject.text;
  }
}

export interface INeighboringWords {
  left: WordClass[];
  right: WordClass[];
}

export class NeighboringWords implements INeighboringWords {
  left: WordClass[];
  right: WordClass[];

  constructor(initObject?: INeighboringWords) {
    this.left = (initObject && initObject.left) || [];
    this.right = (initObject && initObject.right) || [];
  }
}
