// ### App

// Create a file `app.js` that exposes functions for running the game. 
// Don't forget to include a script tag with `src` for this file.

// 1. Create a `loadWord` function that
//     1. Gets a random integer between 0 (inclusive) and length of word (exclusive)
//     1. Selects the word from the array with that index and stores for use by the guess function (word 
//     will need to be scoped in way guess function can read.

function loadWord() {
    var index = getRandomIndex(listOfWords.length);
    
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//     1. Set the visibility on the letters of the "Word to Guess" to hidden and fully hide 
//     (no line blank) any unused letter spaces. (You might not hide them initially so you can "see" that
//     word is loading correctly.
// 1. Create a `guess` function that
//     1. Is called by the click of the Guess Letter button
//     1. Reads the letter from the Guess Letter input
//     1. If '', alerts or messages user that letter is required
//     1. Checks against letters already guessed and alerts or messages user that letter has already
//     been guessed
//     1. Otherwise:
//         1. Letter is added to guessed letters
//         1. Guess count is incremented
//         1. Guess Letter input is set to ''
//         1. If word includes the letter (hint: string has an `includes` method):
//             1. Letter(s) are revealed in Word to Guess
//             1. Check for win condition (every letter of word is in guessed letters)
//         1. If word does not include the letter:
//             1. Add a body part to the gallows
//             1. Check for lose condition (guesses count is max number of body parts)
//         1. If win or lose condition:
//             1. message the user that they won or ~~died~~ lost
//             1. Disable the Guess Letter button (button.disabled = true)
// 1. Call 'loadWord()` to start things