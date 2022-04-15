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
dictionary("button", ["breakfast", "border", "button"]);



console.log("----20----");
const arr1 = ["Hallo", "Cool"];
const arr2 = [122,33];
const totalArray = arr1.concat(arr2,["Hallo ich bin Ivan"])
console.log(totalArray); // return [ 'Hallo', 'Cool', 122, 33, 'Hallo ich bin Ivan' ]


console.log("----21----");
function sum(x,y) {
    let newsum = x + y;
    return console.log(newsum);
}
sum(2,3); // return 5

console.log("----22----");
function mySum(x,y){
    let newMySum = x * y - 20;
    function doSomething() {
        return "Hallo Ivan! Die sume ist:";
    }
    return console.log(doSomething(), newMySum);
}
mySum(5,6); // resultat Hallo Ivan! Die sume ist: 10


console.log("----23----");
// many arguments
function manyArgs(...args) {
    let total = 0;
    for (let i = 0; i < args.length;i++) {
        total += args[i];
    }
    return console.log(total);
}
manyArgs(10, 20, 30, 40); // resultat 100


console.log("----24----");
// many arguments
function manyArguments1(...args) {
    let total = 0;

    for (let i = 0; i < args.length;i++) {
        total += args[i];
    }
    return console.log(total);
}
manyArguments1(30, 80, 90); // resultat 200


console.log("----25----");
// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(age) {
    let ageDog = 7 * age;
    console.log("Your doggie is age " , + ageDog + " years old in dog years!");
}
calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(222, 7);


console.log("----26----");
// secondo esempio
function calculateDogAge1 (puppyAge, rate){
    if (typeof puppyAge == "number" && typeof rate == "number"){
        return console.log("Your doggie is age " , + puppyAge + " years old" + rate + "in dog years!");
    } else {
        return console.log(`Please write a number `);
    }
}
calculateDogAge1(3,3);
calculateDogAge1("Hi");
calculateDogAge1(22,3);


console.log("----27----");
// ------------------------
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
// ------------------------
function calculateSupply (myAge,maxAge,amountDay) {

    // let myAge = 40;
    // let maxAge = 80;
    // let amountDay = 2;
    let some = amountDay * 365 * (maxAge - myAge);

    console.log(`You will need, ${some} coffee to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(41,80,2.5);
console.log("------");


console.log("----28----");
// zweite beispiel
function calculateSupply1(age,amount) {
    let maxMyAge = 109;
    upComingDays = (maxMyAge - age) * 365;
    let totalFood = upComingDays * amount;

    if (typeof age == "number" && typeof amount == "number") {
        return console.log(`You will need ${totalFood} to last you until the ripe old age of ${maxMyAge}. You will still have ${upComingDays}`);
    } else {
        return console.log(`It's not a number, Please write a number`);
    }
}
calculateSupply1(36, 2);
calculateSupply1(44, 10);
calculateSupply1("Hi", 3);
console.log("-------");



console.log("----29----");
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit (celsius) {
    let cels = (celsius / 5) * 9 + 32;
    console.log(celsius + "°C ist " + cels + "°F ");
}
celsiusToFahrenheit(20);
celsiusToFahrenheit(40);
console.log("--------");


console.log("----30----");
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(fahrenheit) {
    let fahr = (((fahrenheit - 32 ) * 5) / 9).toFixed(2);
    console.log(fahrenheit + "°F ist " + fahr + "°C ");
}
fahrenheitToCelsius(100);
fahrenheitToCelsius("800");



console.log("----31----");
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments
function tellFortune (numChildren,partnerName,location,jobTitle) {
    if (typeof numChildren == "number" && typeof partnerName == "string" && typeof location == "string" && typeof jobTitle == "string" ) {
        return console.log(`I have ${numChildren} and mein Name is ${partnerName} i live ${location} i work als ${jobTitle}`);
    } else {
        return console.log(`Did not compile right check again!`);
    }
}
tellFortune(2, 2,"Köln", "Lernen");



console.log("----32----");
function generatePass(pLength){

    var keyListAlpha="abcdefghijklmnopqrstuvwxyz",
        keyListInt="123456789",
        keyListSpec="!@#_",
        password='';
    var len = Math.ceil(pLength/2);
    len = len - 1;
    var lenSpec = pLength-2*len;

    for (i=0;i<len;i++) {
        password+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
        password+=keyListInt.charAt(Math.floor(Math.random()*keyListInt.length));
    }

    for (i=0;i<lenSpec;i++) {
        password+=keyListSpec.charAt(Math.floor(Math.random()*keyListSpec.length));

    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    }
    return console.log(password);;
}


console.log("----33----");
// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
function printExponentialValues (num1,num2) {
    let x = 0;
    let y = 0;
    let soma = 0;

    for (let i = 0; i < soma.length;i++) {
        soma[i] = soma[i] 

    }

    console.log(`The function `);

}
printExponentialValues(2,3)




console.log("----34----");
//Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x"
let favoriteFruit = 10;
function printFavoriteFruit (favoriteFruit) {
    if (typeof favoriteFruit == "string") {
        console.log(`My favorite fruit is: ${favoriteFruit}`);
    } else {
        return console.log("You are give not a right value...");
    }
}
printFavoriteFruit(favoriteFruit);


console.log("----35----");
const array2 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array2.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array2.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"



console.log("----36----");
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'gurken');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.



console.log("----37----");
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join(' => '));
// expected output: "Fire-Air-Water"




console.log("----38----");
const array3 = ['a', 'b', 'c'];
const iterator = array3.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2



console.log("----39----");
const array4 = ['one', 'two', 'three'];
console.log('array1:', array4);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array4.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array4);
// expected output: "array1:" Array ["three", "two", "one"]


console.log("----40----");
const array5 = [1, 2, 3];

const firstElement = array5.shift();

console.log(array5);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


console.log("----41----");
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



console.log("----42----");
// program to check if the number is even or odd
// take input from the user
const number = 22;

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}  // resultat    //The number is even(22)(numeri pari)                     //The number is odd(21)(numeri dispari)




console.log("----43----");
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]



console.log("----44----");
const months1 = ['Jan', 'Februar', 'December', 'March'];
months1.sort();
console.log(months1.join(" "));