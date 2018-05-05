/* exported loadWord, guess */
/* globals listOfWords */
'use strict';

// ### App

// Create a file `app.js` that exposes functions for running the game.
// Don't forget to include a script tag with `src` for this file.

// 1. Create a `loadWord` function that
//     1. Gets a random integer between 0 (inclusive) and length of word (exclusive)
//     1. Selects the word from the array with that index and stores for use by the guess function (word
//     will need to be scoped in way guess function can read.

var word = '';
function loadWord() {
    var index = getRandomIndex(listOfWords.length);
    word = listOfWords[index];
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// 1. Create a `guess` function that

//     1. Otherwise:
//         1. If word does not include the letter:
//             1. Add a body part to the gallows
var guessCount = 0;

function guess() {
    var letterGuessed = document.getElementById('letter-input');
    var letter = letterGuessed.value;
    console.log('user guessed', letter);

    document.getElementById('letter-input').value = '';
    //source: https://stackoverflow.com/questions/5700471/set-value-of-input-using-javascript-function

    if(letter === '') {
        alert('Field blank, please type a letter.');
    }
    else if(word.includes(letter.toLowerCase())) {
        console.log('woo');
        for(var j = 0; j < wordArray.length; j++) {
            if(letter === wordArray[j]) {
                newArray[j] = letter;
            }
        }
        blankWord = newArray.join(' ');
        document.getElementById('word-1').textContent = blankWord;

        if(blankWord.includes('_') === false) {
            document.getElementById('end-game').textContent = 'YOU WON!!! Refresh to play again.';
            document.getElementById('guess-button').disabled = true;
        }
    }
    else {
        for(var k = 0; k < wrongArray.length; k++) {
            if(letter === wrongArray[k]) {
                alert('Already guessed!');
                wrongArray.splice(letter, 1);
                guessCount--;
            }
        }
        wrongArray.push(letter);
        var wrongLetters = wrongArray.join(' ');
        document.getElementById('wrong-letters').textContent = wrongLetters;

        // add body part to hang person

        var div = document.getElementById('person-' + guessCount);
        div.classList.toggle('hidden');

        guessCount++;

        if(guessCount === 6) {
            document.getElementById('end-game').textContent = 'Sorry, but you lost! Better luck next time! Refresh to try again.';
            document.getElementById('guess-button').disabled = true;
        }
    }
    document.getElementById('guess-count').textContent = 'Guesses made: ' + guessCount + '/6';
}

loadWord();
console.log(word);
var newArray = [];
var wordArray = word.split('');
var wrongArray = [];

for(var i = 0; i < wordArray.length; i++) {
    newArray[i] = '_';
}

var blankWord = newArray.join(' ');
document.getElementById('word-1').textContent = blankWord;