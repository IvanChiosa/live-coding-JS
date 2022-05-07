// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.


const numberSplit = (num) => {
    if ( num === undefined) {
        return "Input Parameter can't be empty";
    } else {
        let a = Math.floor(num / 2);
        let b = num - a;
        let c = [];
        c.push(a,b);
        return c;
    }

}
console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-9));


// Create a function that returns an array of strings sorted by length in ascending order.

// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []
// Notes
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty (see example #4).


// const sortByLength = (a,b) => b.length - a.length;

// sortByLength(["a", "ccc", "dddd", "bb"]);

// let array = [`ab`, `abcdefgh`, `abcd`];
// let newArray = array.sort((a,b) => {
//     return b.length - a.length
// })
// console.log(newArray);

const sortByLength = (a,b) => {
    let arr = [];
    arr.sort((a,b) => { 
        return arr;
        
    });
};
console.log(sortByLength([ "ccc", "a","dddd", "bb"]));
console.log(sortByLength([ "ccc", "a","dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));