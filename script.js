//on load, Welcome-Page appears
//question-container is not visible

window.onload = function() {
    qtnContainter.setAttribute("class", "hide");
  }
// WHEN click start button, timer starts and decrements by 1 seconds

var timerCount = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var secondsLeft = 150;
var qtnContainter = document.getElementById("question-container");
var welcomePg = document.getElementById("Welcome-Page");
var answerButton = document.getElementsByClassName("answerbtn");
var score = 150;

questions = [
    {question: "Seredipity",
     answers: ["The positive occurence and development of events by change",
               "Existing or being everywhere at the same time", 
               "To find and bring to light", 
               "A calm mind that is free from agitation"],
     correct: 0},

     {question:"Petrichor",
     answers: ["A type of intertebrate found only in caves in the Mediterranean  Sea",
               "A type of moss", 
               "The sound of dry leaves rustling in the wind", 
               "The scent produced by the first rain after a period of warm, dry weather."],
     correct: 3},

     {question: "Effervescent",
     answers: ["Flat",
               "Fizzy", 
               "Soothing", 
               "Medicinal"],
     correct: 1},

     {question: "Ephemeral",
     answers: ["Spiritual",
               "Of a similuar nature or character", 
               "Principal source", 
               "Lasting for a very short time"],
     correct: 3},

     {question: "Borborigmus",
     answers: ["Surgical removal of body tissue",
               "Erosion of rock due to strong winds", 
               "Intestinal Rumbling", 
               "A chemical agent that interferes with another substance"],
     correct: 2},

     {question: "Neutropenia",
     answers: ["Very low levels of a type of white blood cell.",
               "A clotting disorder where are platelet levels are dangerously low", 
               "B12 deficiency which is caused by a weakened stomach lining or autoimmune condition", 
               "White blood cells drastically decline due to a parasitic infection from a mosquito bite"],
     correct: 0},

     {question: "Bemused",
     answers: ["Entertained",
               "Puzzled", 
               "Enlightened", 
               "Confused"],
     correct: 1},

     {question: "Dichotomy",
     answers: ["Division into two parts",
               "Requiring continual and often ineffective effort", 
               "An insubstantial form", 
               "To act as a decoy"],
     correct: 0},

     {question: "Erudite",
     answers: ["Having or occuring in great variety",
               "Having or showing knowledge that is gained by studying", 
               "To feel penitence, remorse or regret for", 
               "To offer as an example, reason or proof in a discussion or analyis"],
     correct: 1},

     {question: "Encumber",
     answers: ["Sideways",
               "Unimaginative", 
               "Burden", 
               "Scrupulous"],
     correct: 2}
]


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

// WHEN click start button

function questionStart( ) {
    if (welcomePage.style.display==="none") {
        questionContainer.style.display = "block";
    }
    else {
        questionContainer.style.display = "none";
    }};

function startGame () {
    welcomePg.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");
    qtnContainter.setAttribute("class", "visible");

    for (var i = 0; i < questions.length; i++) {
        
        if (
            (questions[i].answers === false)
        ) {
            score--;
               
        }
        else {
            
        }
}};

    




