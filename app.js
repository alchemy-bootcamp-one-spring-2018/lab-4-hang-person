
    var car = null;
    var selectedCar = null;

// This selects a random word to be guessed by user
function loadWord(){ 
    // for(i = 0; i > 5; i++) {
        var listOfWords = ['Honda', 'BMW', 'Tesla', 'Mercedes', 'Audi', 'Porsche'];
        var index = getRandomIndex(listOfWords.length);
        console.log(index);
        
        car = listOfWords[index];
        console.log('selected car is ' + car);
        
        
        // returns randomly selected car
        console.log(words);

        selectedCar = car.split("");
        console.log(selectedCar);

        var p = document.getElementById('car-letters');
        p.textContent = (selectedCar);

}

//guess letter input box and button 
    function guessLetter() {
        var userguess = document.getElementById("guess-box").value;
        document.getElementById("userguess").innerHTML = userguess;
        console.log(userguess);
        console.log('this is car' , car);
        if (userguess === "") {
            alert('Please guess a letter');
        }
        if (car.includes(userguess)) {
            correctGuess();
        }

        function correctGuess(){
            document.getElementById("userguess").innerHTML = 'Good guess';
        }
        console.log() 

        // var userguess = includes(selectedCar[i]);
        
        // if (userguess = selectedCar[i]) {
        //     alert('Correct!');
        
        // console.log(userguess);
        // }
    }

    function getRandomIndex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
