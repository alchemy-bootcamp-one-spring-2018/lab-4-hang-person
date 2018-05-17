
    var car = null;
    var selectedCar = null;
    
// This selects a random word to be guessed by user
function loadWord(){
        var listOfWords = ['Honda', 'BMW', 'Tesla', 'Mercedes', 'Audi', 'Porsche'];
        var index = getRandomIndex(listOfWords.length);
        console.log('car name position in the list', index);
        
        car = listOfWords[index];
        console.log('selected car is ' + car);
        
        // returns randomly selected car
        console.log(words);

        selectedCar = car.split("");
        console.log('split value of selected car is' , selectedCar);

        var p = document.getElementById('car-letters');
        p.textContent = (selectedCar);

        //creating array to display blanks 

}
createBlanks();

var newArray = [];
for (var i = 0; i < selectedCar.length; i++) {
    newArray[i]= '_';
}

//show results to user
function createBlanks() {
    document.getElementById('blank-spaces').textContent = newArray.join('');
}

//guess letter input box and button 
    function guessLetter() {

        var userguess = document.getElementById("guess-box").value;
        document.getElementById("userguess").innerHTML = userguess;
        console.log(userguess);
        console.log('this is car being guessed' , car);
        
        if (userguess === "") {
            alert('Please guess a letter');
        }
        if (car.includes(userguess)) {
            correctGuess();

        }
        var p = document.getElementById('correct-guess');
        p.textContent = (userguess);

        function correctGuess(){
        document.getElementById("userguess").innerHTML = 'Good guess';

        }
        

        // var userguess = includes(selectedCar[i]);
        
        // if (userguess = selectedCar[i]) {
        //     alert('Correct!');
        
        // console.log(userguess);
        // }
    }

    function getRandomIndex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
