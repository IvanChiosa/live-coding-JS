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



console.log("-----03-----");

// // Write a function that converts hours into seconds.

// // Examples
// // howManySeconds(2) ➞ 7200

// // howManySeconds(10) ➞ 36000

// // howManySeconds(24) ➞ 86400

function howManySeconds (num) {
    return console.log(num * 3600);
}
howManySeconds(2);
howManySeconds(10);
howManySeconds(24);



console.log("-----04-----");
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

function giveMeSomething  (str) {
    return console.log(`Something ${str}`);
}
giveMeSomething("is better than nothing");
giveMeSomething("Bob Jane");
giveMeSomething("something");



console.log("-----05-----");
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true
function lessThan100 (num1, num2) {
    if (num1 + num2 < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(22,15));
console.log(lessThan100(83,34));



console.log("-----06-----");
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

function addition (num) {
    return console.log(num + 1);
}
addition(0);
addition(9);
addition(-3);


console.log("-----07-----");
// Create a function that takes the age in years and returns the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

function calcAge (age) {
    return age * 365;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

