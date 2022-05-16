// Closure // geschlössen
// function return other function

function priceCheck (num) {
    function discount() {
        return num * 10 / 100;
    }
    return `If you pay ${num}€, you will save ${discount()} €`;
}
console.log(priceCheck(2));

// mit => this => method => constructor cann wir nicht arow function benutzen


// Destructuring objects as function parameter 
// Op1
// referenz das gehort nicht zu mir nur ich sage dir nehmen und sicken in meine object
const printFunction  = (obj) => {
    let name = obj.name;
    // let firstName = "Ivan"; 
    // primitive ist eine string boolean null ...
    let age = obj.age;
    console.log(name,age);
    // mit emoji da scrivere 
}

// Op2
const printFunction2  = ({name,age}) => {
    console.log(name,age);
}
printFunction({name:"Steel", age:22, hight: 180, add: "London"});
printFunction2({name:"Ivan", age:30, hight: 180, add: "Moldavia"});


const ppl = [
    {name:"Ivan", age:37},
    {name:"Mario", age:37},
    {name:"Natalia", age:37},
];
const newInfo = ppl.map(({ name, age}) => console.log(name, age));

// SIAF
// Self-invoking anonymous function
(function (num1,num2) {
    console.log(num1+num2);
}) (2,3);


// IIFE
// Immediately_Invoked Function Expression
const sum = ((x,y)=> x + y )(4,5);
console.log("Sum", sum);


// constructor function
function AnimalsKrank(name,age, sickTyp) {
    this.name = name;
    this.age = age;
    this.sickTyp = sickTyp;
    this.display = function () {
        return console.log(`${this.name} has ${this.sickTyp}. Gut Besserung`);
    }
};
const dog = new AnimalsKrank("Max", 7, "Kopf Schmerzen");
console.log(dog);
dog.display();


// Class
class Laptop {
    // constructor method
    constructor (model,price) {
        this.model = model;
        this.price = price;
        this.display = function () {
            console.log(`This Laptop is ${this.model} priced at ${this.price} €`);
        }
    }
    priceUp() {
        // this.price = this.price * 5 => Abkurtzung
        // return bring uns nur eien value das vegen brauche wir eine runde clama ()
        return (this.price *= 5);
    }
};
const macBook = new Laptop("MacBook Pro 14in", 2500);
macBook.display();
macBook.priceUp();
macBook.display();






// extends  und super 
class Keyboard extends Laptop {
    constructor(model, price, color, lang, cable) {
        super(model,price);
        this.color = color;
        this.lang = lang;
        this.cable = cable;
    }
}
const lg = new Keyboard("Lg", 150, "Black", "DE", false);
console.log(lg);
lg.display();
lg.priceUp();
lg.display();
// spread operator in array
const arr1 = ["This ", "is "];
const arr2 = ["Cool"];
const totalArray = [...arr1, ...arr2];
console.log(totalArray);

for (let i = 0; i < arr1.length; i++) {}