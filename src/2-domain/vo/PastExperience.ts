export default class PastExperience {
  private _sales: boolean;
  private _support: boolean;
  private _salesScore: number;
  private _supportScore: number;

  constructor(sales: boolean, support: boolean) {
    this._sales = sales;
    this._support = support;
    this._salesScore = 5;
    this._supportScore = 3;
  }

  get score() {
    if (this._sales && this._support)
      return this._salesScore + this._supportScore;

    if (this._sales) return this._salesScore;

    if (this._support) return this._supportScore;

    return 0;
  }
}
