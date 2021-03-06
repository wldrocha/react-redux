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

/*
Exercise 7
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

*/


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
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

*/

function vowelCount(string) {
  const stringLower = string
    .toLowerCase()
    .replace(/[^,ae,i,o,u]/g, "")
    .trim()
    .split("");
  return stringLower.reduce((count, element) => {
    count[element] = (count[element] || 0) + 1;
    return count;
  }, {});
}

console.log(vowelCount("alondra josefa"));

/*
Exercise 9
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
  return duplicates.length > 0 ? true : false;
}

console.log(hasNoDuplicates([1, 2, 3]));

/*
Exercise 10
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

*/

function addKeyAndValue(array, key, value) {
  return array.map((element) => {
    element[key] = value;
    return element;
  });
}

var arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
console.log(
addKeyAndValue(arr, 'title', 'Instructor') //
  [
    {title: 'Instructor', name: 'Elie'},
    {title: 'Instructor', name: 'Tim'},
    {title: 'Instructor', name: 'Matt'},
    {title: 'Instructor', name: 'Colt'}
   ]);


/*
Exercise 11
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

*/

function partition(arr,callback) {
  let firstArray = []
  let secondArray = []

  arr.map((ele, i, arr) =>{
     callback(ele) ? firstArray.push(ele): secondArray.push(ele)
  })
  return [firstArray, secondArray]
}

function isEven(val){
    return val % 2 === 0;
}
var arr = [1,2,3,4,5,6,7,8];

console.log(partition(arr, isEven));