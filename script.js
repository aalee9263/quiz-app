const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue Whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ]
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      {text: "Vatican City", correct: false},
      {text: "Bhutan", correct: true},
      {text: "Nepal", correct: false},
      {text: "Siri Lanka", correct: false},
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {text: "Kalahari", correct: false},
      {text: "Gobi", correct: true},
      {text: "Sahara", correct: false},
      {text: "Antarctica", correct: false},
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Australia", correct: true},
      {text: "Arctic", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click',selectAnswer);
  });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer (e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
    selec.classList.add("correct");
  }else{ selectBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";
}

startQuiz()