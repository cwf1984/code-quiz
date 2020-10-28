// WHEN click start button, timer starts and decrements by 1 seconds

var timerCount = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var secondsLeft = 75;

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

// WHEN click start button
// welcome page hides
// question1 appears

function welcomeTextHide() {
   var welcomeHide = document.getElementById("Welcome-Page");
    welcomeHide.style.display = "none";
};


// function questionAppear() {
//     if (welcomeTextHide === true) {
//         question1.
//     }
// }

// startButton.addEventListener("click", questionAppear);


