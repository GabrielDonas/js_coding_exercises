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
  let subjects = 0;
  people.forEach((person) => {
    if (person.subjects !== []) subjects += person.subjects.length;
  });
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (menu[i].ingredients[j] === ingredient) return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicatedNumbers = [];
  arr1.forEach((elementArr1) => {
    let number = arr2.find((elementArr2) => elementArr1 == elementArr2);
    if (number) duplicatedNumbers.push(number);
  });
  duplicatedNumbers = [...new Set(duplicatedNumbers)];
  return duplicatedNumbers.sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
