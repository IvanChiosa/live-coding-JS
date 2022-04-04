// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(age) {
    let ageDog = 7 * age;
    
    console.log("Your doggie is age " , + ageDog + " years old in dog years!");
}

// secondo esempio
calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(222, 7);

function calculateDogAge1 (puppyAge, rate){
    if (typeof puppyAge == "number" && typeof rate == "number"){
        return console.log("Your doggie is age " , + puppyAge + " years old" + rate + "in dog years!");
    } else {
        return console.log(`Please write a number `);
    }
}
calculateDogAge1(3,3);
calculateDogAge1("Hi");
calculateDogAge1(22,3);


// ------------------------
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
// ------------------------
function calculateSupply (myAge,maxAge,amountDay) {

    // let myAge = 40;
    // let maxAge = 80;
    // let amountDay = 2;
    let some = amountDay * 365 * (maxAge - myAge);

    console.log(`You will need, ${some} coffee to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(41,80,2.5);
console.log("------");

// zweite beispiel
function calculateSupply1(age,amount) {
    let maxMyAge = 109;
    upComingDays = (maxMyAge - age) * 365;
    let totalFood = upComingDays * amount;
    
    return console.log(`You will need ${totalFood} to last you until the ripe old age of ${maxMyAge}. You will still have ${upComingDays}`);
}
calculateSupply1(36, 2);
calculateSupply1(44, 10);
calculateSupply1(20, 3);
console.log("-------");



// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit (celsius) {
    let cels = (celsius / 5) * 9 + 32;
    console.log(celsius + "°C ist " + cels + "°F ");
}
celsiusToFahrenheit(20);
celsiusToFahrenheit(40);
console.log("--------");


// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(fahrenheit) {
    let fahr = (((fahrenheit - 32 ) * 5) / 9).toFixed(2);
    console.log(fahrenheit + "°F ist " + fahr + "°C ");
}
fahrenheitToCelsius(100);
fahrenheitToCelsius("800");


// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments
function tellFortune (numChildren,partnerName,location,jobTitle) {

    console.log(`I have ${numChildren} and mein Name is ${partnerName} i live ${location} i work als ${jobTitle}`);
}
tellFortune(2,"Ivan","Köln", "Lernen");