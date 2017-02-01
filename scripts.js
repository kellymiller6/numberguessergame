// Input and show last guess vars
var userInput = document.getElementById('guess-input');
//minmax vars

//button vars
var guessButton = document.getElementById('guess-btn');
var clearButton = document.getElementById('clear-btn');
var resetButton = document.getElementById('reset-btn')

//Text
var showLastGuess = document.getElementById('showUserGuess')
var userHint = document.getElementById('hint')

//EventListenersOnClick
clearButton.addEventListener('click', function() {
  userInput.value = null;
});

resetButton.addEventListener('click', function () {
  secretNumber = resetFunction();
});
//Secret Number var
var secretNumber = resetFunction();

//The important shit

guessButton.addEventListener('click', function() {
  showLastGuess.innerText = userInput.value;
  var intGuess = parseInt(userInput.value, 10);
  if (intGuess === secretNumber) {
      hint.innerText = "BOOM!";
    } else if (intGuess > secretNumber) {
      hint.innerText = "That is too high";
    } else if (intGuess < secretNumber) {
      hint.innerText = "That is too low";
    } else {
      hint.innerText = "Please guess a number";
    }
});

clearButton.addEventListener('click', function() {
  userInput.value = null;
});

resetButton.addEventListener('click', function () {
  secretNumber = resetFunction();
});

function resetFunction () {
  showLastGuess.innerText = "";
  hint.innerText = "Enter a number between 1-100";
  userInput.value = null;
  var newSecret = Math.floor(Math.random() * 101);
  console.log(newSecret);
  return newSecret;
};

//  if (intGuess > maxNum || intGuess < minNum){
  //  alert("Your guess must be between 1-100");
//  } else if (isNan(userNum()) === true){
  //  alert("Enter a valid number.");
