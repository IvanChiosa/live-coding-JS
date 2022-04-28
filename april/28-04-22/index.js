console.log("--- for----");
// for
// i => index
for (let i = 0; i <= 10; i++) {
    //console.log(i);
} // diese method get immer 


console.log("--- for in----");
const personObj = {
    firstName: "Ivan",
    age: 36,
};
for (const prop in personObj) { // prop => ist property oder key
    console.log(`${prop} : ${personObj[prop]}`);
};


console.log("--- for of----");
const namesArr = ["mario", "Ecaterina", "Olga", "Steel"];
for (const name of namesArr) {
    console.log(name);
};

console.log("--- do while----");
// do while machst nur ein mall true oder false => hast du eine ergebnis 
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5)

console.log("--- while----");
// while schaut deine bedinung 
let index = 0;
while (index < 5) {
    console.log(index);
    index++;
}


console.log("--- forEach----");
// forEach // loop, method, callback // arbeitet immer mit dem array
const cities = ["Berlin", "Paris", "Moldavia", "Dubai"];
// Op pro
cities.forEach((ele) => console.log(ele));
// Old school
for (let i = 0; i <cities.length; i++) {
    console.log(cities[i]);
}


console.log("--- find----");
// find
const numbers = [1,1,1,2,2,];
const findNumResult = numbers.find((ele) => ele == 2);
const filterNumResult = numbers.filter((ele) => ele == 2);
console.log("----find----");
console.log(findNumResult);
console.log("----filter----");
console.log(filterNumResult);
// All advanced array methods, reduce is not 
// arr.method((element, array) => {return"something"});


console.log("--- findIndex----");
// findIndex  // ti da solo il primo risultato che trova e ti da solo un risultato 
const numFindIndex = numbers.findIndex((ele) => ele == 2);
console.log(numFindIndex);


console.log("--- indexOf----");
const numFindIndexOf = numbers.indexOf(2);
console.log(numFindIndexOf);




console.log("--- some----");
// some // vedi solo true o false anche se essiste solo uno o piu oggetti uguali 
const numArr = [4,6,9,7,7];
console.log(numArr.some((ele) => ele == 7)); // resultat true


console.log("--- every----");
// every  // ver
const numArr1 = [4,6,9,7,7];
console.log(numArr1.every((ele) => ele == 7)); // resultat false

// = == ===