import PastExperience from "../vo/PastExperience";

test("It should be return 8", () => {
  const pastExperience = new PastExperience(true, true);
  expect(pastExperience.score).toEqual(8);
});

test("It should be return 5", () => {
  const pastExperience = new PastExperience(true, false);
  expect(pastExperience.score).toEqual(5);
});

test("It should be return 3", () => {
  const pastExperience = new PastExperience(false, true);
  expect(pastExperience.score).toEqual(3);
});

test("It should be return 0", () => {
  const pastExperience = new PastExperience(false, false);
  expect(pastExperience.score).toEqual(0);
});
