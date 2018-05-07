/* globals wordList */
/* exported */
'use strict';

var lettersGuessed = [];
var numberOfGuesses = 0;
var message = '';

//1. Randomly selects a word from a list of words
function getRandom() {
    var randomWord = wordList[Math.floor(Math.random() * Math.floor(wordList.length))];
    console.log(randomWord);
}

//2. Shown line blanks for each letter of the word



//3. Allows the users to enter one letter "guess" at a time.
//a. If the guess is correct, show all occurrences of that letter in the word
//b. If the guess is incorrect, add a body part to the gallows
//4. Show a list of all letters the user has guessed
//5. If the user guesses all of the letters in the word, let them know they have "won"
//6. If the user has enough incorrect guesses to reveal the whole body in the gallows, they "lose"
