var readlineSync = require("readline-sync");
var score = 0;
var chalk = require("chalk");

// <--------------array of High Scores------------->
var highScores = [
  {
    name: "Simran",
    score: 5,
  },
  {
    name: "Rishi",
    score: 4,
  }
]

// <--------------array of Questions------------->
var questions = [
  {
    question: "Where do I live? ",
    answer: "Rajkot",
  },
  {
    question: "What is my last name? ",
    answer: "Bulchandani",
  },
  {
    question: "What is my highest education? ",
    answer: "MBA",
  },
  {
    question: "How old am I? ",
    answer: "34"
  },
  {
    question: "What is my marital status? ",
    answer: "Single",
  }
]

function welcome() {
  var userName = readlineSync.question(chalk.blue("What is your name? "));

  console.log(chalk.yellow("Hey " + userName + "!" + " Welcome to 'Do You Know Milan?' quiz.  Correct answer will win you one socre, and incorrect one will lose you one score. Let's get started."));

  console.log("---------------------");
}

function play(question, answer) {
    var userAnswer = readlineSync.question(chalk.blue(question));

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Great! It's correct."));
    score = score + 1;
  } 
  else 
  {
    console.log(chalk.red("Oops! That's incorrect."))
    score = score -1;
  }
    console.log("Your score is " + score);
    console.log("-------------------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log(chalk.yellow("Your final score is " + score));
  console.log(chalk.yellow("Here are the high scores"));  

for (var i=0; i<highScores.length; i++) {
  var currentScore = highScores[i];
  console.log(chalk.bgGrey(currentScore.name + ":" + currentScore.score));
}  
  console.log(chalk.yellow("If you think you have more score than these, share a screenshot and we will update it.  Thankls for participating in the quiz"));
}

welcome();
game();
showScores();