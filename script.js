
// Global variables

var secondsLeft = 150;
var score = 0;
//answer correctly, increment score by 1
var timerCount = document.getElementById("timer");
var welcomePg = document.getElementById("Welcome-Page");
var startButton = document.getElementById("startButton");
var currentQtnIndex = 0;
var questionContainter = document.getElementById("questionContainer");
var qtnEl = document.getElementById("questionText");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var answerButton = document.querySelector(".answerButton");
var alert = document.getElementById("alert");
var userForm = document.getElementById("userForm");
var submitButton = document.getElementById("submitButton");

//Array of Questions and Answers with correct answer index #
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
               "Skeptical"],
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


//click Start Button to run questionStart function and timeRemaining function

startButton.addEventListener("click", questionStart);
startButton.addEventListener("click", timeRemaining);

// Countdown Timer starts of click of Start Button
var timerInterval;

function timeOver() {
  if(secondsLeft <= 0) {
    clearInterval(timerInterval);
    timer.innerHTML = 0;
    var gameOver = document.getElementById("gameOver");
    gameOver.innerHTML = "Game Over";
    setScore();
}
};


function timeRemaining(event) {
    timerInterval = setInterval (function() {
        timerCount.innerHTML = secondsLeft;
        secondsLeft--;
        timeOver();
    }, 1000);
   
};


// WHEN click start button, the opening page hides and question/answers to display

function questionStart(event) {

      welcomePg.setAttribute("class", "hide");
      startButton.setAttribute("class", "hide");
      questionContainer.classList.remove("hide");
      questionContainer.classList.add("display");

      questionsDisplay();
  };

function questionsDisplay(){

  //Creating variable to access index 
  var currentQtn = questions[currentQtnIndex];

  //setting text in buttons and answer div
  qtnEl.innerHTML = currentQtn.question;
  btn1.innerHTML = currentQtn.answers[0];
  btn2.innerHTML = currentQtn.answers[1];
  btn3.innerHTML = currentQtn.answers[2];
  btn4.innerHTML = currentQtn.answers[3];

  console.log(currentQtn);

  alert.innerHTML = "";

  };
  
  questionContainer.addEventListener("click", questionChecker);

  function questionChecker( event ) {

     //variable which retrieves the data-index values from the HTML
     //use parseInt to change it into a number
     var choice = parseInt(event.target.getAttribute("data-index"));
     
     
     console.log(event.target.getAttribute("data-index"));


      //how user answers will determine what alert text is displayed
      //need to compare to the correct "choice"
      
      //if user answers incorrectly, message is displayed below buttons
      //15 seconds is subtracted from the time
      if (choice !== questions[currentQtnIndex].correct) {
        alert.innerHTML = "That is incorrect";
        secondsLeft -= 15;
      }

      //if user answers correctly, alert displays correct
      //score increases by 1
      else if (choice === questions[currentQtnIndex].correct) {
        alert.innerHTML = "That is correct";
        score++;
      }


    //increase the index to the next question/answer in the array
    currentQtnIndex++;


     //when the index variable reaches the length of the # of questions
     //They are alerted with Game Over
     //Question Container element hides
     //setScore function is called to store user score in local storage
     if (currentQtnIndex === questions.length) {
       var gameOver = document.getElementById("gameOver");
       gameOver.innerHTML = "Game Over";
       questionContainer.setAttribute("class", "hide");
       userForm.classList.remove("hide");

       setScore();
     }

    //run the questionsDisplay function again to display new question and answer choices
    //questionsDisplay does not use parenthesis which allows the 2 second delay
    //before the next question appears
    setTimeout(questionsDisplay, 2000);

  };

  submitButton.addEventListener("click", setScore);

  function setScore(){
    gameOver.setAttribute("class", "hide");
    alert.setAttribute("class", "hide");
    localStorage.setItem("score", score);
    //grab initials and use JSON for localStorage
    var userName = JSON.parse(localStorage.getItem("name", userName));
    localStorage.setItem("name", JSON.stringify(userInitials));
  }
  //


   




