// Overview
console.log(global);
console.log("Hi Javascript");
// let const var
let x, firstName, lastName;
x = 99;
firstName = null;
console.log(x);
console.log(firstName);
console.log(typeof x);
//console.log(cool);

// hosting
var global = "I'm global hoisted var";
console.log(global);
function sum(str, arr) {
  // scope
  global = "Yes";
  let x = "Nice, I'm local var";
  console.log(x); // Nice, I'm local var
}
sum("Hi", [1, 3, 4]);
console.log(x); // 99

// String
console.log("😇 Hadi §$%/() \" ' \n Oh this is fun ");
console.log(` 😇 Hadi §$%/() \" ' 
Oh this is fun`);
let str = "I love JAbvascript";
console.log("str length:", str.length);
console.log("str substring:", str.substring(2, 7)); //
console.log("str UpperCase:", str.toUpperCase());
console.log("str LowerCase:", str.toLowerCase());
console.log("str substring + UpperCase :", str.toUpperCase().substring(5));
console.log("str [8]:", str[8]); // a
console.log("str charAr(8):", str.charAt(8)); // a
// UTF-16
// 🫣
console.log("str charCodeAr(8):", str.charCodeAt(8));
if (true) {
  // something
} else {
  //  other thing
}
// Es6

// concat()