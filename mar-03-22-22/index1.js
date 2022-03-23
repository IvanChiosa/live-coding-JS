let x = 5;

console.log(x);


// Strings
// Boolean
// Numbers
// Object
// Null
// Undefined
//

let firstName = "Ivan";
console.log(firstName.length);

// let const var
let lastName = ""; // Es6 2015
var global = "i’m global"; // immer global

// const
const birthday = "01.09.1989";
//  birthday = "Hi"
console.log(birthday);

// String
let longStr = "Hi, I’m Ivan. I’m 36y.";
console.log(longStr.length);
console.log(longStr.substring(4, 13));
let shortStr = longStr.substring(4, 13);
console.log(longStr.substring(4, 13));
console.log(longStr.toUpperCase());


let firstHi = longStr.substring(0, 2)

// To upper case un d to lower case
let myName = "ivaN";
myName = myName[0].toUpperCase() + myName.substring(1).toLocaleLowerCase();
console.log(myName.length)

let longString = "Hi, this is FBw D05 whit Ivan";
let isIvan = longString.toLowerCase().includes("ivan"); // Ja, oder nein.
console.log(isIvan);
let email = "contact@ivan-nrefhefh.com";
let at = email.includes("@");  // conferma la egzistenza della oggetto cercato.
console.log(at);

// 1
let strExtraOne = "I can  walk in the park ";
console.log(strExtraOne.substring(19, 23));

// 2
let hello = "Hello world";
console.log(hello.toUpperCase());

// 3
let earth = "Hello world";
console.log(earth.toLowerCase());

// 4
let js = "Javascript";
console.log(js.substring(3, 6));

// 5
let nice = "nice shoes";
console.log(nice.includes("l"));
console.log(1+2,4,5,55+1);
console.log();

// 6
let javaScript ="JavaScript";
// let first java script
let firstJavaChr = javaScript[0];
console.log(firstJavaChr+javaScript+firstJavaChr);

// la seconda metode.
console.log(firstJavaChr[0]+javaScript+firstJavaChr[0])

let myAgeIvan = 32;
let myJob = "Studing";
console.log(`Hey I’m ${myName} und ich bin ${myAgeIvan}  undcity meine beruf ist ${myJob} Danke!`);


console.log(1+1);
let herFirstName = "    Chiosa     ";
let herLastName = "Ivan";
console.log(herFirstName.trimStart() + " " + herLastName);
// trimEnd ()
// trimStart()
// trim()
console.log(herFirstName.trimEnd() + " " + herLastName);
console.log("Hallo " + " " + "Cool");

// + - = 

let strOne = "Hi";
let strTwo = "Hallo ich bin Ivan";
let longStrOneAndTwo = strOne + " " + strTwo + " " + "Bin sehr ";
console.log(longStrOneAndTwo);

strOne += "Halo hallo";
console.log(strOne);



let num = 22;
num -= 2; // num = num - 2
console.log(num);

// num = num -1
num--; // 19
//--num; 
// console.log(num--);
// console.log(num);
// console.log(--num);

// num = num +1
num++; // 20
// ++num;
console.log(num);

// for(let i =0; i <10; i++){
//     console.log(i);
// }

// 7
let javaScriptTwo = "JavaScript";
let lastThreeChr = javaScriptTwo.substring(javaScriptTwo.length-3);
console.log(lastThreeChr + javaScriptTwo + lastThreeChr);




