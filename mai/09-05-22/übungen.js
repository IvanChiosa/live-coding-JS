"use strict"


// // Selft Invoche annonims function
// (function(){
//    console.log("Ivan", "Chiosa");
// })();

// Imediatly Invockt Function Expression
const sum = ((x, y) => x + y)(5, 6);
console.log(sum);


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

const calculator = (str) => {
   return eval(str);
};
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

const cardValidation = (num) => {
   let cardVisa = num.length;
   let cardMaster = num.length;
   let cardAmExp = num.length;

   if (cardVisa === 16) {
      return `This is Visa card, I need your money!`;
   }
   if (cardMaster == 15) {
      return `This is Master card, I need your money!`
   }
   if (cardAmExp === 14) {
      return `This is AmEpx card, I need your money!`
   }
   if (isNaN(num)) {
      return `You have to write only a numbers`
   }
   return `This is not correct`
};
console.log(cardValidation("1234567890123456"));
console.log(cardValidation("123456789012345"));
console.log(cardValidation("12345678901234"));
console.log(cardValidation("de343ee"));
console.log(cardValidation("11111"));


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

const arr = ["Ivan", "Mario", "Vasile"];
const newArr = arr;
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



// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0
// Notes
// If given an empty array, return 0.
const sumOfCubes = (num) => {
   return num.sum((x,y) => x.cube + y.cube)
};
console.log(sumOfCubes([1, 5, 9]));