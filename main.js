
//Get name for new virtual friend
function getName() {
  var newFriend = "";
  while (newFriend == null || newFriend.trim() == ""){
    newFriend = prompt("Hi! What's your name?");
    document.getElementById("friend").innerHTML= "Welcome " + newFriend + ", my name is Nancy!";
  }
}


//Score tracker starts at 0
var score = 0

//in the words of SAW..."Let's play a game."
function playGame(){
  var playReady = confirm("Now that you've read my page want to play a game to see what you remember?");
  if (!playReady){
    alert("But we're virtual friends now..let's play?"); //...not creepy at all
  } else {
    alert("Yay! There's only 3 questions, ready?");
  }
}


//Generalized function for 3 confirm questions..no checckmarks or red X..sad day
function askUser(question, validAnswer, correctGuess, wrongGuess, location) {
  var userGuess = confirm(question);
  if (userGuess == validAnswer) {
    document.getElementById(location).setAttribute("class","right");
    document.getElementById(location).innerHTML = correctGuess;
    score++;
  } else {
    document.getElementById(location).setAttribute("class","wrong");
    document.getElementById(location).innerHTML= wrongGuess;
  }
}




//Bonus Guess question
function bonus() {
  score++;
  alert("Here's a bonus question to up your score! \n Try to guess my favorite number !");
  var bonus = prompt("My favorite number is between 1-11, what is it?");
  while (bonus != 9) {
    if (bonus < 9 && bonus >= 1) {
      alert("Too low, try again");
      bonus = prompt("My favorite number is between 1-11, what is it?");
    } else if (bonus < 1) {
      alert("Don't be silly, that's not between 1-11! Try again.");
      bonus = prompt("My favorite number is between 1-11, what is it?");
    } else if (bonus > 11) {
      alert("That number is definitely not between 1-11, try again!");
      bonus = prompt("My favorite number is between 1-11, what is it?");
    }else {
      alert("Too high, try again");
      bonus = prompt("My favorite number is between 1-11, what is it?");
    }
  }
  document.getElementById("bonus").innerHTML = "You got it, my favorite number is 9!";
  document.getElementById("score").innerHTML = "You're final score is " + score +"<br/><img src='clap.gif'>";
}



function scoreResponse() {
  score;
  if (score == 3) {
    document.getElementById("three").innerHTML= "Wow! You paid attention! Fantanstic!"
  } else if (score == 2) {
    document.getElementById("two").innerHTML= "Not bad, young grasshopper!";
  } else {
    document.getElementById("one").innerHTML= "1 is better than none!";
  }
  document.getElementById("result").innerHTML= "Okay, let's see how you did!";
}
getName();

function startGame() {
  playGame();
  askUser("Was the shortest war in history 39 minutes?", false, "Yay! You got question 1 right!", "Dang, you got question 1 wrong!", "war");
  askUser("Alchemy Code Lab is the first school I attended since High School?", false, "Question 2 is right!", "Uh oh, you got question 2 wrong!", "school" );
  askUser("Do I want to do workshops to introduce kids to tech?", true, "Yeeeah, that's correct!", "Womp Womp, question 3 is incorrect", "tech");
  bonus();
  scoreResponse();
}
