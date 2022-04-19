console.log("--------------01-------------------------");
// Erstelle ein Program, das eines angegebenes Array kopiert und zurückgibt. Drucke das Ergebnis in die Konsole.
//Beispiele:
//copyArray([12, 66, 10]) => [12, 66, 10]
//copyArray([5, -20, "Salem", true]) => [5, -20, "Salem", true]
//copyArray([]) => []
const copyArray = (arr) => {
    return console.log(arr);;
}
copyArray([12, 66, 10]);
copyArray([5, -20, "Salem", true]);
copyArray([]);


console.log("--------------02-------------------------");
//02. 
//Schreibe ein Programm, um einen String umzukehren. 
//Beispiele:
//reverseString("Hallo Welt") => tleW ollaH
//reverseString("Bonjour le monde") => ednom el ruojnoB
const reverseString = (str) => {
    let newStr = str.split("").reverse().join("");
    console.log(newStr);
}
reverseString("Hallo Welt");
reverseString("Bonjour le monde");


console.log("-------------noch beispiel-------------------------");
function reverseString1 (str) {
    newStr = str.split("").reverse().join("");
    return console.log(newStr);
}
reverseString1("Hallo Welt");
reverseString1("Bonjour le monde");




console.log("--------------03-------------------------");
//03. 
//Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
const missingNums = (arr) => {

    let newArr = [1,2,3,4,5,6,7,8,9,10];
    for ( let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])){
            let index = newArr.indexOf(arr[i])
            newArr.splice(index,1)
        } 
    }  
    newArr = newArr.join()
    return console.log(newArr);
}
missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]);
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]);
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]);



console.log("--------------04-------------------------");
//04. 
//Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw" 
const alphaOrder = (str) => {
    const arr = str.split("").sort().join("");
    return console.log(arr);
}
alphaOrder("webdev");




console.log("--------------05-------------------------");
//05. 
//Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]
function isFourLetters(arr) {

    newIsFourLetters = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 4) {
            newIsFourLetters.push(arr[i]);
        }
    }
    return console.log(newIsFourLetters);
}
isFourLetters(["John", "James", "Jack", "Jeanne"]);
isFourLetters(["Tomato", "Corn", "Lettuce"]);
isFourLetters(["Dog", "Cat", "Deer"]);



console.log("--------------06-------------------------");
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
const amplify = (num) => {
    const newArr = [];

    for (let i = 1; i <= num; i++) {
        let elem = i;
        if (i % 4 == 0) {
            elem = i * 10;
        }
        newArr.push(elem);
    }
    return console.log(newArr);;
}
amplify(4);
amplify(3);
amplify(25);



console.log("----------------07-----------------------");
//07
//One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:

// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
const unique = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return console.log(arr[i]);
        }
    }
    return num;
}
unique([3, 3, 3, 7, 3, 3]);
unique([0, 0, 0.77, 0, 0]);
unique([0, 1, 1, 1, 1, 1, 1, 1]);



console.log("----------------08-----------------------");
//08.
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
const hackerSpeak = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let elem = str[i];
        if (elem == 'a') {
            elem = 4;
        } if (elem == 'e') {
            elem = 3;
        } if (elem == '1') {
            elem = 1;
        } if (elem == 'o') {
            elem = 0;
        } if (elem == 's') {
            elem = 5;
        }
        newStr += elem;
    }
    return console.log(newStr);;
}
hackerSpeak("javascript is cool");
hackerSpeak("programming is fun");
hackerSpeak("become a coder");



console.log("---------------DRY CODE DIE GLEICH ÜBUNG------------------------");
const hackerSpeak2 = (str) => {
    let newStr = "";
    const arr = ["o", "i", , "e", "a", "s"];
    for (let i = 0; i < str.length; i++) {
        let elem = str[i];
        if (arr.includes(elem)) {
            elem = arr.indexOf(elem);
        }
        newStr += elem;
    }
    return console.log(newStr);
};
hackerSpeak2("javascript is cool");
hackerSpeak2("programming is fun");
hackerSpeak2("become a coder");



console.log("--------------09-------------------------");
//09.
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
const isSymmetrical = (num) => {
    let str = "" + num;
    let res = str.split("").reverse().join("");
    let isGleich = str == res;
    return console.log(isGleich);
    }; 
isSymmetrical(7227);
isSymmetrical(12567);
isSymmetrical(44444444);
isSymmetrical(9939);
isSymmetrical(1112111);



console.log("---------------10------------------------");
//10.
//Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!
// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// removeNumbers("mubashir1") ➞ "mubashir"
// removeNumbers("12ma23tt") ➞ "matt"
// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
const removeNumbers = (str)  => {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            newStr += str[i];
        }
    }
    return console.log(newStr);
}
removeNumbers("mubashir1");
removeNumbers("12ma23tt");
removeNumbers("e1d2a3b4i5t6");



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

function canNest (arr1, arr2) {

    if( Math.max(...arr1) < Math.max(...arr2) && Math.min (...arr1) > Math.min (...arr2)){ 
        console.log(true);
    } else {
        console.log(false);
    }
  
}
canNest([1, 2, 3, 4], [0, 6]);
canNest([3, 1], [4, 0]);
canNest([9, 9, 8], [8, 9]);
canNest([1, 2, 3, 4], [2, 3]);



console.log("---------------12------------------------");
//12.
//Tuck in Array
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
const tuckIn = (arr1, arr2) => {
    arr1.splice(1, 0, ...arr2)
    console.log(arr1);
}
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
tuckIn([15, 150], [45, 75, 35]);
tuckIn([[1, 2], [5, 6]], [[3, 4]]);


console.log("-----------------13----------------------");
//13.
//Number Split
//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//Examples
// numberSplit(4) ➞ [2, 2]
// numberSplit(10) ➞ [5, 5]
// numberSplit(11) ➞ [5, 6]
// numberSplit(-9) ➞ [-5, -4]
const numberSplit = (num) => {
    const arr = [];
    if ( num % 2 == 0) {
        arr.push(num/2, num/2)
    } else {
        arr.push(Math.floor(num/2), Math.ceil(num/2))
    }
    console.log(arr);
}
numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);


console.log("---------------------------------------");