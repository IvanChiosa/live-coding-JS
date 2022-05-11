// Washing machine

class WashingMachine {
    constructor (brand, program, color = "Blau", price = 10) {
        this.brand = brand;
        this.program = program;
        this.color = color;
        this.price = price;
    }

    allProgram () {
        if (this.program < 10) {
            this.program++;
            console.log(this.program);
        } else {
            console.log(" Die programme ist bis 10 only ");
        }
    }
    allColor () {
        console.log(` Only white washin machine we have immediatly`);

    }
    allBrand () {
        console.log(`The brand of your washing machine e ${this.brand} `);
    };
};

const bosch = new WashingMachine ("Bosch", 2, "White", 299);
console.log(bosch);
bosch.allProgram();
console.log(bosch.allProgram());
const lg = new WashingMachine ("LG", 5 , 50);
console.log(lg);
lg.allBrand();
lg.allColor();


// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store
class Products {
    constructor (productName,price,inventory) {
        this.productName = productName;
        this.price = price;
        this.inventory = inventory;
    }
    display () {
        return `From item ${this.productName} selling price ${this.price}€. We have ${this.inventory} in our store!`;
    }
};
const pepsi = new Products("Pepsi", 2.33, 2232);
console.log(pepsi.display());

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
    modelName: "Seat",
    modelNumber: "C7",
    enginCapacity: "1,480 kW",

    get fullCar() {
        return console.log(`Name die car is ${this.modelName} whit die model number ${this.modelNumber} and die capacity is ${this.enginCapacity}.`);
    },
    set fullCar(str) {
        let arr = str.split(" ");
        this.modelName = arr[0];
        this.modelNumber = arr[1];
        this.enginCapacity = arr[2];

        // return console.log(`Name die car is ${this.modelName} whit die model number ${this.modelNumber} and die capacity is ${this.enginCapacity}.`);
    }
};
// Setter
(car.fullCar);

// Getter
car.fullCar = "Opel A10 1000kw";
console.log(car.fullCar);
