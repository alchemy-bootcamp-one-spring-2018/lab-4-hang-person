'use strict';
/* exported gameOn, words, attempts, loadWord, gameWord, wordArray*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

// console.log(getRandomIndex(words));

function gameOn() {
    console.log('game is running');
    var index = getRandomIndex(words.length);
    var gameWord = words[index];
    console.log('gameWord is', gameWord);

    var wordArray = gameWord.split('');
    console.log('letters:', wordArray);

    var l = document.getElementById('letter');
    console.log('input is', l.value);

    for(var i = 0; i < wordArray.length; i++) {
        if(l.value === wordArray[i]) {
            console.log('correct!');
            break;

        }
    
        else if(l.value !== wordArray[i]) {
            console.log('incorrect!');

        }
        
        
        
        
        
        
        
        // var array1 = [1, 2, 3];

        // console.log(array1.includes(2));
        // // expected output: true
        
        // var pets = ['cat', 'dog', 'bat'];
        
        // console.log(pets.includes('cat'));
        // // expected output: true
        
        // console.log(pets.includes('at'));
        // // expected output: false
    
    
    
    
    
    
    
    
    }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.










    // function showLetter() {
    //     var x = document.getElementById('p');
    //     if(x.style.display === 'none') {
    //         x.style.display = 'block';
    //     }
    //     else {
    //         x.style.display = 'none';

    //     }
    // }

}












// function loadWord(){
//     var index = getRandomIndex(words.length);
//     var gameWord = words[index];
//     console.log('index is', index);
// }

// function wordArray(){
//     gameWord.split();
// }






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
