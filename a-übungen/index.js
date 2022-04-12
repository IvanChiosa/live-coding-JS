// Here you will find mixed exercises


console.log("----1----");
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let myName = "Ivan";
let values1 = 50;
let values2 = 100;
let values3 = 980;
if (values1 >= 50 && values1 <= 90 || values2 >= 50 && values2 <= 90 || values3 >= 50 && values3 <= 90) {
    console.log(`${myName} you are in the range!`);
} else {
    console.log(`Sorry ${myName} you are not in the range`);
} // resultat --- Ivan you are in the range!


console.log("----2----");
// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} // resultat 30


console.log("----3----");
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let startWhitPy = "Py";
if (startWhitPy.startsWith("Py")) {
    console.log(startWhitPy);
} else {
    console.log("You are not a Py...");
} // resultat You are not a Py...


console.log("----4----");
// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sum1 = 20;
let sum2 = 40;
if ( sum1 + sum2 >= 50 && sum1 + sum2 <= 80) {
    console.log("You are in the range 65");
} else {
    console.log("Not in the range 80");
} // resultat You are in the range 65

console.log("----5----");
// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let sum3 = 7;
let sum4 = 1;
if ( sum3 + sum4 == 8 || sum3 - sum4 == 8){
    console.log("Ist 8 (true)");
} else {
    console.log("False");
} // resultat Ist 8 (true)

console.log("----5----");
// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let sum5 = 10;
let sum6 = 15;
if ( sum5 == 15 || sum6 == 15 || sum5 + sum6 == 15) {
    console.log("It's 15 (true)");
} else {
    console.log("False");
} // resultat It's 15 (true)

console.log("----6----"); // da vedere con Tom
// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let sum7 = 7;
let sum8 = 20;
if ( sum7 % 7 == 0 || sum7 % 11 == 0 || sum8 % 7 == 0 || sum8 % 11 == 0) {
    console.log("It's multiple for 7 or 11 (true)");
} else {
    console.log("False");
} // resultat It's multiple for 7 or 11 (true)

console.log("----7----");
// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let sum9 = 10;
let sum10 = 30;
let sum9und10 = sum9 + sum10;
let sum11 = 20;
let sum12 = 20;
let sum11und12 = sum11 + sum12;
if (sum9und10 == sum11und12 ) {
    console.log(sum9und10 + " it's equal whit " + sum11und12);
} else {
    console.log("It's unequal");
} // rasultat 40 it's equal whit 40


console.log("----8----");
// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let sum13 = 10;
let sum14 = 22;
let sum13und14 = sum13 + sum14;
if (sum13und14 >= 19 ) {
    console.log(sum13und14 * 2);
} else {
    console.log("The sume ist kleine als 19");
} // resultat 64


console.log("----9----");
// Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
let firstName = "Ivan";
let age = 30;
if ( age < 13) {
    console.log(`${firstName} is a child`);
} else if ( age >= 13 && age < 20){
    console.log(`${firstName} is a teenager`);
} else if ( age >= 20 && age < 30 ){
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is a adult`);
} // resultat  Ivan is a adult



console.log("----10----");
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function convertUppFirstLetter(str) {
    let newConvertUppFirstLetter = str.toLowerCase().split(" ");

    for (let i = 0; i < newConvertUppFirstLetter.length; i++) {
        newConvertUppFirstLetter[i] = newConvertUppFirstLetter[i][0].toUpperCase() + newConvertUppFirstLetter[i].substring(1);
    }
    newConvertUppFirstLetter = newConvertUppFirstLetter.join(" ");
    return console.log(newConvertUppFirstLetter);
}
convertUppFirstLetter("the quick brown fox"); // resultat newConvertUppFirstLetter


console.log("----11----");
const shopping = ['Bread', 'Milk', 'Cheese', 'Hummus', 'Noodles'];
console.table(shopping);
console.table(shopping[2]);



console.log("----12----");
const random = [10, 63, 89, [56, 35, 96]];
console.table(random[1]); // resultat 63



console.log("----13----");
const birds = ['Parrot', 'Falcon', 'Owl']
console.log(birds.indexOf(`Owl`)); // resultat (2)


console.log("----14----");
const cities = ['Manchester', 'Liverpool'];
console.log(cities.pop()); // resultat (Liverpool)


console.log("----15----");
let fruits = [`Apfel`, `Banana`, `Ananas`];
console.log(fruits[2]); // resultat Ananas


console.log("----16----");
// 1- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//  Example string : 'the quick brown fox'
// function one param to UpperCase
function toUpperCaseFirstLetter (str) {
    let newToUpperCaseFirstLetter = str.toLowerCase().split(" ");

    for (let i = 0; i < newToUpperCaseFirstLetter.length; i++){
        newToUpperCaseFirstLetter[i] = newToUpperCaseFirstLetter[i][0].toUpperCase() + newToUpperCaseFirstLetter[i].substring(1);  
    }
    newToUpperCaseFirstLetter = newToUpperCaseFirstLetter.join(" ");
    return console.log(newToUpperCaseFirstLetter);
}
toUpperCaseFirstLetter('the quick brown fox'); // resultat The Quick Brown Fox



console.log("----17----");
// 2- Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Longest_Country_Name(
//     ["Australia", 
//     "Germany", 
//     "United States of America"]
//     )
// Expected output : "United States of America"
// function array, length, loops, if/condition
function longestCountryName(arr) {
    newlongestCountryName = "";

    for (let i = 0; i < arr.length;i++) {
        if (newlongestCountryName.length < arr[i].length) {
            newlongestCountryName = arr[i];
        }
    }
    return console.log(newlongestCountryName);
}
longestCountryName (["Australia", "Germany", "United States of America"]); // resultat United States of America



console.log("----18----");
let country = ["London", "Rome", "Berlin", "Bucharest"];
console.table(country);
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │  'London'   │
// │    1    │   'Rome'    │
// │    2    │  'Berlin'   │
// │    3    │ 'Bucharest' │
// └─────────┴─────────────┘
console.log(country.pop());
// ┌─────────┬──────────┐
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │ 'London' │
// │    1    │  'Rome'  │
// │    2    │ 'Berlin' │
// └─────────┴──────────┘
console.table(country);
console.log(country.push("Chisianu"));
console.table(country);
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │  'London'  │
// │    1    │   'Rome'   │
// │    2    │  'Berlin'  │
// │    3    │ 'Chisianu' │
// └─────────┴────────────┘


console.log("----18----");
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let array1 = [50, 30, 90, 5];
console.log(array1.find(element => element > 30));


console.log("----19----");
const dictionary = (str, arr) => {
    let newDictionary = [];

    for ( let i = 0; i < arr.length;i++){
        if(arr[i].substring(0,str.length) == str){
            newDictionary.push(arr[i]);
        }
        return console.log(newDictionary);
    }
    
}
dictionary("button", ["breakfast", "border", "button" ]);
