// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
const namesArr = ["Maria", "Mike", "Paul", "Doven"];
let namesLenth = namesArr.length;
let str = "";
for (let i = 0; i < namesLenth; i++){
    str += `Hello ${namesArr[i]}! `;
}
console.log(str); // resultat =>  [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"






//Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".
const friendsArr = ["Susan", "Rezvane", "Hadi"];
let strFriends = "";
for (let i = 0; i < friendsArr.length; i++){
    strFriends += `${friendsArr[i]} is at index ${i} of my friends and family array${i == friendsArr.length -1 ? ". " : ", "}`;
}
console.log(strFriends); // resultat Susan is at index 0 of my friends and family array. Rezvane is at index 1 of my friends and family array. Hadi is at index 2 of my friends and family array.





//City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
//[Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome"
const cityNames = ["Berlin", "Paris", "Prague", "Rome"];
let strCity = "";
for (let i = 0; i <cityNames.length; i++){
    strCity += `${cityNames[i]}${cityNames.length -1 ? ". " : ", "}`;
}
console.log(strCity); // result Berlin, Paris, Prague, Rome,
console.table(strCity);




// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(euroCities);
console.table(euroCities);





// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);


// Print the length of the array "euroCities".
console.log(euroCities.length);




// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);




// Use an array method to add "Budapest" to the euroCities array.
console.log(euroCities.push("Budapest"));
console.log(euroCities);




// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.table(euroCities);




// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["India", "China", "Bangladesh", "South Korea", "Turkey"];
console.log(asianCities);



// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

function capitalize(arr) {
    for (  let i = 0; i <arr.length; i++){
       let first = arr[i] [0].toUpperCase();
       let rest = arr[i].substring(1).toLowerCase();
       arr[i] = first + rest;
        // arr[i] = arr[i] [0];
        // names[i] = names[i][0].toUpperCase() + names[i].substring(1).toLowerCase();
    }
    return console.table(arr);  // result 
    // ┌─────────┬────────┐
    // │ (index) │ Values │
    // ├─────────┼────────┤
    // │    0    │ 'Matt' │
    // │    1    │ 'Sara' │
    // │    2    │ 'Lara' │
    // └─────────┴────────┘
    // [nodemon] clean exit
}
const arr1 = ["matt", "sara", "lara"];
const arr2 = []
capitalize(arr1);

 console.log("--------");
// Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]
function repeat(str,num){
    let arr = [];
    for (let i = 0; i < num; i++){
        arr[i] = str;
    }
    return console.table(arr);
}
repeat("Ivan", 2);



// Word Ranking. Create a function that takes a string of words and returns the highest scoring word.
// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday"
function wordRank(str){
    let longesWord = "";
    let strToArr = str.split(" ");
    // console.log(strToArr);

    for ( let i = 0; i < strToArr.length; i++){
        if (longesWord.length < strToArr[i].length) longesWord = strToArr[i];
    }
    return console.log(longesWord);;
}
wordRank("Ivan ich cool something");



// The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10


function findGreatest (arr, num){
    let str = "";
    for ( let i = 0; i <arr.length; i++){
        if (arr[i] > num) {
            str += `${arr[i]}`;
        }
    }
    return console.log(str);
}
findGreatest([1,2,3,5], 8);


// . Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []