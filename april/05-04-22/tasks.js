// This question has 2 parts

// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// ---------------------------------
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
function printIfDivisibleByTen(num) {
    if (num % 10 == 0) {
        console.log(num, "Divisable for 10!");
    }
    // console.log(16%10);
}
printIfDivisibleByTen(1);
printIfDivisibleByTen(2);
printIfDivisibleByTen(32);
printIfDivisibleByTen(10);
printIfDivisibleByTen(30);
printIfDivisibleByTen(90000);
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
for ( let i = 0; i <= 125; i++) {
    printIfDivisibleByTen(i);
    // console.log(`Run ${i}`);
}



// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
const returnsLargestNumber = (...args) => {
    console.log(Math.max(...args));
}
returnsLargestNumber(2,3,6,9,93);



// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments
function tellFortune (numChildren,partnerName,location,jobTitle) {
    if (typeof numChildren == "number" && typeof partnerName == "string" && typeof location == "string" && typeof jobTitle == "string" ) {
        return console.log(`I have ${numChildren} children. Mein Name is ${partnerName}. I live in ${location} and i work als ${jobTitle}.`);
    } else {
        return console.log(`Did not compile right check again!`);
    }
}
tellFortune(2, "Mario","Köln", "Teacher");

//  Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// use the following chrList
// let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generatePassword() {
    let length = 10,
        charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        retVal = "";
    for (let i = 0, n = charList.length; i < length; ++i) {
        retVal += charList.charAt(Math.floor(Math.random() * n));
    }
    return console.log(retVal);
}
generatePassword();


// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
function numbersValidate (num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        let result = [];
        for (let i = 1; i <= num2; i++) {
            let items = num1**i;
            // let items = Math.pow(num1, i);
            result.push(items);
        }
        console.log(result.join(" "));
    }else {
        console.log(`Enter a number please!`);
    }  
}
numbersValidate(3,5);

// Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

let favoriteFruit = "Ananas";
function printFavoriteFruit (){
    favoriteFruit = "Appfel";
    console.log(`My favorite fruit is: ${favoriteFruit}`);
}
printFavoriteFruit();