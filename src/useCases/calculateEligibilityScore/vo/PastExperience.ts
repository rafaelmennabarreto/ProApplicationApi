export default class PastExperience {
  private _sales: boolean;
  private _support: boolean;

  constructor(sales: boolean, support: boolean) {
    this._sales = sales;
    this._support = support;
  }

  get score() {
    if (!this._sales && !this._support) return 0;

    if (this._sales && this._support) {
      return 5;
    }

    return 3;
  }
}
