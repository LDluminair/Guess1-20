
var playerGuess = 0;
var computerGuess = 0;

// start by creating the computers guess of a number between 1 and 20.
function computerNumber(){

var randomNumber = Math.floor(Math.random() *20) + 1;
computerGuess = randomNumber;
console.log(computerGuess)
}

//have the player input a number to be checked against the computers guess.

function checkGuess(){
  $(".submit").on("click", function(){

  playerGuess = Number($("#iNum").val());

//if guess is low say "Guess higher"

  if (playerGuess < computerGuess){
    $(".guide").text("Too Low.");
  }

//if the guess is correct say "You got it!"

  else if (playerGuess === computerGuess){
  $(".guide").text("You Win!");
  setTimeout(function(){$(".guide").text("")}, 1000);
  setTimeout(function(){computerNumber()}, 1000);
  }

//if the guess is high say "Guess lower"

  else if (playerGuess > computerGuess){
    $(".guide").text("Too High.");
  }
});
}



computerNumber();
checkGuess();
