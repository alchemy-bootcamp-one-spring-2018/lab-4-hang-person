'use strict';
/* exported gameOn, words, attempts, loadWord, gameWord, wordArray*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

// console.log(getRandomIndex(words));

var gameWord = words[index].split();
var index = getRandomIndex(words.length);


function loadWord(){
    var index = getRandomIndex(words.length);
    var gameWord = words[index];
    console.log('index is', index);
}

function wordArray(){
    gameWord.split();
}
console.log('gameWord is', gameWord);





// function gameOn() {
//     console.log('game is running');

//     var attempts = 6;
//     var answer;
//     var correct = true;

//     /* Guess Loop*/

//     for(var i = 0; i < 5; i++) {
//         answer = prompt('enter any letter!');
//         console.log(answer);
//     }

//     if(i === 6 && !correct) {
//         alert('Damn bro, you suck so hard somebody died');

//     }

// }
