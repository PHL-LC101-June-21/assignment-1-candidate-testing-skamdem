const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let candidateName = '';
let question = '';
let correctAnswer = "Sally Ride";
let candidateAnswer = '';

const questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
const correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
const candidateAnswers = [];


function askForName() {
  candidateName = input.question("Candidate Name: ");
  console.log("Greetings " + candidateName);
}

function askQuestion() {
  for (let i = 0; i < questions.length; i += 1) {
    const candidateAnswer = input.question(('\n') + (i + 1) + ") " + questions[i])
    candidateAnswers.push(candidateAnswer);
    console.log("Your Answer: " + candidateAnswers[i]);
    console.log("Correct Answer: " + correctAnswers[i]);

  }
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0

  for (let i = 0; i < questions.length; i += 1) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      correctCount += 1
    }
  }

  const grade = (correctCount) / (questions.length) * 100;
  console.log(('\n') + ">>> Overall Grade: " + grade + "% out of 100% <<<")
  if (grade >= 80) {
    console.log(">>> Status: Passed <<<")
  } else {
    console.log(">>> Status: Failed <<<")
  }


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

/*let question = input.question("Who was the first American woman in space? ")
  let candidateAnswer = question
if (candidateAnswer === "Sally Ride") {//e
    newStr = "This answer is correct";
  console.log(newStr);
} else
  console.log("This answer is incorrect");
*/
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