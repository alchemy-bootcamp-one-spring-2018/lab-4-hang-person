/* exported getRandom */
/* globals wordList */
'use strict';

function getRandom() {
    var randomWord = wordList[Math.floor(Math.random() * Math.floor(wordList.length))];
    randomWord = randomWord.split('');
    if(randomWord) {
        console.log('"' + randomWord + '"' + ': random word successfully generated - SUCCESS');
    } else {
        console.log('" (RANDOM WORD): random word successfully generated - FAIL');
    }
}


getRandom(); // Call random word from array; split by letter