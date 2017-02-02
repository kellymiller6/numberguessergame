// Input and show last guess vars
var userInput = document.getElementById('guess-input');
var guessButton = document.getElementById('guess-btn');
var clearButton = document.getElementById('clear-btn');
var resetButton = document.getElementById('reset-btn')
var showLastGuess = document.getElementById('show-user-guess')
var secretNumber = resetFunction();

//EventListeners
userInput.addEventListener('keyup', function(){
  clearButton.disabled = false;
})

clearButton.addEventListener('click', function() {
  userInput.value = null;
  clearButton.disabled = true;
});

resetButton.addEventListener('click', function () {
  secretNumber  = resetFunction();
  clearButton.disabled = true;
  resetButton.disabled = true;
});

guessButton.addEventListener('click', function() {
  showLastGuess.innerText = userInput.value;
  resetButton.disabled = userInput.value === '';
  var intGuess = parseInt(userInput.value);
    if(isNaN(intGuess)) {
      alert("Please enter a number.")
    } else if (intGuess === secretNumber) {
      hint.innerText = "BOOM!";
    } else if (intGuess < 1 || intGuess > 100){
      alert("Please enter a number between 1 and 100");
    } else if (intGuess > secretNumber) {
      hint.innerText = "That is too high";
    } if (intGuess < secretNumber) {
      hint.innerText = "That is too low";
    }
});


function resetFunction () {
  showLastGuess.innerText = "";
  hint.innerText = "Please guess a number";
  userInput.value = null;
  var newSecret = Math.floor(Math.random() * 101 + 1);
  console.log(newSecret);
  return newSecret;
};
