// The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10



// function findGreatest (arr, num){
//     let str = "";
//     for ( let i = 0; i <arr.length; i++){
//         if (arr[i] > num) {
//             str += `${arr[i]}`;
//         }
//     }
//     return console.log(str);
// }
// findGreatest([1,2,3,5], 8);



const arr = new Array(6);
const arr2 = new Array();
console.log(arr);
arr2[0] = "Ivan";
arr2.push("Mario");
arr2.unshift("Nancy");
arr2.unshift("Ivan");
arr2.unshift("Olga");
arr2.unshift("Nancy");
arr2.unshift("Olga");
arr2.pop();
let lastDeletedItem = arr2.pop();
console.log("Deleted Item:" , lastDeletedItem);
let firstDeletedItem = arr2.shift();
console.log("Last Item:", firstDeletedItem);
arr2.shift();
console.table(arr2);
console.log(arr2.length);
arr2[1] = "Ivan";
arr2.reverse();
console.table(arr2);
let userName = arr2[0];
console.log(userName);


console.log(arr2.indexOf("Ivan"));
console.log(arr2.lastIndexOf("Ivan"));
console.log("-------");
// No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function clearUP(arr) {
    let resultArr = [];

    for (let i = 0; i < arr.length;i++){
        if (resultArr.indexOf(arr[i]) == -1) {
            resultArr.push(arr[i]);
        }
    }
    return console.table(resultArr);
}
clearUP([1, 4, 4, 7, 7, 7]);

// splice()  // deleted die zeile.
//               0          1            2
const days = ["Montag", "Mittwoch", "Donnerstag", "Freitag"]
let deletedItems = days.splice(1,2);  
console.log(deletedItems);
console.table(days);


// slice()  Fa una copia di quello che hai chiesto 
//                0           1        2       3        
const cities = ["Berlin", "London", "Dubai", "La"];
let newArr = cities.slice(0,2);
console.log(newArr);
console.log(cities);

// Js {}
// arr []
// function und methode ()



// split ()  // nehmt deine string e zag dir wie hast du dreen  //suchst deine parameter und arbeiten was du fragt
let str = "This. is a long day";
console.table(str.split(" ").length);

// join()  was muss mache 
const text = ["Hi", "I", "am", "Ivan"];
console.log(text.join(" "));



// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:

// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

function toCamelCase (str) {
    let result = "";

    let newArr = str.toLowerCase().split("_");
    // console.log(newArr);

    for ( let i = 1;  i < newArr.length;i++) {
        newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1);
    }
    result = newArr.join("");
    return console.log(result);
}

toCamelCase("hello_world");
toCamelCase("javascript_is_fun");


// 2015 Ss6
// arrow function =>
const toCamelCaseArrow = (str) => {
    let newArr = str.toLowerCase().split("_");
    // console.log(newArr);

    for ( let i = 1;  i < newArr.length;i++) {
        newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1);
    }
    result = newArr.join("");
    return console.log(result);
}
toCamelCaseArrow("js_is_cool");



// old school arrow
function sum (x,y) {
    return x+y;
}
sum(2,5)

// Es6 noch arrow  
const sumArrow = (x,y) => x+y;


function display (str){
    return console.log(str);
}

const displayArrow = (str) => console.log(str);


// . Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

console.log("-----Ivan-----");
const dictionary = (str, arr) => {
    let resultArr = [];

    for ( let i = 0; i < arr.length ;i++){
        if(arr[i].substring(0,str.length) == str){
            resultArr.push(arr[i]);
        }

    }
    return console.log(resultArr);;
}
dictionary("butl", ["breakfast", "border", "button" ]);

console.log("------");
// / Hello Alex. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!

// function, string, for
// Es6 
// function greeting2 (arr)

const greeting2 = (arr) => {

    let str = "";

    for(let i = 0; i <arr.length;i++){
        str += `Hello ${arr[i]} `
    }
    return console.log(str);
}
greeting2(["Maria", "Mike", "Paul", "Doven"]);


// // sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
// function arr loop number
// old school function
function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    return console.log(sum);
}
sumOfNumbers([2,3,5]); // 10


// Es6
const sumOfNumb = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    return console.log(sum);
}
sumOfNumb([2,3,5]); // 10

