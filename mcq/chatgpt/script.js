// script.js

// Sample questions data
const questionsData = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        id: 3,
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let markedForReview = {};
let timeRemaining = 1800; // 30 minutes in seconds
let timerInterval;

// Initialize the mock test
function initTest() {
    displayQuestion();
    updateNavigationButtons();
    startTimer();
}

// Display the current question
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questionsData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <div class="question">
            <h2>${questionData.question}</h2>
            <ul>
                ${questionData.options.map(option => `
                    <li>
                        <label>
                            <input type="radio" name="question-${questionData.id}" value="${option}" ${userAnswers[questionData.id] === option ? 'checked' : ''} onchange="selectAnswer('${questionData.id}', '${option}')">
                            ${option}
                        </label>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Record user's answer
function selectAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
}

// Mark the current question for review
function markForReview() {
    markedForReview[currentQuestionIndex] = true;
    alert('Question marked for review.');
}

// Go to the next question
function nextQuestion() {
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateNavigationButtons();
    }
}

// Go to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateNavigationButtons();
    }
}

// Update navigation buttons' state
function updateNavigationButtons() {
    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
    document.getElementById("next-btn").disabled = currentQuestionIndex === questionsData.length - 1;
}

// Start the timer countdown
function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

// Submit the test and display the summary
function submitTest() {
    clearInterval(timerInterval);
    const questionContainer = document.getElementById("question-container");
    const summaryContainer = document.getElementById("summary-container");
    questionContainer.style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    summaryContainer.style.display = 'block';

    const score = calculateScore();
    summaryContainer.innerHTML = `
        <h2>Test Summary</h2>
        <p>Your Score: ${score} out of ${questionsData.length}</p>
        <ul>
            ${questionsData.map(question => `
                <li>
                    <h3>${question.question}</h3>
                    <p>Your answer: ${userAnswers[question.id] || "Not answered"}</p>
                    <p>Correct answer: ${question.answer}</p>
                    <p>${markedForReview[question.id] ? 'Marked for review' : ''}</p>
                </li>
            `).join('')}
        </ul>
    `;
}

// Calculate the user's score
function calculateScore() {
    let score = 0;
    questionsData.forEach(question => {
        if (userAnswers[question.id] === question.answer) {
            score++;
        }
    });
    return score;
}

// Initialize the test on page load
window.onload = initTest;
