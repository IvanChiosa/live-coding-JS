// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.

const sortByLength = (arr) => {
    return arr.sort((x,y) => x.length - y.length);
};
console.log( sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));



// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
// isAvgWhole([1, 3]) ➞ true

// isAvgWhole([1, 2, 3, 4]) ➞ false

// isAvgWhole([1, 5, 6]) ➞ true

// isAvgWhole([1, 1, 1]) ➞ true

// isAvgWhole([9, 2, 2, 5]) ➞ false





// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) ➞ 30

// getAbsSum([-1]) ➞ 1
// Notes
// The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
// All the elements in the given array are integers.

const getAbsSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    return sum;
};
console.log(getAbsSum([2, -1, 4, 8, 10]));
console.log(getAbsSum([-3, -4, -10, -2, -3]));



// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

const volumeOfBox = {
    width: 2,
    length: 5, 
    height: 1,
    print: function () {
        return width * length * height;
    }
};
console.log(volumeOfBox.print());