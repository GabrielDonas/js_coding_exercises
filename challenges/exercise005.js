const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let numIndex = nums.indexOf(n);
  return numIndex === -1 || numIndex === nums.length - 1
    ? null
    : nums[numIndex + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let arr = str.split("");
  let zeros = (ones = 0);
  arr.forEach((num) => (num == 0 ? zeros++ : ones++));
  return { 1: ones, 0: zeros };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  //CHECK
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
