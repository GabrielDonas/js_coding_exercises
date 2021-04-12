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
