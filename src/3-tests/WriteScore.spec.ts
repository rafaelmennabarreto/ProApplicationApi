import InvalidValueErrorRange from "@src/2-domain/errors/InvalidValueRangeError";
import WritingScore from "@src/2-domain/vo/WritingScore";

test("It should be return -1", () => {
  const writeScore = new WritingScore(0.2);
  expect(writeScore.score).toEqual(-1);
});

test("It should be return 1", () => {
  const writeScore = new WritingScore(0.6);
  expect(writeScore.score).toEqual(1);
});

test("It should be return 2", () => {
  const writeScore = new WritingScore(0.8);
  expect(writeScore.score).toEqual(2);
});

test("It should be throw a InvalidRangeError", () => {
  expect(() => new WritingScore(-1).score).toThrowError(InvalidValueErrorRange);
});
