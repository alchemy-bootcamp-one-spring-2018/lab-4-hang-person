/* globals wordList */
/* exported */
'use strict';

var guessedLetters = [];
var correctLetters = [];
var numberOfGuesses = 0;
var message = '';

// 1. Randomly selects a word from a list of words
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);

// Splits randomly selected word in to individual letters
function loadWord() {
    randomWord = randomWord.split('');
    console.log(randomWord);
}

// 2. Shown line blanks for each letter of the word
var letterBlanks = [];
for(var i = 0; i < randomWord.length; i++) {
    letterBlanks[i] = '_';
    console.log(letterBlanks);
}

// .join(' ') adds a space and gets rid of commas between array values, creating "blanks"
document.getElementById('blanks').textContent = letterBlanks.join(' ');

//3. Allows the users to enter one letter "guess" at a time.
//a. If the guess is correct, show all occurrences of that letter in the word
//b. If the guess is incorrect, add a body part to the gallows
//4. Show a list of all letters the user has guessed
//5. If the user guesses all of the letters in the word, let them know they have "won"
//6. If the user has enough incorrect guesses to reveal the whole body in the gallows, they "lose"


function lettersOnly(input) {
    var lettersOnly = /^[A-Za-z]+$/;
    if(input.value.match(lettersOnly))
    {
        return true;
    } else {
        alert('Only letters may be used as a guess!');
    }
    console.log(lettersOnly);
}

lettersOnly();
loadWord();