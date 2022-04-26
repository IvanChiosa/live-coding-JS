
// reduce 
// old school
const numbersArray = [3, 5, 8];
let box = 0;
for (let i = 0; i < numbersArray.length; i++) {
    let cur = numbersArray[i];  // das ist eine referenze in JS // 
    box = box + cur;
}
console.log(box);


// Have 4 toDos reduce ist eien callback und eine schlaiffe
// 1. method
// 2. callBack
// 3. loop
// 4. box

// prof
const resultSum = numbersArray.reduce((box, cur) => {
    return box + cur;
}, 0);
console.log(resultSum);




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
//countLetters("tree and sun");

// [] () {}

// {} das ist eien leer object ich brauche für am ende wo du kann schpaichern
// const arr = str.split(""); // convert da una arr in string

// // Op prof
// box[cur] = box[cur] ? box[cur] + 1 : 1;
// Op 2
// box[cur] = box.hasOwnProperty(cur) ? box[cur] +1 : 1;
// Op 3
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

const countLetter = (str) =>
    str.split("").reduce((box, cur) => {
        box[cur] = box[cur] ? box[cur] + 1 : 1;
        return box;
    }, {});

console.log(countLetter("tree"));

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
const sumOfScore = (arr) => arr.reduce((result, cur) => result + cur.score, 0);
console.log(sumOfScore(scrabble));