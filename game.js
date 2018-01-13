
// updateWins: function() {
//     var win;
//     // If you haven't correctly guessed a letter in the word yet, we set win to false.
//     if (this.matchedLetters.length === 0) {
//       win = false;
//     }
//     // Otherwise, we set win to true.
//     else {
//       win = true;
//     }
//       for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
//         win = false;
//       }
//     }
// }
//inside of game construct


// dependency for inquirer npm package
var inquirer = require("inquirer");
var prompt = require('prompt');
// constructor function for creating player objects
function Game(name, position, offense, defense, wordInPlay, lettersOfTheWord, matchedLetters,guessedLetters,
  guessesLeft, totalGuesses, letterGuessed, wins) {
  this.name = name;
  this.position = position; //both strings
  this.offense = offense; //number
  this.defense = defense; //number
  this.wordInPlay = null,
  this.lettersOfTheWord = [],
  this.matchedLetters = [],
  this.guessedLetters = [],
  this.guessesLeft = 5,
  this.totalGuesses = 5,
  this.letterGuessed = null,
  this.wins= 0,
  this.setupGame = function() {
    // Here we pick a random word.
    var objKeys = Object.keys(this.wordsToPick);
    this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    // Split the chosen word up into its individual letters.
    this.lettersOfTheWord = this.wordInPlay.split("");
    // Builds the representation of the word we are trying to guess and displays it on the page.
    // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
    this.rebuildWordView();
    this.processUpdateTotalGuesses();
  }
  this.printStats = function() { //"Name: " + this.name +
    console.log( "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];
var spaces = [];
var wordsToPick = ['apple', 'oranges', 'pears'];
var guessesLeft = 5;
var totalGuesses = 5;

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createGame = function() {
  // if the length of the team array is 3 or higher, no more questions will be asked
  if (guessesLeft.length + totalGuesses.length === 5) {
    console.log("\nNEW WORD:\n");
    inquirer.prompt([{
        name: "name",
        message: "Guess a letter:",
      }, {
        name: "name",
        message: "Guess a letter:"
      }, {
        name: "name",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
            //--guessesLeft
          }
          else {
          console.log("invalid");
          // --guessesLeft
        }
    }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          else {
         
          console.log("invalid");
        }
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var game = new Game(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 5) {
        starters.push(game);
        team.push(game);
        console.log(game.name + " added to the starters");
      }
      else {
        subs.push(game);
        team.push(game);
        console.log(game.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createGame();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
  }
};

// calls the function createPlayer() to start the code
createGame();
