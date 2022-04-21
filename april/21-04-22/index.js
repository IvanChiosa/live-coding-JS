


// Object 
const obj = {}; // emty obj in java script
const obj2 = new Object();

console.log(typeof obj2);


const person = {
    firstName: "Ivan",
    lastName: "Chiosa",
    age: 30,
    act: ["Sleep", "eat", " dream"],
    display: () => { },
    print: function () { },
};
person.firstName = "Jack";
person["middleName"] = "Dann"; // properti noch nicht mache vir mit dem eckige []
person["ageSum"] = () => { };
console.log(person);
const cars = { number: 5, storage: 4 };
const house = { city: "Köln", add: "xxx xxx" };
const myData = Object.assign(cars, house, { name: "Me", age: 99 });
console.log(myData);
Object.seal(myData);
console.log(Object.isSealed(myData))
delete myData.name;
console.log(myData);



// Keys
const objKeys = Object.keys(myData);
console.log(objKeys);

// Values
const objValues = Object.values(myData);
console.log(objValues);


// [] array oder eine bestimte buchstabe finden
// () function aufrufen 
// {}  => object oder scope 

const ppl = [
    { name: "Ivan", age: 30 },     // dass ist eien index (0) in eine Object
    { name: "Mario", age: 25 },    // dass ist eien index (1)
    { name: "Natalia", age: 30 },  // dass ist eien index (2)
    { name: "Ivan", age: 30 },     // dass ist eien index (3)
];
console.log(ppl[1].name);  //OP1 zu sehen 
console.log(ppl[1]["name"]); //OP2 zu sehen 


// Object.defineProperty()
const userInfoObj = {};
Object.defineProperty(userInfoObj,"name", {
    value: "Maria",
    writable: true,
});
console.log(userInfoObj.name);

// Object.defineProperties()
Object.defineProperties(userInfoObj, {
    lastName: {value:"Chiosa", writable: true},
    act: {value: ["Cooking", "Biking"]},
    cars: {value: ["V2"], writable: false},
});
console.log(userInfoObj.lastName);

// Object.hasOwnProperty()
console.log(userInfoObj.hasOwnProperty("name"));
console.log(userInfoObj.hasOwnProperty("age"));