
let fruits = ["Apfel", "Ananas", "Cocco"];
// let newFruits = fruits[0];

console.log(fruits[0]);


let citys = "Berlin, Rome, London, Kiev";
let myCitys = citys.substring(1).split(",");



console.log(myCitys[2]);


// 1- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//  Example string : 'the quick brown fox'
// function one param to UpperCase

function myString(str) {
    let newString = str.toLowerCase().split(" ");

    for (let i = 0; i <newString.length;i++){
        newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);
    }
    newString = newString.join(" ");

    return console.log(newString);
}
myString("the quick brown fox");

function converts(str){
    let strToArr = str.toLowerCase().split(" ");

    for (let i = 0; i < strToArr.length;i++){
        strToArr[i] = strToArr[i][0].toLowerCase() + strToArr[i].substring(1);
    }
    strToArr = strToArr.join(" ");
    console.log(strToArr);
}

converts("the quick brown fox");


// 2- Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Longest_Country_Name(
//     ["Australia", 
//     "Germany", 
//     "United States of America"]
//     )
// Expected output : "United States of America"
// function array, length, loops, if/condition


function longestCountryName (arr) {
    newLongestCountryName = "";

    for (let i = 0; i < arr.length;i++){
        if (newLongestCountryName.length < arr[i].length){
            newLongestCountryName = arr[i];
        }
    }
    return console.table(newLongestCountryName);
}

longestCountryName(["Australia", "Germany", "United States of America"]);




let country = ["London", "Rome", "Berlin", "Bucharest"];



console.log(country); // Result country [ 'London', 'Rome', 'Berlin', 'Bucharest' ]

console.table(country.pop()); //The pop() method removes the last element from an array and returns that element. This method changes the length of the array.  // result: Bucharest

let myCountry = country.push("Chisinau");  // The push() method adds one or more elements to the end of an array and returns the new length of the array.

console.log(country);
console.table(country.push("Tiraspol"));

let myCountry1 = country.unshift("Milan");
console.log(country); // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.





let array1 = [50,3,6,30,5];

let found = array1.find(element => element > 20);

console.log(found);  // The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.


