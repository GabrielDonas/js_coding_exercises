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

describe("getScreentimeAlertList", () => {
  test("it throws an error if not passed users", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");
  });

  test("it throws an error if not passed a date", () => {
    expect(() => {
      getScreentimeAlertList([{ username: "sam_j_1989", name: "Sam Jones" }]);
    }).toThrow("date is required");
  });

  test("should return an array of a single username of user who has used more than 100 minutes", () => {
    const dataBase = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(dataBase, "2019-05-04")).toEqual([
      "beth_1234",
    ]);
  });

  test("should return an array with multiple usernames of users who have used more than 100 minutes", () => {
    const dataBase = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 63, whatsApp: 0, facebook: 60, safari: 31 },
          },
        ],
      },
      {
        username: "j_smith89",
        name: "John Smith",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 70, facebook: 26, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
      {
        username: "ddaves_l6",
        name: "Deborah Daves",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 50, facebook: 50, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 50, facebook: 20, safari: 31 },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(dataBase, "2019-06-14")).toEqual([
      "sam_j_1989",
      "ddaves_l6",
    ]);
  });

  test("returns an empty array when users array is empty", () => {
    expect(getScreentimeAlertList([], "2019-06-14")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");

    expect(() => {
      hexToRGB(360);
    }).toThrow("hexStr is required");
  });

  test("it throws an error if not passed a hexadecimal color code", () => {
    expect(() => {
      hexToRGB("foo");
    }).toThrow("hexadecimal color code required");

    expect(() => {
      hexToRGB("#FF");
    }).toThrow("hexadecimal color code required");
  });

  test("should transform the hex code into an RGB code", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#FF0000")).toBe("rgb(255,0,0)");
    expect(hexToRGB("#DAADCB")).toBe("rgb(218,173,203)");
    expect(hexToRGB("#65EC68")).toBe("rgb(101,236,104)");
    expect(hexToRGB("#C8FFFF")).toBe("rgb(200,255,255)");
  });

  test("should not be case sensitive", () => {
    expect(hexToRGB("#619a6a")).toBe("rgb(97,154,106)");
    expect(hexToRGB("#fe009f")).toBe("rgb(254,0,159)");
    expect(hexToRGB("#ffffff")).toBe("rgb(255,255,255)");
  });
});

describe("findWinner", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      findWinner("foo");
    }).toThrow("board is required");

    expect(() => {
      findWinner(360);
    }).toThrow("board is required");
  });

  test("it throws an error if not passed a 3 * 3 array", () => {
    expect(() => {
      findWinner([]);
    }).toThrow("3 * 3 board is required");

    expect(() => {
      findWinner([[], []]);
    }).toThrow("3 * 3 board is required");
  });

  test("return the player that has completed an entire row", () => {
    const board = [
      ["X", "X", "X"],
      [null, null, "0"],
      ["0", null, "0"],
    ];

    const board2 = [
      ["X", null, "X"],
      ["0", "0", "0"],
      ["X", null, null],
    ];

    const board3 = [
      ["X", "X", null],
      ["X", "X", "0"],
      ["0", "0", "0"],
    ];
    expect(findWinner(board)).toEqual("X");
    expect(findWinner(board2)).toEqual("0");
    expect(findWinner(board3)).toEqual("0");
  });

  test("return the player that has completed an entire column", () => {
    const board = [
      ["X", "X", "0"],
      ["X", null, "0"],
      ["0", null, "0"],
    ];

    const board2 = [
      [null, "X", "X"],
      ["0", "X", "0"],
      ["0", "X", null],
    ];

    const board3 = [
      ["X", "0", null],
      ["X", "0", "0"],
      ["X", null, null],
    ];
    expect(findWinner(board)).toEqual("0");
    expect(findWinner(board2)).toEqual("X");
    expect(findWinner(board3)).toEqual("X");
  });

  test("return the player that has completed a diagonal line", () => {
    const board = [
      ["X", "X", "0"],
      ["X", "0", null],
      ["0", null, "0"],
    ];

    const board2 = [
      ["X", "X", null],
      ["0", "X", "0"],
      [null, "0", "X"],
    ];

    const board3 = [
      ["X", "X", "0"],
      [null, "0", "0"],
      ["0", "0", "X"],
    ];

    expect(findWinner(board)).toEqual("0");
    expect(findWinner(board2)).toEqual("X");
    expect(findWinner(board3)).toEqual("0");
  });

  test("return null if it's a draw", () => {
    const board = [
      ["X", "X", "0"],
      ["X", "0", "X"],
      [null, "X", "0"],
    ];

    const board2 = [
      ["X", "X", null],
      ["0", "X", "0"],
      [null, "0", "0"],
    ];

    const board3 = [
      ["X", "X", "0"],
      [null, "0", "0"],
      ["X", "0", "X"],
    ];

    expect(findWinner(board)).toEqual(null);
    expect(findWinner(board2)).toEqual(null);
    expect(findWinner(board3)).toEqual(null);
  });
});
