
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
var playReady;
function playGame(){
  playReady = confirm("Now that you've read my page want to play a game to see what you remember?");
    if (!playReady){
    alert("But we're virtual friends now..let's play?");
  } else {
    alert("Yay! There's only 3 questions, ready?"); //...not creepy at all
  }
  document.getElementById("result").innerHTML= "Okay, let's see how you did!";
}


//Question 1 of game: answer is CANCEL
var shortWar;
function getFirst() {
  shortWar = confirm("Was the shortest war in history 39 minutes?");
    if (shortWar) {
    document.getElementById("war").innerHTML= "Dang, you got question 1 wrong! The shortest war was 38 minutes!";
  } else {
    document.getElementById("war").innerHTML= "Yay! You got question 1 right! The shortest war was 38 minutes!";
    score++;
  }
}



//Question 2 of game: answer is CANCEL
var firstSchool;
function getSecond() {
  firstSchool = confirm("Alchemy Code Lab is the first school I attended since High School?");
    if (firstSchool) {
      document.getElementById("school").innerHTML= "Uh oh, you got question 2 wrong! Alchemy is not the first school I've attended.";
    } else {
      document.getElementById("school").innerHTML= "That's right! I've had my run at different schools.";
      score++;
    }
}


//Question 3 of game: answer is OK
var techyKids;
function getThird() {
  techyKids = confirm("Do I want to do workshops to introduce kids to tech?");
    if (techyKids) {
      document.getElementById("techy").innerHTML= "Yeeeah! I do want to introduce kids from my neighborhood back home into tech!";
      score++;
    } else {
      document.getElementById("techy").innerHTML= "Incorrect. I definitely want to introcude tech to the kids back home.";
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
  document.getElementById("score").innerHTML = "You're final score is " + score;
}



function scoreResponse() {
  score;
  if (score == 3) {
    document.getElementById("3right").innerHTML= "Wow! You paid attention! Fantanstic!"
  } else if (score == 2) {
    document.getElementById("2right").innerHTML= "Not bad, young grasshopper!";
  } else {
    document.getElementById("1right").innerHTML= "1 is better than none!";
  }
}
getName();

// function newButton(){
//   document.getElementById('newButton').innerHTML = '<input type="button" onClick="funQuestion();" value="One more just for funsies..." />';
// }



function startGame() {
  playGame();
  getFirst();
  getSecond();
  getThird();
  bonus();
  scoreResponse();
  newButton();
}
