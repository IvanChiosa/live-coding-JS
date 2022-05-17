// Clones vs.Reference 
// Primitive (Simple values are always clones)
// String Number Boolean
let x = 5; 
let val = 5; //Val ist clones // nur primitive value cann du clonnen 
console.log(val);
val = 333;
console.log(val);
const obj = {
    id: 22
}
let ref = obj; // Das ist eine referenze nicht clonnen => obj oder arr 
ref.id = 55;
console.log(obj.id);

const names = ["Ivan", "Zain", "Steel"];
let arrRef = names; // referenz

// Cloning Array using 
// Method 1
const newArrSpread = [...names] // copie of meine arra clones

// Method 2
const newArrWhitMap = names.map((ele) => ele); // clone 

// Method 3
const newArrWhitSlice = names.slice(0);

// Method 4
const newArrWhitConcat = [].concat(names); // clone

// colors: ["Red", "Sliwer", "White"],
const car = {
    brandName: "Audi", // clon
    price:  2022, //clon
    colors: ["Red", "Sliwer", "White"], // array referenz
    op: {
        leatherFinish: true,
        dash: "Wood",
    }
}


// Shallow clone for an Object using => 
const objShallowClone = {...car} 
console.log(objShallowClone);
objShallowClone.brandName = "BMW";
objShallowClone.colors.push("Blue")
objShallowClone.op.dash = "Old Wood";
console.log(car);

// Recursion // sie rufen selbs 
const fact = (num) => {
    // stop punck
    if (num == 1) {
        return 1;
    }
    // come lavoro il ciclo 7 * 6 *= 5 *= 4 *= 3 *= 2 *= 1 => als 1 gehe ich raus 
    return (num * fact(num -1));
}
console.log(fact(7));


// Deep copy using recursion // inerhaldb di meien function rufe ich eine neue function
// Deep copy using recursion 🤨
function deepClone(val) {
    // array
    if (Array.isArray(val)) {
      return val.map(deepClone);
    }
    // object
    if (typeof val == "object") {
      return Object.keys(val)
        .map((key) => {
          return { [key]: deepClone(val[key]) };
        })
        .reduce((acc, cur) => Object.assign(acc, cur), {});
    }
  
    // all other val
    return val;
  }
  
  const newCarDeepClone = deepClone(car);
  newCarDeepClone.op.dash = "cool wood";
  console.log(car);