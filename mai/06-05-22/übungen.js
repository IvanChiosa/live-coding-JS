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