
// sage to index.js braicht du axios und in deine index zu haben // Das wir fragen mit require
const axios = require("axios");
// const axios = require("./cool"); // referenz zu deine cool.js colling

axios
 .get("https://jsonplaceholder.typicode.com/users")
 .then((res) => res.data.map(({name,address,phone}) => 
   console.log(
       `This person ${name} lives in ${address.street} you can all them on ${phone}`
       )
    )
  ) 
 .catch((err) => console.log(err)) // fur die error 
;
console.log("Ivan cool");