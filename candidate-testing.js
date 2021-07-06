const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [];
  questions.push("Who was the first American woman in space? ", "True or false: 5 kilometer === 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? ");
  
let correctAnswers = [];
  correctAnswers.push("Sally Ride", "true", "40", "Trajectory", "3");
let candidateAnswers = [];

// TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("Please enter your name: " ); 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //const input = require('readline-sync');
  //candidateAnswer = input.question(question);

  let feedback = "Good job, you answered that question correctly!";
  for (let i = 0; i < questions.length; i++){
    let index = i+1;
    candidateAnswers.push(input.question(index+") "+questions[i]));
    feedback = "Good job, you answered that question correctly!";
    if (candidateAnswers[i].toLowerCase() !== correctAnswers[i].toLowerCase()){
      feedback = "Oh no, you answered that question incorrectly.";
    }
    console.log(`Your Answer:  ${candidateAnswers[i]}`
    +`\nCorrect Answer: ${correctAnswers[i]}`
    +`\n${feedback}`
    +`\n`);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //if (candidateAnswer === correctAnswer){
  //  console.log("Good job, you answered the question //correctly!");
 // } else {
 //   console.log("Oh no, you answered the question //incorrectly.");
  //}
 let grade = candidateAnswers.length;
 for (let i = 0; i < questions.length; i++){
   if (candidateAnswers[i].toLowerCase() !== correctAnswers[i].toLowerCase()){
     grade--;
     //return grade;
   }
 }
 let status = "YOU PASSED!";
 let percentage = Number(grade)/questions.length*100;
 if (percentage < 80){
   status = "YOU FAILED";
 }
 console.log(`>>> Overall Grade: ${percentage}% (${grade} of ${candidateAnswers.length} responses correct) <<<\n>>> Status: ${status} <<<`);
 return percentage;
}
  
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + (candidateName) + "\n");
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