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

