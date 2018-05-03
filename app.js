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
    document.getElementById('letterInput').value ='';
    letter = letter.toLowerCase();
    if(selectedState.includes(letter) === true) {
        for(var i = 0; i < stateLength; i++) {
            if(letter === selectedState[i]) {
                document.getElementById('letter-' + i).textContent = letter;
                winCheck[i] = letter;   
            }
        }
        console.log(winCheck); 
    }
    else {
        alert('bad');
    }
}