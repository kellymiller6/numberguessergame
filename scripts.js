var myInput = document.getElementById('guess-input');

var guessButton = document.getElementById('guess');

var clearButton = document.getElementById('clear');

var showLastGuess = document.getElementById('showUserGuess')

var resetButton = document.getElementById('reset')

guessButton.addEventListener('click', function() {
  showLastGuess.innerText = myInput.value;
});
