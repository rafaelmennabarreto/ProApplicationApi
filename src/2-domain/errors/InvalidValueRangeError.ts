export default class InvalidValueErrorRange extends Error {
  constructor() {
    super("Invalid value range Error");
    this.name = "InvalidValueErrorRange";
  }
}
