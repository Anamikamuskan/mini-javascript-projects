let question_no = -1;
let question, option1, option2, option3, option4;
let interval;
let totalTime = 24 * 60 + 59; // 24 minutes and 59 seconds
let spentTime = Array(25).fill(0); // Assuming 25 questions

document.getElementById("start").addEventListener("click", function() {
    let x = document.getElementById("select").value;
    if (x == 0) {
        alert("Please select your default language");
    } else {
        if (x == 1) {
            question = Equestion;
            option1 = Eoption1;
            option2 = Eoption2;
            option3 = Eoption3;
            option4 = Eoption4;
        } else if (x == 2) {
            question = Hquestion;
            option1 = Hoption1;
            option2 = Hoption2;
            option3 = Hoption3;
            option4 = Hoption4;
        }
        startTheTest();
    }
});

function startTheTest() {
    question_no = 0; // Reset to the first question
    clearInterval(interval); // Clear any previous timers
    startQuizTimer(); // Start the new quiz timer
    document.getElementById("third").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.querySelector("aside").style.display = "block";
    document.getElementById("innerMain").style.overflowY = "visible";
    loadQuestion(); // Load the first question
}

function loadQuestion() {
    document.getElementById("number").innerHTML = question_no + 1;
    document.getElementById("s1").innerHTML = question[question_no];
    document.getElementById("1").innerHTML = `<input type="radio" id="ch1" class="checkbox" name="Answer"> ${option1[question_no]}`;
    document.getElementById("2").innerHTML = `<input type="radio" id="ch2" class="checkbox" name="Answer"> ${option2[question_no]}`;
    document.getElementById("3").innerHTML = `<input type="radio" id="ch3" class="checkbox" name="Answer"> ${option3[question_no]}`;
    document.getElementById("4").innerHTML = `<input type="radio" id="ch4" class="checkbox" name="Answer"> ${option4[question_no]}`;
}

function nextQue() {
    if (question_no < question.length - 1) {
        question_no++;
        loadQuestion();
        if (question_no === question.length - 1) {
            document.getElementById("nextQue").style.display = "none";
            document.getElementById("submit").style.display = "block";
        }
    }
}

function preQue() {
    if (question_no > 0) {
        question_no--;
        loadQuestion();
        document.getElementById("submit").style.display = "none";
        document.getElementById("nextQue").style.display = "block";
    }
}

function startQuizTimer() {
    let min = Math.floor(totalTime / 60);
    let sec = totalTime % 60;

    interval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(interval);
            submitQuiz(); // Automatically submit the quiz when time runs out
            return;
        }

        document.getElementById("min").innerHTML = min.toString().padStart(2, "0");
        document.getElementById("sec").innerHTML = sec.toString().padStart(2, "0");

        sec--;
        if (sec < 0) {
            sec = 59;
            min--;
        }
        totalTime--;
    }, 1000);
}

function submitQuiz() {
    clearInterval(interval); // Stop the timer
    // Logic for calculating results and displaying them
    alert("Quiz submitted!"); // Placeholder for submission logic
}

// Sample questions and options
let Equestion = [
    "What does HTTP stand for?",
    "Which programming language is primarily used for iOS development?",
    "What is the main function of DNS in networking?",
    // Add more questions...
];

let Eoption1 = [
    "HyperText Transfer Protocol",
    "Swift",
    "Translate IP addresses into domain names",
    // Add more options...
];

// Add similar arrays for other languages and options...

// Event listeners for navigation buttons
document.getElementById("next").addEventListener("click", nextQue);
document.getElementById("pre").addEventListener("click", preQue);
