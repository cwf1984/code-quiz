
// Global variables

var secondsLeft = 150;
var score = 150;
var currentQtnIndex = 0;
var welcomePg = document.getElementById("Welcome-Page");
var startButton = document.getElementById("startButton");
var questionContainter = document.getElementById("questionContainer");
var qtnEl = document.getElementById("questionText");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var timerCount = document.getElementById("timer");

var answerButton = document.querySelector(".answer-button");

//Array of Questions and Answers
var questions = [
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
];

startButton.addEventListener("click", questionStart);
startButton.addEventListener("click", timeRemaining);

// Countdown Timer starts of click of Start Button

function timeRemaining(event) {
    var timerInterval = setInterval (function() {
        timerCount.innerHTML = secondsLeft;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval = 0);
        }
    }, 1000);
};


// WHEN click start button

function questionStart(event) {

      welcomePg.setAttribute("class", "hide");
      startButton.setAttribute("class", "hide");
      questionContainer.classList.remove("hide");
      questionContainer.classList.add("display");

      questionsDisplay();
  };

  function questionsDisplay(){

    var currentQtn = questions[currentQtnIndex];
    qtnEl.textContent = currentQtn.question;
    btn1.textContent = currentQtn.answers[0];
    btn1.textContent = currentQtn.answers[1];
    btn1.textContent = currentQtn.answers[2];
    btn1.textContent = currentQtn.answers[3];
    console.log(currentQtn);
  };



 
    // for (var i = 0; i < questions.length; i++) {
      //loop over just answers
      //when answer, rerun answers
      // qIndex = 0
      //claer innerHTML of questionContainer

    // }

        // if ( answers === correct) {
            //alert displays "correct"
        // }

        // else {
            //alert displays "wrong"
            //decrease score by 10
        // }

      // Loop over every question object
      // for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        // var answer = confirm(questions[i].q);

        // Compare answers
        // if (
        //   (answer === true && questions[i].a === "t") ||
        //   (answer === false && questions[i].a === "f")
        // ) {
          // Increase score
      //     score++;
      //     alert("Correct!");
      //   } else {
      //     alert("Wrong!");
      //   }
      // }

   




   


        // if (
        //     (questions[i].answers === false)
        // ) {
        //     score--;
               
        // }
        // else {
            
        // }
   




