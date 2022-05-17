// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
let first = { firstName: "John", lastName: "Vooo" };
let last = { lastName: "Smith" };
// Expected output:
// {firstName: "John", lastName: "Smith"}
const mergeObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const mergeObj2 = (obj1, obj2) => Object.assign(obj1, obj2);

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
const person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {John: "name", teacher: "job"}
const switchObj = (obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
};

console.log(switchObj(person));
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
const objToArray = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  return [keys, values];
};
console.log(objToArray({ a: 1, b: 2, c: 3 }));

// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100
const toBinary = (num) => num.toString(2);
// Morgen 🫣
const toDecimal = (num) => {
  return parseInt(num, 2);
};
console.log(toBinary(20));
console.log(toBinary(10));
console.log(toDecimal(101100));

// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
// isPandigital(0123456789) -> true
// isPandigital(126789) -> fasle
// isPandigital(987654321100000007777) -> true
// isPandigital(45362718905) -> true

const isPandigital = (num) => {
  let numToArr = num.toString().split("").sort();
  let filteredArr = numToArr.filter((el, i) => numToArr.indexOf(el) == i);
  return filteredArr.join("") == "0123456789";
};
console.log(isPandigital(45362718905));
console.log(isPandigital(987654321100000007777));
console.log(isPandigital(126789));