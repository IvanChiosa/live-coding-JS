// // AEIOU:
// // Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// // i.e. findVowels(“this is a string”) ➞ 4
// ---------------------------------
// program to count the number of vowels in a string

//
function vowelCount(str1){
    
  let vowel_list = 'AEIOU';
  let vcount = 0;
  
  for(let x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowelCount("this is a string"));




// // No Duplicates!
// // A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// // [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// // [1, 4, 4, 7, 7, 7] ➞ [1, 6, 9]
// // [2, 2, 2, 2, 2, 2] ➞ [2]
// // [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
// ---------------------------------
function transformsArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length;i++)
    if (result.indexOf(arr[i]) == -1 ) {
        result.push(arr[i]);
    }
    return console.log(result);
}
transformsArr([1, 4, 4, 7, 7, 7]);
transformsArr([1, 6, 9, 6, 9, 1]);
transformsArr([2, 2, 2, 2, 2, 2]);
transformsArr([5, 10, 15, 20, 25]);



// // is Palindrome AKA word that reads the same backward or forward.
// // Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
// ---------------------------------
function isPalindromeAKA(str) {
    let polidrom = "";

 if (polidrom.includes("palindrome")) {
     console.log(polidrom);
 } else {
     console.log("It's not a polidrom...");
 }
}
isPalindromeAKA("palindrome");
isPalindromeAKA("pal");



// // This question has 2 parts
// // Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// // printIfDivisibleByTen(1) --> no output
// // printIfDivisibleByTen(2) --> no output
// // printIfDivisibleByTen(32) --> no output
// // printIfDivisibleByTen(10) --> "Even 10!" into the console
// // printIfDivisibleByTen(30) --> "Even 10!" into the console
// // printIfDivisibleByTen(90000) --> "Even 10!" into the console
// // Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
// ----------------------------
// // Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

