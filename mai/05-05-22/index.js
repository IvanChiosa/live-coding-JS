const arr = ["Mario", "Ivan" ];
arr2 = new Array();

// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) ➞ 4

// bitwiseOR(7, 12) ➞ 15

// bitwiseXOR(7, 12) ➞ 11
// Notes
// JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.

const bitwiseAND = (num1,num2) => num1 & num2;
console.log(bitwiseAND(7, 12));

const bitwiseOR = (x,y) => x | y;
console.log(bitwiseOR(7, 12));

const bitwiseXOR = (x,y) => x ^ y;
console.log(bitwiseXOR(7, 12));

console.log("------05--------");

// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

const getFirstValue = (numbers) => numbers[0];
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

console.log("------06--------");
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

const makePair = (a,b) => [a,b];
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

console.log("------07--------");

// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
// Notes
// The first array always has two elements.
// Use the spread syntax to solve this challenge.


const tuckIn = (arr1, arr2) => arr1.push(arr2);
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));