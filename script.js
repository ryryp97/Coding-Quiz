
//This variable stores the element where time will be displayed
var timeEl = document.querySelector(".time");

//These values control the initial conditions
var secondsLeft = 60;

var score = 0;

var index = 0;

//These variables are storing the locations of certain elements

var startPage = document.getElementById("start-page");

var question1 = document.getElementById("question1");

var questions = document.getElementsByClassName("question");



var correctAnswer = document.getElementsByClassName("correct");

var wrongAnswer = document.getElementsByClassName("wrong");



var answer = document.querySelectorAll("span");

var startBtn = document.getElementById("startBtn");

var displayScore = document.getElementById("displayScore");

//This function controls the timer
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || secondsLeft < 0 || index > 7) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000); //This number here is in milliseconds so every 1000 ms = 1 second
};

//This function hides the start page
function hideStart() {
  startPage.setAttribute("style", "display: none");
};


//This function contains all the actions for the end of the quiz like resetting the timer and score and also stores the score value along with the initials of the examinee
function endQuiz() {
  for (i = 0; i < questions.length; i++) {
    questions[i].style.display = "none";
  };
  startPage.setAttribute("style", "display: block");
  alert("Your score was " + score);
  var name = prompt("Enter your initials");
  localStorage.setItem("score", score);
  localStorage.setItem("name", name);
  
  secondsLeft = 60;
  score = 0;
  index = 0;
  timeEl.textContent = "";
}

//This function brings the first question onto the page
function startQuiz() {
  question1.setAttribute("style", "display: block");

};

//These for loops allow for the next question to be brought on screen once an answer is selected and depending on the answer selected, properly add to the score/take away time
for (var i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", function () {
    score += 1;
    index += 1;
    console.log("correct");
    console.log(score);
    nextQuestion();
  })
}

for (var i = 0; i < wrongAnswer.length; i++) {
  wrongAnswer[i].addEventListener("click", function () {
    secondsLeft -= 2;
    index += 1;
    console.log("wrong");
    nextQuestion();
  })
}

//This function is nested within the for loops and is what allows the next question to be displayed and the previous question to be hidden
function nextQuestion() {
  for (var i = 0; i < questions.length; i++) {
    questions[i].style.display = "none";
    questions[index].style.display = "block";
  };
};

//These event listeners are for the intitial start button press and start the quiz
startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", hideStart);
startBtn.addEventListener("click", startQuiz);

//This adds an event listener to the score button and get the stored name and score data from local storage
displayScore.addEventListener("click", function getScore() {
  alert(localStorage.getItem("name") + " " + localStorage.getItem("score"))
})
