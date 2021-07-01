const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = "";
let questions = ["\n\tWho was the first American woman in space? ", "\n\tTrue or false: 5 kilometer == 5000 meters? ", "\n\t((5+3)/2)*10=? ", "\n\tGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "\n\tWhat is the minimum crew size for the ISS? "] ;
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question('What is your name? ');
 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] =  input.question(questions[i]);
  }
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(`\n--------------------------------------------------------------------------------------`)  
console.log(`\n\t\t\t\t\t\t\t\t\t\tANSWER KEY`);
  let numGrade = 0;
  for (let i = 0; i < correctAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numGrade = numGrade + 1;
     }
}
let grade = (numGrade/5)*100;
  
for (let i = 0; i < questions.length; i++){
  console.log(`\n\nQuestion ${[i+1]} \nYour Answer: ${candidateAnswers[i]}\n\nCorrect Answer: ${correctAnswers[i]}`)
  }

console.log(`\n\n------------------------------------------------------------------------------------`);
console.log(`\n\nYOUR GRADE: ${grade}%\n`);

if (grade < 80){
  console.log(`You've failed. Do not pass go, do not collect $200. Try again.`);
} else {
  console.log(`Congrats ${candidateName}, you're smarter than a 5th grader! :)`);
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nHey there, ${candidateName}.`)
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