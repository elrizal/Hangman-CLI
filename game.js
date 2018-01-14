var inquirer = require("inquirer");
var prompt = require('prompt');
var keypress = require('keypress');


function Word(name, wordList){
	this.name = name;
	this.wordList = ["apple", "pear", "grapes"];
	this.WordSpaces= function() { //For the underscores to display
	    var wordView = "";

	    for (var i = 0; i < Letter.lettersOfTheWord.length; i++) {
	      if (this.matchingLetters.indexOf(Letter.lettersOfTheWord[i]) !== -1) {
	        wordView += Letter.lettersOfTheWord[i];
	      }
	      else {
	        wordView += "&nbsp;_&nbsp;";
	      }
 	   }
	}
}
function Letter(name, lettersOfTheWord, letterGuessed){
	this.name = name;
	this.lettersOfTheWord = [];
	this.matchingLetters = [];
	this.letterGuessed = null;
}
function Scores(wins, losses, totalGuesses, guessesLeft, changeScores){
	this.wins = 0;
	this.losses = 0;
	this.totalGuesses = 0;
	this.guessesLeft = 0;
	this.changeScores = function() { //"Name: " + this.name +
    console.log("add to wins or losses with if/then, and subtract total guesses");
    if (wins === 5){
    	console.log("You won!");
    }
    if (losses === 5){
    	console.log("You lost!");
    }
  };
}

// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key == 'c' || 'a' || 't') { //key && key.ctrl && 
    process.stdin.pause();
    console.log("correct");
  }
});
 
// process.stdin.setRawMode(true);
process.stdin.resume();