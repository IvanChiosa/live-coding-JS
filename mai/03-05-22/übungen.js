// For Loop
// for
// for/in
// for/of

const foods = [
    {
        name: "kebab",
        price: 12
    },

    {
        name: "hummus",
        price: 3
    },

    {
        name: "falafel",
        price: 5
    },

    {
        name: "schwareme" ,
        price: 8
    }
];

// normale for loop
for (let i = 0; i <foods.length; i++) {
    console.log(foods[i].name, foods[i].price);
}

console.log("-----01-----");

// for of 
for (const element of foods) { // element gibt uns eine object
    console.log(element.name, element.price);
};


console.log("-----02-----");
// for in
for (const element1 in foods) { // element hier ist eien index
    console.log(foods[element1].name, foods[element1].price + 2);
}

// * Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
const books = [
    {
        title: "Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: true
    },
    {
        title: "Clean Code",
        author: "Ivan Chiosa",
        alreadyRead: false
    },
];
for ( let i = 0; i <books.length; i++) {
    let bookInfo = books[i].title + " by " + books[i].author;
    if (books[i].alreadyRead) {
        console.log(`You already read ${bookInfo}`);
    } else {
        console.log(`You still need to read ${bookInfo}`);
    }

}
// * Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// console.log(`The ${book.title} by ${book.author}!`);
// * Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' 

// if (books[i].alreadyRead) {
//     console.log(`'You already read ${books}'`);
// } else {
//     console.log('You still need to read "The Lord of the Rings" by J.R.R. Tolkien.');
// }


// // Write a function that converts hours into seconds.

// // Examples
// // howManySeconds(2) ➞ 7200

// // howManySeconds(10) ➞ 36000

// // howManySeconds(24) ➞ 86400
const howManySeconds = (hour) => hour * 3600;
console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
const giveMeSomething = (str) => `something ${str}`;
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("something"));

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// const lessThan100 = (val1, val2) => val1 + val2 < 100;
function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(3, 77));
console.log(lessThan100(83, 34));

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2
const addition = (num) => num + 1;
console.log(addition(0));
console.log(addition(-3));


// console.log("-----Ivan's Jahre in der tag-----");
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(32) ➞

console.log("-----Ivan's und Sebastian Jahre in der tag-----");
const calcAge = (age) => age * 365.25;
console.log(calcAge(36));
