console.log("----------------05-----------------------");
//05. 
//Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

//Weg1
function isFourLetters(arr) {
    //Weg1
    const fourLetterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            fourLetterArr.push(arr[i]);
        }
    }
    return fourLetterArr;
    //Weg2
    //Die Methode filter() erstellt ein neues Array mit allen Elementen, die den von der bereitgestellten Funktion implementierten Test bestehen.
    //return arr.filter(element => element.length === 4);
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"])); //[ 'John', 'Jack' ]
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"])); //[ 'Corn' ]
console.log(isFourLetters(["Dog", "Cat", "Deer"])); //[ 'Deer' ]




console.log("----------------06-----------------------");
//06 
//Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
function amplify(num) {
    const numArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            numArr.push(i * 10);
        } else {
            numArr.push(i);
        }
    }
    return numArr;
}
console.log(amplify(4)); //[ 1, 2, 3, 40 ]
console.log(amplify(3)); //[ 1, 2, 3 ]
console.log(amplify(25)); //[ 1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25 ]



console.log("-----------------07----------------------");
//07
//One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:

// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        //Weg1
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i];
        //Weg2
        //return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e));
    }

}
console.log(unique([3, 3, 3, 7, 3, 3])); //7
console.log(unique([0, 0, 0.77, 0, 0])); //0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); //0




console.log("--------------08-------------------------");
//08.
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

function hackerSpeak(str) {
    //Weg1
    let strTOArr = str.split("");
    for (let i = 0; i < strTOArr.length; i++) {
        if (strTOArr[i] == "a") {
            strTOArr[i] = 4;
        } else if (strTOArr[i] == "e") {
            strTOArr[i] = 3;
        } else if (strTOArr[i] == "i") {
            strTOArr[i] = 1;
        } else if (strTOArr[i] == "o") {
            strTOArr[i] = 0;
        } else if (strTOArr[i] == "s") {
            strTOArr[i] = 5;
        }
    }
    return strTOArr.join("");
    //Weg2
    //return str.replaceAll("a", "4").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("s", "5");
}
console.log(hackerSpeak("javascript is cool")); //j4v45cr1pt 15 c00l
console.log(hackerSpeak("programming is fun")); //pr0gr4mm1ng 15 fun
console.log(hackerSpeak("become a coder")); //b3c0m3 4 c0d3r



console.log("---------------09------------------------");
//09.
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
function isSymmetrical(num) {
    const numForwards = num.toString();
    const numReverse = numForwards.split("").reverse().join("");
    return numForwards === numReverse ? true : false;
}
console.log(isSymmetrical(7227)); //true
console.log(isSymmetrical(12567)); //false
console.log(isSymmetrical(44444444)); //true
console.log(isSymmetrical(9939)); //false
console.log(isSymmetrical(1112111)); //true



console.log("-------------10--------------------------");

//10.
//Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!
// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// removeNumbers("mubashir1") ➞ "mubashir"
// removeNumbers("12ma23tt") ➞ "matt"
// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
function removeNumbers(str) {
    //Weg1
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) output += str[i];
    }
    return output;
    //Weg2
    //return str.split("").filter(e => isNaN(e)).join("");
    //Weg3
    //return str.replace(/[0-9]/g, ''); //regular expression
}
console.log(removeNumbers("mubashir1")); //mubashir
console.log(removeNumbers("12ma23tt")); //matt
console.log(removeNumbers("e1d2a3b4i5t6")); //edabit




console.log("---------------11------------------------");
//11.
//Check if One Array can be Nested in Another
//Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

const canNest = (arr1, arr2) => {
    return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}
console.log(canNest([1, 2, 3, 4], [0, 6])); //true
console.log(canNest([3, 1], [4, 0])); //true
console.log(canNest([9, 9, 8], [8, 9])); //false
console.log(canNest([1, 2, 3, 4], [2, 3])); //false



console.log("----------------12-----------------------");

//12.
//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

const tuckIn = (arr1, arr2) => {
    let output = [];
    output.push(arr1[0], ...arr2, arr1[1]);
    return output;
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])); //[15, 45, 75, 35, 150]
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); //[[1, 2], [3, 4], [5, 6]]



console.log("-------------------13--------------------");
//13.
//Number Split
//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]

const numberSplit = (num) => {
    const halvesNumber = num / 2;
    if (num % 2 !== 0) {
        return [Math.floor(halvesNumber), Math.ceil(halvesNumber)];
    }
    return [halvesNumber, halvesNumber];
}
console.log(numberSplit(4)); //[2, 2]
console.log(numberSplit(10)); //[5, 5]
console.log(numberSplit(11)); //[5, 6]
console.log(numberSplit(-9)); //[-5, -4]


console.log("---------------------------------------");