// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
const namesArr = ["Maria", "Mike", "Paul", "Doven"];
let namesLenth = namesArr.length;
let str = "";
for (let i = 0; i < namesLenth; i++){
    str += `Hello ${namesArr[i]}! `;
}
console.log(str); // resultat =>  [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"






//Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".
const friendsArr = ["Susan", "Rezvane", "Hadi"];
let strFriends = "";
for (let i = 0; i < friendsArr.length; i++){
    strFriends += `${friendsArr[i]} is at index ${i} of my friends and family array${i == friendsArr.length -1 ? ". " : ", "}`;
}
console.log(strFriends); // resultat Susan is at index 0 of my friends and family array. Rezvane is at index 1 of my friends and family array. Hadi is at index 2 of my friends and family array.





//City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
//[Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome"
const cityNames = ["Berlin", "Paris", "Prague", "Rome"];
let strCity = "";
for (let i = 0; i <cityNames.length; i++){
    strCity += `${cityNames[i]}${cityNames.length -1 ? ". " : ", "}`;
}
console.log(strCity); // result Berlin, Paris, Prague, Rome,
console.table(strCity);




// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(euroCities);
console.table(euroCities);





// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);


// Print the length of the array "euroCities".
console.log(euroCities.length);




// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);




// Use an array method to add "Budapest" to the euroCities array.
console.log(euroCities.push("Budapest"));
console.log(euroCities);




// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.table(euroCities);




// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["India", "China", "Bangladesh", "South Korea", "Turkey"];
console.log(asianCities);