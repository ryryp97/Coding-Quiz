
//This code controls the timer for the quiz
var timeEl = document.querySelector(".time");
//This value controls how many seconds the timer is counting down from
var secondsLeft = 120;

var score = 0;

var correctAnswer = document.getElementById("correct");

var answers = document.querySelectorAll("span");

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000); //This number here is in milliseconds so every 1000 ms = 1 second
  };
  //This is calling on the countdown timer function, will put this in with a button that starts the quiz
  // setTime();


// for (var i=0; i < answers.length; i++) {
//   answers[i].addEventListener("mouseover", mouseOver() );

//   answers[i].addEventListener("mouseout", mouseOut());
// };



// function mouseOver() {
//   answers.setAttribute("style", "background-color: purple");
// };

// function mouseOut() {
//   answers.setAttribute("style", "background-color: blue");
// };


  console.log(answers.length);



  // correctAnswer.addEventListener("click", addScore());


