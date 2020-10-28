// WHEN click start button, get quiz questions

var timerCount = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var secondsLeft = 75;

// document.getElementById("timer").innerHTML = "Time Remaining: " + secondsLeft;


function timeRemaining() {
    var timerInterval = setInterval (function(event) {
        timerCount.innerHTML = secondsLeft;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval = 0)
        }
    }, 1000);
}

startButton.addEventListener("click", timeRemaining);
