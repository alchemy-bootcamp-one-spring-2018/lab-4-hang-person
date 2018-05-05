'use strict';
//getting input from the field
var userGuess = document.getElementById('guess');
var guessed = userGuess.value.trim().toLowerCase();
var displayArray = []; 
// variable for turning letters into dashes??
var pastaSpl = [];
var maxGuesses = 0;


var displayLetters = '';
//guess function
function letterGuess() {
    console.log("hi there michelle", pastaSpl);
    var guessed = userGuess.value.trim().toLowerCase();
    console.log(guessed);



    //updates letters in string
    if(displayLetters.includes(guessed)){
        alert('You already guessed ' + guessed + ', please try another');
        displayLetters += '';
    }
    // else if (displayLetters.includes([A-Za-z])) {
    //     alert ("You need to use letters");
    // }
    else {
        displayLetters += guessed + ', ';
    }

    //changes the text on screen for display
    var p = document.getElementById('inputDisplay');
    p.textContent = displayLetters;
    console.log(pastaSpl.includes(guessed));

    for(var i = 0; i < pastaSpl.length; i++); {
        if(pastaSpl.includes(guessed)) {
            console.log(pastaSpl.indexOf(guessed)); 
            var arrayPosition = pastaSpl.indexOf(guessed);
            displayArray[arrayPosition] = guessed;
            console.log(displayArray);
            console.log('this is our display array', displayArray);
            var p2 = document.getElementById("wordOnScreen");
            p2.textContent = displayArray.join('');   
        } else {
            maxGuesses++;
            console.log('amount for', maxGuesses);
            if(maxGuesses === 1) {
                document.getElementById('head').removeAttribute("hidden");
            } else if(maxGuesses === 2){
                document.getElementById('body').removeAttribute("hidden");
            } else if(maxGuesses === 3){
                document.getElementById('left-arm').removeAttribute("hidden");
            } else if (maxGuesses === 4){
                document.getElementById('right-arm').removeAttribute("hidden");
            } else if (maxGuesses === 5){
                document.getElementById('left-leg').removeAttribute("hidden");
            } else if(maxGuesses === 6){
                document.getElementById('right-leg').removeAttribute("hidden");
            } else {
                alert('You lost.');
                document.getElementById('submit').disabled = true;
            }
        }
    }
}

function maximumGuesses() {
    if(maxGuesses === 1) {
        document.getElementById('head').removeAttribute("hidden");
    } else if(maxGuesses === 2) {
        document.getElementById('body').removeAttribute("hidden");
    }
}

maximumGuesses();


function getWord(pastaWords){
    //random number the length of the string
    var index = randomNumber(pastaWords.length);
    console.log(index);
    //actually gets item from array
    var pasta = pastaWords[index];
    console.log(pasta);
    // var p1 = document.getElementById('wordOnScreen');
    // p1.textContent = pasta;

    maximumGuesses();

    function makeArrayPasta() {
        pastaSpl = pasta.split('');
        console.log(pastaSpl);
        
        for(var i = 0; i < pastaSpl.length; i++){
            displayArray.push('-');
        }   
        
        var p1 = document.getElementById('wordOnScreen');
        p1.textContent = displayArray.join('');
        

    }
    makeArrayPasta();
}

function matchLetter(){


}

function randomNumber(amount){
    //random number generator, adjusts with string length
    return Math.floor(Math.random(amount) * words.length);

}


// still trying to get this working wordLength and testSTRING VAR
getWord(words);


// random line test