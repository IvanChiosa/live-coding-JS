 
 
let firstName = "Ivan";
 

function printGreeting(first) {
    console.log("Hallo World", first);

}
printGreeting("Ivan");

console.log("Wie geht's?");


function sum(a,b){
    return a + b;
}
let result = sum(1,2);
console.log(result);

function isEven(a) {
    if ( a % 2 == 0 ){
        isEven = true;

    }else {

        return false;
    }
    return isEven;
}
console.log(isEven(5));
console.log(isEven(2));