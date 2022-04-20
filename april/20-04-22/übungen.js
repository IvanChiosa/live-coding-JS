// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
    name: "Mike",
    class: "4A",
    course: "English",
};

// function return, array, object.keys
// Expected output:
//   ["name", "class", "course"]
function display () {
    console.log(Object.keys(person));
}
display();




// Given the following object
// Create a method that prints the following: "Zain Oil a student in class D05"
const student = {
    firstName: "Zain",
    lastName: "Oil",
    class: "D05",
    dispaly1: function () {  /// das ist eien emethode i eine value
        console.log(`${this.firstName + " " + this.lastName}, is a student ${this.class}`);
    }
};
student.dispaly1();

  
// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
};

function dispaly2 () {
    console.log(Object.values(getObjectValues));
}
dispaly2();

  
// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
  
// Examples: 
// (4, { min: 0, max: 5 }) ➞ true 
// (4, { min: 4, max: 5 }) ➞ true  
// (4, { min: 6, max: 10 }) ➞ false 
// (5, { min: 5, max: 5 }) ➞ true

function givenRange (num, obj) {

    if (num >= obj.min && num <= obj.max) {
        console.log(true);
    } else {
        console.log(false);
    }
}
givenRange(4, { min: 0, max: 5 });
givenRange(4, { min: 4, max: 5 }); 
givenRange(4, { min: 6, max: 10 });
givenRange(5, { min: 5, max: 5 });


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

function scrabbleTiles (arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
       sum += arr[i].score;
    }
    return console.log(`Die summe ist: ${sum}`);
}
scrabbleTiles(scrabble);




// Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// {} ➞ true
// {a: 1} ➞ false
 const emptyObj = (obj) => {

    const arr = Object.keys(obj);
    if (arr.length == 0) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
emptyObj({});
emptyObj({a:1});
