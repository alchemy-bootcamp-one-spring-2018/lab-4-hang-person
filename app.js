'use strict';
/* globals wordList */
/* exported startGame, guess, */

//Global Variables
var imageNumber = 1;
var boneYard = [];
var currentWord = loadWord();
var visibleWordArray = [];
var visibleWordString = '';
var totalGuesses = 0;

//taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// uses random integer to get a word from our array wordList
function loadWord() {
    var randomIndex = getRandomInt(wordList.length);
    return wordList[randomIndex];
}

function startGame(){

    imageNumber = 1;
    boneYard = [];
    currentWord = loadWord();
    visibleWordArray = [];
    visibleWordString = '';
    totalGuesses = 0;
    document.getElementById('guessButton').disabled = false;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('boneYardDisplay').textContent = boneYard;
    document.getElementById('image').src = 'hang' + imageNumber + '.jpg';

    //create string with an underscore for each letter of word to be guessed
    for(var i = 0; i < currentWord.length; i++) {
        visibleWordArray[i] = '_';
    }
    visibleWordString = visibleWordArray.join(' ');
    document.getElementById('wordDisplay').textContent = visibleWordString;
}

function guess() {

    // get input from user
    var letterGuess = document.getElementById('guessInput').value;
    console.log ('From guessInput box:', letterGuess);

    //if user does not enter a single letter, stop running and don't count as a turn
    if(letterGuess.length !== 1) {
        alert('Please enter exactly one letter.');
        return;
    }

    //if letter has already been incorrectly guessed, stop running and don't count as a turn
    if(boneYard.indexOf(letterGuess) !== -1){
        alert('Letter already guessed incorrectly ya dummy.');
        document.getElementById('guessInput').value = '';
        return;
    }

    //if letter has already been correctly guessed, stop running and don't count as a turn
    if(visibleWordArray.indexOf(letterGuess) !== -1){
        alert('Letter already guessed correctly silly billy.');
        document.getElementById('guessInput').value = '';
        return;
    }
    //now that the guess is valid, add to guess count:
    totalGuesses++;

    //if guess is incorrect, add to boneyard, advance to next image
    if(currentWord.indexOf(letterGuess) === -1){
        boneYard.push (letterGuess);
        // This advances to the next image
        imageNumber ++;
        document.getElementById('image').src = 'hang' + imageNumber + '.jpg';
    }
    // if guess is correct, update string of underscores to show letters
    else {
        // loop through currentWord checking each letter against guess
        for(var i = 0; i < currentWord.length; i++) {
            var letter = currentWord[i];
            if(letter === letterGuess) {
                visibleWordArray[i] = letter;
            }
        }
        visibleWordString = visibleWordArray.join(' ');
        document.getElementById('wordDisplay').textContent = visibleWordString;
    }

    // code below here occurs at the end of every guess
    document.getElementById('guessInput').value = '';
    document.getElementById('boneYardDisplay').textContent = boneYard;
    document.getElementById('totalGuesses').textContent = ' ' + totalGuesses;
    //check to see if user has won
    if(visibleWordArray.indexOf('_') === -1) {
        document.getElementById('guessButton').disabled = true;
        document.getElementById('guessButton').disabled = true;
        document.getElementById('guessInput').disabled = true;
        alert('Good Job! You Win! Go get a beer!');
    }
    //check to see if user has lost
    if(imageNumber === 5) {
        document.getElementById('guessButton').disabled = true;
        document.getElementById('guessButton').disabled = true;
        document.getElementById('guessInput').disabled = true;
        alert('You Suck! Go Home! The word was: ' + currentWord + '!');
    }
}
