'use strict';
/* exported gameOn, words attempts*/

/* Words array & individual word properties*/

var words = [
    'Laboratory',
    'Supercilious',
    'Portmanteau',
];

var laboratory = {
    characters: 10,
};

var portmanteau = {
    characters: 11,
};

var supercilious = {
    characters: 12,
};

function gameOn() {
    console.log('game is running');

    var attempts = 6;
    var answer;
    var correct = true;

    /* Guess Loop*/

    for(var i = 0; i < 5; i++) {
        answer = prompt('enter any letter!');
        console.log(answer);
    }

    if(i === 6 && !correct) {
        alert('Damn bro, you suck so hard somebody died*/');

    }


}
