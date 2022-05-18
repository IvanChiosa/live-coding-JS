
// sage to index.js braicht du axios und in deine index zu haben // Das wir fragen mit require
const axios = require("axios");
// const axios = require("./cool"); // referenz zu deine cool.js colling


// users
// axios
//  .get("https://jsonplaceholder.typicode.com/users") /axios
//  .get("https://jsonplaceholder.typicode.com/todo/10") // methode zu seine was und wocher du muss gehen zu info zu haben // Protocol adresse e rooter
//  .then((res) => res.data.map(({name,address,phone}) =>  // schau die losung in terminal
//    console.log(
//        `This person ${name} lives in ${address.street} you can all them on ${phone}`
//        )
//     )
//   ) 
//  .catch((err) => console.log(err)) // fur die error 
// ;
// console.log("Ivan cool");/ methode zu seine was und wocher du muss gehen zu info zu haben // Protocol adresse e rooter
//  .then((res) => res.data.map(({name,address,phone}) =>  // schau die losung in terminal
//    console.log(
//        `This person ${name} lives in ${address.street} you can all them on ${phone}`
//        )
//     )
//   ) 
//  .catch((err) => console.log(err)) // fur die error 
// ;
// console.log("Ivan cool");


// todo
// axios
//  .get("https://jsonplaceholder.typicode.com/todo/10") // methode zu seine was und wocher du muss gehen zu info zu haben // Protocol adresse e rooter
//  .then((res) => res.data.map(({name,address,phone}) =>  // schau die losung in terminal
//    console.log(
//        `This person ${name} lives in ${address.street} you can all them on ${phone}`
//        )
//     )
//   ) 
//  .catch((err) => console.log(err)) // fur die error 
// ;
// console.log("Ivan cool");



// comments
axios
 .get("https://jsonplaceholder.typicode.com/coments") // methode zu seine was und wocher du muss gehen zu info zu haben // Protocol adresse e rooter
 .then((res) => res.data.map(({name,address,phone}) =>  // schau die losung in terminal
   console.log(
       `This person ${name} lives in ${address.street} you can all them on ${phone}`
       )
    )
  ) 
 .catch((err) => console.log(err)) // fur die error 
;
console.log("Ivan cool");


// axios => 