const person = {
    firstName: "Ivan", // firstName ist auch aine property
    lastName: "Chiosa",
    age: 30,
    act: ["Sleep", "eat", " dream"],
    display: () => { },
    print: function () {
        console.log(`Hey ${this.firstName}`);
    }, // das ist eine methode
};

console.log("---------");
// For in
const names = ["Ivan", "Mario", "Olga", "Nancy"];
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]}`);
}

console.log("----------");
// For in  // ich gehe rhein in eien object
const steelObj = {
    name: "Ivan",
    age: 36,
    add: "Paris",
};


// For in (nur mit Object)
for (const prop in steelObj) { // prop ist di abkurtzung vom property
    console.log(`${prop} : ${steelObj[prop]}`);

    console.log(prop, steelObj[prop]);
}

// const var let delete for  in  console Array Object String Number


// for of (nur mit Array)
for (const element of names) {
    console.log(element);
}


console.log("------Übungen -----");
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);

console.log("----");
// Using a loop, console.log all of the values in the programming object.
for (const key in programming) {
    console.log(programming[key]);
}

// Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;
console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.
for (const element of programming.languages) {
    console.log(element);
}

// Kiss
// Using a loop, console.log all of the keys in the programming object.
// element in array
// prop in object
for (const key in programming) {
    console.log(key);
}
const keysInProgramming = Object.keys(programming);

//console.log(keysInProgramming);
for (const element of keysInProgramming) {
    console.log(element);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
programming.giveItTry = function () {
    if (programming.isChallenging && programming.isRewarding) {
        return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
    }
};
console.log(programming.giveItTry());

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log(programming);

console.log("--------");

// callbacks // Große function calll andere function 
function first(cb) {
    const isFun = () => "This is fun";

    // something more 
    return cb;
}
function cb() {
    return "Cool";
}
console.log(first(cb()));


// map // ist eine kopie of my array 
// ist ein Method
// ist ein Callback function 
// ist ein schlaife
// ist ein kopie 
const cities = ["berlin", "Paris", "La", "NY"];
const newCity = cities.map((element, i) => `You live in ${element}`);
console.log(newCity);


// reduce // bring mir nur eine previous value
const numArr = [2, 3, 6, 5, 4, 9];
// cur currentValue;
// acc accumulator
const sumResult = numArr.reduce(
    (peviousValue, currentValue) => peviousValue + currentValue
);
console.log(sumResult);