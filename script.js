let current = 0;

const flagImg = document.getElementById("flag");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");

function showFlag() {
  flagImg.src = flags[current].image;
  answerInput.value = "";
  result.textContent = "";
}

function checkAnswer() {
  const userAnswer = answerInput.value.toLowerCase().trim();
  const correctAnswer = flags[current].answer;

  if (userAnswer === correctAnswer) {
    result.textContent = "✅ Bonne réponse !";
  } else {
    result.textContent = "❌ Mauvaise réponse. C’était : " + correctAnswer;
  }

  current++;
  if (current < flags.length) {
    setTimeout(showFlag, 1500);
  } else {
    result.textContent = "🎉 Quiz terminé !";
  }
}

showFlag();
