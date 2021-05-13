import InvalidValueErrorRange from "@src/useCases/common/errors/InvalidValueRangeError";
import WriteScore from "../vo/WriteScore";

test("It should be return -1", () => {
  const writeScore = new WriteScore(0.2);
  expect(writeScore.score).toEqual(-1);
});

test("It should be return 1", () => {
  const writeScore = new WriteScore(0.6);
  expect(writeScore.score).toEqual(1);
});

test("It should be return 2", () => {
  const writeScore = new WriteScore(0.8);
  expect(writeScore.score).toEqual(2);
});

test("It should be throw a InvalidRangeError", () => {
  expect(() => new WriteScore(-1).score).toThrowError(InvalidValueErrorRange);
});
