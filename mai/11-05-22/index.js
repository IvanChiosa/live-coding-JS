function Person(name, age, add) {
    this.firstName = name; // this is gehort zu meine neue objeck ex=> ivanData
    this.age = age;
    this.add = add;
    this.showData = function () {
        return `This is me ${this.firstName}, I'm ${this.age} years old`;
    };
};
const ivanData = new Person("Ivan", 37, "Köln");
const marioData = new Person("Ivan", 37, "Köln");
const ecaterinaData = new Person("Ivan", 37, "Köln");
console.log(ivanData.showData());


// javascropt sehe nur die methode und die objeckt
// Class 
class Animals { // fur die constructor methode si scrive con il
    constructor (_kind, _hometown) {
        this.kind = _kind;
        this.hometown = _hometown;
    };
    // instance properties after constructor
    display() {
        return `This animal is ${this.kind} lives in ${this.hometown}`;
    };
};
const cat = new Animals("Cat", "LA");
console.log(cat.display());

const dog = new Animals("Dog", "NY");
dog.age = 33;
dog.print = function () {
    return `Cool`;
}
console.log(dog);
console.log(typeof Animals);


class Color {
    constructor () {
        this.name = "";
        this.tem = 0;

    }
}
const red = new Color();
console.log(red);
red.name = "Red";
red.tem = 32;
console.log(red);



// constructor method aka setup

// instance properties after constructor 

// extends && super 