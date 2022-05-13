 console.log("-----01-----");
 function sumUp (x,y) { // function ist ein hoisting 
    return x + y;
}
console.log("-----02-----");
var globalVar = "I'm global";
console.log(globalVar);


console.log("-----03-----");
// ?true : false
// ternary condition ? ex if true : ex if false 
let userIsLogged = false;  // JS think immer an true
console.log(userIsLogged  == false ? "Welcome Back" : "You need to log in ");
console.log(5 > 6 || 1 == 1 ? "Cool" : "Noooo");
console.log(5 > 6 && 1 == 1 ? "Cool" : "Noooo");
console.log(1 == "1" ? "Cool I looked only at the value" : "Noooo");
console.log(1 === "1" ? "Cool I looked only at the value" : "Noooo");