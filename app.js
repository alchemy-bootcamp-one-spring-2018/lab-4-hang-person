'use strict';
/* exported gameOn, words, attempts, loadWord, gameWord, wordArray, submitLetter*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// chooses a random word from our word array
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

var index = getRandomIndex(words.length);
var gameWord = words[index];
var underscore;
var underscoreArray = [];
var wordArray = gameWord.split('');


// Game start
function gameOn() {
    console.log('game is running');
    console.log('gameWord is', gameWord);
    console.log('letters:', wordArray);
    console.log(gameWord.length);
    underscoreArray = [];

    for(var i = 0; i < gameWord.length; i++) {
        underscore = document.getElementById('letter-0');
        underscoreArray.push(' _');
        underscore.innerHTML = underscoreArray.join('');
    }
}


function submitLetter() {
    var letter = document.getElementById('userInput').textContent;
    document.getElementById('userInput').textContent = letter.textContent;
}



// function correctLetterPlacer() {
// for(var j = 0; j < randGameWord.length)
//     if(userInput === randomGameWord[j]) {
//         correctAnswers[j] = userInput
//     }