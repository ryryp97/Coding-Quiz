
//This variable stores the element where time will be displayed
var timeEl = document.querySelector(".time");

//This value controls how many seconds the timer is counting down from
var secondsLeft = 100;

var score = 0;

//These variables are storing the locations of certain elements

var startPage = document.getElementById("start-page");

var question = document.getElementById("question-one");

var correctAnswer = document.getElementsByClassName("correct");

var answer = document.querySelectorAll("span");

var startBtn = document.getElementById("startBtn");


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // sendMessage();
    }

  }, 1000); //This number here is in milliseconds so every 1000 ms = 1 second
};

function hideStart() {
  startPage.setAttribute("style", "display: none");
};


function startQuiz() {
  question.setAttribute("style", "display: block");
};


//This is calling on the countdown timer function, will put this in with a button that starts the quiz
// setTime();




// answer.addEventListener("mouseover", mouseOver);

// answer.addEventListener("mouseout", mouseOut);


// for (var i = 0; i < answer.length; i++) {
//   function mouseOver() {
//     answer[i].setAttribute("style", "background-color: purple");
//   };

//   function mouseOut() {
//     answer[i].setAttribute("style", "background-color: blue");
//   };
// };

console.log(answer);

console.log(startPage);

console.log(question);

for (var i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", function () {
    console.log("test");
  });
};



startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", hideStart);
startBtn.addEventListener("click", startQuiz);




