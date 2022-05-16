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


// Class


// 