// declarieren die strict mode 
"use strict";
// SIAF && IIFE

// local vs global
// global 0> gehöer insgesamt var
// let x = 3;
// scoop schlaife if/else, switch, calback 


// outer function 
function sum(num1, num2) {

    function second(n) {
        // inner function
        if (n != 0) {
            return "Sorry";
        }
        return n;
    }
    return second(num1) + second(num2);
}
console.log(sum(2,3));


// Nested scope
let nice = true;
const outerFunction = (x,y) => {
    let big = false;
    console.log(big + "outerFunction");
    const innerFunction = (num) => {
        big = true;
        nice = false;
        let fat = true;
    };
    let fat = false; // strickt mode immer muss sehr gut deklarieren ex let/ 
    innerFunction();
    console.log(`innerFunction : big = ${big}, nice = ${nice}`);
};
console.log(outerFunction());

// closure in inglish ist closser 
// closure 
let num = 10;
function fun() {
    let num = 10;

    function iDoSomething() { // dieses function ist schlosen // eine schlisende function 
        return num;
    };
    return iDoSomething();
};
fun();

// Invoke == e un call di una function
// SIAF // no name function 
// self - invoking anonyms function 
function noName() {
    console.log("Ivan");
};
noName();

// function non name e anruf function
(function () {
    console.log("Ivan");
})();

// 2 beispiel
(function (name,add) {
    console.log("Ivan");
})("Ivan", "Köln");

// 3 beispiel
(() => console.log("Cool"))();


// IIFE
// Imediatly invocked Function expression
const resultSum = ((x,y) => x + y) (2,4);
console.log( typeof resultSum);
// (() => )()
// (() => )()


// Write a function add that uses a closure that performs addition on arguments in two separate function calls.

const add = (a) => (b) => a + b;
console.log(add(2)(3));

// Callback cb

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
const multiplier = (
  (num) => (x) =>
    num * x
)(3)(3);
console.log(multiplier);

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $3000 */
// currentAge retirementAge monthlyWage percentage
const moneyFunction = ((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    return "Sorry, you need to enjoy your off days";
  } else {
    let yearsToWork = retirementAge - currentAge;
    let moneyToSafe = (monthlyWage * percentage) / 100;
    let totalSave = yearsToWork * (moneyToSafe * 12);
    console.log(
      `You are ${currentAge} and you need to work ${yearsToWork}. you are currently saving ${moneyToSafe} monthly. so after ${yearsToWork} ypu will save ${totalSave} `
    );
  }
})(40, 60, 1000, 10);
// () // ruft sie selber 
// () ()

console.log("----Bank Account-----");
// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> this is not a bank account
// DE33nn54637 -> this is a wrong bank account
// DE -> this is correct, I'll take your money :faccia_leggermente_sorridente:

function bankAccount (str) {
    if(str.startsWith("DE") && str.length === 22) {
        return `This is correct, I'll take your money => ${str}`;
    } else if (str === "DE3333") {
        return `This is not a complete bank account please check`;
    } else if (str  === "QQ") {
        return `This is not a bank account`;
    } else if (str === "DE33nn54637")  {
        return `This is a wrong bank account`
    } else {
        return `Write here you Iban`
    }
}
console.log(bankAccount("DE12345678901234567890"));
