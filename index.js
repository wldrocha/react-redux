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

filterByValue(arrayTest, isCatOwner)
