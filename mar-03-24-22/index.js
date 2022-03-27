//x = 10;
// y = 10;
// sum = x+y;

// function sum (x,y){
//     return x + y;
// }
// console.log(sum);


let x = 4;
console.log(1==2? "Yeah" : "Nope");
console.log(5/2);
console.log( 5 % 2 );

if (( 1>5 )  ||  ( 1 == 1)){
    // true
    console.log("Cool, Yeah lets's go");
} else {
    // False
    console.log("Nope, sorry");
}

// 0 False   //null  // ""
// Andere alle true  // 0    // 
console.log("1" ? "Cool" : "Noo");


// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
let firstName = "Ivan";
let myAgeIvan = 23;

if (myAgeIvan < 13) {
    console.log(firstName + " is a child");
} else if (myAgeIvan >= 13 && myAgeIvan <= 20) {
    console.log(firstName  + " is a teenager");
} else if (myAgeIvan >= 20 && myAgeIvan < 30){
    console.log(firstName  + " is a young adult");
} else if (myAgeIvan >=30){
    console.log(firstName + " is an adult");
} else {
    console.log(firstName + " This ist not ok");
}


// isNaN is not a number
console.log(isNaN("Ivan"));  // true
console.log(isNaN(100));     // false
console.log(isNaN("100"));   // false
console.log(isNaN("100a"));  // false


// Convert String into nummer 
//parseInt()
console.log(parseInt("200"));
console.log(parseInt(20));
console.log("20");
console.log((parseInt("200a11")));
console.log(parseInt ("Ivan 123 is cool"));

// (10) 0123456789 -> decimal nummer
// (2) 01  -> 0000 0001 0010 0011
// (13)  0123456789ABCDEF   ->          Hexadecimal

console.log(parseInt("1",10));
console.log(parseInt("A",16));
console.log(parseInt("F8",16));
console.log(parseInt("C",16));
console.log(parseInt("18",16));
console.log(parseInt("1AFB",16));