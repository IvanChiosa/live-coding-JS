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

