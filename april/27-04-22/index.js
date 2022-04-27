const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const discounts =  [22,3,45,6];

// map  /// gib uns eine kopie of meine array immer array gib dir i return // wir kann unsere object manipuliren 
// Have 4 toDos
// 1. method
// 2. callBack ()
// 3. loop
// 4. make a copy for the original array

//                           emoji--- 1,2,3   console.log(index)
const emojiCopy = emojis.map((emoji,index) => { 
    return `Hallo ${emoji} ${index + 1}`;
});
console.log(emojiCopy);
//                                  nur eien paramiter hast brauchen keine  runde klammern (ele) => ele  // zweite parameter immer index 
const copyDiscounts = discounts.map((ele) => (ele * 1.1) / 100);
console.log(copyDiscounts);

const  users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Smith", age: 31 },
];
const greeting = users.map((user) => { 
    return  { // text ist meine key name // oder something
        text: `Hey ${user.name}, you are ${user.age} years old`,
    };
}); /// ()runde clame fur maps
console.log(greeting);
//const yourNewCopy = yourNewCopy

// filter /// has du in return immer eine array
// Have 4 toDos
// 1. method
// 2. callBack ()
// 3. loop
// 4. make a copy for the original array
const filteredEmoji =  emojis.filter((emoji) => {
    return emoji == "😎" ;
});
console.log(filteredEmoji);
const words = ["this", "is", "longText", "somethingLong"];
const filteredWords = words.filter((word)=> word.length == 2);
console.log(filteredWords);

const jobs = [
    { title: "teacher", salary: 1500, location: "Amsterdam", remote: true},
    { title: "IT", salary: 2400, location: "La", remote: true},
    { title: "Web Developer", salary: 1500, location: "London", remote: false},
];
const filteredJob = jobs.filter((job) => job.salary > 2000 || job.location == "Amsterdam" || job.remote == false);
console.log(filteredJob);

// reduce
const itemsList = [ {title: "Qual lock", price: 80 }, 
{title: "shoe", price: 139 }, 
{title: "light", price: 120 },
];

const totalCost = itemsList.reduce((acc, item) => acc + item.price, 0);
console.log( `You have to pay ${totalCost} €`);

// fill // 
const arr = [1,2,3,4,5];
// const alpha = ["a", "c", "b"].sort();
// console.log(alpha);
// console.log(arr.fill({ price: 99 }));


// sort
// UTF-16 code
// method
// callback // option dass 
console.log(arr.sort((a,b)=> b - a ));
const sortedArr = arr.sort();
console.log(sortedArr);

const alpha = ["a", "c", "b", "A", ":"].sort();
console.log(alpha);

// forEach

// find  /// bickomst du eine nur eine value

// some  // true oder false 

// every   // hastd ue eide element ja oder nein 


