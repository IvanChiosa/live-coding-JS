// AEIOU:
// Vowels. Create a function that takes a string in its parameters. and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

// function name findVowels, 1 argument, return a number, for, if
function findVowels(str) {
    let counter = 0;
    let vowels = "AEIOUaeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            // true
            counter++;
        }
    }
    return counter;
}
console.log(findVowels("this is a string")); // 4
console.log(findVowels("this")); // 1
console.log(findVowels("Hadi")); // 2
// ---------------------------------

// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
// Create a program == write a function
// noDuplicates function, 1 array argument, return newArr, array, for, push, if
function noDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(newArr.indexOf(arr[i]));
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(noDuplicates([1, 4, 4, 7, 7, 7])); // 1, 4, 7]
console.log(noDuplicates([1, 6, 6, 9, 9])); // [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // [2]
// ---------------------------------

// is Palindrome AKA word that reads the same backward or forward.

// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat,

// isPalindrome function,  1 argument str, true/false, array, array method.

const isPalindrome = (str) =>
    str.toLowerCase() == str.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("madam"));
console.log(isPalindrome("Hadi"));
console.log(isPalindrome("tarrattarrat"));




// This question has 2 parts

// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// ---------------------------------
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
function printIfDivisibleByTen(num) {
    if (num % 10 == 0) {
        return console.log(num, "Even 10!");
    } 
    // else {
    //     console.log("Not even.");
    // }
    console.log("Not even");
}
printIfDivisibleByTen(1);
printIfDivisibleByTen(2);
printIfDivisibleByTen(32);
printIfDivisibleByTen(10);
printIfDivisibleByTen(30);
printIfDivisibleByTen(90000);
console.log("printIfDivisibleByTen");
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
for (let i = 0; i <= 125; i++) {
    printIfDivisibleByTen(i);
    // console.log(`Run ${i}`);
}







// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
const returnsLargestNumber = (...args) => {
    console.log(Math.max(...args));
}
returnsLargestNumber(2, 3, 6, 9, 93);


// noch eine example
// const largestNumber = (a,b,c,d,e) => {
//     let largestNumber;
//     return largestNumber;
// }

// let result = largestNumber(1,2,3,4,5);
// console.log("Largest number ist: ", result);

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments
function tellFortune(numChildren, partnerName, location, jobTitle) {
    if (typeof numChildren == "number" && typeof partnerName == "string" && typeof location == "string" && typeof jobTitle == "string") {
        return console.log(`I have ${numChildren} children. Mein Name is ${partnerName}. I live in ${location} and i work als ${jobTitle}.`);
    } else {
        return console.log(`Did not compile right check again!`);
    }
}
tellFortune(2, "Mario", "Köln", "Teacher");

//  Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// use the following chrList
// let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generatePassword() {
    let length = 10,
        charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        retVal = "";
    for (let i = 0, n = charList.length; i < length; ++i) {
        retVal += charList.charAt(Math.floor(Math.random() * n));
    }
    return console.log(retVal);
}
generatePassword();


// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
function numbersValidate(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        let result = [];
        for (let i = 1; i <= num2; i++) {
            let items = num1 ** i;
            // let items = Math.pow(num1, i);
            result.push(items);
        }
        console.log(result.join(" "));
    } else {
        console.log(`Enter a number please!`);
    }
}
numbersValidate(3, 5);

// Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let favoriteFruit = "Ananas";
function printFavoriteFruit() {
    favoriteFruit = "Appfel";
    console.log(`My favorite fruit is: ${favoriteFruit}`);
}
printFavoriteFruit();



//01.
// Erstelle ein Program, das ein gegebenes Array kopiert und zurückgibt. Drucke das Ergebnis in die Konsole.
//Beispiele:
//copyArray([12, 66, 10]) => [12, 66, 10]
//copyArray([5, -20, "Salem", true]) => [5, -20, "Salem", true]
//copyArray([]) => []
function copyArray (arr) {
    return console.log(arr);
}
copyArray([12, 66, 10]);
copyArray([5, -20, "Salem", true]);
copyArray([]);




//02. 
//Schreibe ein Programm, um ein String umzukehren. 
//Beispiele:
//reverseString("Hallo Welt") => tleW ollaH
//reverseString("Bonjour le monde") => ednom el ruojnoB
// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const string = ("Hallo Welt");

const result = reverseString(string);
console.log(result);





//03. 
//Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function missingNumber(input) {
    let result = [];
  
    for (
      let i = 0, targetValue = input[0];
      targetValue <= input[input.length - 1];
      targetValue++
    ) {
      if (input[i] != targetValue) {
        result.push(targetValue);
      } else {
        i++;
      }
    }
  
    return result;
  }
 console.log(missingNumber([1,2]));  


  


//04. 
//Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw"