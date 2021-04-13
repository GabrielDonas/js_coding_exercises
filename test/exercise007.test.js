const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("it throws an error if not passed a number", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");

    expect(() => {
      sumDigits("foo");
    }).toThrow("n is required");
  });

  test("it throws an error if not passed an positive integer", () => {
    expect(() => {
      sumDigits(-44);
    }).toThrow("positive integer is required");

    expect(() => {
      sumDigits(1000.5);
    }).toThrow("n is required");
  });

  test("returns the sum of all digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(598)).toBe(22);
    expect(sumDigits(598921020)).toBe(36);
    expect(sumDigits(800026)).toBe(16);
  });
});

describe("createRange", () => {
  test("it throws an error if not passed a start", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
  });

  test("it throws an error if not passed a end", () => {
    expect(() => {
      createRange(0);
    }).toThrow("end is required");
  });

  test("it creates a range of numbers as an array", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(5, 30, 5)).toEqual([5, 10, 15, 20, 25, 30]);
    expect(createRange(10, 50, 10)).toEqual([10, 20, 30, 40, 50]);
  });

  test("If step is not provided, assume the step is 1", () => {
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(createRange(406, 412)).toEqual([406, 407, 408, 409, 410, 411, 412]);
  });
});
