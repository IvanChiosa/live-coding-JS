// Washing machine

class WashingMachine {
    constructor (brand, program, color, price) {
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
const lg = new WashingMachine ("LG", 5, "Red", 350);
console.log(lg);
lg.allBrand();
lg.allColor();