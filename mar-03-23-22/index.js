// 
console.log("hi Ivan".toLowerCase());
console.log("hi Ivan".toLowerCase());
console.log("    cool   ".trim);
console.log("    cool   ".trimStart);
console.log("    cool   ".trimEnd);
console.log("hallo mein name ".substring(3,9));
console.log("Hallo Ivan".includes("@"));
let num = 0;
num++;
console.log(num); // 1
num--;
console.log(num);
console.log("Ivan".length);

function sum(x,y){
    return x+y;
}


// let str1 = "Hi";
// let str2 = "This is cool";
// console.log(str1 + " " + str2) ;

let str1 = "Hi";
str1 += " this ist cool";
console.log(str1);

num += 5;
console.log(num);
num -= 100;
console.log(num);
num *= 44;
console.log(num);
num /= 3;
console.log(num);



// bracket notation [0]
console.log("Ivan"[0]);

// Numbers
// add und even 
// even 0,2,4,6,8,10
// add 1,3,5,7,9,11
console.log( 101 % 2);


// Condizional ternery Operator
// Condition? true: false:
// Frage ? richtig : falsch
//Bedingung ? Ausdruckt1: Ausdrucken2
// >=  <=  ==

99 % 2 == 0 ? console.log("Even"): console.log("Odd");
100 == 100 ? console.log("Ja"): console.log("Nein");
10 == 100 ? console.log("Ja"): console.log("Nein");
10 > 100 ? console.log("Ja"): console.log("Nein");
10 < 100 ? console.log("Ja"): console.log("Nein");
100 >= 10 ? console.log("Ja"): console.log("Nein");
1 + 2 + 3 == 44 ? console.log("Ja"): console.log("Nein");
1 / 4 + 55 == 44 ? console.log("Ja"): console.log("Nein");
1 % 4  == 0 ? console.log("Ja"): console.log("Nein");
2 % 2  == 0 ? console.log("Ja"): console.log("Nein");
console.log(1 % 4);

// DRY
console.log(1 == 0 ? "Ja" : "😂️");
let isLogged = true; // true oder False
console.log(typeof  isLogged );
console.log(isLogged ? "Log out" : "Log in");


// 2 Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
(33, 40, 2, 1, 22)
console.log(33%2==0 ? "30" : "Odd");
console.log(40%2==0 ? "30" : "Odd");
console.log(2%2==0 ? "30" : "Odd");
console.log(1%2==0 ? "30" : "Odd");
let number = 22;
console.log(number % 2 == 0 ? `${number} is even` : `${number} is odd`);

function oddOrEven (num) {
    console.log(num % 2 == 0 ? `${num} is even` : `${num} is odd`);
}
oddOrEven (100);
oddOrEven (99);
oddOrEven (54);

//  Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat

let isDog = false;
console.log(isDog ? "pat, pat" : "find me a dog to pat!");


// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 50;
let mySpeed = 50;
console.log(mySpeed >= speedCheck ? "too fast" : "Oma");


//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true;
console.log(isStudent ? "Ticket costs 5 euro" : "Ticket costs 12 euro");

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 60;
console.log(age < 16 ? "serve butter beer" : "serve beer");


let bool = undefined;
// 1 == true
// 0 == false
// string == true
// empty string == false
// undefined == false
// null == false
// object ({}) true
// Array == true

// if else
if (isLogged){
    console.log("Ja"); // das ist eine scope heißt
    console.log("This is amaizing");
} else {
    console.log("Nein");
    console.log("I´m sorry");
}

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
// and in Englisch 
// && in JavaScript
// || or in JavaScript
// let startOfRange = 50;
// let endOfRange = 99;
// let userFirstNum = 90;
// let userSecondNum = 1;

// Kiss
// if (userFirstNum >= 50 && userFirstNum <= 90 || userSecondNum >= startOfRange && userSecondNum <= endOfRange  ){
//     console.log("Cool");
// } else {
//     console.log("Nooo");
// }

// && 
// true && true = true
// false && true = fasle
// true && false = fasle
// false && false = fasle
// || 
// true || true = true
// false || true = true
// true || false = true
// false || false = fasle

// Check if three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range.

let startOfRange = 50;
let endOfRange = 99;
let userFirstNum = 90;
let userSecondNum = 1;
let userDriteNum = 30;

if (userFirstNum >= 50 && userFirstNum <= 90 || userSecondNum >= startOfRange && userSecondNum <= endOfRange || userDriteNum >= startOfRange && userDriteNum <= endOfRange ){
    console.log("Cool");
} else {
    console.log("Nooo");
}

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.


let text = "Ivan";
console.log(text.substring(0,2));
if (text.substring(0,2) == "Py") {
    console.log(text);
} else {
    console.log("Py "+text);
}
// mehr example
console.log( text.substring(0,2) == "Py" ? text: "Py"+text);
// mehr example
console.log(text.startsWith("Py") ? text : "Py" + text);

//Calculate the sum of the two given integers. If the two values are same, then return triple their sum.

let sum1 = 2;
let sum2 = 2;
let result = sum1 + sum2;
if (sum1 == sum2) {
    console.log((sum1 + sum2) * 3);
} else {
    console.log("Sorry");
}
 // mehr exaple 
console.log(sum1 == sum2 ? (sum1 + sum2) * 3 : "Sorry they are not the same Ivan");


// isBigger, check if a given number bigger then 55, write that in function
// check the following 55,4,2,51,2.2
function isBigger (userNum) {
    return userNum >= 55;
}
console.log(isBigger(55));
console.log(isBigger(4));
console.log(isBigger(2));
console.log(isBigger(51));
console.log(isBigger(15));
console.log(isBigger(2.2));


// mehr Beispiele
function isBigger2 (userNum) {
    console.log(userNum >= 55);
}
isBigger2(23);
isBigger2(55);

// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
let firstName = "Ivan";
let myAgeIvan = 36;

if (myAgeIvan < 13) {
    console.log(firstName + " is a child");
} else if (myAgeIvan >= 13 && myAgeIvan <= 20) {
    console.log(firstName  + " is a teenager");
} else if (myAgeIvan >= 20 && myAgeIvan < 30){
    console.log(firstName  + " is a young adult");
} else if (myAgeIvan >=30){
    console.log(firstName + " is an adult");
} else {
    console.log(firstName + " This ist not ok");

}



// function sum_button_click()
// {
//     x=parseInt(document.getElementById("x").value)
//     y=parseInt(document.getElementById("y").value)
//     result=sum(x,y)
//     document.getElementById("result").value=result
// }
// function sum (x,y){
//     return x*y;
// }
