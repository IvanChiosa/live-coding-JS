console.log("-----1-----");
// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
// console.log(humanize(1)); //"1st"
// console.log(humanize(20)); //"20th"
// console.log(humanize(302)); //"302nd"
// Opt 1
function humanize(number) {

    if (number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    switch (number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    return number + "th";
}
console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));

console.log("---------");
// Opt 2
const humanize1 = (num) => {
    let addedText;
    if (num % 10 == 1) {
        addedText = "st";
    } else if (num % 10 == 2) {
        addedText = "nt";
    } else if (num % 10 == 3) {
        addedText = "rd";
    } else {
        addedText = "th";
    }
    return console.log(`${num} ${addedText}`);
};
humanize1(22);
humanize1(1);
humanize1(302);

console.log("-----2-----");
// Write a JavaScript function to alphabetize a given string.
// Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// console.log(alphabetize_string("United States"));
// //"SUadeeinsttt"
// Opt 1
function alphabetizeString(str) {
    return str.split("").sort().join("");
};
console.log(alphabetizeString("United States"));

// Opt 2
const alphabetizeString1 = (str) => str.split("").sort().join("");
console.log(alphabetizeString1("United States"));


console.log("-----3-----");
// Write a JavaScript function to sort the following array of objects by title value.
// Opt 1
var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245 },
];
const sorted = (arr) => arr.sort((a, b) => (a.title > b.title ? 1 : -1));
console.table(sorted(library));

// Opt 2
console.log("-----4-----");
var library1 = [
    { author: 'Bill Gates', title: 'CThe Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'AWalter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'BMockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function compareToSort(x, y) {
    if (x.title < y.title)
        return -1;
    if (x.title > y.title)
        return 1;
    return 0;
}
console.log(library1.sort(compareToSort));
//sorted
/*/* {
    author: "Suzanne Collins",
    libraryID: 3245,
    title:"Mockingjay:The Final Book of The Hunger Games"
  }, [object Object] {
    author: "Bill Gates",
    libraryID: 1254,
    title: "The Road Ahead"
  }, [object Object] {
    author: "Steve Jobs",
    libraryID: 4264,
    title: "Walter Isaacson"
  }]*/


console.log("-----5-----");
//   Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
// console.log(num_string_range("a", "z", 2));
// // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
// Option 1
function num_string_range(start, end, step) {
    var range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end == "undefined") || (typeof start != typeof end))
        return false;

    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
    }
    else if (typeof start == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }

    else {
        throw TypeError("Only string and number are supported");
    }

    return range;

}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));

// opt 2
const numStringRange = (start, end, steps) => {
    let resultArr = [];
    for (let i = start.charCodeAt(0); i < end.charCodeAt(0);) {
        resultArr.push(String.fromCharCode(i));
        i += steps;
    }
    return console.table(resultArr);
};
numStringRange("a", "z", 1);

console.log("-----6-----");
// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

data = [
    { signName: "Not real day!", from: "0000" },
    { signName: "Capricorn", from: "0101" },
    { signName: "Aquarius", from: "0120" },
    { signName: "Pisces", from: "0220" },
    { signName: "Aries", from: "0321" },
    { signName: "Taurus", from: "0420" },
    { signName: "Gemini", from: "0521" },
    { signName: "Cancer", from: "0621" },
    { signName: "Leo", from: "0723" },
    { signName: "Virgo", from: "0823" },
    { signName: "Libra", from: "0923" },
    { signName: "Scorpio", from: "1023" },
    { signName: "Sagittarius", from: "1123" },
    { signName: "Capricorn", from: "1222" },
    { signName: "Not real day!", from: "1232" },
];

function zodiacSign(day, month) {
    let astroSign = "";

    // checks month and date within the
    // valid range of a specified zodiac
    if (month == "december") {

        if (day < 22)
            astroSign = "Sagittarius";
        else
            astroSign = "capricorn";
    }

    else if (month == "january") {
        if (day < 20)
            astroSign = "Capricorn";
        else
            astroSign = "aquarius";
    }
    else if (month == "february") {
        if (day < 19)
            astroSign = "Aquarius";
        else
            astroSign = "pisces";
    }
    else if (month == "march") {
        if (day < 21)
            astro_sign = "Pisces";
        else
            astroSign = "aries";
    }
    else if (month == "april") {
        if (day < 20)
            astroSign = "Aries";
        else
            astroSign = "taurus";
    }
    else if (month == "may") {
        if (day < 21)
            astroSign = "Taurus";
        else
            astroSign = "gemini";
    }
    else if (month == "june") {
        if (day < 21)
            astroSign = "Gemini";
        else
            astroSign = "cancer";
    }
    else if (month == "july") {
        if (day < 23)
            astroSign = "Cancer";
        else
            astroSign = "leo";
    }
    else if (month == "august") {
        if (day < 23)
            astroSign = "Leo";
        else
            astroSign = "virgo";
    }
    else if (month == "september") {
        if (day < 23)
            astroSign = "Virgo";
        else
            astroSign = "libra";
    }

    else if (month == "october") {
        if (day < 23)
            astroSign = "Libra";
        else
            astroSign = "scorpio";
    }

    else if (month == "november") {
        if (day < 22)
            astroSign = "scorpio";
        else
            astroSign = "sagittarius";
    }

    console.log((astroSign));
}

// Driver Code

// let day = 19;
// let month = "may";
zodiacSign(9, "may");