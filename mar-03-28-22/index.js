// parseInt
// 01 2
// 0123456789 10
// 0-9 A-F  => 16
console.log(parseInt("1000", 2));

// isNan() is not a number
console.log(isNaN(22));

// ++ -- += /= *=
let x = 4;
x *=5; //
console.log(x);


// String 
// includes
// subString
// Number
// Math

// Math Object

// Math.floor()
console.log("floor", Math.floor(22.8)); // result 22

// Math.ceil ()
console.log("ceil ", Math.ceil(22.9999999)); // result 23

// Math.round()
console.log("round up", Math.round(22.999999999)); // result 23
console.log("round down", Math.round(22.000001));  // result 22

// Math.max()
let num1 = parseInt(2);
let num2 = parseInt("44hi");
let num3 = parseInt(6);
console.log(Math.max(num1, num2, num3)); // result 44
// console.log(Math.max(2,44,6,5,"33"));

// Math.min
console.log(Math.min(2,44,6,5,"66")); // result 2

// math.random()
console.log(Math.floor (Math.random()* 6) + 1); // result immer neue Zhal vom 1 - 6
// 0.880667122567927
console.log(Math.floor(Math.random() * 10) + 1); // result 


// toFixed()
let num4 = 22.41234544444;
console.log(num4.toFixed(5)); // result 22.41235


let num5 = "1.234e+4";
console.log(parseFloat(num5));


let  alpha = "ABCD";
console.log(alpha[Math.floor(Math.random() * alpha.length)]);

// loops Wir haben 8 formen
// for (start; condition; increment)  {
//   What will happen
// }
// i == index bedeutet
// i = i + 1; oder i++ oder i+= 1;
// i = 0;
for (let i = 0; i <= 10; i++) {
    // 
    console.log(" i now is", i);
    // i++
}

// 1 * 2 = 2;
// 2 * 2 = 4;
// 3 * 2 = 6;
// ----
// 10 * 2 =
for (let i = 1; i <= 10; i++) {
    // console.log(`${i} * 2 = ${i * 2}`);
    console.log(i, "*2", i * 2);
}
// result 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// 4 * 2 = 8
// 5 * 2 = 10
// 6 * 2 = 12
// 7 * 2 = 14
// 8 * 2 = 16
// 9 * 2 = 18
// 10 * 2 = 20

let str = "";
for (let i = 0; i <=10; i++) {
    str += `Nice ${i} `;

}
console.log(str);

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log("---------");
for (let i = 1; i <= 10;) {
    console.log(i);
    i += 2;
}
console.log("-----");


// Übungen 

// 100 200 300 400 500 600 700 800 900 1000
let str1 = "";
for (let i = 100; i <= 1000; ) {
  str1 += `${i} `;
  i += 100;
}
console.log(str1);

console.log("-------");

let str11 = "";
for (let i = 100; i <=1000;){
    str11 += `${i} `;
    i += 100;
}
console.log(str11);

console.log("------");

// 1 1 1 2 2 2 3 3 3 4 4 4
let str2 = "";
for (let i = 1; i <= 4; i++) {
  str2 += `${i} ${i} ${i} `;
}
console.log(str2);

// 0 2 4 6 8 10
let str3 = "";
for (let i = 0; i <= 10; ) {
  str3 += `${i} `;
  i += 2;
}
console.log(str3);

let str33 = "";
for (let i = 0; i <=10;){
    str33 += `${i} `;
    i += 2;
}
console.log(str33);


// 3 6 9 12 15
let str4 = "";
for (let i = 3; i <= 15; ) {
  str4 += `${i} `;
  i += 2;
}
console.log(str4);

let str44 = "";
for (let i = 3; i <=15;){
    str44 += `${i} `;
    i += 3;
}
console.log(str44);


// Warum random ist nur 0-1 // Die frage muss suchen für Morgen.