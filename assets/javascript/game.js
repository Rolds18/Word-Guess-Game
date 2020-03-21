//global Variables
//==========================================================
// Arrays and variables for holding data
var wordOptions = [ "apple", "banana", "kiwi", "orange", "strawberry", "starfruit", "grape"];
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

    //change html to reflect game round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    

  //testing / debugging
  console.log(selectedWord)
  console.log(LettersInWord)
  console.log(numBlanks)
  console.log(blanksAndSuccesses)

  
}

  function checkLetters(letter) {
    // check if letter exists in code at all
      
      var isLetterInWord = false;
      for (var i=0; i < numBlanks; i++){
          if(selectedWord[i] == letter) {
              isLetterInWord = true;  
        }
     }

     //check where in the word the letter exists, then populate blanksAndSucceses
     if(isLetterInWord){
         for (var i=0; i<numBlanks; i++){
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;       
        }
      }
    }
    //letter wasnt found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }


     console.log(blanksAndSuccesses);
    
}

function roundComplete(){
  console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft)

  //update the HTML to reflect the most recent count stats
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ") 
//check if user won
if (LettersInWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("You Won!");

  

  //update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = winCount;
  
    startGame();
  }

  else if (guessesLeft == 0){
    lossCount++;
    alert("You Lost!");

    //update the HTML
    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame();
  }

}
//check if user lost

//Main Process
//==========================================================

//initiates the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event){
   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(letterGuessed);
   roundComplete();
   //Testing
   console.log(letterGuessed);
}

