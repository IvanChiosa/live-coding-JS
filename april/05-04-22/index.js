const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array4 = ['g', 'h', 'i'];
const array3 = array1.concat(array2, array4);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


// process
console.log(process);

function sum(...args) {
    console.log(args);
}
sum(2,6,5,4,3);

// return git dir eie resultat 
function iGreet(name) {
    let newText = `Hey ${name}`;
    return console.log(newText);
}
iGreet("Ivan");

// function mit return
function multi(x,y){
    return 5;
}
console.log(multi(3,9));
const bigNum = 3 + 5 * 55 - multi(3, 55);
console.log(bigNum);


// function declarations as value
// const functionName == function(parameters) {...}

const iDoSomething = function (){
    // something 
    return "Something";
}

// Function declaration as value
// const functionName = (parameters) => {}
const iDoSomethingEs6 = (str) => `Something ${str}`;
console.log(iDoSomething());
console.log(iDoSomethingEs6());
const trueOderFalse = (x,y) => x < y;
console.log(trueOderFalse());



// Invoke the function AKA function call
iGreet()


// Call stack 65536


// callback => wenn du anrufen zu java fur eine function un du kriegst egebnise zu haben 
function iDoCoffee(){

    let milk = iHaveMilk();
    let sweetener = iHaveSweetener();
    let eis = iHaveEis();
    let spoon = iHaveSpoon();

    return console.log(`Your coffee with ${milk}  ${sweetener} ${eis} and ${spoon}is ready.`);
}

const iHaveMilk = () => `Milk`;
const iHaveSweetener = () => `Sweetner`;
const iHaveEis = () => `I have Eis`;
const iHaveSpoon = () => `I have spoon `;

console.log(iDoCoffee());


// map Es6 => 2015
const names = ["Ivan", "Nancy","Olga","Steel"];
const greetingArr = names.map((name,i)=> `Hey ${name} your index num is ${i}`);
console.log(greetingArr);

// String []   vs charAt()
let str = "Ivan";
console.log(str[0]); // I
console.log(str.charAt(true));