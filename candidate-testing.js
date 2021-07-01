const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questionOne = "Who was the first American woman in space?";
let questionTwo = "True or False: 5 Kilometers == 5000 meters?";
let questionThree = "(5+3)/2*10 = ?";
let questionFour = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let questionFive = "What is the minimum crew size for the ISS?";
const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
const correctAnswer1 = "Sally Ride";
const correctAnswer2 = "True";
const correctAnswer3 = "40";
const correctAnswer4 = "Trajectory";
const correctAnswer5 = "3";
let correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
let candidateAnswer1;
let candidateAnswer2;
let candidateAnswer3;
let candidateAnswer4;
let candidateAnswer5;
let candidateAnswers = [candidateAnswer1, candidateAnswer2, candidateAnswer3,candidateAnswer4,candidateAnswer5];
let questionOrder = ["first","second","third","fourth","fifth"];
let grade = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? " )
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 function askQuestion() {
  
 let i = 0; 
  while (i < 5) {
    candidateAnswers[i] = input.question(questions[i]);
    i++;
  }
//candidateAnswer = input.question(question)
//console.log( "you have answered " + candidateAnswer)
}

function gradeQuiz(candidateAnswers) {

 //TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


 let scoreOutput = 0; 
  while (scoreOutput < 5) {
  console.log(
  `The ${questionOrder[scoreOutput]} question was:
   "${questions[scoreOutput]}" 
   Your answer was: "${candidateAnswers[scoreOutput]}" 
   The correct answer was: "${correctAnswers[scoreOutput]}"`);
    scoreOutput++;}
  for (let i = 0; i < 5; i++) 
  { if (candidateAnswers[i]==correctAnswers[i]) { 
    grade++} else { grade;
    }
   }
 let finalScore = ((grade / 5) * 100);
 console.log(`${candidateName}, of the 5 Questions you answered ${grade} of them correctly`);
 console.log(` Your final score for this quiz is ${finalScore}%`)
 if (finalScore >= 80) {console.log("You have passed the test! Congratulations.");} 
 else {console.log("You have failed the test - but failure is never the end! Try & try again.");}
console.log();
return grade;
}
;

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}