// Read input file and push it to an array named inputArray which is mapped appropriately per the problem statement
const fs = require("fs");
const inputArray = fs
    .readFileSync("./input").toString('utf-8') // Read input file. Replace 'tbd' with path to .txt file containing raw input
    .split("\n") // Split on new lines
    //.filter(Boolean); // Remove empty lines

// Initial log separator
console.log("----------------------------------------------------------");

// Log the raw input
console.log("Input array:");
console.log(inputArray);
console.log("----------------------------------------------------------");

// Part A - Pass in the input array
function partA(inputArray){
    let currentCalories = 0;
    let previousCalories = 0;
    for (let index = 0; index < inputArray.length; index++) {
        const element = parseInt(inputArray[index]);
        if (element){
            currentCalories += element;
        } else {
            if (currentCalories > previousCalories){
                previousCalories = currentCalories;
            }
            currentCalories = 0;
        }
    }
    return previousCalories;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B - Pass in the input array
function partB(inputArray){
    var elfCalorieArray = []
    let currentCalories = 0;
    for (let index = 0; index < inputArray.length; index++) {
        const element = parseInt(inputArray[index]);
        if (element){
            currentCalories += element;
        } else {
            elfCalorieArray.push(currentCalories);
            currentCalories = 0;
        }
    }
    elfCalorieArray.sort(function(a, b){return b - a}); // Order largest to small 
    elfCalorieArray = elfCalorieArray.slice(0,3); // Return first 3
    const sum = elfCalorieArray.reduce((partialSum, a) => partialSum + a, 0); // Sum array
    return sum;
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////