 console.log("-----01-----");
 function sumUp (x,y) { // function ist ein hoisting 
    return x + y;
}
console.log("-----02-----");
var globalVar = "I'm global";
console.log(globalVar);


console.log("-----03-----");
// ?true : false
// ternary condition ? ex if true : ex if false 
let userIsLogged = false;  // JS think immer an true
console.log(userIsLogged  == false ? "Welcome Back" : "You need to log in ");
console.log(5 > 6 || 1 == 1 ? "Cool" : "Noooo");
console.log(5 > 6 && 1 == 1 ? "Cool" : "Noooo");
console.log(1 == "1" ? "Cool I looked only at the value" : "Noooo");
console.log(1 === "1" ? "Cool I looked only at the value" : "Noooo");


console.log("-----04-----");
// strings 
let str = "This is a long text"; // alles caracter in meine string
console.log(str.length); // length ist eien property


console.log("-----05-----");
// if else
let totalItems = 550; // Front-end frage 
if ( totalItems > 150 ) {
    // something true
    console.log("Nice you got free a gift");
}else {
    // something false
    console.log("Oh no you need to pay more");
}



console.log("-----06-----");
console.log("---break---");
// loops // break 
// break wir benutzen nur in der schlaife oder swith
for (let i = 0; i < 10; i++) {
    console.log(i);
    if ( i == 5 ) {
        break;
    } 
}



console.log("-----07-----");
// || continue
console.log("---continue---");
for (let i = 0; i < 10; i++) {
    if ( i == 5 ) {
        continue;
    } 
    console.log(i);
}



console.log("-----08-----");
// switch
let color = "Green";
let resultText = "";
switch(color) {
    case ("blue", "lightBlue"): 
    resultText = "This is blue";
        break;
    case "Green":
        resultText ="This is green";
        break;
    case "black": 
    resultText ="This is black";
        break;
    case "red": 
    resultText ="This is red";
        break;
    default:
        resultText = "Sorry this color is not in our list";
}
console.log(resultText);



console.log("-----09-----");
// Assign a string to str. Print str's data type again.
str = "Nancy";
console.log(typeof str);

// Print the last character of str's string to the console.
console.log(str[str.length - 1]);
console.log(str.charAt(str.length - 1));
console.log(str.slice(str.length - 1));


console.log("-----10-----");
function sum(x = 10, y = 0) {
    return x + y;
} 
console.log(sum());

// Opt 2
const sum1 = function (x,y) {
    return x + y;
}


console.log("-----11-----");
// Arrays
const arr = []; // array zu declariert
const arr2 = new Array(); // array zu declariert // mit new wir macchen ein kopie mit dem classe 
// sort, map, join, includes, foreach, fill, filter, slice, reduce, splice, push, pop, unshift, shift, findIndexOf, reverce

console.log(Object.getOwnPropertyNames(Array.prototype));  //gibts uns alles method und property was gibts in eine array
// [
//     'length',      'constructor',    'concat',
//     'copyWithin',  'fill',           'find',
//     'findIndex',   'lastIndexOf',    'pop',
//     'push',        'reverse',        'shift',
//     'unshift',     'slice',          'sort',
//     'splice',      'includes',       'indexOf',
//     'join',        'keys',           'entries',
//     'values',      'forEach',        'filter',
//     'flat',        'flatMap',        'map',
//     'every',       'some',           'reduce',
//     'reduceRight', 'toLocaleString', 'toString',
//     'at'
//   ]

console.log(Object.getOwnPropertyNames(Array));
// [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ] // 

console.log(Object.getOwnPropertyNames(Function));
// [ 'length', 'name', 'prototype' ] // 


console.log(Object.getOwnPropertyNames(Array.prototype).filter((prop) => typeof Array.prototype[prop] == "function")); // hier ist die method

// [
//     'constructor',    'concat',   'copyWithin',
//     'fill',           'find',     'findIndex',
//     'lastIndexOf',    'pop',      'push',
//     'reverse',        'shift',    'unshift',
//     'slice',          'sort',     'splice',
//     'includes',       'indexOf',  'join',
//     'keys',           'entries',  'values',
//     'forEach',        'filter',   'flat',
//     'flatMap',        'map',      'every',
//     'some',           'reduce',   'reduceRight',
//     'toLocaleString', 'toString', 'at'
//   ]



console.log(typeof function sum(){});


