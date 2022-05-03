//  was ist loosely typed vs strongly typed /// ist ein variable 
// type script ist ein strongly typed librery
let str ;
str = 5;
str = "Cool";
// String var str ="";

// wenn brauche keine return wenn haben wir arrow function oder normale function // wenn ich meien function andern und hat keine value => keine return // wenn du hast auch console log
// function params
// return
// Opt 1
// {} ist eine scoop
function sum(x = 10, y = 0) {
    return x + y;
} 
console.log(sum());

// Opt 2
const sum1 = function (x,y) {
    return x + y;
}

// default => ist was wir schreiben wen die nutzer gibt uns keine value 
// Opt 3
const sum3 = (x,y) => x + y;  

let globalStr = "";
function chageStr () {
    globalStr = "I did something";
    // if () {
    //     longIn = true;
    // } else {
    //     longIn = false;
    // }
}