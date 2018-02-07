
//Get name for new virtual friend
function getName() {
  var newFriend = "";
  while (newFriend == null || newFriend.trim() == ""){
    newFriend = prompt("Hi! What's your name?");
    document.getElementById("friend").innerHTML= "Welcome " + newFriend + "!";
  }
}
getName();

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
  document.getElementById("play").innerHTML= "Okay, Let's Play!";
}
playGame();

//Question 1 of game: answer is CANCEL
var shortWar;
function getFirst() {
  shortWar = confirm("Was the shortest waar in history 39 minutes?");
    if (shortWar) {
    document.getElementById("war").innerHTML= "Dang, you got question 1 wrong!";
  } else {
    document.getElementById("war").innerHTML= "Yay! You got question 1 right!";
  }
    score++;
}
getFirst();


//Question 2 of game: answer is CANCEL
var firstSchool;
function getSecond() {
  firstSchool = confirm("Alchemy Code Lab is the first school I attended since High School?");
    if (firstSchool) {
      document.getElementById("school").innerHTML= "Uh oh, you got question 2 wrong!";
    } else {
      document.getElementById("school").innerHTML= "That's right! I've had my run at different schools.";
    }
      score++
}
getSecond();

//Question 3 of game: answer is OK




// //Respond to the score: Answer is 9
// if (score === 3) {
//   alert("Wow! You paid attention, " + newFriend + "! Fantanstic!"); //newFriend=bestFriend
// } else if (score === 2) {
//   alert("Not bad, young grasshopper!");
// } else if (score === 1) {
//   alert("1 is better than none!");
// } else {
//   alert("Womp womp...looks like you didn't get any right. Better luck next time, " + newFriend + "!");
// }





//OLD CODE
// while (newFriend == null || newFriend.trim() == "") {
//   newFriend = prompt("Hi! What's your name?");
// }
// console.log("User Name: "+newFriend);
// alert("Welcome to my page, " + newFriend + "! Want to be virtual friends?");

// var score = 0
// //Lets play game Question?
// var playgame = confirm("Now that you've read my page " +newFriend+", want to play a game to see what you remember?");
// console.log("Wants to play: " + playgame);
// if (playgame) {
//   alert("Yay! There's only 3 questions, ready?");
//   console.log("Is Ready: " + playgame);
//   //you actually don't have option; you MUST play!
// } else {
//   alert("But we're virtual friends now..let's play?"); //...not creepy at all
//   console.log("Is Ready: " + !playgame);
// }

//
// //Question 1 of game: answer is CANCEL
// shortestWar = confirm("Was the shortest war in history 39 minutes?");
// console.log("Shortest war 39 minutes? " + shortestWar);
// if (shortestWar) {
//   alert("Sorry! It was 38 minutes.\n It's okay, let's move on!");
//   console.log("Is Ready for 2: " + shortestWar);
// } else {
//   alert("Correcto! It was 38 minutes.\n Ready for question 2?");
//   console.log("Is Ready for 2: " + !shortestWar);
//   score++;
// }
// //Question 2 of game: answer is CANCEL
// firstSchool = confirm("Alchemy Code Lab is the first school I attended since High School?");
// console.log("Alchemy?: " + firstSchool);
// if (firstSchool) {
//   alert("Darn, it's actually the 6th! Let's go for the last question!");
//   console.log("Is Ready for 3: " + firstSchool);
// } else {
//   alert("You got it! I've had my run at different schools. Get ready for the last question!");
//   console.log("Is Ready for 3: " + !firstSchool);
//   score++;
// }
// //Question 3 of game: answer is OK
// techyKids = confirm("Do I want to do workshops to introduce kids to tech?");
// console.log("Kid Workshops: " + techyKids);
// if (techyKids) {
//   alert("Yeeeah! I do want to introduce kids from my neighborhood back home into tech!"); //I'm going going back back to cali cali
//   score++;
//   alert("Okay, let's see how you did...");
//   console.log("Ready for score: " + techyKids);
//   alert("You got " + score + " out of 3 right!");
// } else {
//   alert("Incorrect. I definitely want to introcude tech to the kids back home.");
//   alert("Okay, let's see how you did...");
//   console.log("Ready for score: " + !techyKids);
//   alert("You got " + score + " out of 3 right!");
// }
// //Respond to the score: Answer is 9
// if (score === 3) {
//   alert("Wow! You paid attention, " + newFriend + "! Fantanstic!"); //newFriend=bestFriend
// } else if (score === 2) {
//   alert("Not bad, young grasshopper!");
// } else if (score === 1) {
//   alert("1 is better than none!");
// } else {
//   alert("Womp womp...looks like you didn't get any right. Better luck next time, " + newFriend + "!");
// }
// console.log("Score: " + score);
//
// //Bonus Guess question
// playbonus = alert("Here's a bonus question to up your score!\n Try to guess my favorite number!");
// console.log("Ready for bonus: " + playbonus );
// var bonus = prompt("My favorite number is between 1-11, what is it?");
// while (bonus != 9) {
//   if (bonus < 9 && bonus >= 1) {
//     alert("Too low, try again");
//     bonus = prompt("My favorite number is between 1-11, what is it?");
//   } else if (bonus < 1) {
//     alert("Don't be silly, that's not between 1-11! Try again.");
//     bonus = prompt("My favorite number is between 1-11, what is it?");
//   } else if (bonus > 11) {
//     alert("That number is definitely not between 1-11, try again!");
//     bonus = prompt("My favorite number is between 1-11, what is it?");
//   }else {
//     alert("Too high, try again");
//     bonus = prompt("My favorite number is between 1-11, what is it?");
//   }
// }
// //Give final score
// score++;
// alert("What witchery is this?!\n\n You got it, my favorite number is 9!");
// alert("You're new score is " + score +"!")
// // alert("Thanks, " + newFriend + ". I hope to get to know you too!") //muahahaha
// console.log("Final Score: " + score);
