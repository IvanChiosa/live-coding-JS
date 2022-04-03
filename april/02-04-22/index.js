const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.table(shopping);


const shopping1 = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping1[2]= "Apfel";
console.log(shopping1[2]);
// returns "bread"


const random = [10, 795, [0, 1, 2]];
console.table(random[1][1]);

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')); // -1


const cities = ['Manchester', 'Liverpool'];
const removedCity = cities.pop();
console.log(removedCity);   // "Liverpool"