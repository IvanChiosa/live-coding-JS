

// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
let firstName = "Ivan";
let lastName = "Chiosa";
let city = "Köln";
console.log(`My name ist ${firstName}, mein Last Name is ${lastName} und ich woghne im ${city}`);

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let lowCaseStr = "the quick brown fox";
console.log(lowCaseStr.substring(0,1).toUpperCase() + lowCaseStr.substring(1));


// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
let changingPos = "BoogieWoogie";
let firstBoogieChr = changingPos[0];
let lastBoogieChr = changingPos[changingPos.length-1];
let finishedStr = changingPos.substring(1,changingPos.length -1);
console.log(lastBoogieChr + finishedStr + firstBoogieChr);


// Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.
let str = "Ivan Chiosa";
console.log(str);
// Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.
// let str = "IvanChiosa";
console.log(str[1]);
console.log(str[5]);

// Declare a variable called name and assign a string as its value.
let firstName = "Ivan";
// Declare a variable called age and assign a number as its value.
let age = 36;
// Declare a variable called year and assign a number as its value.
let year = 2022;
// Using your declared variables, print a string to the console. For example, "Basem is 37 in 2020".
console.log(firstName,"is",age, "in", year);
// Declare a variable called isMarried and assign it a boolean value.
let isMarried = true;
// Print a string to the console, indicating whether or not your person is married. For example, "Basem is married: true"
console.log(firstName, "is married:", isMarried);