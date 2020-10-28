// IF clicks "#button4" is correct 
// ELSE false
// next question appears

var question1 = {
    question: "How is JavaScript added to a HTML page?",
    answers: [
            "<style>",
            "<div>",
            "<java>",
            "<script>"
            ]
}; 

question1.addEventListener("click", function() {
    if (answer === "#button4") {
        //increase score;
        //display correct at bottom;
    }
    else {
        //decrease score;
        //display wrong bottom of quiz;
    }
});


// IF clicks "#button3" is correct (true)
// ELSE false
// next question appears

var question2 = {
    "question": "How do we turn a string into numbers?",
    "answers": [
            "isNaN()",
            "toLocaleString()",
            "parseInt()",
            "valueOf()"
        ]
};

question2.addEventListener("click", function() {
    if (answer === "#button3") {
        //increase score;
        //display correct at bottom;
    }
    else {
        //decrease score;
        //display wrong bottom of quiz;
    }
});

// IF clicks "#button1" is correct (true)
// ELSE false
// next question appears

var question3 = {
    question: "How do we create a p tag in JavaScript?",
    answers: [
            "document.createElement('p')",
            "document.setAttribute('p')",
            "document.getElementById('p')",
            "document.querySelector('p')"
        ]
};

question3.addEventListener("click", function() {
    if (answer === "#button1") {
        //increase score;
        //display correct at bottom;
    }
    else {
        //decrease score;
        //display wrong bottom of quiz;
    }
});

// IF clicks "button3" is correct (true)
// ELSE false
// next question appears

var question4 = {
    question: "What does event.stopPropogation() do?",
    answers: [
            "Stops the current math function from running",
            "Stops a timer from running past 0",
            "Stops an event from continuing to happen in a parent or child element",
            "Ends the current event that is running"
        ]
};

question4.addEventListener("click", function() {
    if (answer === "#button3") {
        //increase score;
        //display correct at bottom;
    }
    else {
        //decrease score;
        //display wrong bottom of quiz;
    }
});

// IF clicks "button2" is correct (true)
// ELSE false
// next question appears

var question5 = {
    question: "What is document.querySelector() used for?",
    answers: [
            "Returns the element with the class name specified",
            "Returns the first element that matches the CSS selector",
            "Returns the element with the tag name specified",
            "Returns the element with ID name specified"
        ]
};

question5.addEventListener("click", function() {
    if (answer === "#button2") {
        //increase score;
        //display correct at bottom;
    }
    else {
        //decrease score;
        //display wrong bottom of quiz;
    }
});

