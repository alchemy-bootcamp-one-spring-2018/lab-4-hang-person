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
var guessNumber = 0;
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
    console.log(winCheck);
}

function guessLetter() {
    var letter = document.getElementById('letterInput').value;
    document.getElementById('letterInput').value = '';
    letter = letter.toLowerCase();

    console.log(guessedLetter);
    // = document.getElementById('guessed-letter');
    //guessedLetter.textContent += letter + ' ';
    if(guessedLetter.includes(letter) === true) {
        var again = document.getElementById('game-end-response');
        again.textContent = 'Another letter';
    }
    else if(selectedState.includes(letter) === true) {
        for(var i = 0; i < stateLength; i++) {
            if(letter === selectedState[i]) {
                document.getElementById('letter-' + i).textContent = letter;
                winCheck[i] = letter;
            }
        }
        if(selectedState === winCheck.join('')) {
            var win = document.getElementById('game-end-response');
            win.textContent = 'You win!';
        }
        console.log(winCheck);
        guessedLetter = guessedLetter + letter;
    }
    else {
        guessedLetter = guessedLetter + letter;
        guessNumber++;
        console.log(guessNumber);
        if(guessNumber === 6) {
            var lose = document.getElementById('game-end-response');
            lose.textContent = 'You lose!';
        }
    }

}