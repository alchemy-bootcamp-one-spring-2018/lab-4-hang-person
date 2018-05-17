/* exported guessed alpha letterGuess startGame words*/
'use strict';

// draw body parts and gallows
var c = document.getElementById('hangCanvas');
var ctx = c.getContext('2d');
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
    ctx.moveTo(25, 25);
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
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function drawBody() {
    //draw line body
    ctx.strokeStyle = 'pink';
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x, y + 160);
    ctx.stroke();
}

function drawLeftArm() {
    //line left arm
    ctx.moveTo(x, y + 50);
    ctx.lineTo(x - 60, y + 90);
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
    ctx.font = '70px Arial';
    ctx.fillText('YOU LOSE!', 11, 420);
    ctx.font = '30px Arial';
    ctx.fillText('X  X', 170, 100);
}

function youWinCanvas() {
    ctx.font = '70px Arial';
    ctx.fillText('YOU WIN!', 36, 420);
}

//getting input from the field
var userGuess = document.getElementById('guess');
var guessed = userGuess.value.trim().toLowerCase();
var displayArray = [];
// variable for turning letters into dashes??
var pastaSpl = [];
var maxGuesses = 0;

//https://www.codingforums.com/post-a-javascript/10374-accept-only-letters-field.html
//I'm sorry I copied this but it really was the last bit of functionality left that I couldn't figure out. 
//I tried so many different things with regular expressions and none of them worked
function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8);
}

function checkWin(){
    if(displayArray.indexOf('-') === -1){
        setTimeout(youWinCanvas, 750);
        document.getElementById('submit').disabled = true;
    }
}

function clearInput(){
    document.getElementById('guess').value = '';
}

var displayLetters = '';
//guess function
function letterGuess() {
    var guessed = userGuess.value.trim().toLowerCase();
    for(var i = 0; i < pastaSpl.length; i++) {
        var p = document.getElementById('inputDisplay');
        p.textContent = displayLetters;
        if(pastaSpl.includes(guessed)) {
            var arrayPosition = pastaSpl.indexOf(guessed);
            displayArray[arrayPosition] = guessed;
            var p2 = document.getElementById('wordOnScreen');
            p2.textContent = displayArray.join('');
            checkWin();
        } else {
            if(displayLetters.includes(guessed)){
                break;
            } else {
                displayLetters += guessed + ', ';
                maxGuesses++;
                if(maxGuesses === 1) {
                    drawHead();
                } else if(maxGuesses === 2){
                    drawBody();
                } else if(maxGuesses === 3){
                    drawLeftArm();
                } else if(maxGuesses === 4){
                    drawRightArm();
                } else if(maxGuesses === 5){
                    drawLeftLeg();
                } else if(maxGuesses === 6){
                    drawRightLeg();
                    setTimeout(youLoseCanvas, 1000);
                    document.getElementById('submit').disabled = true;
                }
            }
        }
    }
}

function maximumGuesses() {
    if(maxGuesses === 1) {
        document.getElementById('head').removeAttribute('hidden');
    } else if(maxGuesses === 2) {
        document.getElementById('body').removeAttribute('hidden');
    }
}

maximumGuesses();


function getWord(pastaWords){
    //random number the length of the string
    var index = randomNumber(pastaWords.length);
    //actually gets item from array
    var pasta = pastaWords[index];

    maximumGuesses();

    function makeArrayPasta() {
        pastaSpl = pasta.split('');
        
        for(var i = 0; i < pastaSpl.length; i++){
            displayArray.push('-');
        }
        
        var p1 = document.getElementById('wordOnScreen');
        p1.textContent = displayArray.join('');
        

    }
    makeArrayPasta();
}

function startGame(){
    document.getElementById('guess').removeAttribute('hidden');
    document.getElementById('submit').removeAttribute('hidden');
    document.getElementById('wordOnScreen').removeAttribute('hidden');
    document.getElementById('start').setAttribute('hidden', 'hidden');
    drawGallows();
}

function randomNumber(amount){
    return Math.floor(Math.random(amount) * words.length);

}