const foods = [
    {
        name: "kebab",
        price: 12
    },

    {
        name: "hummus",
        price: 3
    },

    {
        name: "falafel",
        price: 5
    },

    {
        name: "schwareme" ,
        price: 8
    }
];
console.log("-----12-----");
// normale for loop
for (let i = 0; i <foods.length; i++) {
    console.log(foods[i].name, foods[i].price);
}

console.log("-----13-----");

// for of 
for (const element of foods) { // element gibt uns eine object
    console.log(element.name, element.price);
};


console.log("-----14-----");
// for in
for (const element1 in foods) { // element hier ist eien index
    console.log(foods[element1].name, foods[element1].price + 2);
}

// * Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
const books = [
    {
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: true
    },
    {
        title: "Clean Code",
        author: "Ivan Chiosa",
        alreadyRead: false
    },
];
for ( let i = 0; i <books.length; i++) {
    let bookInfo = books[i].title + " by " + books[i].author;
    if (books[i].alreadyRead) {
        console.log(`You already read ${bookInfo}`);
    } else {
        console.log(`You still need to read ${bookInfo}`);
    }

}



console.log("-----15-----");
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
    return num1 + num2 < 100;
  }
  console.log(lessThan100(22, 15));
  console.log(lessThan100(3, 77));
  console.log(lessThan100(83, 34));


  console.log("-----15-----");  
  // Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
const addition = (num) => num + 1;
console.log(addition(0));
console.log(addition(-3));


console.log("-----16-----");  
// Arrays        0        1        2         3
const names = ["Ivan", "Mario", "Steel", "Natalia"];
console.log("Names", names.length);

console.log(names[2]);


console.log("-----17-----"); 
const ppl = [
    {name: "Ivan", age:36, add:"Köln"},
    {name: "Mario", age:36, add:"Moldavia"},
    {name: "Roman", age:36, add:"NY"},
    {name: "Steel", age:36, add:"Germany"},
    {name: "Moldavia", age:36, add:"Germany"},
];

console.log(ppl[3].add);
console.log(ppl[3]["add"]);
// opt 1
console.table(ppl.map((person) => `I like ${person.add}`));
console.log("-------");
console.log(ppl.map((ele) => ele.add));

console.log("------Long------");
// opt long
let addArray = [];
for (let i = 0; i < ppl.length; i++) {
    addArray.push(ppl[i].add), addArray.push(ppl[i].age)
}
console.log(addArray);
console.log(ppl);


console.log("-----18-----");
// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

const arrowFunc = (param) => param; 
console.log(arrowFunc(3));
console.log(arrowFunc("3"));
console.log(arrowFunc(true));


console.log("-----19-----");
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



console.log("-----20-----");

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

console.log("------21--------");
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

const makePair = (a,b) => [a,b];
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

console.log("------22--------");

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


console.log("------23--------");
// declarieren die strict mode 
"use strict";


console.log("------24--------");
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



console.log("------25--------");
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
// let num = 10;
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

(function() {

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
/// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> this is not a bank account
// DE33nn54637 -> this is a wrong bank account
// DE22222343548839385096 -> this is correct, I'll take your money :)
// bankContoCheck("DE3333");

const bankContoCheck = (str) => {
    let countrySym = str.substring(0, 2);
    let accNumbers = str.substring(2);
    let userAccLength = str.length;
    if (countrySym != "DE") {
      return "this is not a bank account";
    }
    if (userAccLength != 22) {
      return "this is not a complete bank account please check";
    }
    if (isNaN(accNumbers)) {
      return "this is a wrong bank account";
    }
    return "this is correct, I'll take your money :)";
  };
  console.log(bankContoCheck("DE2222234354883nn85096"));
  console.log(bankContoCheck("DE5096"));
  console.log(bankContoCheck("DE22222343548839385096"));


  "use strict"


// // Selft Invoche annonims function
// (function(){
//    console.log("Ivan", "Chiosa");
// })();

// Imediatly Invockt Function Expression
const sum10 = ((x, y) => x + y)(5, 6);
console.log(sum10);


const userCarData = {
   year: 2022,
   model: "Seat",
   speed: 260,
   get fullCarName() {
      return `This is di model years ${this.year}, und die model ist ${this.model} il spped is ${this.speed}`;
   },
   set fullCarName(str) {
      let arr = str.split(" ");
      this.year = arr[0];
      this.model = arr[1];
      this.speed = arr[2];
   }
};
console.log("----getter----");
// getter ohne information 
console.log(userCarData.fullCarName);


console.log("----setterr----");
// setter ist mit die information drin
userCarData.fullCarName = "1999 BMW 100";
console.log(userCarData.fullCarName);


function Person(name, age, add) {
   this.name = name;
   this.age = age;
   this.add = add;
};

const ivanData = new Person("Ivan", 37, "Koln");
console.log(ivanData);


console.log("-------Calculator------");
// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

const calculator = (str) => Function(`return ${str}`)();
console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));


