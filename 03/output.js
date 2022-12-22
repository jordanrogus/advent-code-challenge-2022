// To Run Code
// Requires node
// Open terminal inside folder and run 'node <output filename.js>'

// Read input file and push it to an array named inputArray which is mapped appropriately per the problem statement
const fs = require("fs");
const inputArray = fs
    .readFileSync("./input").toString('utf-8') // Read input file. Replace 'tpd' with path to .txt file containing raw input
    .split("\n") // Split on new lines
    .filter(Boolean); // Remove empty lines

// Initial log separator
console.log("----------------------------------------------------------");

// Log the raw input
console.log("Input array:");
console.log(inputArray);
console.log("----------------------------------------------------------");

// Part A - Pass in the input array
function partA(inputArray) {
    let itemTypes = [];

    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        let fh = element.slice(0, element.length / 2);
        let sh = element.slice(element.length / 2, element.length + 1);
        itemTypes.push(get_common_character(fh, sh));
    }

    const DIFFERENCE_CHARCODE_AND_LETTERS_LOWER = 96;

    let score = 0
    for (let index = 0; index < itemTypes.length; index++) {
        const element = itemTypes[index];

        // Get position of lower case element
        const position = element.toLowerCase().charCodeAt() - DIFFERENCE_CHARCODE_AND_LETTERS_LOWER;

        // If lower case
        if (element == element.toLowerCase()) {
            score += position;

            // If upper case add 26
        } else {
            score += (position + 26);
        }
    }
    return score;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B - Pass in the input array
function partB(inputArray) {
    let itemTypes = [];

    // common chars in 3 strings
    const chunk = 3;
    for (let i = 0; i < inputArray.length; i += chunk) {
        const chunks = inputArray.slice(i, i + chunk);
        itemTypes.push(get_common_character_three(chunks[0], chunks[1], chunks[2]));
    }

    const DIFFERENCE_CHARCODE_AND_LETTERS_LOWER = 96;

    let score = 0
    for (let index = 0; index < itemTypes.length; index++) {
        const element = itemTypes[index];

        // Get position of lower case element
        const position = element.toLowerCase().charCodeAt() - DIFFERENCE_CHARCODE_AND_LETTERS_LOWER;

        // If lower case
        if (element == element.toLowerCase()) {
            score += position;

            // If upper case add 26
        } else {
            score += (position + 26);
        }
    }
    return score;
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////
// Assume only one common char between two strings
function get_common_character(str1, str2) {

    const set1 = new Set(str1.split(''));
    const set2 = new Set(str2.split(''));

    for (let char of set1.values()) {
        if (set2.has(char)) {
            return char;
        }
    }
}

// Assume only one common char between strings
function get_common_character_three(str1, str2, str3) {

    const set1 = new Set(str1.split(''));
    const set2 = new Set(str2.split(''));
    const set3 = new Set(str3.split(''));

    for (let char of set1.values()) {
        if (set2.has(char)) {
            if (set3.has(char)) {
                return char;
            }
        }
    }
}