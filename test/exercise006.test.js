const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("An array is required");

    expect(() => {
      sumMultiples("foo");
    }).toThrow("An array is required");

    expect(() => {
      sumMultiples(3);
    }).toThrow("An array is required");
  });

  test("returns the sum of any numbers that are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
  });

  test("it works with decimal numbers", () => {
    expect(sumMultiples([1, 3, 5.0, 2, 12, 10])).toBe(30);
  });

  test("return 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
  });

  test("return 0 if there is an empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {});

describe("isItPrime", () => {});

describe("createMatrix", () => {});

describe("areWeCovered", () => {});