// Visa oer Master, write a function that checks if the user has entered a valid card data
// Example:
// 412178679036597 -> this is Visa card, I need your money
// 512178679036597 -> this is Master card, I need your money
// 34121786790365 -> this is AmEpx card, I need your money
// 11111 -> this is not correct
// de343ee -> this is not correct

// const cardValidation = (str) => {
//    let cardVisa = num.length;
//    let cardMaster = num.length;
//    let cardAmExp = num.length;

//    if (isNaN(str)) {
//       return `You have to write only a numbers`
//    }
   

//    if (cardVisa === 16) {
//       return `This is Visa card, I need your money!`;
//    }
//    if (cardMaster == 15) {
//       return `This is Master card, I need your money!`
//    }
//    if (cardAmExp === 14) {
//       return `This is AmEpx card, I need your money!`
//    }
//    if (isNaN(num)) {
//       return `You have to write only a numbers`
//    }
//    return `This is not correct`
// };
// console.log(cardValidation("1234567890123456"));
// console.log(cardValidation("123456789012345"));
// console.log(cardValidation("12345678901234"));
// console.log(cardValidation("de343ee"));
// console.log(cardValidation("11111"));


// Phone number, Write a function that checks if a user give a correct German (landline Berlin 030) phone number
// 030-1247893 -> I'll call now
// 333-332222 -> this is not a phone number
// 030-33 -> This is not complete !

const phoneNumber = (num) => {
   let correctNumber = num.length;
   let landlineBerlin = num.substring(0,3);

   if (correctNumber == 10 ) {
      return `I'll call now`;
   }
   if (landlineBerlin != "030") {
      return `This is not a phone number von Berlin`;
   }
   if (correctNumber < 10) {
      return `This is not complete!`
   }
};
console.log(phoneNumber("0301247893"));
console.log(phoneNumber("333332222"));
console.log(phoneNumber("03033"));





// Destructure nested properties
// const {
//    id,
//    title,
//    date,
//    author: { firstName, lastName },
//  } = note

const arr10 = ["Ivan", "Mario", "Vasile"];
const newArr = arr10;
console.log(newArr);

// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.


