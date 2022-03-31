// Overview
console.log(global);
console.log("Hi Javascript");
// let const var
let x, firstName, lastName;
x = 99;
firstName = null;
console.log(x);
console.log(firstName);
console.log(typeof x);
//console.log(cool);

// hosting
var global = "I'm global hoisted var";
console.log(global);
function sum(str, arr) {
  // scope
  global = "Yes";
  let x = "Nice, I'm local var";
  console.log(x); // Nice, I'm local var
}
sum("Hi", [1, 3, 4]);
console.log(x); // 99

// String
console.log("😇 Hadi §$%/() \" ' \n Oh this is fun ");
console.log(` 😇 Hadi §$%/() \" ' 
Oh this is fun`);
let str = "I love JAbvascript";
console.log("str length:", str.length);
console.log("str substring:", str.substring(2, 7)); //
console.log("str UpperCase:", str.toUpperCase());
console.log("str LowerCase:", str.toLowerCase());
console.log("str substring + UpperCase :", str.toUpperCase().substring(5));
console.log("str [8]:", str[8]); // a
console.log("str charAr(8):", str.charAt(8)); // a
// UTF-16
// 🫣
console.log("str charCodeAr(8):", str.charCodeAt(8));
console.log("str includes: ", str.includes("I"));


// ++
// --
let num = 0;
num ++; // num = num + 1; // num += 1;
num --; // num = num - 1; // num -= 1;
num = 444444444;
num *= 5;   // num = num * 5;
num /= 4;   // num = num / 4;
let float = 22.4551222;
console.log("random : ", Math.floor(Math.random() * 10)); // nesting chiama o metode un altra 
console.log("num ceil: ", Math.ceil(float));
console.log("num ceil: ", Math.ceil(float))
console.log("num floor:", Math.floor(float));
console.log("num round: ", Math.round(float));
console.log("Math min: ", Math.min(3,2,3,2,));
console.log("Math max: ", Math.max(2,3,6,5,));
console.log("PI:", Math.PI); // this ist ein Property
const myPI = 3.141592653589793;
console.log("Hi heute ist....".length);

console.log("parseInt: ", parseInt("123"));
console.log("with numer base parseInt: ", parseInt("12345dffgfgf", 16));
console.log("parseFloat: ", parseFloat("2.3664"));
// trim()
firstName = "          Ivan     ";
console.log("trimStart: ", firstName.trimStart());
console.log("trimEnd: ", firstName.trimEnd());
console.log("trim: ", firstName.trim());


// bool
// true
// false

// =    ==   ===
let bool = true; // 1 " "  "Ali"  true
bool  = false  // 0 "" null false
console.log("condition: ", 1 == "1" ? "Cool" : "Noo");
console.log("condition: ", 1 === "1" ? "Cool" : "Noo");

// && || 

if (false) {
  // something
 } else  if(true) {
  //  other thing
 } else {

}

let age = 2;
switch (age) {
    case 2: 
      console.log("You are baby");
      break;
    case 12:
      console.log("You are boy");
      break;
    case 21:
      console.log("You are  small man");
      break;
    case 30:
      console.log("You are man");
      break;
 default:
 console.log("Sorry, please write your age");
}

let DriveAllowed = 15;
switch (DriveAllowed) {
    case 15: 
      console.log("Scooter");
      break;
    case 17:
      console.log("Kleine car");
      break;
    case 18:
      console.log("Cars");
      break;
    case 21:
      console.log("You are man");
      break;
 default:
 console.log("Sorry,stay home");
}

let userName = "Ivan";
switch (userName) {
    case "Ivan": 
      console.log("Du bist Ivan");
      break;
    case "Steel":
      console.log("Kleine car");
      break;
    case "Natalia":
      console.log("Cars");
      break;
    case "Mario":
      console.log("You are man");
      break;
 default:
 console.log("Sorry,stay home");
}

// && 
// true && true = true
// false && true = false
// true && false = false
// false && false = false
// || 
// true || true = true
// false || true = true
// true || false = true
// false || false = false


if ( 1 == 1 && 22 != 2 || 5 == 5 && 2 != 2) {
    console.log("And or:", "Cool");
} else {
    console.log("And or:", "Noo");
}
//condition  ? true : false
// Es6

// concat()

// 1- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//  Example string : 'the quick brown fox'
// function one param to UpperCase


function converts(str){
    let strToArr = str.toLowerCase().split(" ");

    for (let i = 0; i < strToArr.length;i++){
        strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].substring(1);
    }
    strToArr = strToArr.join(" ");
    console.log(strToArr);
}

converts("the quick brown fox");


// 2- Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Longest_Country_Name(
//     ["Australia", 
//     "Germany", 
//     "United States of America"]
//     )
// Expected output : "United States of America"
// function array, length, loops, if/condition
const longestCountryName = (arr)  => {

    let longestWord = "";

    for (let i = 0; i<arr.length;i++){
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i];
        }
    }
    return console.log(longestWord);;
}
longestCountryName (["Australia", "Germany", "United States of America"]);



// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// function, str als param,  num = 0,   vowel = "AEIOUaeiou"   condition, loop
const vowelCounter = (str) =>  {
    let count = 0;
    const vowel = "AEIOUaeiou"
    for (let i = 0; i < str.length;i++){
        if(vowel.includes(str[i])){
            count++;
        }
    }
    return console.log(count);;
}
vowelCounter("this is super fun ");
vowelCounter("Ivan");



const names = ["Ivan", "Mario", "Viktor"];
console.log(names[1]);
names[1] = "Vivi";
console.table(names);
names.push("Alex");
console.table(names);
names.pop();
console.table(names);


// slice()
console.log(names.slice(2));

// splice
console.log(names);


let longText = "Today is very long day";
console.table(longText.split(""));
