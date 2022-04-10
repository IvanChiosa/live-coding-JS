
// Higher oder  Function
const numbers = [9, 3, 1, 34, 10];

const result1 = numbers.sort();


// Sort ohne Parameter sortiert alphabetisch! 
console.log(result1);


// wir übergeben ein "Compare" Function
const result2 = numbers.sort((a, b) => {
    if ( a > b) {
        return 1;
    } else if ( a < b) {
        return -1;
    } else {
        return 0;
    }
});

// Standard function schreiben 
function compareNumeric (a,b) {
    if ( a > b) {
        return 1;
    } else if ( a < b) {
        return -1;
    } else {
        return 0;
    }

}

// Identische Function als Arrow-Function
const compareNumericArrow = (a,b) => {
    if ( a > b) {
        return 1;
    } else if ( a < b) {
        return -1;
    } else {
        return 0;
    }
}


// Sort aufrufen und Compare function als Parameter Übergeben

console.log("result 2", result2);

const result3 = numbers.sort(compareNumericArrow);
console.log("Result 3: ", result3);