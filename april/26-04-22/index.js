console.log("--------1-----------");
// reduce 
// old school
const numbersArray = [3, 5, 8];
let box = 0;
for (let i = 0; i < numbersArray.length; i++) {
    let cur = numbersArray[i];  // das ist eine referenze in JS // 
    box = box + cur;
}
console.log(box);

console.log("--------2-----------");
// Have 4 toDos reduce ist eien callback und eine schlaiffe
// 1. method
// 2. callBack
// 3. loop
// 4. box



console.log("--------3-----------");
// prof
const resultSum = numbersArray.reduce((box, cur) => {
    return box + cur;
}, 6);
console.log(resultSum);

console.log("--------4-----------");
const resultSum1 = numbersArray.reduce((acc,cur) => {
    return acc + cur;
}, 0)
console.log(resultSum1);



console.log("--------5-----------");
// Create a function that returns an object has following output, try this one in Advance array methods :muscolo::carnagione_2:

// Examples:
// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}
// tree -> { t: 1, r: 1, e: 2}
// old school
function countLetters(str) {
    let resultObj = {};
    for (let i = 0; i < str.length; i++) {
        let currentChr = str[i];
        if (resultObj.hasOwnProperty(currentChr)) {
            resultObj[currentChr] += 1;
        } else {
            resultObj[currentChr] = 1;
        }
    }
    return console.log(resultObj);
}
countLetters("tree and sun");



console.log("--------6-----------");

function countLetters1 (str) {
    let resultObj = {};
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if ( resultObj.hasOwnProperty(currentChar)) {
            resultObj[currentChar] += 1;
        } else {
            resultObj[currentChar] = 1;
        }
    }
    return console.log(resultObj);
}
countLetters1("Ivan");
// [] () {}

// {} das ist eien leer object ich brauche für am ende wo du kann schpaichern
// const arr = str.split(""); // convert da una arr in string

console.log("--------7-----------");
// // Op prof
// box[cur] = box[cur] ? box[cur] + 1 : 1;
// // Op 2
// box[cur] = box.hasOwnProperty(cur) ? box[cur] +1 : 1;
// // Op 3
// if(box.hasOwnProperty(cur)){
//   box[cur] += 1;
// } else {
//   box[cur] = 1;
// }
// Op4
// if (box[cur]) {
//     box[cur] += 1;
//   } else {
//     box[cur] = 1;
//   }
//   return box;



console.log("--------8-----------");
const countLetter = (str) =>
    str.split("").reduce((box, cur) => {
        box[cur] = box[cur] ? box[cur] + 1 : 1;
        return box;
    }, {});

console.log(countLetter("tree"));


console.log("--------9-----------");
const countLetters3 = (str) => 
    str.split("").reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] +1 : 1;
        return acc;

    }, {});
console.log(countLetters3("Holllllla"));

console.log("--------10-----------");
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
];
function sumOfTheScrabble(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].score;
    }
    return result;
}
console.log(sumOfTheScrabble(scrabble));

console.log("--------11-----------");

const sum = (arr) => arr.reduce((acc,cur) => acc + cur.score, 20);
console.log(sum(scrabble));

console.log("--------12-----------");
const sumOfScore = (arr) => arr.reduce((result, cur) => result + cur.score, 0);
console.log(sumOfScore(scrabble));

console.log("--------13-----------");