const sortByLength = (arr) => {
   return arr.sort((x,y) => x.length - y.length);
};
console.log(sortByLength(["Google", "Apple", "Microsoft", "i"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));
  


const obj = {
    name: "Ali",
    age: 22,
    visitedCities: ["Berlin", "LA", "London", "Paris"],
    showInfo: function () {
        return `I'm ${this.name}, I have been in ${this.visitedCities}`;
    },
};
let objName = obj.name;
console.log(obj.name);
console.log(obj.age);

console.log("-----destructuring-------");
console.log(obj.visitedCities);
// Destructuring objects as function parameters
function funObj(obj) {
    let firstName = obj.name; // op1
    console.log(firstName);
}
funObj({ name: "Nancy", tel: 2324455 });

function ivanObj (obj) {
    let lastName = obj.name;
    let phonNummber = obj.tel;
    console.log(lastName, phonNummber);
};
ivanObj({name: "Ivan", tel: 23654978});




const ppl1 = [
    {
        firstName: "Anna",
        age: 22,
        add: "Berlin",
        avatar: "😎",
        likes: 222,
        comments: 232,
    },
    {
        firstName: "Uli",
        age: 22,
        add: "LA",
        avatar: "😈",
        likes: 222,
        comments: 765,
    },
    {
        firstName: "Leo",
        age: 22,
        add: "Berlin",
        avatar: "😉",
        likes: 2,
        comments: 7,
    },
    {
        firstName: "Nancy",
        age: 22,
        add: "LA",
        avatar: "😇",
        likes: 4566,
        comments: 456,
    },
    {
        firstName: "Ali",
        age: 22,
        add: "LA",
        avatar: "😀",
        likes: 3,
        comments: 232,
    },
    {
        firstName: "Steel",
        age: 22,
        add: "Amsterdam",
        avatar: "😅",
        likes: 5,
        comments: 43,
    },
    {
        firstName: "Olga",
        age: 22,
        add: "NY",
        avatar: "🤓",
        likes: 54,
        comments: 43,
    },
    {
        firstName: "Zain",
        age: 22,
        add: "Dubai",
        avatar: "🫣",
        likes: 678,
        comments: 654,
    },
];
// const newPPlCopy = ppl.map((person) =>
const newPPlCopy = ppl1.map(
    ({ firstName, age, add, avatar, likes, comments }) => {
        // let name = person.firstName;
        // let age = person.age;
        console.log(`
    -------------------------------------
    |this person ${firstName} ${avatar}  
    |lives in ${add}   
    |👍🏻: ${likes}    📝: ${comments}              
    ------------------------------------
    `);
    }
);

// getter
const userCarData1 = {
    year: 2020,
    model: "A7",
    speed: 250,
    price: 75000,
    get fullCarName() { // bring von meine nutzer 
        if (this.model === undefined || this.price < 5000) {
            return `this data ist not ready`
        }
        return `Our Car ${this.model} price: ${this.price} €`;
    },
    set fullCarName(str) {
        let arr = str.split(" ");
        this.year = arr[0];
        this.model = arr[1];
        this.speed = arr[2];
        this.price = arr[3];
    }
};
// getter 
console.log(userCarData1.fullCarName); // ohne information ist getter

// setter
userCarData.fullCarName = "2022 Q5 300 80000"; // mit information ist setter
console.log(userCarData1.fullCarName);

userCarData.fullCarName = "2019 A3 220 44000";
console.log(userCarData1.fullCarName);

// constructor our own
function Person(name, age, add) {
    this.name = name;
    this.age = age;
    this.add = add;
    this.printOut = function () {
        console.log(`Hey ${this.name}, ${this.age} years old. You live in ${this.add}.`);
    };
};
const ivanData1 = new Person("Ivan", 37, "Köln");
const aliData = new Person("Natalia", 40, "Bad Honnef")
const marioData = new Person("Mario", 22, "Berlin");

console.log("----- constructor------");
console.log(marioData);
ivanData1.printOut();
aliData.printOut();



// TV App
class Tv{
    constructor(brand, channel, volume = 10) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    inVolume () {
        if ( this.volume < 100) {
            this.volume++
            console.log((this.volume));
        } else {
            console.log("This ist to loud");
        }
    }
    decVolume () {
        if ( this.volume > 0) {
            this.volume--;
            console.log(this.volume);
        } else {
            console.log("No Sound");
        }
    }
    rest () {
        this.channel = 1;
        this.volume = 10;
        console.log(this.volume);
    }
    randomChannel () {
        this.channel = Math.floor(Math.random() * 10) + 1;
    }
    display () {
        return `This ${this.brand} Tv, has channel ${this.channel} on right now . The volume is currently at ${this.volume}`;
    }
}
const samsung = new Tv("Samsung",50,20);
console.log(samsung);
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();

console.log("------");
samsung.decVolume();
samsung.decVolume();
samsung.decVolume();
samsung.rest();
samsung.randomChannel();
console.log(samsung);
samsung.display();
console.log(samsung.display());
const lg = new Tv("LG", 80);


class Person1 {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    printData() {
        return console.log(`Hey ${this.name} you are ${this.age} years.old!`);
    }
}
const ivanObj1 = new Person1("Ivan",34);
console.log(ivanObj1);
ivanObj1.printData();

// Kinder
class Kind extends Person1 {
    constructor (name, age, height = 50) {
        super(name,age);
        this.height = height;
    }
    show() {
        return console.log(`This Kind class is extends from Preson, ${this.name}`);
    }
}
const zainbabyObj = new Kind("Zain",1,75);
console.log(zainbabyObj);
zainbabyObj.printData();



// / /Email check, write a program that checks yours input if it's a correct email
  // emailCheck("Hi@hh.co") -> true
  // emailCheck("Hihh.co") -> false
  // emailCheck("@hh.co") -> false
  
  const validate = (str) => {
    let at, dot;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "@") at = i;
      if (str[i] === ".") dot = i;
    }
    if (at > 0 && dot > at) {
      return `${str} is valid.`;
    } else {
      return `${str} is invalid`;
    }
  };
  console.log("------");
  console.log(validate("contact@hadi-nsreeny.com"));
  console.log(validate("@hadi-nsreeny.com@"));
  console.log(validate("t@hadi-nsreenycom"));
  

