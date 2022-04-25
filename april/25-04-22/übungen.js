console.log("-----1-------");
// 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false


function freeShipping (obj) {
    const valuesArr = Object.values(obj);
    let sum = valuesArr.reduce((acc, cur) => acc + cur, 0);
    return console.log(sum > 50);
}
freeShipping({ "Sponge": 3.50, "Soap": 5.99 });
freeShipping({ "Surround Sound Equipment": 499.99 });
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 });


console.log("-----2-------");
// MakePairs - Write a method that returns a deep array like [[key, value]]
// Task description: Write a method that returns a deep array like [[key, value]]

// Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const obj = { a: 1, b: 2 };
function makePairs (obj) {
    console.log(Object.entries(obj));
}
makePairs(obj);



console.log("-----3-------");
// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const manyPerson = {
    myName: "Ivan",
    mySurname: "Chiosa",
}
for (const key in manyPerson) {
    console.log(`${key}: ${manyPerson[key]}`);
}



console.log("-----4-------");
// 2. Get Values. Create a function that returns an array of all values of an object's properties.

// Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]
function getObjectValues (obj) {
    console.log(Object.values(obj));
}
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})



console.log("-----5-------");
// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

// Example
// let person = {
//   firstName: "Michael",
//   lastName: "Smith",
//   job: "driver",
//   age: 20,
//   city: "Paris"
// }
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".
let person = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris"
}
person.print = function () {
    console.log(`${this.firstName + " " + this.lastName} is a ${this.age} year old ${this.job} in ${this.city}!`);
}
person.print();





console.log("-----6-------");
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.

// Examples:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
function objectToArray (obj) {
    let output = Object.entries(obj);
    console.log(output);
}
objectToArray({
    A: 1,
    B: 2,
    C: 3
})

console.log("-----7-------");

// List Properties. Create a function that returns an array of properties of a javascript object.

// Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]


let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

student.print = function () {
    console.log(Object.key);
}
student.print();