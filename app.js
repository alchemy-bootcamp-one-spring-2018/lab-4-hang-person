'use strict';
//TO DO ADD A WIN CONDITION
//AND FIX THE UPDATING OF THE GUESSED LETTERS
//getting input from the field
var userGuess = document.getElementById('guess');
var guessed = userGuess.value.trim().toLowerCase();
var displayArray = []; 
// variable for turning letters into dashes??
var pastaSpl = [];
var maxGuesses = 0;

function checkWin(){
    if(displayArray.indexOf('-') == -1){
        var winText = document.getElementById('win-lose');
                winText.textContent = 'You won!';
    }
}

var displayLetters = '';
//guess function
function letterGuess() {
    console.log("hi there michelle", pastaSpl);
    var guessed = userGuess.value.trim().toLowerCase();
    console.log(guessed);
    
    //changes the text on screen for display
    
    for(var i = 0; i < pastaSpl.length; i++); {
        if(pastaSpl.includes(guessed)) {
            console.log(pastaSpl.indexOf(guessed)); 
            var arrayPosition = pastaSpl.indexOf(guessed);
            displayArray[arrayPosition] = guessed;
            console.log(displayArray);
            console.log('this is our display array', displayArray);
            var p2 = document.getElementById("wordOnScreen");
            p2.textContent = displayArray.join('');
            checkWin();  
        } else if (displayLetters.includes(guessed)){
            alert('you already guessed ' + guessed + ', please try another letter')
        } else {
            displayLetters += guessed +', ';
            maxGuesses++;
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
                var loseText = document.getElementById('win-lose');
                loseText.textContent = 'You lose.';
            }
        }
        var p = document.getElementById('inputDisplay');
        p.textContent = displayLetters;
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

function startGame(){
    document.getElementById('header').removeAttribute("hidden");
    document.getElementById('gallows').removeAttribute("hidden");
    document.getElementById('word').removeAttribute("hidden");
    document.getElementById('guess').removeAttribute("hidden");
    document.getElementById('submit').removeAttribute("hidden");
    document.getElementById('wordOnScreen').removeAttribute("hidden");
    document.getElementById('start').setAttribute("hidden", "hidden");

};

function randomNumber(amount){
    //random number generator, adjusts with string length
    return Math.floor(Math.random(amount) * words.length);

}


// still trying to get this working wordLength and testSTRING VAR
getWord(words);


// random line test