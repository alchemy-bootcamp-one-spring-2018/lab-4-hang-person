'use strict';
/* exported gameOn, words, attempts*/

/* Words array & individual word properties*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

// console.log(getRandomIndex(words));



function loadWord(){
    var index = getRandomIndex(words.length);
    console.log('index is', index);
    var gameWord = words[index];
    console.log('gameWord is', gameWord);
}




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
