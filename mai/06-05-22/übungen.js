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

let array = 
[`ab`, `abcdefgh`, `abcd`];


let newArray = array.sort((a,b) => {
    return a.length - b.length;
});
console.log(newArray);

console.log("--------");
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(2));


console.log("--------");
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]
// Notes
// N/A

const makePair = (num1, num2) => { 
    return [num1,num2];
};

console.log(makePair(1,2));
console.log(makePair("lol",2))
console.log(makePair(1,null))
console.log(makePair(1,[7,8,9]))
console.log(makePair(1,0))

console.log("--------");

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
// Notes
// You can expect only positive integers for vote counts.

const getVoteCount = ({upvotes, downvotes}) => {
    return upvotes - downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));

console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));


// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

const reverse =(num) => {
    return num.reverse();
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));


// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefully.

console.log("---increments----");
const incrementItems = (arr) => arr.map(num => num + 1);
console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// Notes
// Check the Resources tab for examples.

const arr = [8,2,3,4,5,6];
let a = arr[0] === 1;
let b = arr[1] === 2;
console.log(a);
console.log(b);


// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

const getLastItem = (arr) => arr.indexOf();
console.log(getLastItem([1, 2, 3]));