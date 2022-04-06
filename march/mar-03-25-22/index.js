


function add(num1, num2){
    const result = num1 + num2;
    return result;
}

let sum = add(4, 5);
console.log("4 + 5 =", sum);
console.log("2 + 9 =", add(2,9));

function substract(num1, num2) {
    const result = num1 - num2;
    return result;
}


let substraction = substract(6,4);
console.log("6 - 4 = ", substraction);

// Maht.random
console.log("Zufallswert zwischen 0 und 1")

function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    const random = Math.random();

    
    const range = max - min + 1;
    const randomRange = random * range;
    const floorRandomRange = Math.floor(randomRange);
    const result = floorRandomRange + min;
    return result; 
    // console.log("num, max: ", min, max);
    // return Math.floor(Math.random() * (max - min + 1)) + min;
}

let result = getRandomInt(1.9, 2.1);

console.log(result);