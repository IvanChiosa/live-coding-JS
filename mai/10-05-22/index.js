const obj = {
    name: "Ali",
    age: 22,
    visitedCities: ["Berlin", "LA", "London", "Paris"],
    showInfo: function () {
        return `I'm ${this.name}, I have been in ${this.visitedCities}`;
    },
};
let objName = obj.name;
console.log(obj.name);
console.log(obj.age);

console.log("-----destructuring-------");
console.log(obj.visitedCities);
// Destructuring objects as function parameters
function funObj(obj) {
    let firstName = obj.name; // op1
    console.log(firstName);
}
funObj({ name: "Nancy", tel: 2324455 });

function ivanObj (obj) {
    let lastName = obj.name;
    let phonNummber = obj.tel;
    console.log(lastName, phonNummber);
};
ivanObj({name: "Ivan", tel: 23654978});




const ppl = [
    {
        firstName: "Anna",
        age: 22,
        add: "Berlin",
        avatar: "😎",
        likes: 222,
        comments: 232,
    },
    {
        firstName: "Uli",
        age: 22,
        add: "LA",
        avatar: "😈",
        likes: 222,
        comments: 765,
    },
    {
        firstName: "Leo",
        age: 22,
        add: "Berlin",
        avatar: "😉",
        likes: 2,
        comments: 7,
    },
    {
        firstName: "Nancy",
        age: 22,
        add: "LA",
        avatar: "😇",
        likes: 4566,
        comments: 456,
    },
    {
        firstName: "Ali",
        age: 22,
        add: "LA",
        avatar: "😀",
        likes: 3,
        comments: 232,
    },
    {
        firstName: "Steel",
        age: 22,
        add: "Amsterdam",
        avatar: "😅",
        likes: 5,
        comments: 43,
    },
    {
        firstName: "Olga",
        age: 22,
        add: "NY",
        avatar: "🤓",
        likes: 54,
        comments: 43,
    },
    {
        firstName: "Zain",
        age: 22,
        add: "Dubai",
        avatar: "🫣",
        likes: 678,
        comments: 654,
    },
];
// const newPPlCopy = ppl.map((person) =>
const newPPlCopy = ppl.map(
    ({ firstName, age, add, avatar, likes, comments }) => {
        // let name = person.firstName;
        // let age = person.age;
        console.log(`
    -------------------------------------
    |this person ${firstName} ${avatar}  
    |lives in ${add}   
    |👍🏻: ${likes}    📝: ${comments}              
    ------------------------------------
    `);
    }
);

// getter
const userCarData = {
    year: 2020,
    model: "A7",
    speed: 250,
    price: 75000,
    get fullCarName() { // bring von meine nutzer 
        if (this.model === undefined || this.price < 5000) {
            return `this data ist not ready`
        }
        return `Our Car ${this.model} price: ${this.price} €`;
    },
    set fullCarName(str) {
        let arr = str.split(" ");
        this.year = arr[0];
        this.model = arr[1];
        this.speed = arr[12];
        this.price = arr[3];
    }
};
// getter 
console.log(userCarData.fullCarName); // ohne information ist getter

// setter
userCarData.fullCarName = "2022 Q5 300 80000"; // mit information ist setter
console.log(userCarData.fullCarName);

userCarData.fullCarName = "2019 A3 220 44000";
console.log(userCarData.fullCarName);

// constructor our own
function Person(name, age, add) {
    this.name = name;
    this.age = age;
    this.add = add;
    this.printOut = function () {
        console.log(`Hey ${this.name}, ${this.age} years old. You live in ${this.add}.`);
    };
};
const ivanData = new Person("Ivan", 37, "Köln");
const aliData = new Person("Natalia", 40, "Bad Honnef")

ivanData.printOut();
aliData.printOut();
