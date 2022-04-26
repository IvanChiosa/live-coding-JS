// The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const theRecipeCard = {
    name: "Mole",
    serves: "Serves: 2",
    ingredients: ["Cinnamon", "cumin", "cacao"],
    // print: function () {
    //     console.log(`Die name ist ${this.name} und die serves ${serves} mit die ingredients: ${this.ingredients}`);
    // }
}
console.log(Object.values(theRecipeCard));


// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const theReadingList = {
    
}

// Get Names. Create a function that takes an array of objects containing students' names e.g. {name: "John"}, and returns an array of just student names.
// Example:
// getNames([{ name: "Jane" },
//        { name: "Jack" },
//        { name: "John" }
//    ])
// ➞ ["Jane", "Jack", "John"]
getNames = () => {
    let names = ["Jane", "Jack", "John"];
    console.log(Object.values(names));
}
getNames();

console.log("---reduce------");
// reduce 
// old school
const numbersArray = [3,5,8];
let acc = 0;
for (let i = 0; i <numbersArray.length; i++) {
    let cur = numbersArray[i];  // das ist eine referenze in JS // 
    acc = acc + cur;
}
console.log(acc);


// Have 4 toDos reduce ist eien callback und eine schlaiffe
// 1. method
// 2. callBack
// 3. loop
// 4. box
// prof
const resultSum = numbersArray.reduce((acc,cur) => acc + cur);
console.log(resultSum);




// Create a function that returns an object has following output, try this one in Advance array methods :muscolo::carnagione_2:
// Examples:
// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}
const countLetter = (str) => {
    const arr = str.split(""); // convert da una arr in string 
    const result = arr.reduce((box,cur) => {

    },{}) // das ist eien leer object ich brauche für am ende wo du kann schpaichern
};
console.log(countLetter("Ivan"));


// function countLetters(str) {
//     let result = {};
//     // arr = str.split("");
//     for (let i = 0; i < str.length; i++) {
//         let currentChr = str[i];
//         if (result.hasOwnProperty(currentChr)) {
//             result[currentChr] += 1;
//         } else {
//             result[currentChr] = 1;
//         }
//     }
//     return console.log(result);;
// }
// countLetters("tree");