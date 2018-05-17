'use strict';
/* export loadWord guessWord */
/* globals words */

var listOfGuessedLetters = [];
var answer = '';
var numberOfLetters = 0;
var answerArray;
var numberOfTries = 6;
var correct = true;
var youWinArray;
var arrayOfUnderscores = [];
var blanks;
var triesLeft = document.getElementById('tries-left');


document.getElementById('guess-button').disabled = true;


function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function loadWord(){

    var index = randomWord(words.length);
    answer = words[index];
    numberOfLetters = answer.length;
    answerArray = answer.split('');
    youWinArray = answerArray.slice();
    document.getElementById('guess-button').disabled = false;
    document.getElementById('play-button').disabled = true;
    triesLeft.textContent = numberOfTries;

    //write underscores for the amount of letters in retrieved word
    for(var i = 1; i <= numberOfLetters ; i++){
        blanks = document.getElementById('word-to-guess');
        arrayOfUnderscores.push('_');
        blanks.innerHTML = arrayOfUnderscores.join('');

    }
    
    console.log(answerArray);
    console.log('youWin = ' + youWinArray);
}


console.log(answer);
console.log(answerArray);
console.log(numberOfLetters); //length of the answer - amount of letters

//loadWord();

console.log(answer);
console.log(numberOfLetters); //length of the answer - amount of letters

//create an input field for guesses and button

function guessLetter(){
    var letter = document.getElementById('letter');
    console.log('the letter is', letter.value);

    if(listOfGuessedLetters.includes(letter.value.toUpperCase())){
        alert('You\'ve already guessed "' + letter.value.toUpperCase() + '", choose a different letter.');
        return;
    }

    if(letter.value === ''){
        alert('Choose a letter like your life depends on it!');
        return;
    }

    if(letter.value !== '' && !listOfGuessedLetters.includes(letter.value.toUpperCase())){
        listOfGuessedLetters.push(letter.value.toUpperCase());
        var showLetters = document.getElementById('guessed-letters');
        showLetters.innerHTML += letter.value + ', ';
        correct = false;
    }

    //Compare inputted letter to letters in word
    var winLoseMessage = document.getElementById('win-lose-msg');
    for(var j = 0; j <= numberOfLetters; j++){
        if(letter.value.toLowerCase() === answerArray[j]) {
            correct = true;
            arrayOfUnderscores[j] = answerArray[j];
            youWinArray.pop();
            blanks.innerHTML = arrayOfUnderscores.join('');
            //show win message

            if(youWinArray.length === 0){
                winLoseMessage.innerHTML = 'You\'ve been pardoned.';
                document.getElementById('guess-button').disabled = true;
            }

            console.log (answerArray[j]);
            console.log ('after popping, the length of youWin =' + youWinArray.length);
            console.log(arrayOfUnderscores);

        }
        

    }
    if(correct === false){
        numberOfTries--;

        var gallowsPicture = document.getElementById('gallows');
        gallowsPicture.innerHTML = '<img src="img/' + numberOfTries + '.png" width="300" />';
        triesLeft.textContent = numberOfTries;
        if(numberOfTries === 0){
            gallowsPicture = document.getElementById('gallows');
            gallowsPicture.innerHTML = '<img src="img/' + numberOfTries + '.png" width="300" />';
            winLoseMessage.innerHTML = '*snap*';
            document.getElementById('guess-button').disabled = true;

        }
    //    letter.value = '';

    }
    console.log('tries left', numberOfTries);
    console.log(correct);
}
    