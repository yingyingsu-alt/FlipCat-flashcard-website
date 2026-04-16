const questions = [
    {
        question:"What is the largest planet in our solar system?",
        answers: [
            {text:"Mars", correct: false},
            {text:"Jupiter", correct: true},
            {text:"Earth", correct: false},
            {text:"Venus", correct: false},
        ]
    },
    {
        question: "What is the fastest animal on land?",
        answers: [
            {text: "Tiger", correct: false},
            {text: "Cheetah", correct: true},
            {text: "Horse", correct: false},
            {text: "Lion", correct: false},
        ]
    },
    {
        question: "What country has the most tornadoes?",
        answers: [
            {text: "China", correct: false},
            {text: "India", correct: false},
            {text: "United States", correct: true},
            {text: "England", correct: false},
        ]
    },
    {
        question: "How many colors are in the rainbow?",
        answers: [
            {text: "Eight", correct: false},
            {text: "Six", correct: false},
            {text: "Seven", correct: true},
            {text: "Nine", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
