var number = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// The questions array
var questions = [{
    question: "Which NBA team won the 2019 championship?",
    answerList: ["The Toronto Rapters\"", "The Brooklyn Nets\"", "The New York Knicks\"", "The Boston Celtics\""],
    answer: 0
},{
    question: "\"Which NBA player won the 2019 MVP award?",
    answerList: ["Paul George\"", "Kawhi Leonard\"", "Giannis Antetokounmpo\"", "Lebron James\""],
    answer: 2
},{
    question: "\"Which NBA player won the 2019 most improved player award?",
    answerList: ["Kyrie Irving\"", "Klay Thompson\"", "Stephen Curry\"", "Pascal Siakam\""],
    answer: 3
},{
   
}];

$("#start").on("click", function() {

    // This Hides the Start button
    $(this).hide();

    // This Displays the  initial time countdown
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

    // This is the Start timer countdown
    run();
   

    // Question One
    $("#questionOne").html("<h3>" + questions[0].question + "</h3>");
    $("#answerOne").html("<input type='radio' name='answerOne' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answerOne' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answerOne' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answerOne' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#questionTwo").html("<h3>" + questions[1].question + "</h3>");
    $("#answerTwo").html("<input type='radio' name='answerTwo' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answerTwo' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answerTwo' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answerTwo' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#questionThree").html("<h3>" + questions[2].question + "</h3>");
    $("#answerThree").html("<input type='radio' name='answerThree' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answerThree' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answerThree' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answerThree' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

  

    // This is the Submit button
    $("#submit").html("<button id='done' class='btn'>Click Here To Finish!</button>");

    // The click event runs keepingScore() and displayResults() when user clicks Done button
    $("#done").on("click", function() {

        // This keeps track of score based on correct, incorrect, and unanswered
        keepingScore();

        // This displays the results 
        displayResults();
        
    });
});

// This is the Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  This Decreases the number by one.
    number--;

    //  This shows the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        // This is the run stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  This clears intervalId
    clearInterval(intervalId);
}

// This function is used for displaying results in terms of the correct, incorrect, and unanswered --- I want to put all of these tags inside a div so that i can just hide the parent div
function displayResults() {

    $("#time").hide();
    $("#questionOne").hide();
    $("#answerOne").hide();
    $("#questionTwo").hide();
    $("#answerTwo").hide();
    $("#questionThree").hide();
    $("#answerThree").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>You Have Finished!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// THis function keeps score in terms of correct, incorrect, and unanswered --- I still want to make this a reusable piece so that I don't have to repeat it for each question
function keepingScore() {

    var userAnswerOne = $("input[name='answerOne']:checked").val();
    var userAnswerTwo = $("input[name='answerTwo']:checked").val();
    var userAnswerThree = $("input[name='answerThree']:checked").val();

    // Question 1
    if (userAnswerOne === undefined) {

        unanswered++;
    }
    else if (userAnswerOne == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question Two
    if (userAnswerTwo === undefined) {

        unanswered++;
    }
    else if (userAnswerTwo == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question Three
    if (userAnswerThree === undefined) {

        unanswered++;
    }
    else if (userAnswerThree == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;}
    }
