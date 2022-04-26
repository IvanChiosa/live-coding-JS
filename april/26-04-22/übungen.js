// KISS

// The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// Obj title servings ingredients
const recipeObj = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  };
  console.log(recipeObj.title);
  console.log("Serves:", recipeObj.servings);
  console.log("Ingredients:");
  for (const element of recipeObj.ingredients) {
    console.log(element); // arr[i]
  }
  
  // The Reading List
  // Keep track of which books you read and which books you want to read!
  // Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
  // Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
  // Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
  
  const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: false },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      alreadyRead: true,
    },
  ];
  // [] () {}
  for (const book of books) {
    console.log(`${book.title} by ${book.author}.`);
  }
  // for(let i = 0; i < books.length;i++){
  //     console.log(`${books[i].title} by ${books[i].author}.`)
  // }
  for (const book of books) {
    //   if (book.alreadyRead) {
    //     console.log(`You already read ${book.title} by ${book.author}.`);
    //   } else {
    //     console.log(`You still need to read ${book.title} by ${book.author}.`);
    //   }
    // DRY
    //   KISS
  
    console.log(
      book.alreadyRead ? `You already read` : `You still need to read`,
      `${book.title} by ${book.author}.`
    );
  }
  // Get Names. Create a function that takes an array of objects containing students' names e.g. {name: "John"}, and returns an array of just student names.
  
  // Example:
  // getNames([{ name: "Jane" },
  //  	  { name: "Jack" },
  //  	  { name: "John" }
  // 	  ])
  // ➞ ["Jane", "Jack", "John"]
  const students = [
    { name: "Ali" },
    { name: "Nancy" },
    { name: "Steel" },
    { name: "Olga" },
  ];
  const resultArr = [];
  for (const student of students) {
    resultArr.push(student.name);
  }
  console.log(resultArr);
  
  const getNames = (arr) => arr.map((student) => student.name);
  console.log(getNames(students));