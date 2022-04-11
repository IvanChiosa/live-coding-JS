// Here you will find mixed exercises


console.log("----1----");
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let myName = "Ivan";
let values1 = 50;
let values2 = 100;
let values3 = 980;
if (values1 >= 50 && values1 <= 90 || values2 >= 50 && values2 <= 90 || values3 >= 50 && values3 <= 90) {
    console.log(`${myName} you are in the range!`);
} else {
    console.log(`Sorry ${myName} you are not in the range`);
} // resultat --- Ivan you are in the range!


console.log("----2----");
// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} // resultat 30


console.log("----3----");
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let startWhitPy = "Py";
if (startWhitPy.startsWith("Py")) {
    console.log(startWhitPy);
} else {
    console.log("You are not a Py...");
} // resultat You are not a Py...

console.log("----4----");