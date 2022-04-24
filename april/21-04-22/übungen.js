// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
// function return Object, counter, split, loop, {}, if else,hasOwnProp,

// OP 1
function countLetters(str) {
    let result = {};
    // arr = str.split("");
    for (let i = 0; i < str.length; i++) {
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
    for (let i = 0; i < arr.length; ++i) {
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

const clothes = [
    { "name": "Mantel", "size": [44, 42, 40, 38], "price": 69 },
    { "name": "Jeans", "size": [44, 42,], "price": 59 },
    { "name": "Pullover", "size": [42, 40, 38], "price": 29 },
    { "name": "Jacke", "size": [44, 42, 40], "price": 28 }
];

for (let key in clothes) {
    if (clothes.hasOwnProperty(key)) {
        console.log("key " + key);
        console.log(clothes[key]);
    }
}

// für Montag
// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

function zodiacSign(day, month) {
    let astro_sign = "";

    // checks month and date within the
    // valid range of a specified zodiac
    if (month == "december") {
        if (day < 22) {
            astro_sign = "Sagittarius";
        } else {
            astro_sign = "capricorn";
        }
    } else if (month == "january") {
        if (day < 20) {
            astro_sign = "Capricorn";
        } else {
            astro_sign = "aquarius";
        }     
    } else if (month == "february") {
        if (day < 19) {
            astro_sign = "Aquarius";
        } else {
            astro_sign = "pisces";
        }     
    } else if (month == "march") {
        if (day < 21) {
            astro_sign = "Pisces";
        } else {
            astro_sign = "aries";
        }    
    } else if (month == "april") {
        if (day < 20) {
            astro_sign = "Aries";
        } else {
            astro_sign = "taurus";
        }    
    } else if (month == "may") {
        if (day < 21)
            astro_sign = "Taurus";
        else
            astro_sign = "gemini";
    }

    else if (month == "june") {
        if (day < 21)
            astro_sign = "Gemini";
        else
            astro_sign = "cancer";
    }

    else if (month == "july") {
        if (day < 23)
            astro_sign = "Cancer";
        else
            astro_sign = "leo";
    }

    else if (month == "august") {
        if (day < 23)
            astro_sign = "Leo";
        else
            astro_sign = "virgo";
    }

    else if (month == "september") {
        if (day < 23)
            astro_sign = "Virgo";
        else
            astro_sign = "libra";
    }

    else if (month == "october") {
        if (day < 23)
            astro_sign = "Libra";
        else
            astro_sign = "scorpio";
    }

    else if (month == "november") {
        if (day < 22)
            astro_sign = "scorpio";
        else
            astro_sign = "sagittarius";
    }

    return astro_sign;
}

// Driver Code
// console.log(zodiacSign(19, "May"));  
// let day = 19;
// let month = "may";
console.log(zodiacSign(3, "december"));




console.log("---------const Obj------");
const objIvan = {
    firstName: "Ivan",
    lastName: "Chiosa",
    age: 36,
    auto: {
        model: "Seat",
        color: "Blue",
    },
    display: function () {
        console.log(` Ich bin ${this.firstName + " " + this.lastName} ich bin ${this.age} meine auto is ${this.auto.model} die farbe ist ${this.auto.color}. Und bin ich glücklich`);
    }
}

objIvan.display();
console.log(objIvan.auto.model);




console.log( "---------------");
const obj = {
    firstN: "Ivan",
    lastN: "Chiosa",
    auto: {
        color: "blue",
        model: "seat",
    },
    display: function () {
        console.log(this.firstN, this.lastN);
    }
}
obj.display();

const obj1 = {};
obj1 ["nameFather"] = "Mario";
console.log(obj1);
obj1.nameFather = "Vasilli";
console.log(obj1.nameFather);
console.log(Object.keys(obj1));
console.log(Object.values(obj1.nameFather).join(""));

console.log(Object.seal(obj));
obj.firstN = "Nina";
console.log(obj.firstN);
console.log(Object.isSealed(obj));



const nextEdge = (side1, side2) => {
    return console.log(side1 + side2);
}
nextEdge(6,3);

const nextEdge1 = (side1, side2) => {
    return console.log(side1 * side2);
}
nextEdge1(8,9);

const nextEdge2 = (side1, side2) => {
    return console.log(side1 / side2);
}
nextEdge2(10,2);

function nextEdge3 (side1, side2) {
    return console.log(side1 % side2);
}

nextEdge3(50,6)

const obj3 = {}
obj3 ["name"] = "Ecaterina";
console.log(obj3.name);
obj3.name = "Maria";
console.log(obj3.name);


const ppl = [
    { name: "Ivan", age: 30 },     // dass ist eie index (0) in eine Object
    { name: "Mario", age: 25 },    // dass ist ein index (1)
    { name: "Natalia", age: 30 },  // dass ist ein index (2)
    { name: "Ivan", age: 30 },     // dass ist ein index (3)
];
console.log(ppl[1].name);  //OP1 zu sehen 
console.log(ppl[1]["name"]); //OP2 zu sehen 



console.log("---------");

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true,
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


const object2 = {};
Object.defineProperty(object2, "name", {
    value: 42,
    writable: false,

});
object2.name = "Ivan";
console.log(object2.name);


//Object.defineProperty()
const userInfoObj = {};
Object.defineProperty(userInfoObj,"name", {
    value: "Maria",
    writable: true,
});
console.log(userInfoObj.name);

// Object.defineProperties()
Object.defineProperties(userInfoObj, {
    lastName: {value:"Chiosa", writable: true},
    act: {value: ["Cooking", "Biking"], writable: true },
    cars: {value: ["V2"], writable: false},
});
console.log(userInfoObj.lastName, userInfoObj.act, userInfoObj.cars);

// Object.hasOwnProperty()
console.log(userInfoObj.hasOwnProperty("name"));
console.log(userInfoObj.hasOwnProperty("age"));