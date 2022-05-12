class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    printData() {
        return console.log(`Hey ${this.name} you are ${this.age} years.old!`);
    }
}
const ivanObj = new Person("Ivan",34);
console.log(ivanObj);
ivanObj.printData();

// Kinder
class Kind extends Person {
    constructor (name, age, height = 50) {
        super(name,age);
        this.height = height;
    }
    show() {
        return console.log(`This Kind class is extends from Preson, ${this.name}`);
    }
}
const zainbabyObj = new Kind("Zain",1,75);
console.log(zainbabyObj);
zainbabyObj.printData();


class KindUndKind extends Kind {
    constructor (name, age, height, color) {
        super(name,age,height);
        this.color = color;
    }
}
const kindUndKind = new KindUndKind("Mario",10,90, "White");
console.log(kindUndKind);

// Extends && super 