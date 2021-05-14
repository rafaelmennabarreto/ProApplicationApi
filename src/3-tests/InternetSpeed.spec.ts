import InternetSpeed from "@src/2-domain/vo/InternetSpeed";

test("It should be return 0", () => {
  const internetSpeed = new InternetSpeed(40, 35);
  expect(internetSpeed.score).toEqual(0);
});

test("it should be return 1", () => {
  const internetSpeed = new InternetSpeed(52, 40);
  expect(internetSpeed.score).toEqual(1);
});

test("it should be return 2", () => {
  const internetSpeed = new InternetSpeed(80, 55);
  expect(internetSpeed.score).toEqual(2);
});

test("it should be return -1", () => {
  const internetSpeed = new InternetSpeed(40, 4);
  expect(internetSpeed.score).toEqual(-1);
});

test("it should be return -2", () => {
  const internetSpeed = new InternetSpeed(4, 3);
  expect(internetSpeed.score).toEqual(-2);
});
