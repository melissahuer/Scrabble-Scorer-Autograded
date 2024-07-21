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

function transform(oldPointStructure) {
   let newStructure = {};

   for (let key in oldPointStructure) {
      let numberKey = Number(key);
      for (let i = 0; i < oldPointStructure[key].length; i++) {
         let item = oldPointStructure[key][i].toLowerCase();
         newStructure[item] = numberKey;
      }
   }

   return newStructure;
}

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
}

function simpleScorer(word) {
   return word.length;
}

function vowelBonusScorer(word) {
   let vowelPoints = 0;
   let vowels = 'aeiou';

   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
         vowelPoints += 3;
      } else if (!(vowels.includes(word[i].toLowerCase()))) {
         vowelPoints += 1;
      }
   }
   return vowelPoints;
}

let newPointStructure = {};
   newPointStructure = transform(oldPointStructure);

function scrabbleScorer(word) {
   word = word.toLowerCase();
   let newScore = 0;

   for (let i = 0; i < word.length; i++) {
      let newLetter = word[i];
      for (let scoringLetters in newPointStructure) {
         if (scoringLetters === newLetter) {
            ;
            let scoringValues = newPointStructure[scoringLetters]
            newScore += scoringValues;
         }
      }
   }
   return newScore;
}

const scoringAlgorithms = [{ name: "Simple: ", description: "One point per character", scorerFunction: simpleScorer }, {
   name: "Vowel Bonus: ", description: "Vowels are 3 points", scorerFunction: vowelBonusScorer
}, { name: "Scrabble: ", description: "The traditional scoring algorithm", scorerFunction: scrabbleScorer }];

function scorerPrompt() {
   const usersScrabbleWord = input.question("Enter a word to score: ");
   const word = String(usersScrabbleWord);
   

   console.log("0 - Simple: Each letter is worth 1 point \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system");

   let usersChoice = input.question("Which scoring algorithm would you like to use? ");
   let numberChoice = Number(usersChoice);

   if (numberChoice === 0) {
      console.log(scoringAlgorithms[numberChoice].scorerFunction(word));
   } else if (numberChoice === 1) {
      console.log(scoringAlgorithms[numberChoice].scorerFunction(word));
   } else if (numberChoice === 2) {
      console.log(scoringAlgorithms[numberChoice].scorerFunction(word));
   }

   return numberChoice;
}

function runProgram() {
   initialPrompt();
   transform(oldPointStructure);
   scorerPrompt();
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
