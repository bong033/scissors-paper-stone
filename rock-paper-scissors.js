
//const score = JSON.parse(localStorage.getItem("score"));
class Score {
  win = 0;
  lose = 0;
  tie = 0;
}

const score = new Score();
console.log(score.win);

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let resultElement = document.querySelector(".js-result");
  let statusElement = document.querySelector(".js-status");

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      statusElement.innerHTML = "Tie.";
      score.tie += 1;
    } else if (computerMove === "paper") {
      statusElement.innerHTML = "You lose.";
      score.lose += 1;
    } else if (computerMove === "scissors") {
      statusElement.innerHTML = "You win.";
      score.win += 1;
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "paper") {
      statusElement.innerHTML = "Tie.";
      score.tie += 1;
    } else if (computerMove === "scissors") {
      statusElement.innerHTML = "You lose.";
      score.lose += 1;
    } else if (computerMove === "rock") {
      statusElement.innerHTML = "You win.";
      score.win += 1;
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      statusElement.innerHTML = "Tie.";
      score.tie += 1;
    } else if (computerMove === "rock") {
      statusElement.innerHTML = "You lose.";
      score.lose += 1;
    } else if (computerMove === "paper") {
      statusElement.innerHTML = "You win.";
      score.win += 1;
    }
  }

  resultElement.innerHTML = `You: <img class="game-images" src="./Images/${playerMove}-emoji.png" alt="${playerMove}"> - Computer: <img class="game-images" src="./Images/${computerMove}-emoji.png" alt="${computerMove}"> `;

  //localStorage.setItem("score", JSON.stringify(score));

  totalScore();
}

function pickComputerMove() {
  let computerMove = "";
  const ramdonNumber = Math.random();

  if (ramdonNumber < 1 / 3) {
    computerMove = "rock";
  } else if (ramdonNumber >= 1 / 3 && ramdonNumber < 2 / 3) {
    computerMove = "paper";
  } else if (ramdonNumber >= 2 / 3 && ramdonNumber <= 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function totalScore() {
  let totalSessionElement = document.querySelector(".js-total-session");

  totalSessionElement.innerHTML = `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
}

function reset() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  //localStorage.setItem("score", JSON.stringify(score));
}
