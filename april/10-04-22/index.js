


function person (name,age,city) {
    if ( typeof name == "string" && typeof age == "number" && typeof city == "string") {

        console.log(`My name is ${name} i'm ${age} i live in ${city}!`);
    } else {
        return console.log("It's not a name");
    }
    
}
person("Ivan", 36, "Köln");

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function myString(str) {
    let newString = str.toLowerCase().split(" ");

    for (let i = 0; i < newString.length; i++){
        newString[i] = newString[i][0].toUpperCase() + newString[i].substring(1);
    }
    newString = newString.join();
    return console.log(newString);

}
myString("the quick brown fox");



// 2- Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Longest_Country_Name(
//     ["Australia", 
//     "Germany", 
//     "United States of America"]
//     )
// Expected output : "United States of America"
// function array, length, loops, if/condition

function longestCountryName (arr) {
    newlongestCountryName = "";

    for (let i = 0; i < arr.length;i++){
        if (newlongestCountryName.length < arr[i].length){
            newlongestCountryName = arr[i];
        }
    }
    return console.log(newlongestCountryName);
}
longestCountryName(["Australia", "Germany", "United States of America"]);


// callback => wenn du anrufen zu java fur eine function un du kriegst egebnise zu haben 
function iDoKoffee() {

    let milk = iHaveMilk();
    let sweetner = iHaveSweetner();
    let ice = iHaveIce();
    let spoon = iHaveSpoon();

    return console.log(`Your caffee whit ${milk}, ${sweetner}, ${ice} und ${spoon} ist ready.`);
}

const iHaveMilk = () => `milk`;
const iHaveSweetner = () => `sweetner`;
const iHaveIce = () => `ice`;
const iHaveSpoon = () => "spoon";

console.log(iDoKoffee());

// noch function CallBack
function iDoTea() {

    let milk = iDoMilk();
    let sugar = iDoSugar();
    let cup = iDoCup();

    return console.log(`My Tea is mit ${milk} mit ${sugar} und mit ${cup} ist ready! Take it Ivan!`);
}
const iDoMilk = () => `milk`;
const iDoSugar = () => `sugar`;
const iDoCup = () => `cup`
console.log(iDoTea());

























