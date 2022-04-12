console.log("-----Ivan-----");
const dictionary = (str, arr) => {
    let resultArr = [];

    for ( let i = 0; i < arr.length ;i++){
        if(arr[i].substring(0,str.length) == str){
            resultArr.push(arr[i]);
        }
    }
    return console.log(resultArr);;
}
dictionary("butl", ["breakfast", "border", "button" ]);


const arr1 = ["Hallo","Cool"];
const arr2 = [122,33];
const totalArray = arr1.concat(arr2, ["Hallo ich bin Ivan"]);
console.log(totalArray);

// function 
// machen die code DRY

// Es6 arrow function 

function sum(x,y) {
    x + y - 44;
    function doSomething(){
        return "Hi";
    }
    return console.log(x + y);

}
sum(2, 4);


// function argument 
function iPrint (str,num, arr) {
    return console.log(`I had an array ${arr} and a number ${num} and a string`);
}
iPrint("Nice",22,["No this","Not cool"]);

function sumArgs (x = 9, y = 22) {
    return console.log();
}
sumArgs();

// many arguments
function manyArgs(num1, num2, num3, num4, num5, num6, num7, num8,num9) {
    return console.log(num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9);
}

function manyArgs1 (...args) {
  let total = 0;
  for (let i = 0; i < args.length;i++) {
    total += args[i];
  }
  return console.log(total);
}

manyArgs1(2,3,6,5,4,1,9,8,7,5,6);

// non fare mai cosi
// function one () {
//     two();
// }
// function two () {
//     one();
// }


// 65536  // vB   / da vedere
// document
console.log(process);