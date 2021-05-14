import EducationLevel from "@src/2-domain/vo/EducationLevel";

test("It should return 0", () => {
  const educationLevel = new EducationLevel("no_education");
  expect(educationLevel.score).toEqual(0);
});

test("It should return 1", () => {
  const educationLevel = new EducationLevel("high_school");
  expect(educationLevel.score).toEqual(1);
});

test("It should return 2", () => {
  const educationLevel = new EducationLevel("bachelors_degree_or_high");
  expect(educationLevel.score).toEqual(2);
});
