//Array => eine variabile with mehrere value
//            0      1       2       3
const names = ["Ivan","Mario","Steel","Natalia"];
console.log(names);
console.log(names[1], names[3]);
// {}
console.log(names.length); // normal People
console.log(names[0][0]); // first name und first letter
console.log(names[2].substring(2,4)); // second name und 2,3 letter


// Bracket notation
names[1] = "Emilian";
console.log(names);
const arr = [];
console.log(arr);
arr[0] = 22;
console.log(arr);
arr[1] =12;
console.log(arr);


// push() // aggiungere alla coda un altro valore
arr.push(22);
arr.push(43);
arr.push(36);
arr.push(6);
arr.push(6);
arr.push(6);
arr.push("Ivan");
console.log("arr");
console.table(arr);
console.log(arr.length);


// indexOf()
console.log("indexOf",names.indexOf("Natalia")); // da solo il primo risultato
console.log("lastIndexOf",names.lastIndexOf("Natalia")); // da solo il ultimo risultato inizia  a contare dalla fine 

// unshift()
console.log(arr.unshift("Hi")); // aggiungere una riga sopra e spinge in giu il index 
console.log(arr.unshift("Cool"));
console.log(arr.unshift("Noo"));
console.table(arr);

// pop()
arr.pop(); // Löschen die latze zeile
console.table(arr);

// shift()
arr.shift();
console.table(arr)


// push && pop Last Index
// unshift && shift first index

//reverse()
const numbers = [1,2,3,4,5,6,7];
numbers.reverse();  // reverse ti fa vedere dall ultimo al primo esempio [7,6,5,4,3,2,1]
console.log(numbers);