// Strings, Numbers, Booleans, Null, undefined data types & typeof operator

// Exercises to become familiar with data types and typeof operator.

// Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.
let length = 16.78;
console.log(typeof length);
let lastName = "Johnson";
console.log(typeof lastName);
let car = "";
console.log(typeof car);
let isOpen = true;
console.log(typeof isOpen);

// Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.

let ageMark, ageJohn;
ageMark = 33;
ageJohn = "500";
console.log("ageMark", typeof ageMark);
console.log("ageJohn", typeof ageJohn);
// Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"
let johnOlder = ageJohn > ageMark;
console.log("John is older than Mark:", johnOlder);

// Declare a variable called "str". Do not assign a value. Print str's data type to the console.
let str;
console.log(typeof str);
// Assign a string to str. Print str's data type again.
str = "Nancy";
console.log(typeof str);

// Print the last character of str's string to the console.
console.log(str[str.length - 1]);
console.log(str.charAt(str.length - 1));
console.log(str.slice(str.length - 1));

// Print the length of str to the console, as well as the data type of str's length.
let strLength = str.length;
console.log("strLength :", strLength, "strLength dataType :", typeof strLength);

// Declare three variables: "goals", "penalties", "injuries". Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(goals == penalties);). Do this for each possibility (goals, penalties) (goals, injuries), (penalties, injuries). Then, print the data type of this check to the console.
let goals, penalties, injuries;
goals = 20;
penalties = 100;
injuries = 300;
console.log("goals == penalties", goals == penalties);
console.log("goals == injuries", goals == injuries);
console.log("penalties == injuries", penalties == injuries);
let typeOfGoals = goals == penalties;
console.log(typeof typeOfGoals);
let userInput;
let kids = userInput || 0;
// if( userInput == undefined){
//     userInput = 0;
// }
console.log(kids);
// What is the type of Infinity? Comment your answer. Print the type of infinity to the console.
console.log(typeof Infinity);

// Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".
let someThing = "0";
// isNaN is Not a Number
console.log("variable is NOT a number:", isNaN(someThing));

// Print the data type of isNaN(variable) to the console.
console.log(typeof isNaN(someThing));