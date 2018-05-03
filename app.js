'use strict';
//getting input from the field
var userGuess = document.getElementById('guess');
//displaying the input letters(behind 1 for some reason)
var displayLetters = "";
//guess function
function letterGuess() {
    var guessed = userGuess.value.trim();
    console.log(guessed);
    //updates letters in string
    displayLetters += guessed + " ";
    //changes the text on screen for display
    var p = document.getElementById('inputDisplay');
    p.textContent = displayLetters;
}

function getWord(pastaWords){
    //random number the length of the string
    var index = randomNumber(pastaWords.length);
    console.log(index);
    //actually gets item from array
    var pasta = pastaWords[index];
    console.log(pasta);
    var p1 = document.getElementById('wordOnScreen');
    p1.textContent = pasta;


    // var choices = document.getElementById('words');
    // console.log(choices);
    // var wordChoice = choices[Math.floor(Math.random() * 5)];
    // console.log(wordChoice);
}

function randomNumber(amount){
    //random number generator, adjusts with string length
    return Math.floor(Math.random(amount) * words.length);

}


// still trying to get this working wordLength and testSTRING VAR
function wordLength(sample){
    return sample.length;
    console.log(sample.length);
}
var testString = getWord(words);
wordLength('hello');


// random line test