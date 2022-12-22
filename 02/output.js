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

const library = [
    {
        "opp":"rock",
        "you":"rock",
        "value": 4
    },
    {
        "opp":"rock",
        "you":"paper",
        "value": 8
    },
    {
        "opp":"rock",
        "you":"scissors",
        "value": 3
    },
    {
        "opp":"paper",
        "you":"rock",
        "value": 1
    },
    {
        "opp":"paper",
        "you":"paper",
        "value": 5
    },
    {
        "opp":"paper",
        "you":"scissors",
        "value": 9
    },
    {
        "opp":"scissors",
        "you":"rock",
        "value": 7
    },
    {
        "opp":"scissors",
        "you":"paper",
        "value": 2
    },
    {
        "opp":"scissors",
        "you":"scissors",
        "value": 6
    },
];

// Part A - Pass in the input array
function partA(inputArray, library){
    let score = 0;

    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        let opp = element.split(" ")[0];
        let you = element.split(" ")[1];

        var mapObj = {
            A:"rock",
            B:"paper",
            C:"scissors",
            X:"rock",
            Y:"paper",
            Z:"scissors"
        };

        opp = opp.replace(/A|B|C|X|Y|Z/gi, function(matched){
            return mapObj[matched];
        });
        you = you.replace(/A|B|C|X|Y|Z/gi, function(matched){
            return mapObj[matched];
        });

        for (let index = 0; index < library.length; index++) {
            
            if(library[index].opp == opp && library[index].you == you){
                score += library[index].value;
            }
        }
    }
    return score;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray, library));
console.log("----------------------------------------------------------");

const libraryB = [
    {
        "result":"X",
        "opp":"rock",
        "you": "scissors"
    },
    {
        "result":"Y",
        "opp":"rock",
        "you": "rock"
    },
    {
        "result":"Z",
        "opp":"rock",
        "you": "paper"
    },
    {
        "result":"X",
        "opp":"paper",
        "you": "rock"
    },
    {
        "result":"Y",
        "opp":"paper",
        "you": "paper"
    },
    {
        "result":"Z",
        "opp":"paper",
        "you": "scissors"
    },
    {
        "result":"X",
        "opp":"scissors",
        "you": "paper"
    },
    {
        "result":"Y",
        "opp":"scissors",
        "you": "scissors"
    },
    {
        "result":"Z",
        "opp":"scissors",
        "you": "rock"
    },
];

// Part B - Pass in the input array
function partB(inputArray, library){
    let score = 0;

    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index];
        let opp = element.split(" ")[0];
        let result = element.split(" ")[1];

        var mapObj = {
            A:"rock",
            B:"paper",
            C:"scissors",
        };

        opp = opp.replace(/A|B|C/gi, function(matched){
            return mapObj[matched];
        });

        var resultObj = {
            X:0, // loss
            Y:3, // draw
            Z:6  // win
        };

        var chosenObj = {
            "rock": 1,
            "paper": 2,
            "scissors": 3
        }

        for (let index = 0; index < library.length; index++) {
            
            if(library[index].result == result && library[index].opp == opp){
                score += resultObj[library[index].result] + chosenObj[library[index].you];
            }
        }
    }

    return score;

}

// Log Part B
console.log("Part b: \n" + partB(inputArray, libraryB));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////