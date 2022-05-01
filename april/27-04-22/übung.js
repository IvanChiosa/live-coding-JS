// reduce
const itemsList = [
    {name: "Ivan", price: 20},
    {name: "Mario", price: 50},
];

const totalCoast = itemsList.reduce((acc, cur) => acc + cur.price, 0);
console.log(`You have to pay: ${totalCoast}`);

// fill
const arr = [1,2,3,6,4,53,7,8,9,90];
console.log(arr.fill(2, 2));


// sort 
const alpha = ["d", "g", "a", "c"];
const alphabetic = alpha.sort();
console.log(alphabetic);


