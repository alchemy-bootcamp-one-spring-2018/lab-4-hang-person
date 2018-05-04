/* exported stateGame */
'use strict';

function randomState() {
    //get a random integer between 0 - stateList.length
    var index = Math.floor(Math.random() * stateList.length);
    console.log('Selected index', index);
    //use random integer to select from stateList
    var selectedState = stateList[index];
    return selectedState;
    //return that state
}
var selectedState;
var stateLength;
var winCheck;
var guessNumber = 6;
var guessedLetter = '';

function stateGame() {
    //clear old lines and letters
    for(var i = 0; i < 13; i++) {
        document.getElementById('letter-' + i).textContent = ' ';
    }
    winCheck = '';
    //get a random state name
    selectedState = randomState().toLowerCase();
    console.log(selectedState);

    //underscore for each letter in state
    stateLength = selectedState.length;
    for(i = 0; i < stateLength; i++) {
        document.getElementById('letter-' + i).textContent = '_';
        winCheck += '_';
    }
    winCheck = winCheck.split('');
    document.getElementById('guess-button').disabled = false;
    console.log(winCheck);
}
function toggleBearParts() {
    var bearParts = document.getElementById('bear-' + guessNumber);
    bearParts.style.visibility = 'visible';
}
function guessLetter() {
    // Collect user input
    var letter = document.getElementById('letter-input').value;
    // Clear input
    document.getElementById('letter-input').value = '';
    letter = letter.toLowerCase();
    
    var response = document.getElementById('game-end-response');
    response.textContent = '';
    //var alpha = /^[A-Za-z]+$/;
    //console.log(alpha); 
    if(letter === '') {
    // if(letter != alpha) {
        response.textContent = 'Pls enter a letter'; 
    }
    // Check for duplicate letter
    else if(guessedLetter.includes(letter) === true) {
        response.textContent = 'Another letter';
    }
    // Check if letter matches State name
    else if(selectedState.includes(letter) === true) {
        //  Add letter to screen
        //  Add letter to Win Checker    
        for(var i = 0; i < stateLength; i++) {
            if(letter === selectedState[i]) {
                document.getElementById('letter-' + i).textContent = letter;
                winCheck[i] = letter;
            }
        }
        // User selected all correct letters
        if(selectedState === winCheck.join('')) {
            response.textContent = 'You win!';
        }
        //  Add user input to guessLetter
        guessedLetter = guessedLetter + letter;
    }
    // Guess is wrong
    else {
        guessedLetter = guessedLetter + letter;
        toggleBearParts();
        guessNumber--;
        // User loses
        if(guessNumber === 0) {
            response.textContent = 'You lose!';
            document.getElementById('guess-button').disabled = true;
        }
    }
    var guesses = document.getElementById('guessed-letters');
    guesses.textContent = guessedLetter.split('').join(', ');

}