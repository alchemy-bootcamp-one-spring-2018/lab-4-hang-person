/* exported loadWord, guess */
/* globals listOfWords */
'use strict';

var word = '';
function loadWord() {
    var index = getRandomIndex(listOfWords.length);
    word = listOfWords[index];
}

//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function guess() {
    var letterGuessed = document.getElementById('letter-input');
    var letter = letterGuessed.value;

    document.getElementById('letter-input').value = '';
    //source: https://stackoverflow.com/questions/5700471/set-value-of-input-using-javascript-function

    if(letter === '') {
        alert('Field blank, please type a letter.');
    }
    else if(word.includes(letter.toUpperCase())) {
        for(var j = 0; j < wordArray.length; j++) {
            if(letter.toUpperCase() === wordArray[j]) {
                newArray[j] = letter.toUpperCase();
            }
        }
        blankWord = newArray.join(' ');
        document.getElementById('word-1').textContent = blankWord;
        guessCount++;

        if(blankWord.includes('_') === false) {
            document.getElementById('end-game').textContent = 'YOU WON!!! Refresh to play again.';
            document.getElementById('guess-button').disabled = true;
        }
    }
    else {
        if(wrongArray.includes(letter.toUpperCase())) {
            alert('Already guessed that letter!');
        }
        else {
            wrongArray.push(letter.toUpperCase());
            var wrongLetters = wrongArray.join(' ');
            document.getElementById('wrong-letters').textContent = wrongLetters;

            // add body part to hang person
            var div = document.getElementById('person-' + wrongCount);
            wrongCount++;
            guessCount++;
            div.classList.toggle('hidden');

            if(wrongCount === 6) {
                document.getElementById('end-game').textContent = 'Sorry, but you lost! Better luck next time! Refresh to try again.';
                document.getElementById('guess-button').disabled = true;
            }
        }
    }
    document.getElementById('guess-count').textContent = 'Guesses made: ' + guessCount;
}

loadWord();
console.log(word);
var newArray = [];
var wordArray = word.split('');
var wrongArray = [];
var guessCount = 0;
var wrongCount = 0;

for(var i = 0; i < wordArray.length; i++) {
    newArray[i] = '_';
}

var blankWord = newArray.join(' ');
document.getElementById('word-1').textContent = blankWord;