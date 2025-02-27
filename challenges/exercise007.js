/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = (n) => {
  if (!Number.isInteger(n)) throw new Error("n is required");
  if (n <= 1) throw new Error("positive integer is required");
  let nArray = Array.from(String(n), Number);
  return nArray.reduce((a, b) => a + b, 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (!Number.isInteger(start)) throw new Error("start is required");
  if (!Number.isInteger(end)) throw new Error("end is required");
  let range = [];
  let defaultStep = step || 1;
  for (let i = start; i <= end; i += defaultStep) {
    range.push(i);
  }
  return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (!Array.isArray(users)) throw new Error("users is required");
  if (typeof date !== "string") throw new Error("date is required");

  let usersFound = [];

  const checkMinutes = (username, screenTime) => {
    let totalTime = Object.values(screenTime).reduce((a, b) => a + b, 0);
    if (totalTime >= 100) usersFound.push(username);
  };

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].screenTime.length; j++) {
      if (users[i].screenTime[j].date === date) {
        let userName = users[i].username;
        let screenTime = users[i].screenTime[j].usage;
        checkMinutes(userName, screenTime);
      }
    }
  }
  return usersFound;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = (hexStr) => {
  if (typeof hexStr !== "string") throw new Error("hexStr is required");
  if (hexStr.charAt(0) !== "#" || hexStr.length !== 7)
    throw new Error("hexadecimal color code required");
  let hexArr = [...hexStr.toUpperCase()];
  let rgbArr = [];
  for (let i = 1; i < hexArr.length; i += 2) {
    rgbArr.push(parseInt(hexArr[i] + hexArr[i + 1], 16));
  }
  return `rgb(${rgbArr.join()})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = (board) => {
  if (!Array.isArray(board)) throw new Error("board is required");
  if (board.length !== 3) throw new Error("3 * 3 board is required");
  let winner = null;

  const checkWin = (arr) => {
    if (arr.every((e) => e === arr[0])) winner = arr[0];
  };

  for (let i = 0; i < board.length; i++) {
    let column = [];
    let row = board[i];
    let diagonalLR = [];
    let diagonalRL = [];

    for (let j = 0; j < board[i].length; j++) {
      column.push(board[j][i]);
      diagonalLR.push(board[j][j]);
      diagonalRL.push(board[j][i - j]);
    }
    checkWin(row);
    checkWin(column);
    checkWin(diagonalLR);
    checkWin(diagonalRL);
  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
};
