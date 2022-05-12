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


// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

// 030-1247-893 -> I'll call now
const phoneNumCheck = (str) => {
    if (str[3] != "-") {
      return "Sorry this is not correct";
    }
    let num = str.replaceAll("-", "");
    // let numInArr = str.split("-").join("");
    if (num.length != 10) {
      return "Sorry, this is not ready num to call";
    } else if (num.substring(0, 3) != "030") {
      return "Sorry, this is not Berlin. Your number should start with 030";
    } else if (num.length == 10 && num.substring(0, 3) == "030") {
      return "Cool, I'll call";
    } else {
      return "Sorry, something went wrong";
    }
  };
  console.log(phoneNumCheck("030-1247893"));
  console.log(phoneNumCheck("030-1893"));
  console.log(phoneNumCheck("020-1247893"));
  
  // Email check, write a program that checks yours input if it's a correct email
  // emailCheck("Hi@hh.co") -> true
  // emailCheck("Hihh.co") -> false
  // emailCheck("@hh.co") -> false
  
  const validate = (str) => {
    let at, dot;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "@") at = i;
      if (str[i] === ".") dot = i;
    }
    if (at > 0 && dot > at) {
      return `${str} is valid.`;
    } else {
      return `${str} is invalid`;
    }
  };
  console.log("------");
  console.log(validate("contact@hadi-nsreeny.com"));
  console.log(validate("@hadi-nsreeny.com@"));
  console.log(validate("t@hadi-nsreenycom"));
  
  const check = (num) => {
    if (num < 5) {
      console.log("cool");
    }
    if (num == 5) {
      console.log("This is super cool");
    }
    if (num != 5) {
      console.log("This is Nice");
    }
  };
  check(4);
  
  // convert arrays into object
  const phoneNames = [
    "iPhone 13 Pro Max",
    "Smasung Ultra 22",
    "iPhone 12 Pro",
    "LG xxx",
  ];
  const phonePrises = [1150, 1200, 900, 560];
  const result = phoneNames.reduce((acc, item, i) => {
    acc[item] = phonePrises[i];
    return acc;
  }, {});
  console.log(result);
  
  // Hour Tracking
  const workingTime = [
    { day: "Mon", start: 8, end: 17 },
    { day: "Din", start: 9, end: 16 },
    { day: "Mitt", start: 9, end: 16 },
    { day: "Don", start: 8, end: 17 },
    { day: "Fri", start: 8, end: 18 },
  ];
  const hadiWorkingHours = workingTime.reduce((acc, day) => {
    // (end -start)
    return (acc += day.end - day.start);
  }, 0);
  console.log(hadiWorkingHours);

const ivanStudio = [
    { day: "Mon", start: 9, end: 16 },
    { day: "Din", start: 9, end: 16 },
    { day: "Mitt", start: 9, end: 16 },
    { day: "Don", start: 9, end: 16},
    { day: "Fri", start: 9, end: 16 },
    { day: "Sam", start: 9, end: 18 },
];
const ivanStudioHour = ivanStudio.reduce((acc,day) => {
    return (acc += day.end - day.start);

}, 0);
console.log(ivanStudioHour);


