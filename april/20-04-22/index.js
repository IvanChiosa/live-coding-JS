// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value


let str = "";
let num = 0;
let bool = true;
const arr = [];
const sumFunction = () => {};

const personObj = {
    firstName: "Ivan",
    lastName: "Chiosa",
    age: 36,
    add: "Raderberger str 117a",
    toolStack: ["JavaScript", "Java", "PHP"],
    hasKids: false,
    // kids: [{}, {}, {}],
    // dispaly: () => {},
};

const personObj2 = {
    firstName: "Mario",
    lastName: "Chiosa",
    age: 30,
    add: "Raderberger str 117a",
    toolStack: ["C#", "C++", "PHP"],
    hasKids: false,
    // kids: [{}, {}, {}],
    // dispaly: () => {},
};

const personObj3 = {
    firstName: "Ecaterina",
    lastName: "Tati",
    age: 36,
    add: "Köln",
    toolStack: ["JS", "C", "PHP"],
    hasKids: false,
    // kids: [{}, {}, {}],
    // dispaly: () => {},
};


console.log(typeof personObj);
const carObj = {
    model: "Opel",
    color: "red",
    price: 50000,
    fuelConsuption: "16.6-30.3 L/100km",
};

// method 1
console.log(personObj["age"]);
// method 2
console.log(personObj.toolStack[2]);

console.log("--------Ivan Object-------");
const objIvan = {
    firstName: "Ivan",
    lastName: "Chiosa",
    age: 36,
    city: "Köln",
    street: "Raderberger str 117a",
    born: "Republik Moldaw",
    hobby: ["Gym", "travel", "Friends"],
    study: ["HTML", "CSS", "JavaScript"],
}
console.log(objIvan);
console.log(objIvan.street);

console.log("----------");

// Object Literal
const obj = {}; // obj aufgebautet
obj ["name"] = "Ivan"; //neue key immer mit dem Eckige Klammen []
console.log(obj);
obj.name = "Nalatia"; // die neue enderung immer mit dem punct
console.log(obj);

// Accessing properties
// 1- with (bracket notation)

// 2- with (dot notation)

// Assignment using dot notation, more used to access a property value

// Assigning using bracket notation, more used for an empty object

// Tell us more about you

// Object.keys

// Object.values

// Object.assign

// Object.defineProperty()

// Object.defineProperties()

// Object.hasOwnProperty()

// Object.seal()