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


