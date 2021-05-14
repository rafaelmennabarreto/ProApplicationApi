export default class EducationLevel {
  private _level: string;

  constructor(level: string) {
    this._level = level;
  }

  get score() {
    switch (this._level) {
      case "high_school":
        return 1;

      case "bachelors_degree_or_high":
        return 2;

      default:
        return 0;
    }
  }
}
