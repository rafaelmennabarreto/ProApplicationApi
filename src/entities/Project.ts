import IProject from "interfaces/IProject";

export default class Project implements IProject {
  private _name: string;
  private _elegibleScore: number;

  constructor(name: string, elegibleScore: number) {
    this._name = name;
    this._elegibleScore = elegibleScore;
  }

  get name() {
    return this._name;
  }

  get elegibleScore() {
    return this._elegibleScore;
  }
}
