const questions = [
  "Quelle planète est connue comme la 'Planète Rouge' ?",
  "Quelle mission a permis aux humains de marcher sur la Lune pour la première fois ?",
  "Quelle est la plus grande planète du système solaire ?",
  "Quel télescope spatial a succédé à Hubble en 2021 ?",
  "Quel est le nom du premier satellite artificiel lancé dans l’espace ?",
];

const choicesArray = [
  ["Mars", "Jupiter", "Venus", "Mercure"],
  ["Apollo 11", "Soyouz 1", "Gemini 4", "Skylab"],
  ["Saturne", "Mars", "Jupiter", "Neptune"],
  ["James Webb", "Spitzer", "Voyager", "Kepler"],
  ["Sputnik 1", "Explorer 1", "Luna 2", "Vostok 3"],
];

const correctAnswers = [
  "Mars",
  "Apollo 11",
  "Jupiter",
  "James Webb",
  "Sputnik 1",
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").innerHTML =
      questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
      btn.style.display = "inline-block"; // On s’assure que les boutons soient visibles
    }
    document.getElementById("retryButton").style.display = "none"; // Cacher le bouton retry si on est encore dans le quiz
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `🚀 Score final : ${score} / ${questions.length}`;
    document.getElementById("question").innerHTML = "";
    for (let i = 0; i < 4; i++) {
      document.getElementById(`choice${i + 1}`).style.display = "none";
    }
    document.getElementById("retryButton").style.display = "block"; // Afficher le bouton Retry
  }
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function retryGame() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").innerHTML = "";
  displayQuestion();
}

document.getElementById("retryButton").addEventListener("click", retryGame);

displayQuestion();
