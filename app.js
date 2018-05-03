


//taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// uses random integer to get a word from our array wordList
function loadWord() {
  var randomIndex = getRandomInt(wordList.length);
  var currentWord = wordList[randomIndex];
  alert(currentWord);
}

function guess () {
  var letterGuess = document.getElementById("guessInput").textContent;
  console.log ("letterGuess:", letterGuess);
}