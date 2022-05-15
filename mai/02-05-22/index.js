//let //const // var   => let nameSpace = value;
// var => ist ein hosting/function ist eien globale variable
// var => ist eine mehrere datai 
// library => viele function und ganz viele obj zussamen 
let x = 0;


// java ist ein synchronaus liest da oben nach untern und da links nach recht
let someThing = "text";
console.log(sumUp(22,3));
// mit hoisting ich kann anrufen befor ich deklariren verden
function sumUp (x,y) { // function ist ein hoisting 
    return x + y;
}

var globalVar = "I'm global";
console.log(globalVar);

// comment one Line
/*
many lines
*/




// ?true : false
// ternary condition ? ex if true : ex if false 
let userIsLogged = false;  // JS think immer an true
console.log(userIsLogged  == false ? "Welcome Back" : "You need to log in ");
console.log(5 > 6 || 1 == 1 ? "Cool" : "Noooo");
console.log(5 > 6 && 1 == 1 ? "Cool" : "Noooo");
console.log(1 == "1" ? "Cool I looked only at the value" : "Noooo");
console.log(1 === "1" ? "Cool I looked only at the value" : "Noooo");



// strings 
let str = "This is a long text"; // alles caracter in meine string
console.log(str.length); // length ist eien property
str.trim();
str.trimEnd();
str.trimStart();

// if else
let totalItems = 550; // Front-end frage 
if ( totalItems > 150 ) {
    // something true
    console.log("Nice you got free a gift");
}else {
    // something false
    console.log("Oh no you need to pay more");
}

console.log("---break---");
// loops // break 
// break wir benutzen nur in der schlaife oder swith
for (let i = 0; i < 10; i++) {
    console.log(i);
    if ( i == 5 ) {
        break;
    } 
}
// || continue
console.log("---continue---");
for (let i = 0; i < 10; i++) {
    if ( i == 5 ) {
        continue;
    } 
    console.log(i);
}

// switch
let color = "Green";
let resultText = "";
switch(color) {
    case ("blue", "lightBlue"): 
    resultText = "This is blue";
        break;
    case "Green":
        resultText ="This is green";
        break;
    case "black": 
    resultText ="This is black";
        break;
    case "red": 
    resultText ="This is red";
        break;
    default:
        resultText = "Sorry this color is not in our list";
}
console.log(resultText);
