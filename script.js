var timerCount = document.querySelector("#timer");

var secondsLeft = 75;

function timeRemaining() {
    var timerInterval = setInterval (function() {
        timerCount.textContent = secondsLeft;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval = 0)
        }
    }, 1000);
}

