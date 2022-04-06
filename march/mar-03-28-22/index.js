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



function display (){
    console.log("You are cool");
}


for (let i = 0; i <= 10; i++){
    display();
    console.log("Nice");
    for (let j = 0; j <= 10; j++) {
        console.log("Some new");
    }
}



// come un Matriosca
// nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j} `);
    }
    console.log("----------");
}


// 0 1 2 3  0 1 2 3  0 1 2 3
let str5 = "";
for (let i = 1; i <= 3; i++) {
    for (let j = 0;  j <= 3; j++ ){
        str5 += `${j} `
    }
}
console.log(str5);


// 1 1 1 2 2 2 3 3 3 4 4 4 5 5 5
let str6 = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1;  j <= 3; j++ ){
        str6 += `${i} `
    }
}
console.log(str6);


// +
// ++
// +++
// ++++
let str7= "";
for (let i = 1; i <= 4; i++) {
    for (let j = 1;  j <= 1; j++ ){
        str7 += `+ `;
        console.log(str7);
    }
}

// ****
// ***
// **
// *

let str8= "";
for (let i = 4; i >= 1; i--) {
   console.log("*".repeat(i));
}


// Addition. Write a program to add up the numbers 1 to 20.
// expected output: "012345678"

// 19 + 10 = 29
// 19 + 11 = 30
// 19 + 12 = 31
// 19 + 13 = 32
// 19 + 14 = 33
// 19 + 15 = 34
// 19 + 16 = 35
// 19 + 17 = 36
// 19 + 18 = 37
// 19 + 19 = 38
for (let i = 0; i < 20; i++) {
   for (let j = 0; j < 20; j++) {
    console.log(i, "+", j, "=", j + i);
   }  
}

// let sum = 0;

// There are i bottles of beer on the wall. Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.
console.log(`There is 1 bottle of beer on the wall.`);



// There is 1 bottle of beer on the wall.
// There are 2 bottle of beer on the wall.
// There are 3 bottle of beer on the wall.
// There are 4 bottle of beer on the wall.
// There are 5 bottle of beer on the wall
for (let i = 2; i <= 5; i++) {
    console.log(`There are ${i} bottle of beer on the wall.`);
}

/*
// this is one for
+
++
+++
++++
*/
// Number
// Op 1
for (let i = 0; i <= 3; i++) {
    console.log("*".repeat(i));
  }
  // Op 2
  let starsShape = "";
  for (let i = 0; i <= 3; i++) {
    starsShape += "*";
    console.log(starsShape);
  }
  // Op 3
  let str55 = "";
  for (let i = 1; i <= 1; i++) {
    for (let j = 1; j <= 4; j++) {
      str55 += "+";
      console.log(str55);
    }
  }
  // Op 4
  
  // Op 5
  /*
  // this is other for
  ****
  ***
  **
  *
  */
  // Op 1
  for (let i = 3; i >= 0; i--) {
    console.log("*".repeat(i));
  }
  // Op 2
  let starDownShape;
  for (let i = 3; i >= 0; i--) {
    starDownShape = "";
    for (let j = 0; j <= i; j++) {
      starDownShape += "*";
    }
    console.log(starDownShape);
  }
  // Op 3
  let starsWithSub = "****";
  for (let i = 0; i <= 3; i++) {
    console.log(starsWithSub.substring(i));
  }
  // Op 4
  
  // Addition. Write a program to add up the numbers 1 to 20.
  let sum = 0;
  for (let i = 1; i <= 20; i++) {
    sum += i;
  }
  console.log("sum :", sum);
  
  // There are i bottles of beer on the wall.
  //  Write a program that will output,
  //"There is 1 bottle of beer on the wall."
  // "There are 2 bottles of beer on the wall" up until there are five bottles.
  // Warum random gibt nur 0-1 ?
  // DRY
  
  let text = "";
  for (let i = 1; i <= 5; i++) {
    console.log(
      `There ${i == 1 ? "is bottle" : "are bottles"} of beer on the wall`
    );
    if (i == 1) {
      console.log(`There is ${i} bottle of beer on the wall`);
    } else {
      console.log(`There are ${i}bottles of beer on the wall`);
    }
  }