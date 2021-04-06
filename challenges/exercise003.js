function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squares = [];
  nums.forEach((number) => squares.push(number * number));
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCasedArr = [];
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      camelCasedArr.push(words[i]);
    } else {
      camelCasedArr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
  }
  return camelCasedArr.join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