// Closure // geschlössen
// function return other function

function priceCheck (num) {
    function discount() {
        return num * 10 / 100;
    }
    return `If you pay ${num}€, you will save ${discount()} €`;
}
console.log(priceCheck(2));

// mit => this => method => constructor cann wir nicht arow function benutzen


// Destructuring objects as function parameter 
// Op1
// referenz das gehort nicht zu mir nur ich sage dir nehmen und sicken in meine object
const printFunction  = (obj) => {
    let name = obj.name;
    // let firstName = "Ivan"; 
    // primitive ist eine string boolean null ...
    let age = obj.age;
    console.log(name,age);
    // mit emoji da scrivere 
}

// Op2
const printFunction2  = ({name,age}) => {
    console.log(name,age);
}
printFunction({name:"Steel", age:22, hight: 180, add: "London"});
printFunction2({name:"Ivan", age:30, hight: 180, add: "Moldavia"});


const ppl = [
    {name:"Ivan", age:37},
    {name:"Mario", age:37},
    {name:"Natalia", age:37},
];
const newInfo = ppl.map(({ name, age}) => console.log(name, age));

// SIAF
// Self-invoking anonymous function
(function (num1,num2) {
    console.log(num1+num2);
}) (2,3);


// IIFE
// Immediately_Invoked Function Expression
const sum = ((x,y)=> x + y )(4,5);
console.log("Sum", sum);


// constructor function
function AnimalsKrank(name,age, sickTyp) {
    this.name = name;
    this.age = age;
    this.sickTyp = sickTyp;
    this.display = function () {
        return console.log(`${this.name} has ${this.sickTyp}. Gut Besserung`);
    }
};
const dog = new AnimalsKrank("Max", 7, "Kopf Schmerzen");
console.log(dog);
dog.display();


// Class
class Laptop {
    // constructor method
    constructor (model,price) {
        this.model = model;
        this.price = price;
        this.display = function () {
            console.log(`This Laptop is ${this.model} priced at ${this.price} €`);
        }
    }
    priceUp() {
        // this.price = this.price * 5 => Abkurtzung
        // return bring uns nur eien value das vegen brauche wir eine runde clama ()
        return (this.price *= 5);
    }
};
const macBook = new Laptop("MacBook Pro 14in", 2500);
macBook.display();
macBook.priceUp();
macBook.display();






// extends  und super 
class Keyboard extends Laptop {
    constructor(model, price, color, lang, cable) {
        super(model,price);
        this.color = color;
        this.lang = lang;
        this.cable = cable;
    }
}
const lg = new Keyboard("Lg", 150, "Black", "DE", false);
console.log(lg);
lg.display();
lg.priceUp();
lg.display();
// spread operator in array
const arr1 = ["This ", "is "];
const arr2 = ["Cool"];
const totalArray = [...arr1, ...arr2];
console.log(totalArray);

for (let i = 0; i < arr1.length; i++) {}

// Clones vs.Reference 
// Primitive (Simple values are always clones)
// String Number Boolean
let x = 5; 
let val = x; //Val ist clones // nur primitive value cann du clonnen 
console.log(val);
val = 333;
console.log(val);
const obj = {
    id: 22
}
let ref = obj; // Das ist eine referenze nicht clonnen => obj oder arr 
ref.id = 55;
console.log(obj.id);

const names = ["Ivan", "Zain", "Steel"];
let arrRef = names; // referenz

// Cloning Array using 
// Method 1
const newArrSpread = [...names] // copie of meine arra clones

// Method 2
const newArrWhitMap = names.map((ele) => ele); // clone 

// Method 3
const newArrWhitSlice = names.slice(0);

// Method 4
const newArrWhitConcat = [].concat(names); // clone

// colors: ["Red", "Sliwer", "White"],
const car = {
    brandName: "Audi", // clon
    price:  2022, //clon
    colors: ["Red", "Sliwer", "White"], // array referenz
    op: {
        leatherFinish: true,
        dash: "Wood",
  }
}