


// map (callBack immer )
// sort()
// filter()
// reduce()
// 


// find () // find finde solo un resultato, se trova te lo restituice e non va piu avanti 
// Finde das element mit dem Wert 8 in Array
const myNumbers = [3, 6, 8, 9, 12];
const result = myNumbers.find((ele) => {
    return ele === 8;
});
console.log(result);

function match(ele, index, arr) {
    if (index === 0) return false;
    return myNumbers1[index-1] +1 === ele;

}

// finde das erste Elementdas genau 1 großer ist als sein vorgänger
const myNumbers1 = [3, 6, 8, 9, 12];
const result1 = myNumbers1.find((ele, index) => {
    if (index === 0) return false;

    return myNumbers1[index-1] +1 === ele;
});
console.log(result1);



const customers = ["Ivan", "Chiosa"];
const resCustomers = customers.find((ele) => ele == "Ivan");
console.log(resCustomers);


const customers1 = [
    {firstName: "Gerd", lastName: "Müller"},
    {firstName: "Sepp", lastName: "Meier"},
];

const result4 = customers1.find((customer) => {
    return customer.firstName == "Sepp";
});
console.log(result4);


console.log("-----03----");
const footballers = [
    {firstName: "Gerd", lastName: "Müller"},
    {firstName: "Sepp", lastName: "Meier"},
    {firstName: "Ivan", lastName: "Müller"},
    {firstName: "Franz", lastName: "Backenbauer"},
];

const result5 = footballers.find((footbaler) => {
    return footbaler.lastName === "Müller";
});
console.log( result5);

console.log("-----04----");
// map()

const myNumbers5 = [2,5,8,13,7];
const result6 = myNumbers5.map((element) => {
    return element * 3;
});
console.log(result6);
console.log(myNumbers5);

// sort ()
const footballers1 = [
    {firstName: "Gerd", lastName: "Müller", goals: 365},
    {firstName: "Sepp", lastName: "Meier", goals: 0},
    {firstName: "Ivan", lastName: "Müller", goals: 136},
    {firstName: "Franz", lastName: "Backenbauer", goals: 44},
];

const result7 = footballers1.sort((a,b) => {

    return a.goals > b.goals ? 1 : -1;
});
console.log(result7);