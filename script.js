

//This code controls the timer for the quiz
var timeEl = document.querySelector(".time");
//This value controls how many seconds the timer is counting down from
var secondsLeft = 120;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000); //This number here is in milliseconds so every 1000 ms = 1 second
  }
  //This is calling on the countdown timer function, will put this in with a button that starts the quiz
  setTime();