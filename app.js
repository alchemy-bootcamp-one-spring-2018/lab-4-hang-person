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
    return wordList[randomIndex];

}
var currentWord = loadWord();
var p = document.getElementById('currentArrayWord');
p.textContent = currentWord;
console.log ("p is:", p);

//document.getElementById('currentArrayWord').textContent = currentWord;

function guess() {

    var letterGuess = document.getElementById('guessInput').value;
    console.log ('From guessInput box:', letterGuess);
    //if user does not enter a single letter, stop running.
    if(letterGuess.length !== 1) {
        alert('Please enter exactly one letter.');
        return;
    }

    var letterIndex = currentWord.indexOf(letterGuess);
    console.log ('Found letterGuess at position:', letterIndex);

}
