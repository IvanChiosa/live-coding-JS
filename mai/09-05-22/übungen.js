"use strict"


// // Selft Invoche annonims function
// (function(){
//    console.log("Ivan", "Chiosa");
// })();

// Imediatly Invockt Function Expression
const sum = ((x,y) => x + y) (5,6);
console.log(sum);


const userCarData = {
   year: 2022,
   model: "Seat",
   speed: 260,
   get fullCarName(){
      return `This is di model years ${this.year}, und die model ist ${this.model} il spped is ${this.speed}`;
   },
   set fullCarName(str) {
      let arr = str.split(" ");
      this.year = arr[0];
      this.model = arr[1];
      this.speed = arr[2];
   }
};
console.log("----getter----");
// getter ohne information 
console.log(userCarData.fullCarName);


console.log("----setterr----");
// setter ist mit die information drin
userCarData.fullCarName = "1999 BMW 100";
console.log(userCarData.fullCarName);


function Person (name, age, add) {
   this.name = name;
   this.age = age;
   this.add = add;
};

const ivanData = new Person("Ivan", 37, "Koln");
console.log(ivanData);