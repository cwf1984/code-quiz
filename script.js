var timerCount = document.querySelector("#timer");
var secondsLeft = 75;

document.getElementById("timer").innerHTML = "Time Remaining: " + secondsLeft;


function timeRemaining() {
    var timerInterval = setInterval (function() {
        timerCount.textContent = "Time Remaining: " + secondsLeft;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval = 0)
        }
    }, 1000);
}

