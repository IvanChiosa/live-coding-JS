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


// javascript sehe nur die methode und die objeckt
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

const orange = new Color();
orange.name = "Orange";
console.log(orange);

// TV App
class Tv{
    constructor(brand, channel, volume = 10) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    inVolume () {
        if ( this.volume < 100) {
            this.volume++
            console.log((this.volume));
        } else {
            console.log("This ist to loud");
        }
    }
    decVolume () {
        if ( this.volume > 0) {
            this.volume--;
            console.log(this.volume);
        } else {
            console.log("No Sound");
        }
    }
    rest () {
        this.channel = 1;
        this.volume = 10;
        console.log(this.volume);
    }
    randomChannel () {
        this.channel = Math.floor(Math.random() * 10) + 1;
    }
    display () {
        return `This ${this.brand} Tv, has channel ${this.channel} on right now . The volume is currently at ${this.volume}`;
    }
}
const samsung = new Tv("Samsung",50,20);
console.log(samsung);
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();

console.log("------");
samsung.decVolume();
samsung.decVolume();
samsung.decVolume();
samsung.rest();
samsung.randomChannel();
console.log(samsung);
samsung.display();
console.log(samsung.display());
const lg = new Tv("LG", 80);



// constructor method aka setup
// instance properties after constructor 
// extends && super 