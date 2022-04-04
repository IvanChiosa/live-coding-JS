// function sum (x , y) {
//     return console.log(x + y);
// }
// const userData = process.argv.slice(2)
// console.log(userData);
// sum(parseInt)


// function myGreet (str) {
//     return console.log(str);
// }
// myGreet("Hallo");

// console.log(process.argv);


const userData = process.argv.splice(2);
function greeting(names) {
    for (let i = 0; i < names.length;i++){
       console.log(`Hey ${names[i]}`);
    } 
}
greeting(userData);

console.log(process.env.user);


