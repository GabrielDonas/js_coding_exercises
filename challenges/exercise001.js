function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (firstName.charAt(0) + "." + lastName.charAt(0)).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat(
    ((originalPrice / 100) * vatRate + originalPrice).toFixed(2)
  );
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat(
    (originalPrice - (originalPrice / 100) * reduction).toFixed(2)
  );
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middleCharOdd = Math.floor(str.length / 2);
  let middleCharEven = middleCharOdd - 1;
  return str.length & 1
    ? str[middleCharOdd]
    : str[middleCharEven] + str[middleCharOdd];
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reversedWord = [];
  for (let i = word.length; i >= 0; i--) {
    reversedWord.push(word[i]);
  }
  return reversedWord.join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let reversedWords = [];
  words.forEach((word) => {
    let reversedWord = [];
    for (let i = word.length; i >= 0; i--) {
      reversedWord.push(word[i]);
    }
    reversedWords.push(reversedWord.join(""));
  });
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
