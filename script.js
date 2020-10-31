//on load, Welcome-Page appears
//question-container is not visible
// WHEN click start button, timer starts and decrements by 1 seconds

var timerCount = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var secondsLeft = 75;
var qtnContainter = document.getElementById("question-container");
var welcomePg = document.getElementById("Welcome-Page");
var answerBtn = document.querySelectorAll("answerbtn");
var questions = [

    {question: "How do we turn a string into numbers?",
     answers: ["isNaN()",
                 "toLocaleString()", 
                 "parseInt()", 
                 "valueOf()"],
     correct: 2},

    {question: "How do we create a p tag in JavaScript?",
     answers: ["document.createElement('p')", 
                 "document.setAttribute('p')", 
                 "document.getElementById('p')", 
                 "document.querySelector('p')"],
     correct: 0},

    {question: "What does event.stopPropogation() do?",
     answers: ["Stops the current math function from running", 
                 "Stops a timer from running past 0", 
                 "Stops an event from continuing to happen in a parent or child element", 
                 "Ends the current event that is running"],
     correct: 2},

    {question: "What is document.querySelector() used for?",
     answers: ["Returns the element with the class name specified", 
                 "Returns the first element that matches the CSS selector",
                 "Returns the element with the tag name specified", 
                 "Returns the element with ID name specified"],
     correct : 1}
];

window.onload = function() {
    qtnContainter.setAttribute("class", "hide");
  }

// Countdown Timer starts of click of Start Button

function timeRemaining() {
    var timerInterval = setInterval (function() {
        timerCount.innerHTML = secondsLeft;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval = 0)
        }
    }, 1000);
}



startButton.addEventListener("click", timeRemaining);
startButton.addEventListener("click", startGame);

function startGame () {
    welcomePg.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");
    qtnContainter.setAttribute("class", "visible")
    //set attribute hide to Welcome Page and start button
   //click start button
   //welcome page hides 
   //question container appears with question and answers in buttons
       qtn1();
    //onClick qtn2 function runs
    // answerBtn.addEventListener("click", qtn2);
    //function of next questions
    //call the function
}

function qtn1() {
var questionText = document.getElementById("question");
questionText.textContent = questions[0].question;
var answerChoice1 = document.getElementById("button1");
answerChoice1.textContent = questions[0].answers[0];
var answerChoice2 = document.getElementById("button2");
answerChoice2.textContent = questions[0].answers[1];
var answerChoice3 = document.getElementById("button3");
answerChoice3.textContent = questions[0].answers[2];
var answerChoice4 = document.getElementById("button4");
answerChoice4.textContent = questions[0].answers[3];

};


//add event listener to click and go to next question

function qtn2() {
    var questionText = document.getElementById("question");
    questionText.textContent = questions[1].question;
    var answerChoice1 = document.getElementById("button1");
    answerChoice1.textContent = questions[1].answers[0];
    var answerChoice2 = document.getElementById("button2");
    answerChoice2.textContent = questions[1].answers[1];
    var answerChoice3 = document.getElementById("button3");
    answerChoice3.textContent = questions[1].answers[2];
    var answerChoice4 = document.getElementById("button4");
    answerChoice4.textContent = questions[1].answers[3];
    };



// function quesitonArrayLoop() {
//     for (var i = 0; i < questions.length; i++) {

//     }
// } 



    

// WHEN click start button

// function questionStart( ) {
//     if (welcomePage.style.display==="none") {
//         questionContainer.style.display = "block";
//     }
//     else (
//         questionContainer.style.display = "none";
//     )
   
// welcome page hides

// document.getElementById("Welcome-Page").style.display = "none";
// question1 appears
// document.getElementById("question-containter").style.display="block";

// stopPropagation ???

// if (document.getElementById("Welcome-Page").style.display = "none";) {
//     event.stopPropagation;
// }

// };


// function welcomeTextHide() {
//    var welcomeHide = document.getElementById("Welcome-Page");
//     welcomeHide.style.display = "none";
// };


// function welcomeOnLoad() {
//     var welcomePg = document.getElementById("Welcome-Page");
//     welcomePg.style.visibility = "visible";
//     var qtnContain = document.getElementById("question-containter");
//     qtnContain.style.visibility = "none";
// }


// beginBtn.addEventListener("click", qtn1);

// function questionAppear() {
//     if (welcomeTextHide === true) {
//         question1.
//     }
// }




