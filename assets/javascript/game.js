//global Variables
//==========================================================
// Arrays and variables for holding data
var wordOptions = [ "lance", "neena", "darion", "adam", "jerome", "lou", "greg"];
// these need to be in lowercase because we'll be registering lowercase clicks
var selectedWord = "";
var LettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // j _ _ _ _ _
var wrongLetters = [];

// game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
// Functions
//==========================================================
function startGame () {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  LettersInWord = selectedWord.split("");
  numBlanks = LettersInWord.length;

  // reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  // populate blanksAndSucces with cor. number of blanks
  for (var i=0; i < numBlanks; i++) {
       blanksAndSuccesses.push("_");     ;
    
  }

    //change html to reflect round conditions
    document.getElementById()


  //testing / debugging
  console.log(selectedWord)
  console.log(LettersInWord)
  console.log(numBlanks)
  console.log(blanksAndSuccesses)

  
}

//Main Process
//==========================================================
startGame();