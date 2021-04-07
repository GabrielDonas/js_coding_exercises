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
  let nString = n.toString();
  let nArrayReversed = nString.split("").reverse();
  let nStringReversed = nArrayReversed.join("");
  return parseFloat(nStringReversed);
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let arrSum = 0;
  arrs.forEach((arr) => (arrSum += arr.reduce((a, b) => a + b, 0)));
  return arrSum;
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let arr = Object.values(haystack);
  let str = arr.join().toLowerCase();
  return str.indexOf(searchTerm.toLowerCase()) == -1 ? false : true;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let arr = str.split(" ");
  let newArr = [];
  //clean words and insert them into the new array as key-value pairs
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    newArr.push([word, 1]);
  }

  //turn the key-value pairs array into an Object
  let entries = new Map(newArr);
  let wordsObj = Object.fromEntries(entries);

  //console.log(wordsObjKeys);
  let wordsObjKeys = Object.keys(wordsObj);
  for (let j = 0; j < wordsObjKeys.length; j++) {
    for (let x = 0; x < newArr.length; x++) {
      if (wordsObjKeys[j] === newArr[x][0]) {
        //console.log(wordsObj[0]);
        //wordsObj[j]++;
      }
    }
  }
  console.log(wordsObj[0]);
  return wordsObj;
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
