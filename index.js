/*
Exercise 1
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

*/
function filterByValue(array,key) {
  let result = array.filter((element) => {
    if(element.hasOwnProperty(key)) return element
  });
  return result;
}

arrayTest =[
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
]

filterByValue(arrayTest, "isCatOwner")


/*
Exercise 2
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

*/

function find(array, searchValue) {
  const res = array.find((element) => (element == value ? element : null));
  return res;
}

console.log(find([1, 2, 3, 4, 5]));


/*
Exercise 3
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

*/

function findInObj(array, key, searchValue) {
  return array.find((element) => {
    if (element.hasOwnProperty(key) && element[key]) return element;
  });
}

arr = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: false },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];
console.log(findInObj(arr, "isCatOwner", true));


/*
Exercise 4
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

*/

function removeVowels(string) {
  const loweString = string.toLowerCase();
  const newString = loweString.replace(/[a,e,i,o,u]/g, "");
  return newString;
}

console.log(removeVowels("Wladimir"));


/*
Exercise 5
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

*/

function doubleOddNumbers(array) {
  const odd = array.filter((elm) => elm % 2);
  const double = odd.map((el) => el * 2);
  return double;
}

console.log(doubleOddNumbers([1, 2, 3, 4, 5]));

/*
Exercise 6
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

*/

function extractKey(array, key) {
  return array
    .filter((el) => {
      if (el.hasOwnProperty(key)) return el[key];
    })
    .map((el) => {
      return el[key];
    });
}

console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);

function extractValue(array, key) {
  return array
    .filter((el) => {
      if (el.hasOwnProperty(key)) return el[key];
    })
    .map((el) => {
      return el[key];
    });
}

console.log(
  extractValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);


/*
Exercise 8
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

*/

function hasNoDuplicates(array) {
  let duplicates = [];
  const tempArray = array.sort();

  tempArray.forEach((el, i) => {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i]);
    }
  });
  if (duplicates.length > 0) return true;
  return false;
}

console.log(hasNoDuplicates([1, 2, 3]));