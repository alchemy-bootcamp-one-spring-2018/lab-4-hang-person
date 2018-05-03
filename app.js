'use strict';

function letterGuess() {
    var userGuess = document.getElementById('guess');
    var guessed = userGuess.value.trim();
    console.log(guessed);
}

function getWord(pastaWords){
    var index = randomNumber(pastaWords.length);
    console.log(index);


    // var choices = document.getElementById('words');
    // console.log(choices);
    // var wordChoice = choices[Math.floor(Math.random() * 5)];
    // console.log(wordChoice);
}

function randomNumber(amount){
    return Math.floor(Math.random(amount) * words.length);

}

getWord(words);