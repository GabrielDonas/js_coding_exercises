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

describe("isValidDNA", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA({});
    }).toThrow("str is required");
  });

  test("return true if it is a valid DNA string", () => {
    expect(isValidDNA("CCTTACTTATTCC")).toBe(true);
    expect(isValidDNA("AAAAAAAAAAAAA")).toBe(true);
    expect(isValidDNA("CCCAAGGAATTTT")).toBe(true);
  });

  test("return false if it is not a valid DNA string", () => {
    expect(isValidDNA("CCTTAFTTATTCC")).toBe(false);
    expect(isValidDNA("000000ffffxCA")).toBe(false);
    expect(isValidDNA("CCCAAGGAATTTTE")).toBe(false);
  });

  test("the string should not be case sensitive", () => {
    expect(isValidDNA("CcctagCTTATTCC")).toBe(true);
    expect(isValidDNA("aaaaaaaaaaaaa")).toBe(true);
    expect(isValidDNA("CCCAAGGgATTTT")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");

    expect(() => {
      getComplementaryDNA([]);
    }).toThrow("str is required");
  });

  test("should return a string of the complementary base pairs", () => {
    expect(getComplementaryDNA("CCTTA")).toBe("GGAAT");
    expect(getComplementaryDNA("AAAAAAAAAAAAA")).toBe("TTTTTTTTTTTTT");
    expect(getComplementaryDNA("CCCAAGGAATTTT")).toBe("GGGTTCCTTAAAA");
  });

  test("the string should not be case sensitive", () => {
    expect(getComplementaryDNA("Ccctag")).toBe("GGGATC");
    expect(getComplementaryDNA("aaaaaaaaaaaaa")).toBe("TTTTTTTTTTTTT");
    expect(getComplementaryDNA("CCCAAGGgATTTT")).toBe("GGGTTCCCTAAAA");
  });
});

describe("isItPrime", () => {
  test("it throws an error if not passed a number", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");

    expect(() => {
      isItPrime("foo");
    }).toThrow("n is required");
  });

  test("return false if it is a negative number", () => {
    expect(isItPrime(-3)).toBe(false);
    expect(isItPrime(-598)).toBe(false);
    expect(isItPrime(-5.2)).toBe(false);
  });

  test("return false if it is not a prime number", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(45)).toBe(false);
    expect(isItPrime(3.3)).toBe(false);
    expect(isItPrime(10000)).toBe(false);
  });

  test("return true if it is a prime number", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(19)).toBe(true);
    expect(isItPrime(71)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(97)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("it throws an error if not passed a string as a second parameter", () => {
    expect(() => {
      createMatrix(3);
    }).toThrow("fill is required");

    expect(() => {
      createMatrix(5, []);
    }).toThrow("fill is required");
  });

  test("it throws an error if not passed an integer as a first parameter", () => {
    expect(() => {
      createMatrix("3");
    }).toThrow("n is required");

    expect(() => {
      createMatrix([], "foo");
    }).toThrow("n is required");

    expect(() => {
      createMatrix();
    }).toThrow("n is required");
  });

  test("returns a matrix of 1 * 1 when passed 1", () => {
    expect(createMatrix(1, "foo")).toEqual([["foo"]]);
  });

  test("returns a matrix of 3 * 3 when passed 1", () => {
    expect(createMatrix(3, "foobar")).toEqual([
      ["foobar", "foobar", "foobar"],
      ["foobar", "foobar", "foobar"],
      ["foobar", "foobar", "foobar"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("it throws an error if staff is not an array", () => {
    expect(() => {
      areWeCovered("foo");
    }).toThrow("staff is required");

    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
  });

  test("it throws an error if day is not a string", () => {
    expect(() => {
      areWeCovered([], 6);
    }).toThrow("day is required");

    expect(() => {
      areWeCovered([]);
    }).toThrow("day is required");
  });

  test("returns false if there are no staff", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("returns false if there are staff but < 3 are not scheduled to work", () => {
    const staff = [
      { name: "gary", rota: ["Monday", "Tuesday"] },
      { name: "paul", rota: ["Monday", "Tuesday"] },
      { name: "sally", rota: ["Monday", "Tuesday"] },
      { name: "jess", rota: ["Monday", "Tuesday"] },
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("returns true if there are more than 3 people scheduled to work", () => {
    const staff = [
      { name: "gary", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "paul", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "sally", rota: ["Monday", "Tuesday"] },
      { name: "jess", rota: ["Monday", "Friday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });
});
