
//  Setup stuff for API communication
var request = new XMLHttpRequest();
request.open('GET', 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', true);

//  Send a request for a random word
request.send();

var wordToGuess = '';
var regExp = /[^a-z]+/gi;

//  Do this when the JSON loads
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    wordToGuess = data.word.toLowerCase();
    if(wordToGuess !== wordToGuess.replace(regExp, '')) {
        request.send();
    }
    console.log(data);
    console.log(data.word);
};


var letterBankMaster = 'abcdefghijklmnopqrstuvwxyz';
var letterBank = letterBankMaster.split('');
var lettersGuessed = [];
var wrongLettersGuessed = [];
var failedAttempts = 0;
var correctGuesses = 0;

var guessLimit = 6;

var wordBlanks = [];

setTimeout(() => {
    //  Create array with '-' for each letter of word to guess
    for(var i = 0; i < wordToGuess.length; i++) {
        wordBlanks.push('-');
    }
    console.log(wordBlanks);
}, 1000);

// // Detect Enter
// document.getElementById('letter').addEventListener('keyup', function(event) {
//     event.preventDefault();
//     if(event.keyCode === 13) {
//         document.getElementById('submit-button').click();
//         console.log('enter is pressed');
//     }
    
// });

//  Main game body
//eslint-disable-next-line
function guessLetter() {
    console.log('we did it!');

    var userInput = document.getElementById('letter').value.toLowerCase();
    console.log(userInput);

    //  Clear the contents of the text input box
    document.getElementById('letter').value = '';

    var guessIndex = wordToGuess.indexOf(userInput);

    var userIndex = (letterBank.indexOf(userInput));
    console.log(letterBank.indexOf(userInput));

    //  Checks if letter is invalid or already guessed
    if(userIndex === (-1)) {
        alert('Guess an valid unguessed letter!');
        return;
    }

    //  Checks if letter is in word to guess
    else if(guessIndex !== (-1)) {
        for(var i = 0; i < wordToGuess.length; i++) {
            if(wordToGuess[i] === userInput) {
                wordBlanks[i] = userInput;
                correctGuesses++;
                console.log('here ', wordBlanks);
            }
        }

        //  Add to the bank of letters guessed
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);

        var blanks = document.getElementById('container-blanks');
        blanks.textContent = wordBlanks.join(' ');
        console.log('wordBlanks ', wordBlanks.join(''));

        if(correctGuesses === wordToGuess.length) {
            console.log('winner winner chicken dinner!');
            document.getElementById('container-blanks').style = 'animation: win-glow 50ms alternate infinite';
            getJiggy();
        }
    }

    //  Wrong letter has been guessed
    else {
        lettersGuessed.push(userInput);
        wrongLettersGuessed.push(userInput);
        console.log(wrongLettersGuessed);

        //  Update guessed letters
        var displayGuessed = document.getElementById('container-guessed');
        displayGuessed.textContent = wrongLettersGuessed.join(' ');

        //  Remove letter from letter bank
        letterBank.splice(userIndex, 1);

        failedAttempts++;
        console.log(failedAttempts);

        //  Update how many guesses are left
        document.getElementById('submit-button').value = guessLimit - failedAttempts + ' left';

        //  Display body part
        var bodyPart = 'body-' + failedAttempts;
        console.log(bodyPart);
        document.getElementById(bodyPart).style.visibility = 'visible';

        //  Check if they've guessed too many times
        if(failedAttempts === guessLimit) {
            setTimeout(() => {
                alert('Wrong! You have guessed to many times. Refresh to try again.');
            }, 100);
            getJiggy();
            return;
        }
    }
}


function getJiggy() {
    //  Gettin jiggy wit it!
    for(var j = 1; j <= 6; j++) {
        document.getElementById('body-' + j).setAttribute('style', 'animation: jiggle 50ms alternate infinite; visibility: visible;');
    }
    document.getElementById('container-gallow').setAttribute('style', 'animation: rainbow 2s forwards infinite;');
    document.getElementById('submit-button').disabled = true;    
}