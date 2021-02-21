const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters == 5 kilometers?  ", "(5 + 3)/2*10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Please enter your name: ');

}
/*[i=1] + ") " + */
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (i = 0; i < questions.length; i++){
  candidateAnswers[i] = input.question("\n" + questions[i]);
   /*candidateAnswers[i] = */console.log('Your Answer: '+`${candidateAnswers[i]}`);
   /*correctAnswers[i] = */console.log('Correct Answer: '+ `${correctAnswers[i]}`+ '\n');
 }

}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let grade = 0;
let totalGrade = 0;

for (let i = 0; i < questions.length; i++) {

      if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) {
        grade+=1;
      }
  }
  totalGrade = (grade / questions.length) * 100;
  console.log(">>>> Overall Grade: " +`${totalGrade}`+ "% " + `${grade} ` + "of " + `${questions.length}` + " responses correct) <<<<");

      if (totalGrade >= 80) {
        console.log(">>> Status: PASSED <<<");
      } else {
        console.log(">>> Status: FAILED <<<");
      }

}



function runProgram() {
  askForName(candidateName);
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
};


