'use strict';

var userGuess = document.getElementById('guess');
function letterGuess() {
    var guessed = userGuess.value.trim();
    console.log(guessed);
    var p = document.getElementById(inputDisplay);
    p.textContent = guessed;
}

function getWord(pastaWords){
    var index = randomNumber(pastaWords.length);
    console.log(index);
    var pasta = pastaWords[index];
    console.log(pasta);


    // var choices = document.getElementById('words');
    // console.log(choices);
    // var wordChoice = choices[Math.floor(Math.random() * 5)];
    // console.log(wordChoice);
}

function randomNumber(amount){
    return Math.floor(Math.random(amount) * words.length);

}


// still trying to get this working wordLength and testSTRING VAR
function wordLength(sample){
    return sample.length;
    console.log(sample.length);
}
var testString = getWord(words);
wordLength('hello');
