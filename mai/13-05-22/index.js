const lewy = {
    name: "Lewandowski",
    position: "Striker",
    club: "FC Bayern",
    salary: 10000000,
    goals: 185,
};

const test = {
    club: "Testclub",
    test: 1,
    foo: "bar",
};

const names = [];

const displayName = (footballPlayer) => {
    const { name: fullName, position } = footballPlayer;
    // Schreibweise OHNE Object destructuring
    //   const fullName = footballPlayer.name;
    //   const position = footballPlayer.position;
    console.log(fullName);
    console.log(position);
    names.push(fullName);
};

const displayRest = (footballPlayer) => {
    const { salary, ...playerWithoutSalary } = footballPlayer;
    // Schreibweise OHNE Object destructuring
    //   let rest = {};
    //   for (const [key, value] of Object.entries(footballPlayer)) {
    //     if (key !== "salary") {
    //       rest[key] = value;
    //     }
    //   }

    console.log(playerWithoutSalary);
};

const testArray = ["Eintrag1", "Eintrag2", "Eintrag3", "Eintrag4"];

const displayFirstTwoEntries = (arr) => {
    const [entry1, entry2, ...rest] = testArray;
    console.log(entry1);
    console.log(entry2);
    console.log(rest);
};

const displayClub = ({ club }) => {
    console.log(club);
};

displayName(lewy);
displayRest(lewy);
displayClub(lewy);
displayClub(test);
displayFirstTwoEntries(testArray);


function permutation(string) {
    if (string.length < 2) return string; //wenn < 2 buchstaben => return gleich
    let permutations = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (string.indexOf(char) != i)
        //"aabc" => dopple buchstabe vermeiden
        continue; //continue mit ignorieren der if(wert)
      const restString = string.slice(0, i) + string.slice(i + 1, string.length);
      for (let subPermutation of permutation(restString))
        permutations.push(char + subPermutation);
    }
    return permutations;
  }
  console.log(permutation("abc"));
  
  // const data = [1, 3, 4, 7, 10, 11];
  
  // for (const item of data) {
  //   if (item % 2 === 0) {
  //     continue;
  //   }
  //   console.log(item);
  // }


  const createPersonDisplayer = (name) => {
    let personName = name;
    return () => {
      console.log(`CLOSURE: The person's name is ${personName}`);
    };
  };
  
  const displayer1 = createPersonDisplayer("John");
  const displayer2 = createPersonDisplayer("Frank");
  
  displayer1();
  displayer2();
  
  // Encapsulation (Kapselung)
  // Wir kontrollieren den Zugang zu unseren Properties, indem wir
  // - private Properties verwenden (mit # markieren)
  // - Getter- und Setter-Methoden zum Zugriff auf die Properties erstellen
  
  class Person {
    #firstName;
    #lastName;
    #sex;
    constructor(firstName, lastName, sex) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#sex = sex;
    }
    displayName() {
      console.log(
        `CLASS: The person's name is ${this.#firstName} ${this.#lastName} - ${
          this.#sex
        }`
      );
    }
    get sex() {
      switch (this.#sex) {
        case "m":
          return "male";
        case "f":
          return "female";
        case "d":
          return "diverse";
      }
    }
    set sex(value) {
      if (value === "m" || value === "f" || value === "d") {
        this.#sex = value;
      } else {
        throw new Error(`$Field sex does not allow value ${value}`);
      }
    }
  }
  
  const person1 = new Person("John", "Smith", "m");
  const person2 = new Person("Susan", "Miller", "f");
  
  person1.displayName();
  person2.displayName();
  console.log(person2.sex);
  try {
    person2.sex = "m";
  } catch (err) {
    console.log(err.message);
  }
  
  console.log(person2.sex);
  
  // Lösung mit Closures
  
  const count = (function () {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    };
  })();
  
  console.log(count());
  console.log(count());
  // console.log(counter);
  console.log(count());


  
  
  class FootballPlayer {
    #firstName;
    #lastName;
    #club;
    constructor(firstName, lastName, club) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#club = club;
    }
    get firstName() {
      return this.#firstName;
    }
    set firstName(newFirstName) {
      if (!newFirstName || newFirstName.length === 0) {
        throw new Error("Leere Namen sind nicht erlaubt!");
      }
    }
  }
  
  const franz = new FootballPlayer("Franz", "Beckenbauer", "Bayern");
  console.log(franz.firstName);
  franz.firstName = "";

  // Problem: count() ändert eiune globale Variable!
// Jeder Entwickler kann diese Variable an jeder Stelle im Programm ändern
// Das ist möglicherweise nicht gewollt, sondern nur die Funktion count() soll diese Variable ändern dürfen.

let counter = 0;

function count() {
  counter = counter + 1;
}

console.log(counter);
count();
count();
count();
counter = counter - 2;
count();
console.log(counter);