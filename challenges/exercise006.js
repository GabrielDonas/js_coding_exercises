/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = (arr) => {
  if (arr === undefined || !Array.isArray(arr))
    throw new Error("An array is required");
  return arr.reduce((total, amount) => {
    if (amount % 3 === 0 || amount % 5 === 0) total += amount;
    return total;
  }, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = (str) => {
  if (typeof str !== "string") throw new Error("str is required");
  return [...str.toUpperCase()].every(
    (letter) =>
      letter === "C" || letter === "G" || letter === "A" || letter === "T"
  );
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = (str) => {
  if (typeof str !== "string") throw new Error("str is required");
  let ComplementaryDNA = "";
  [...str.toUpperCase()].forEach((letter) => {
    switch (letter) {
      case "C":
        ComplementaryDNA += "G";
        break;
      case "G":
        ComplementaryDNA += "C";
        break;
      case "A":
        ComplementaryDNA += "T";
        break;
      case "T":
        ComplementaryDNA += "A";
        break;
    }
  });
  return ComplementaryDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = (n) => {
  if (typeof n !== "number") throw new Error("n is required");
  if (n <= 1) return false; // negatives
  if (!Number.isInteger(n)) return false; //integer
  if (n % 2 == 0 && n > 2) return false; // even numbers
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // start from 3, stop at the square, increment in twos
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (!Number.isInteger(n)) throw new Error("n is required");
  if (typeof fill !== "string") throw new Error("fill is required");
  let matrix = [];
  let row = [];
  for (let i = 0; i < n; i++) {
    row.push(fill);
  }
  for (let j = 0; j < n; j++) {
    matrix.push(row);
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (!Array.isArray(staff)) throw new Error("staff is required");
  if (typeof day !== "string") throw new Error("day is required");
  let staffCount = 0;
  for (let i = 0; i < staff.length; i++) {
    for (let j = 0; j < staff[i].rota.length; j++) {
      if (staff[i].rota[j] === day) staffCount++;
    }
  }
  return staffCount >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
};
