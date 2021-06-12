const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [];
questions.push("Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? ");
let correctAnswers = [];
correctAnswers.push("Sally Ride", "true", "40", "Trajectory", "3");
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const input = require('readline-sync');
  // candidateAnswer = input.question(question);
  let feedback = "You got wrong!";
  for (let i = 0; i < questions.length; i++){
    let index = i+1;
    candidateAnswers.push(input.question(index+") "+questions[i]));
    feedback = "You got wrong!";
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      feedback = "You got right!";
    }
    console.log(`Your Answer: ${candidateAnswers[i]}`
    +`\nCorrect Answer: ${correctAnswers[i]}`
    +`\n${feedback}`
    +`\n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //  
  // if (candidateAnswer !== correctAnswer){
  //   feedback = "Wrong answer";
  // }
  // console.log(feedback);
  let grade = candidateAnswers.length;    
  for (let i = 0; i < questions.length; i++){
    if (candidateAnswers[i].toLowerCase() !== correctAnswers[i].toLowerCase()){
      grade--;
    }    
  }
  let status = "PASSED";
  let percentage = Number(grade)*100/candidateAnswers.length; 
  if (percentage < 80){
    status = "FAILED";
  }
  console.log(`>>> Overall Grade: ${percentage}% (${grade} of ${candidateAnswers.length} responses correct) <<<\n>>> Status: ${status} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hi ${candidateName}`);
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
};