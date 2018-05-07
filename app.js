'use strict';

// draw body parts and gallows
var c = document.getElementById("hangCanvas");
var ctx = c.getContext("2d");
var x = 200;
var y = 100;

function drawGallows() {
    // gallows filled triangle
    ctx.fillStyle = 'steelblue';
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();
    
 
    //line gallows vert    
    ctx.moveTo(25, 21);
    ctx.lineTo(25, 450);
    ctx.stroke();
 
    // line gallows horiz
    ctx.moveTo(25, 25);
    ctx.lineTo(250, 25);
    ctx.stroke();
}

function drawHead(){
    //circle
    ctx.fillStyle = 'pink';
    ctx.strokeStyle='pink';
    ctx.lineWidth=8;
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke(); 
    ctx.fill(); 
}

function drawBody() {
    //draw line body
    ctx.strokeStyle='pink';
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x, y + 160);
    ctx.stroke();
}

function drawLeftArm() {
    //line left arm
    ctx.moveTo(x, y + 50);
    ctx.lineTo(x-60, y + 90);
    ctx.stroke();
}

function drawRightArm() {
    //line right arm
    ctx.moveTo(x, y + 50);
    ctx.lineTo(x + 60, y + 90);
    ctx.stroke();
}

function drawLeftLeg() {
    //line left leg
    ctx.moveTo(x, y + 157);
    ctx.lineTo(x - 40, y + 260);
    ctx.stroke();
}

function drawRightLeg() {
    //line right leg
    ctx.moveTo(x, y + 157);
    ctx.lineTo(x + 40, y + 260);
    ctx.stroke();
}

function youLoseCanvas() {
    ctx.font = "70px Arial"; 
    ctx.fillText("YOU LOSE!", 11, 260);
    ctx.font = "30px Arial"; 
    ctx.fillText("X  X", 170, 100);
}

function youWinCanvas() {
    ctx.font = "70px Arial";
    ctx.fillText("YOU WIN!", 36, 260);
}
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
        setTimeout(youWinCanvas, 1000);
        //document.getElementById('submit').disabled = true;
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