// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
// function return Object, counter, split, loop, {}, if else,hasOwnProp,

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

// OP 2
function toObject(arr) {
    let result = {};
    for (let i = 0; i < arr.length; ++i){
        result[i] = arr[i];
    }
    return result;
}  
toObject("tree");


//Wann soll mann einen String in ein Array umwandeln?
//Wenn mann nur die Zeichen eines Strigs zurückgeben, lesen, oder verwenden will, kann mann direkt in dem String durchlaufen. 
//Wenn mann eine oder mehrere Zeichen eines Strigs ändern oder Array-Methoden benutzn will, muss mann zuerst den String in ein Array umwandeln.
const str = "hello";
for (let i = 0; i < str.length; i++) {
    console.log("Buchstabe zurückgeben: ", str[i]);
    str[i] = "N";
    console.log("ohne split() bleibt: ", str[i]);
}

console.log("-----------------------");
const strToarr = str.split("");

for (let i = 0; i < strToarr.length; i++) {
    strToarr[i] = "N";
    console.log("mit split() ändert sich zu: ", strToarr[i]);
}




// für Montag
// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini



const clothes = [
    { "name": "Mantel",   "size": [44,42,40,38], "price": 69 },
    { "name": "Jeans",    "size": [44,42,],      "price": 59 },
    { "name": "Pullover", "size": [42,40,38],    "price": 29 },
    { "name": "Jacke",    "size": [44,42,40],    "price": 28 }
];
  
for (let key in clothes) {
    if (clothes.hasOwnProperty(key)) {
      console.log ("key " + key );
      console.log(clothes[key]);
    }
}