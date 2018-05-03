/* globals wordList*/

//Global Variables
var lettersGuessed;
var guessCount;


//taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// uses random integer to get a word from our array wordList
function loadWord() {
    var randomIndex = getRandomInt(wordList.length);
    return wordList[randomIndex]
}

var currentWord = loadWord();
var currentWordArray = currentWord.split ('');

var p = document.getElementById('tempViewWord');
p.textContent = currentWord;
console.log ('p is:', p);

function guess() {

    var letterGuess = document.getElementById('guessInput').value;
    console.log ('From guessInput box:', letterGuess);

    //if user does not enter a single letter, stop running.
    if(letterGuess.length !== 1) {
        alert('Please enter exactly one letter.');
        return;
    }

    var startAtIndex = 0;
    var letterIndex;
    var wrongGuesses = [];
    //checking if guess is in word and pushing wrong guesses into array
    if(currentWord.indexOf(letterGuess, startAtIndex) === -1){
        wrongGuesses.push(letterGuess);
        console.log('wrong guesses:', wrongGuesses);
        // TO DO: add a body part
    }
    // TO DO: no need to continue

    //while loop to find guessed letter position
    while(letterIndex !== -1) {
        letterIndex = currentWord.indexOf(letterGuess, startAtIndex);
        console.log ('Found letterGuess at position:', letterIndex);
        startAtIndex = letterIndex + 1;
    }

}
