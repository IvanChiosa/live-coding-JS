//  was ist loosely typed vs strongly typed /// ist ein variable 
// type script ist ein strongly typed librery
let str ;
str = 5;
str = "Cool";
// String var str ="";

// wenn brauche keine return wenn haben wir arrow function oder normale function // wenn ich meien function andern und hat keine value => keine return // wenn du hast auch console log
// ... => ist die spred operation 
// ...arg wir rufen unsere function mit mehr value
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

// Arrays
const arr = []; // array zu declariert
const arr2 = new Array(); // array zu declariert // mit new wir macchen ein kopie mit dem classe 
// sort, map, join, includes, foreach, fill, filter, slice, reduce, splice, push, pop, unshift, shift, findIndexOf, reverce

console.log(Object.getOwnPropertyNames(Array.prototype));  //gibt uns die alle method was gibt in ein array
// [
//     'length',      'constructor',    'concat',
//     'copyWithin',  'fill',           'find',
//     'findIndex',   'lastIndexOf',    'pop',
//     'push',        'reverse',        'shift',
//     'unshift',     'slice',          'sort',
//     'splice',      'includes',       'indexOf',
//     'join',        'keys',           'entries',
//     'values',      'forEach',        'filter',
//     'flat',        'flatMap',        'map',
//     'every',       'some',           'reduce',
//     'reduceRight', 'toLocaleString', 'toString',
//     'at'
//   ]

console.log(Object.getOwnPropertyNames(Array));
// [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ] // 

console.log(Object.getOwnPropertyNames(Function));
// [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ] // 


console.log(Object.getOwnPropertyNames(Array.prototype).filter((prop) => typeof Array.prototype[prop]  == "function"));

// [
//     'constructor',    'concat',   'copyWithin',
//     'fill',           'find',     'findIndex',
//     'lastIndexOf',    'pop',      'push',
//     'reverse',        'shift',    'unshift',
//     'slice',          'sort',     'splice',
//     'includes',       'indexOf',  'join',
//     'keys',           'entries',  'values',
//     'forEach',        'filter',   'flat',
//     'flatMap',        'map',      'every',
//     'some',           'reduce',   'reduceRight',
//     'toLocaleString', 'toString', 'at'
//   ]