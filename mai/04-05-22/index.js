// step = -step
let x = 10;
x = -x;
console.log(x);

// Arrays        0        1        2         3
const names = ["Ivan", "Mario", "Steel", "Natalia"];
console.log("Names", names.length);

console.log(names[2]);

names[3] = "Leo";
console.table(names);
const ppl = [
    {name: "Ivan", age:36, add:"Köln"},
    {name: "Mario", age:36, add:"Moldavia"},
    {name: "Roman", age:36, add:"NY"},
    {name: "Steel", age:36, add:"Germany"},
    {name: "Moldavia", age:36, add:"Germany"},
];

console.log(ppl[3].add);
console.log(ppl[3]["add"]);
// opt 1
console.table(ppl.map((person) => `I like ${person.add}`));
console.log("-------");
console.log(ppl.map((ele) => ele.add));

console.log("------Long------");
// opt long
let addArray = [];
for (let i = 0; i < ppl.length; i++) {
    addArray.push(ppl[i].add), addArray.push(ppl[i].age)
}
console.log(addArray);
console.log(ppl);

// map // mak eine koppie e enderen unsere resultat

// filter
console.log(ppl.filter((person) => person.add.toLowerCase() == "germany"));
console.log(ppl.find((person) => person.add.toLowerCase() == "germany"));