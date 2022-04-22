// object 


// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
    name: "Mike",
    class: "4A",    
    course: "English",
};
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys(person));



// Expected output:
//   [“name”, “class”, “course”]
// Given the following object
// Create a method that prints the following: “Zain Oil a student in class D05"
const student = {
    firstName: "Zain",
    lastName: "Oil",
    class: "D05",
    printSentence: function (){
        console.log(`${this.firstName} ${this.lastName} ich bin der classe ${this.class}`);
    }
};
student.printSentence();




// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
};


// Check if a number is within a given range. Write a program that checks if a number is within the range of an object’s min and max properties. Assume min <= max is always true.
// Examples:
// (4, { min: 0, max: 5 }) ➞ true
// (4, { min: 4, max: 5 }) ➞ true
// (4, { min: 6, max: 10 }) ➞ false
// (5, { min: 5, max: 5 }) ➞ true

function checkRange(num, range) {
    if (num >= range.min && num <= range.max) {
        return true;
    }else {
        return false;
    }
}
console.log(checkRange(4, { min: 0, max: 5 }));
console.log(checkRange(4, { min: 4, max: 5 }));
console.log(checkRange(4, { min: 6, max: 10 }));
console.log(checkRange(5, { min: 5, max: 5 }));


let personA = {
    firstName: "Ivan",
    lastName: "Chiosa",
}

let personB = personA;

personB.firstName = "Mario";

console.log(personA);
console.log(personB);