// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;

}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Lets play some Scrabble!");
   console.log("                        ");
   word = input.question("Enter a word to score: ");
   //console.log(oldScrabbleScorer(word));
};

let newPointStructure;

function simpleScorer(word) {
   word = word.toUpperCase();
   let simplePoints = 0;

   for (let i = 0; i < word.length; i++) {
      simplePoints++
   }

   return simplePoints
}

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let vowelPoints = 0;

   for (let i = 0; i < word.length; i++) {
      if (word[i].includes("a", "e", "i", "o", "u")) {
       vowelPoints + 3;
      } else if (!word[i].includes("a", "e", "i", "o", "u")) {
       vowelPoints + 1;
      }
   }

   return vowelPoints
}
let scrabbleScorer;

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, oldScrabbleScorer]
let simpleScorerArr = {
   name: "Simple Score",
   description: "Each letter is worth 1 point",
   scoreFunction: "A function with a parameter for user input that returns a score"
}

let vowelBonusScorerArr = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt",
   scoreFunction: "A function that returns a score based on the number of vowels and consonants"
}

let scrabbleArr = {
   name: "Scrabble",
   description: "The traditional scoring algorithm",
   scoreFunction: "Uses the oldScrabbleScorer() function to determine the score for a game"
}

function scorerPrompt() { 
      let usersChoice = input.question("Which scoring algorithm would you like to use? ");

      if (usersChoice = 0) {
         console.log(simpleScorer(word))
      } else if (usersChoice = 1) {
         console.log(vowelBonusScorer(word))
      } else if (userChoice = 2) {
         console.log(oldScrabbleScorer(word))
      }
}


function transform() { };

function runProgram() {
   initialPrompt();
   scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
