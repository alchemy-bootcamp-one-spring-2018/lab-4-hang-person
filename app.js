'use strict';

function letterGuess() {
    var userGuess = document.getElementById('guess');
    var guessed = userGuess.value.trim();
    console.log(guessed);
}

function getWord(){
    var choices = document.getElementById('words');
    var wordChoice = choices[Math.floor(Math.random() * 5)];
    console.log(wordChoice);
}

getWord();