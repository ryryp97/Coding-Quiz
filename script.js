
//This variable stores the element where time will be displayed
var timeEl = document.querySelector(".time");

//This value controls how many seconds the timer is counting down from
var secondsLeft = 10;

var score = 0;

//These variables are storing the locations of certain elements

var startPage = document.getElementById("start-page");

var question1 = document.getElementById("question-one");

var correctAnswer = document.getElementsByClassName("correct");

var wrongAnswer = document.getElementsByClassName("wrong");

var answer = document.querySelectorAll("span");

var startBtn = document.getElementById("startBtn");


function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000); //This number here is in milliseconds so every 1000 ms = 1 second
};

function hideStart() {
  startPage.setAttribute("style", "display: none");
};

function endQuiz() {
  startPage.setAttribute("style", "display: block");
  secondsLeft = 10;
  timeEl.textContent = "";
}


function startQuiz() {
  question1.setAttribute("style", "display: block");
};


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

console.log(wrongAnswer);

console.log(question1);

console.log(correctAnswer);

console.log(score);

// for (var i = 0; i < answer.length; i++) {
//   answer[i].addEventListener("click", function () {
//     if (answer.className = "correct") {
//       console.log("test");
//     }
//     else {
//       console.log("oops");
//     }
//   });
// };

for (var i = 0; i < correctAnswer.length; i++) {
  correctAnswer[i].addEventListener("click", function() {
    score += 1;
    console.log("correct")
    console.log(score);
  })
}

for (var i = 0; i < wrongAnswer.length; i++) {
  wrongAnswer[i].addEventListener("click", function() {
    secondsLeft -= 2;
    console.log("wrong")
  })
}


startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", hideStart);
startBtn.addEventListener("click", startQuiz);




