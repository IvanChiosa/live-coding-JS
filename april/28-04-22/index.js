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

const personObj1 = {
    firstName: "Chiosa",
    age: 42,
};
for (const property in personObj1) {
    console.log(`${property} : ${personObj1[property]}`);
}


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
// every  // vedi se tutti i ellementi sono uguali o no se non sono uguali da false se sono uguli e true 
const numArr1 = [4,6,9,7,7];
console.log(numArr1.every((ele) => ele == 7)); // resultat false

// =variable // ==vergleicht // ===value und type

// let const var
// var its ein immer ein globale variable 
// const 

//  if () {
//     something true
// } else {
//     something false
// }

// &&  ||

// for  ( for = 0; i < 10; i++) {
    //}
// ++ --
// 

// .length => (String  oder array)
// string in java ist eine wort fur java ""
// numer ist eine numer
// bool true oder false 
// Array []
// Object {}  // eine supermarket in der supeem sind mehre regale und probuct // mehr info unber eine bestimte article
const item = {
    // title ist eine object
    name: "iPhone", // die value ist properti
    price: 1200,
    model: "Pro Max",
    memoryCard: 265,
    app: ["Clock", "Facebook", "FaceTime", "Calendar"],
    
    abCountry: {
        location: "Köln",
        amount: 33,
        sellOne: function() {
            return this.amount--;
        },
        returnOne: function () {
            return this.amount++;
        },
        callChina: function () {
            return (this.amount += 100);
        },
    },
    getInfo: function (){ // das ist eien methode 
        console.log(`${this.name} sold in ${this.abCountry.location} will cost you ${this.price} €`
        );
    },
    printData: () => console.log("This is a cool function"),
};
// item.abCountry.sellOne();
// item.abCountry.sellOne();
// console.log(item);
// item.getInfo();
// console.log(item.app);

// opt 1
console.log(item.abCountry.location);
// opt 2
// console.log(["item"]["abCountry"]);

console.log(item.abCountry.sellOne());
console.log(item.abCountry.returnOne());
console.log(item.abCountry.callChina());
