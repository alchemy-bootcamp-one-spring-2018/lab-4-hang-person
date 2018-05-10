/* globals wordList */
/* exported lettersOnly, guessLetter, gallows */
'use strict';

var maxTries = 10;
var totalGuesses = 0;
var wrongGuesses = 0;
var letterBlanks = [];
var guessedLetters = [];
var correctLetters = [];
var input = [];
var randomWord = '';

var blanks1 = document.getElementById('letter0');
var blanks2 = document.getElementById('letter1');
var blanks3 = document.getElementById('letter2');
var blanks4 = document.getElementById('letter3');
var blanks5 = document.getElementById('letter4');

var arrBlank = [
    blanks1,
    blanks2,
    blanks3,
    blanks4,
    blanks5,
];


// Function that only allows letters (no numbers) using "oninput="lettersOnly()" in HTML
function lettersOnly() {
    var textInput = document.getElementById('letter').value;
    textInput = textInput.replace(/[^A-Za-z]/g, '');
    document.getElementById('letter').value = textInput;
}


// 1. Randomly selects a word from words.js, changes to upper case, splits letters out in to array
function loadWord() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    randomWord = randomWord.toUpperCase().split('');
    console.log(arrBlank);
    for(var i = 0; i < arrBlank.length; i++) {
        arrBlank[i].style.visibility = '!hidden';
        arrBlank[i].textContent = randomWord[i];
    }
    
    console.log('randomWord: ' + randomWord);
}


// 2. Shown line blanks for each letter of the word
function showBlanks() {
    for(var i = 0; i < randomWord.length; i++) {
        letterBlanks[i] = '_';
        document.getElementById('blanks').textContent = letterBlanks.join(' ');
    }
}


//3. Allows the users to enter one letter "guess" at a time.
//a. If the guess is correct, show all occurrences of that letter in the word
//b. If the guess is incorrect, add a body part to the gallows
//4. Show a list of all letters the user has guessed
function guessLetter() {
    input = document.getElementById('letter').value;
    input = input.toUpperCase();
   
    if(guessedLetters.includes(input)) {
        alert('You\'ve already guessed the letter ' + input.toUpperCase() + '!');
  
    } else if(input === '') {
        alert('You didn\'t guess a letter!');
   
    } else if(randomWord.includes(input)) {
        alert('GUESSED A CORRECT LETTER');
        for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === input) {
                arrBlank[i].style.visibility = '!hidden';
                //set randomWord style to visible (hidden already)
            }
        }
        correctLetters.push(input); // adds correct guess to letter bank
        console.log('correctLetters: ' + correctLetters);
        guessedLetters.push(input); // adds guess to total guessedLetters array
        totalGuesses++; // increments number of totalGuesses
        winLose();
   
    } else {
        alert('INCORRECT LETTER GUESSED');
        guessedLetters.push(input); // adds guess to guessedLetters array
        maxTries--; // decrements maxTries
        totalGuesses++; // increments total Guesses
        wrongGuesses++;
        gallows();
        winLose();
    }
    document.getElementById('letter').value = ''; // erases value after "Guess" is clicked
    document.getElementById('guessed-letters').textContent = 'You\'ve guessed: ' + guessedLetters.join(' ').toUpperCase(); // writes out guessed letters
    document.getElementById('remaining-guesses').textContent = 'Tries remaining ' + maxTries;
    document.getElementById('total-guesses').textContent = 'Total guesses: ' + totalGuesses;
}

//5. If the user guesses all of the letters in the word, let them know they have "won"
//6. If the user has enough incorrect guesses to reveal the whole body in the gallows, they "lose"
function winLose() {
    if(randomWord.length === correctLetters.length) {
        console.log('Win/lose function = true (running)');
        alert ('You won!');
        loadWord();
        maxTries = 10;
        totalGuesses = 0;
        wrongGuesses = 0;
        guessedLetters = [];
        correctLetters = [];
    } else {
        if(maxTries === 0) {
            alert('You lose!');
        }
    }
}

// Function to draw the hangman
function gallows() {
    var elImg = document.getElementById('gallows');
    var i;
    for(i = 0; i < wrongGuesses; i++) {
        elImg.src = imgArray[i].src;
        console.log(i);
    }
}

// Gallows images (10 images for 10 incorrect guesses)
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/file1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/file2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/file3.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/file4.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/file5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/file6.png';

imgArray[6] = new Image();
imgArray[6].src = 'images/file7.png';

imgArray[7] = new Image();
imgArray[7].src = 'images/file8.png';

imgArray[8] = new Image();
imgArray[8].src = 'images/file9.png';

imgArray[9] = new Image();
imgArray[9].src = 'images/file10.png';

loadWord();
showBlanks();