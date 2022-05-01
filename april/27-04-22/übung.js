// reduce
const itemsList = [
    {name: "Ivan", price: 20},
    {name: "Mario", price: 50},
];

const totalCoast = itemsList.reduce((acc, cur) => acc + cur.price, 0);
console.log(`You have to pay: ${totalCoast}`);

// fill
const arr = [1,2,3,6,4,53,7,8,9,90];
console.log(arr.fill(2, 2));


// sort 
const alpha = ["d", "g", "a", "c"];
const alphabetic = alpha.sort();
console.log(alphabetic);


// for in 
const personObj = {
    firstName: "Chiosa",
    lastName: "Ivan",
    age: 36
}
for ( const prop in personObj) {
    console.log(`${prop} :${personObj[prop]}`);
};

// for of
const arrName = ["mario", "Ivan", "Ecaterina"];
for ( const name of arrName) {
     console.log(name);
};


// do while
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// while 
let index = 0;
while (index <= 6) {
    console.log(index);
    index ++;
}
// for each
const cities = ["Moldavia", "Parigi", "Köln", "Berlin"];
cities.forEach((ele) => console.log(ele));

console.log("------");
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// find
const num = [1,2,3,4,4,5,5,] ;
const numberFind = num.find((ele) => ele == 5);
console.log(numberFind);

// 

const numbers = [1,1,1,1,2,2,];
const findNumResult = numbers.find((ele) => ele == 2);
const filterNumResult = numbers.filter((ele) => ele == 2);
console.log("----find----");
console.log(findNumResult);
console.log("----filter----");
console.log(filterNumResult);

// findIndex
const numFindIndex = numbers.findIndex((ele) => ele == 2);
console.log(numFindIndex);

// findIndexOf
console.log("--- indexOf----");
const numFindIndexOf = numbers.indexOf(2);
console.log(numFindIndexOf);

console.log("--- some----");
const num1 = [5,6,6,6,2,22,32,1];
console.log(num1.some((ele) => ele == 6));

console.log("--- every----");
const numArr1 = [6,6,6];
console.log(numArr1.every((ele) => ele == 6));