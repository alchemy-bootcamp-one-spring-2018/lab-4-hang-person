/* globals wordList */
/* exported lettersOnly, guessLetter */
'use strict';

var maxTries = 10;
var totalGuesses = 0;
var letterBlanks = [];
var guessedLetters = [];
var correctLetters = [];
var message = '';
var randomWord = '';

// 1. Randomly selects a word from words.js, changes to upper case, splits letters out
function loadWord() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    randomWord = randomWord.toUpperCase().split('');
    document.getElementById('word').textContent = randomWord.join(' ');
}
loadWord();


// 2. Shown line blanks for each letter of the word
function showBlanks() {
    for(var i = 0; i < randomWord.length; i++) {
        letterBlanks[i] = '_';
        document.getElementById('blanks').textContent = letterBlanks.join(' ');
    }
}
showBlanks();

//3. Allows the users to enter one letter "guess" at a time.
//a. If the guess is correct, show all occurrences of that letter in the word
//b. If the guess is incorrect, add a body part to the gallows
//4. Show a list of all letters the user has guessed
function guessLetter() {
    var input = document.getElementById('letter').value;
    input = input.toUpperCase();
    if(guessedLetters.includes(input)) {
        alert('You\'ve already guessed the letter ' + input.toUpperCase() + '!');
    } else if(input == false) {
        alert('You didn\'t guess a letter!');
    } else if(randomWord.includes(input)) {
        alert('GUESSED A CORRECT LETTER');
        guessedLetters.push(input);
        document.getElementById('guessed-letters').textContent = 'You\'ve guessed: ' + guessedLetters.join(' ').toUpperCase();
        totalGuesses++;
        console.log('Max tries now at ' + maxTries);
        console.log('Total guesses now at ' + totalGuesses);
    } else {
        alert('INCORRECT LETTER GUESSED');
        guessedLetters.push(input);
        document.getElementById('guessed-letters').textContent = 'You\'ve guessed: ' + guessedLetters.join(' ').toUpperCase();
        maxTries--;
        totalGuesses++;
        console.log('Max tries now at ' + maxTries);
        console.log('Total guesses now at ' + totalGuesses);
    }
}

//5. If the user guesses all of the letters in the word, let them know they have "won"
//6. If the user has enough incorrect guesses to reveal the whole body in the gallows, they "lose"



// Function that only allows letters (no numbers) using "oninput="lettersOnly()" in HTML
function lettersOnly(){
    var textInput = document.getElementById('letter').value;
    textInput = textInput.replace(/[^A-Za-z]/g, '');
    document.getElementById('letter').value = textInput;
}