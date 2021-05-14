import InvalidValueErrorRange from "@src/2-domain/errors/InvalidValueRangeError";
import UnderAgeError from "@src/2-domain/errors/UnderAgeError";
import CalculateEligibilityScoreUseCase from "@src/2-domain/useCases/CalculateEligibilityScoreUseCase";
import data from "./data.json";

const mainData = data.request;
const responseData = data.response;

test("It should throw under age error", () => {
  const request = { ...mainData, age: 17 };

  expect(() => new CalculateEligibilityScoreUseCase().Execute(request)).toThrow(
    UnderAgeError
  );
});

test("It should throw invalid value range error", () => {
  const request = { ...mainData, writing_score: 2 };

  expect(() => new CalculateEligibilityScoreUseCase().Execute(request)).toThrow(
    InvalidValueErrorRange
  );
});

test("it should calculate the score", () => {
  const data = new CalculateEligibilityScoreUseCase().Execute(mainData);
  expect(data).toEqual(responseData);
});

test("it should calculate the score", () => {
  const data = new CalculateEligibilityScoreUseCase().Execute(mainData);
  expect(data).toEqual(responseData);
});
