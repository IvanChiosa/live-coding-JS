// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
    name: "Mike",
    class: "4A",
    course: "English",
  };
  // Expected output:
  //   ["name", "class", "course"]
  
  // function return, array, Object.keys.
  
  function objKeys(obj) {
    return Object.keys(obj);
  }
  console.log(objKeys(person));
  
  // Given the following object
  const student = {
    firstName: "Zain",
    lastName: "Oil",
    class: "D05",
    print: function () {
      console.log(
        `${this.firstName} ${this.lastName} a student in class ${this.class}`
      );
    },
  };
  student.print();
  // Create a method that prints the following: "Zain Oil a student in class D05"
  
  // Get Values. Create a function that returns an array of all values of an object’s properties.
  //   Examples:
  const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  };
  // function return, array, Object.values
  function objValues(obj) {
    return Object.values(obj);
  }
  
  console.log(objValues(getObjectValues));
  
  // Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
  
  // Examples:
  
  // (4, { min: 0, max: 5 }) ➞ true
  
  // (4, { min: 4, max: 5 }) ➞ true
  
  // (4, { min: 6, max: 10 }) ➞ false
  
  // (5, { min: 5, max: 5 }) ➞ true
  
  // if else and function
  // OP 1
  // function withInTheRange(num, obj) {
  //   // 4 >= min && 4 <= max
  //   if (num >= obj.min && num <= obj.max) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // OP 2
  // function withInTheRange(num, obj) {
  //   // 4 >= min && 4 <= max
  //   return (num >= obj.min && num <= obj.max)
  // }
  // OP 3
  const withInTheRange = (num, obj) => num >= obj.min && num <= obj.max;
  
  console.log(withInTheRange(5, { min: 5, max: 5 }));
  console.log(withInTheRange(10, { min: 0, max: 5 }));
  console.log(withInTheRange(4, { min: 0, max: 5 }));
  
  // Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
  // Example:
  // [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
  const scrabble = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];
  // array -> loop, function, counter +=
  function sumOfTheScrabble(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i].score;
    }
    return result;
  }
  console.log(sumOfTheScrabble(scrabble));
  
  // Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
  
  // Examples:
  
  // {} ➞ true
  
  // {a: 1} ➞ false
  
  // function, return , if
  function isEmpty(obj) {
    return Object.keys(obj).length == 0;
  }
  console.log(isEmpty({}));
  console.log(isEmpty({ a: 1 }));