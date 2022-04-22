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



// Tell us more about you
console.log("--------Ivan Object-------");
const objIvan = {
    firstName: "Ivan",
    lastName: "Chiosa",
    age: 36,
    city: "Köln",
    street: "Raderber str.",
    born: "Republik Moldaw",
    dateOfBirth: "01.01.2000",
    cost: 3000,
    hobby: ["Gym", "travel", "Friends"],
    study: ["HTML", "CSS", "JavaScript"],
    auto: {
        name: "Seat",
        color: "Blu",
    },
    dispaly: function () {
        // hey Ivan, you are 36 years old. I hope you are having fun in Köln
        console.log(`Hey ${this.firstName + " " + this.lastName}, you are ${this.age}. I hope you are having fun in Köln`);

    }
};


objIvan.dispaly();
console.log("------");
console.log(objIvan.auto.color);
console.log(objIvan);
console.log(objIvan.street);
console.log(objIvan["born"]);
objIvan.print = function () {
    console.log("This ist eine Object");
}
console.log();

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


console.log("-----");
// Object.keys
console.table(Object.keys(objIvan));

// Object.values
console.log(Object.values(objIvan));


// Object.assign
const obj1 = {kids: 2, cars: 1 };
const obj2 = {colors: ["red", "orange"], pet: "dog"};
const totalObj = Object.assign({name: "Ivan", age: 36}, obj1, obj2);
console.log(totalObj);



// Object.seal()
Object.seal(objIvan);
objIvan.age = 22;
console.log(objIvan);
console.log(Object.isSealed(objIvan));


console.log("-------");
function circuitPower(voltage, current) {
    let sum = voltage * current;
	return console.log(sum);
}
circuitPower(110, 3);
circuitPower(230, 10);
circuitPower(480, 20);


function nextEdge (side1, side2) {
    return console.log((side1 + side2)-1);
}
nextEdge(8, 10);
nextEdge(5, 7);