console.log("-----03-----");
// / 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = { firstName: "John", lastName: "Vooo" };
// let last = { lastName: "Smith" };
// Expected output:
// {firstName: "John", lastName: "Smith"}
const printObj = (obj1, obj2) => {
    let first = obj1.firstName;
    let last = obj2.lastName;
    return {firstName: first,lastName: last};
};
console.log(printObj({firstName: "John", lastName: "Vooo" }, {lastName: "Smith"}));


console.log("-----04-----");
// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}


const person = {
    name: "John",
    job: "Teacher",
};
const copyOfObject = Object.keys(person).reduce((obj,key) => Object.assign({}, obj, { [person[key]]: key }), {});
console.log(copyOfObject);


console.log("-----05-----");
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

function keysAndValues(obj){
    let keys = Object.keys(obj),
        values = keys.map(function (key) {
            return obj[key];
        });
    return [keys, values]; 
};
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));



console.log("-----06-----");
// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100
function convertToBinary (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return (binary);
};
console.log(
    convertToBinary(20),
    convertToBinary(10),
    convertToBinary(44),
);



console.log("-----07-----");
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
//isPandigital(0123456789) -> true

function isPandigital(num) {
	let numStr = num.toString();
	return (new Set(numStr.split(""))).size === 10;
};
console.log(isPandigital("0123456789955"));
console.log(isPandigital("01266666789"));

const isPandigital1 = num => /0+1+2+3+4+5+6+7+8+9+/.test(String(num).split('').sort().join(''));
console.log(isPandigital1("015678996325"));

