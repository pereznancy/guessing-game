
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


//Question 1 of game: answer is CANCEL
function getFirst() {
  var shortWar = confirm("Was the shortest war in history 39 minutes?");
  if (shortWar) {
    document.getElementById("warWrong").innerHTML= "Dang, you got question 1 wrong!<br/><img src='wrong.png'>";
  } else {
    document.getElementById("warRight").innerHTML= "Yay! You got question 1 right!<br/><img src='correct.png'>";
    score++;
  }
}



//Question 2 of game: answer is CANCEL
function getSecond() {
  var firstSchool = confirm("Alchemy Code Lab is the first school I attended since High School?");
  if (firstSchool) {
    document.getElementById("schoolWrong").innerHTML= "Uh oh, you got question 2 wrong!<br/> <img src='wrong.png'><br/>";
  } else {
    document.getElementById("schoolRight").innerHTML= "Question 2 is right!<br/><img src='correct.png'> ";
    score++;
  }
}


//Question 3 of game: answer is OK
function getThird() {
  var techyKids = confirm("Do I want to do workshops to introduce kids to tech?");
  if (techyKids) {
    document.getElementById("techyRight").innerHTML= "Yeeeah, that's correct!<br/><img src='correct.png'>";
    score++;
  } else {
    document.getElementById("techyWrong").innerHTML= "Womp Womp, question 3 is incorrect.<br/> <img src='wrong.png'><br/>";
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
  getFirst();
  getSecond();
  getThird();
  bonus();
  scoreResponse();
}
