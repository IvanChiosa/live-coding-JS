
// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
console.log("hier");
let myName = "Ivan is ";
let values1 = 100;
let values2 = 40;
let values3 = 20;
if (values1 >= 50 && values1 <= 99 || values2 >= 50 && values2 <= 99 ) {
    console.log(myName + "in the range.");
} else {
    console.log(myName + "not in the range ");
}

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
if (values1 >= 50 && values1 <= 99 || values2 >= 50 && values2 <= 99 || values3 >= 50 && values3 <= 99) {
    console.log(myName + "in the range.");
} else {
    console.log(myName + "not in the range ");
}

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 10;
let b = 60;
let c = 10;

if ( a > b && a > c ) {
    console.log(a);
} else if ( b > a && b > c){
    console.log(b);
} else if ( c > a && c > b) {
    console.log(c);
} 
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
 let meinName = "Py";

 if (meinName.startsWith("Py")) {
     console.log(meinName);
 } else {
     console.log("It's not a Py...");
 }

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sum1 = 18;
let sum2 = 30;
if (sum1 + sum2 >= 50 && sum1 + sum2 <= 80  ) {
    console.log("65");
} else {
    console.log("80");
}
// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let sum3 = 4;
let sum4 = 12;
if (sum3 + sum4 == 8 || sum3 - sum4 == 8 || sum4 - sum3 == 8) {
    console.log("true");
} else {
    console.log(false);
}
console.log("--------");

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let sum5 = 8;
let sum6 = 7;
if (sum5 + sum6 == 15 || sum5 == 15 || sum6 == 15){
    console.log(true);
} else {
    console.log(false);
}
console.log("--------");

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let sum7 = 34;
let sum8 = 20;
if (sum7 % 7 == 0) {
    console.log(true);
} else {
    console.log(false);
}
console.log(16%7);


// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let sum9 = 10;
let sum10 = 30;
let sum11 = 20;
let sum12 = 20;
// if ( sum9 )
// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.


// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".


// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.






// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function convertUpp (str){
    let conv = str.toLowerCase().split(" ");

    for (let i = 0; i < conv.length; i++) {
        conv[i] = conv[i][0].toUpperCase() + conv[i].substring(1);
    }
    conv = conv.join(" ")
    return console.log(conv);
}
convertUpp("the quick brown fox");