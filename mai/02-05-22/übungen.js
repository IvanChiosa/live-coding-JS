// Strings, Numbers, Booleans, Null, undefined data types & typeof operator

// Exercises to become familiar with data types and typeof operator.

console.log("-----01-----");
// Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.
// let length = 16.78; // let lastName = "Johnson"; // let car = ""; // let isOpen = true; //
let length = 16.78;
console.log(typeof length);

let lastName = "Johnson";
console.log(typeof lastName);

let car = "";
console.log(typeof car);

let isOpen = true;
console.log(typeof isOpen);


console.log("-----02-----");
// Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.
let ageMark = "36";
console.log(`I'm Mark, i'm ${ageMark} year alt!`);

let ageJohn = 40;
console.log(`I'm John, i'm ${ageJohn} year alt!`);


console.log("-----03-----");
// Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"
if (ageJohn > ageMark) {
    console.log("John is older than Mark: true");
} else {
    console.log("John is little than Mark: false");
}

console.log("-----04-----");
// Declare a variable called "str". Do not assign a value. Print str's data type to the console.
let str;
console.log(str);


console.log("-----05-----");
// Assign a string to str. Print str's data type again.
let newStr = "Hallo Ivan!";
console.log(newStr);


console.log("-----06-----");
// Print the last character of str's string to the console.
console.log(newStr.slice(-1));


console.log("-----07-----");
// Print the length of str to the console, as well as the data type of str's length.
console.log(newStr.length);


console.log("-----08-----");
// Declare three variables: "goals", "penalties", "injuries". Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(goals == penalties);). Do this for each possibility (goals, penalties) (goals, injuries), (penalties, injuries). Then, print the data type of this check to the console.
let goals = 10;
let penalties = 10;
let injuries = 10;
if (goals == penalties && goals, injuries && penalties, injuries) {
    console.log(`goals == penalties`);
}

console.log("-----09-----");
let goals1 = 10;
let penalties1 = 5;
let injuries1 = 10;
if (goals1 == penalties1 && goals1 == injuries1 && penalties1 == injuries1) {
    console.log(`goals == penalties`);
} else {
    console.log(`goals => THEY ARE NOT THE SAME <= penalties`);

}


console.log("-----10-----");
// What is the type of Infinity? Comment your answer. Print the type of infinity to the console.
console.log(`The Infinity is a property of the global object. In other words, it’s a global variable.`);


console.log("-----11-----");
// Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".
// Print the data type of isNaN(variable) to the console.

let typeOfNaN = 10;
if (isNaN(typeOfNaN)) {
    console.log("variable is NOT a number: false");
} else {
    console.log("variable is a number: true");
}


console.log("-----12-----");