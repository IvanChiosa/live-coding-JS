const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const discounts =  [22,3,45,6];

console.log("-----map()-----");
// map  /// gib uns eine kopie of meine array immer array in return gib! // wir kann unsere object manipuliren 
// Have 4 toDos
// 1. method
// 2. callBack (() =>)
// 3. loop
// 4. make a copy for the original array

//                           emoji--- 1,2,3   console.log(index)
const emojiCopy = emojis.map((emoji,index) => { 
    return `Hallo ${emoji} ${index + 1}`;
});
console.log(emojiCopy);

const emojis1 = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];

const emojiCopy1 = emojis1.map((emojis) => {
    return console.log(`Ivan's emojis ${emojis}`);
});
(emojiCopy1);
//                                  für eine paramiter brauchst du keine  runde klammern (ele) => ele  // zweite parameter immer index 
const copyDiscounts = discounts.map((ele) => (ele * 1.1) / 100);
console.log(copyDiscounts);

const  users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Smith", age: 31 },
];
const greeting = users.map((user) => { 
    return  { // text ist meine key name // oder something
        text: `Hey ${user.name}, you are ${user.age} years old`,
    };
}); /// ()runde clame fur maps
console.log(greeting);
//const yourNewCopy = yourNewCopy

// filter /// has du in return immer eine array
// Have 4 toDos
// 1. method
// 2. callBack ()
// 3. loop
// 4. make a copy for the original array
const filteredEmoji =  emojis.filter((emoji) => {
    return emoji == "😎" ;
});
console.log(filteredEmoji);
const words = ["this", "is", "longText", "somethingLong"];
const filteredWords = words.filter((word)=> word.length == 2);
console.log(filteredWords);

const jobs = [
    { title: "teacher", salary: 1500, location: "Amsterdam", remote: true},
    { title: "IT", salary: 2400, location: "La", remote: true},
    { title: "Web Developer", salary: 1500, location: "London", remote: false},
];
const filteredJob = jobs.filter((job) => job.salary > 2000 || job.location == "Amsterdam" || job.remote == false);
console.log(filteredJob);


console.log("------- Opt2 ----");
// Opt 2
const job1 = [
    { title: "teacher", salary: 1500, location: "Amsterdam", remote: true},
    { title: "IT", salary: 2400, location: "La", remote: true},
    { title: "Web Developer", salary: 1500, location: "London", remote: false},
];
const filterJob1 = job1.filter((job) => job.salary > 1000 && job.location == "London");
console.log(filterJob1);
console.log("------");
const filterJob2 = job1.filter((job) => job.title);
console.log(filterJob2);

// reduce
const itemsList = [ {title: "Qual lock", price: 80 }, 
{title: "shoe", price: 139 }, 
{title: "light", price: 120 },
];

const totalCost = itemsList.reduce((acc, item) => acc + item.price, 0);
console.log( `You have to pay ${totalCost} €`);

// fill // 
const arr = [1,2,3,4,5];
// const alpha = ["a", "c", "b"].sort();
// console.log(alpha);
// console.log(arr.fill({ price: 99 }));


// sort
// UTF-16 code
// method
// callback // option dass 
console.log(arr.sort((a,b)=> b - a ));
const sortedArr = arr.sort();
console.log(sortedArr);

const alpha = ["a", "c", "b", "A", ":"].sort();
console.log(alpha);

// forEach

// find  /// bickomst du eine nur eine value

// some  // true oder false 

// every   // hastd ue eide element ja oder nein 




// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders. 

// ```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const total = orders.reduce((acc, cur) => acc + cur.amount, 0);
console.log(total);



console.log("--------02-----------");
// #### 2. Increment by 1
// ```javascript 
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
const increment = arrayOfNumbers.map((ele) => ele + 1);
console.log(increment);


console.log("--------03-----------");
// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

const filterEvens = (arr) => arr.filter((ele) => ele % 2 == 0);
console.log(filterEvens([1,2,3,11,12,13]));
console.log(filterEvens([22,2,31,110,6,13]));
 


console.log("--------04-----------");
// * Examples:
// ```javascript

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// * Examples
const filterItems = (arr, query) => arr.filter((ele) => ele.includes(query));

console.log(filterItems(friends, 'm')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


console.log("--------05-----------");
// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

// * Examples:
// ```javascript
const sum = (arr) => arr.reduce((acc,cur) => acc + cur, 0);
console.log(sum([1,2,3,4,5])); // return 15
console.log(sum([6,7,7])); //returns 20
 

 
console.log("--------06-----------");
// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const calcHypotenuse = (arr) => arr.map((ele) => Math.sqrt(ele));
console.log(calcHypotenuse([5, 10, 25, 100]));

console.log("--------07-----------");


// * @param {array} arr
// * @param {any} value
// * @return {number}
// *
// * @example
// *    ['Ace', 10, true], 10    => 1
// *    ['Array', 'Number', 'string'], 'Date'    => -1
// *    [0, 1, 2, 3, 4, 5], 5    => 5
// */
// function findElement(arr, value) {
//  return arr.indexOf(value);
// }

const findElement = (arr, value) => arr.indexOf(value);
console.log(findElement(['Ace', 10, true], 10));


console.log("--------08-----------");
// OP 1

const generateOdds = (num) =>  {
    const arr = [];
    for ( let i = 0; i < num; i++) {
        arr.push(i * 2 + 1);
    }
    return arr;
}
console.log(generateOdds(5));

console.log("--------09-----------");

// OP 2
const generateOdds1 = (num) => {
    const arr = Array(num).fill(1).map((ele,i) => i * 2 + 1);

    console.log(arr);
}
generateOdds1(5);