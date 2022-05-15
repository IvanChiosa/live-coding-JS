console.log("-----01-----");

const sum = (x,y) => { 
    return x + y;
} 
console.log(sum(2,3));

let str = "This is a long text"; // alles caracter in meine string
console.log(str.length);


// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."
// Notes
// Check out the Resources tab for some helpful tutorials on JavaScript classes!
// If you're really stuck, check out the Solutions tab for answers.

 /// Da rivedere
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print() {
       console.log( `Mein name is ${this.name} i'm ${this.age}`);
    };
    compareAge() {
        if(p1.age < p2.age) {
           return console.log("Joel is older than me.");
        } else if (p2.age > p1.age) {
            return console.log("Samuel is younger than me.");
        } else if (p1.age == p3.age) {
            return console.log("Lily is the same age as me.");
        }
    }
};
const p1 = new Person("Samuel",24);
const p2 = new Person("Joel",36);
const p3 = new Person("Lily",24);
p1.compareAge();
p2.compareAge();
p3.compareAge();



// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"

// a1.lname ➞ "Smith"

// a1.fullname ➞ "John Smith"

// a1.initials ➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalised.
// Check the Resources tab for some helpful tutorials on JavaScript classes.

class Name {
    constructor (fname,lname) {
        this.fname = fname;
        this.lname = lname;

    }
    fullname() {
        return (`${this.fname} ${this.lname}`);
    };
    initials() {
        return this.fname.charAt() + "." + this.lname.charAt();
    }
}
const ivanName = new Name("john", "SMITH" );
console.log(ivanName.fullname());
console.log(ivanName.initials());
console.log(ivanName.fname.charAt(0).toUpperCase() + ivanName.fname.slice(1));

console.log(ivanName.lname.charAt(0).toLowerCase() + ivanName.lname.slice(1));
