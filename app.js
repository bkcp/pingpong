const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
let player1Count = 0;
let player2Count = 0;
const number = document.querySelector("#number");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resetBtn = document.querySelector("#reset");
let isGameOver = false;

number.addEventListener("change", (e) => {
  console.log(number.value);
  reset();
});

player1.addEventListener("click", (e) => {
  let winningScore = parseInt(number.value);
  if (!isGameOver) {
    player1Count++;
    if (player1Count === winningScore) {
      p1Score.classList.add("has-text-success");
      p2Score.classList.add("has-text-danger");
      isGameOver = true;
      player1.disabled = true;
      player2.disabled = true;
    }
    p1Score.textContent = player1Count;
  }
});

player2.addEventListener("click", (e) => {
  let winningScore = parseInt(number.value);
  if (!isGameOver) {
    player2Count++;
    if (player2Count === winningScore) {
      p2Score.classList.add("has-text-success");
      p1Score.classList.add("has-text-danger");
      isGameOver = true;
      player1.disabled = true;
      player2.disabled = true;
    }
    p2Score.textContent = player2Count;
  }
});

resetBtn.addEventListener("click", (e) => {
  reset();
});

function reset() {
  isGameOver = false;
  player1Count = 0;
  player2Count = 0;
  player1.disabled = false;
  player2.disabled = false;
  p1Score.classList.remove("has-text-success", "has-text-danger");
  p2Score.classList.remove("has-text-success", "has-text-danger");
  p1Score.textContent = "0";
  p2Score.textContent = "0";
}
