console.log("-----1-------");
// Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
// function return (true/false), if sum > 50, Object.values, loop
// Op1
// function freeShipping(obj) {
//   let sum = 0;
//   const valuesArray = Object.values(obj);
//   for (let i = 0; i < valuesArray.length; i++) {
//     sum += valuesArray[i];
//   }
//   return console.log(sum > 50);
// }
//  OP prof
// const freeShipping = (obj) => Object.values(obj).reduce((acc, cur) => acc + cur) > 50;
// [ 3.5, 5.99 ].reduce((acc, cur) => acc + cur) > 50;
// [ 3.5, 5.99 ]         ->         9.5          > 50
// Op3
const freeShipping = (obj) => {
    const valueArr = Object.values(obj);
    const sum = valueArr.reduce((acc, cur) => acc + cur);
    return sum > 50;
};
// [ 3.5, 5.99 ].reduce((acc, cur) => acc + cur) > 50;
// [ 3.5, 5.99 ]         ->         9.5          > 50

console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));



console.log("-----2-------");
// MakePairs - Write a method that returns a deep array like [[key, value]]
// Task description: Write a method that returns a deep array like [[key, value]]
// Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
const makePairs = { a: 1, b: 2, objToArr: () => Object.entries(makePairs) };
console.log(makePairs.objToArr());



console.log("-----3-------");
// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
    firstName: "Nancy",
    lastName: "Schmidt",
    age: 34,
};
for (const key in person) {
    console.log(`${key} : ${person[key]}`);
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

const getObjectValues = (obj) => Object.values(obj);
console.log(
    getObjectValues({
        choice1: "tea",
        choice2: "coffee",
        choice3: "milk",
    })
);






console.log("-----5-------");
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
const objectToArray = (obj) => Object.entries(obj);
console.log(
    objectToArray({
        A: 1,
        B: 2,
        C: 3,
    })
);



console.log("-----7-------");

// List Properties. Create a function that returns an array of properties of a javascript object.

// Example
// const student = {
//   name: "Mike",
//   class: "4A".
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]

const student = {
    name: "Mike",
    class: "4A",
    course: "English",
};
const keysArr = (obj) => Object.keys(obj);
console.log(keysArr(student));