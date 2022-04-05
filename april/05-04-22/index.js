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

const iDoSomething = function (){
    // something 
    return "Something";
}

// Function declaration as value
const iDoSomethingEs6 = (str) => "Something";
console.log(iDoSomething());
console.log(iDoSomethingEs6());


const trueOderFalse = (x,y) => x < y;
console.log(trueOderFalse());
