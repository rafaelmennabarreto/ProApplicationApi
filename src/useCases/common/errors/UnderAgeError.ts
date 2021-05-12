export default class UnderAgeError extends Error {
  constructor() {
    super("Not avaliable for under age");
    this.name = "UnderAgeError";
  }
}
