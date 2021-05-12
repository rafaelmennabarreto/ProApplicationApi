import InvalidValueErrorRange from "@src/useCases/common/errors/InvalidValueRangeError";

export default class WriteScore {
  private _value: number;

  constructor(writeScore: number) {
    this.IsValidWriteScore(writeScore);
    this._value = writeScore;
  }

  get score() {
    if (this._value < 0.3) return -1;
    if (this._value > 0.3 && this._value < 0.7) return 1;
    return 2;
  }

  private IsValidWriteScore(value: number) {
    if (value < 0 || value > 1) throw new InvalidValueErrorRange();
  }
}
