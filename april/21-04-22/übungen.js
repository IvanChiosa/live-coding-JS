// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

// function return Object, counter, split, loop, {}, if else,hasOwnProp,

function countLetters1 (str) {
    let result = {};

    for (let i = 0; i < str.length;i++) {

    }
}



function toObject(arr) {
    let result = {};
    for (let i = 0; i < arr.length; ++i){
        result[i] = arr[i];
    }
    return result;
}  
toObject("tree");

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

















// OP 1
function countLetters (str) {
    let result = {};
    // arr = str.split("");
    for (let i = 0; i < str.length;i++) {
        let currentChr = str[i];
        if (result.hasOwnProperty(currentChr)) {
            result[currentChr] += 1;
        } else {
            result[currentChr] = 1;
        }
    }
    return console.log(result);;
}
countLetters("tree");

// OP2