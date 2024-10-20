let questions = [
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Tierra", "Marte", "Júpiter", "Saturno"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let options = document.getElementById("answers");
    options.innerHTML = '';
    q.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index);
        options.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto.");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("question").innerText = "Tu puntuación es: " + score;
    document.getElementById("answers").innerHTML = '';
}

document.addEventListener("DOMContentLoaded", showQuestion);
