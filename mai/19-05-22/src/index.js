#!/usr/bin/env node


// console.log("Sebastian");

const axios = require("axios");
let [cityName] = process.argv.slice(2);
let API_Key = "2846a0a991dc431f9cb82131221805";
let baseUrl = "http://api.weatherapi.com/v1";

let endPoint = `${baseUrl}/current.json?key=${API_Key}&q=${cityName}`;

axios
  .get(endPoint)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
;