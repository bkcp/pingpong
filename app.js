const number = document.querySelector("#number");
const resetBtn = document.querySelector("#reset");
let isGameOver = false;

let player1 = {
  score: document.querySelector("#p1Score"),
  count: 0,
  btn: document.querySelector("#player1"),
};
let player2 = {
  score: document.querySelector("#p2Score"),
  count: 0,
  btn: document.querySelector("#player2"),
};

number.addEventListener("change", (e) => {
  console.log(number.value);
  reset();
});

function updateScore(player, opponent) {
  let winningScore = parseInt(number.value);
  if (!isGameOver) {
    player.count++;
    if (player.count === winningScore) {
      player.score.classList.add("has-text-success");
      opponent.score.classList.add("has-text-danger");
      isGameOver = true;
      player.btn.disabled = true;
      opponent.btn.disabled = true;
    }
    player.score.textContent = player.count;
    opponent.score.textContent = opponent.count;
  }
}

player1.btn.addEventListener("click", (e) => {
  updateScore(player1, player2);
});
player2.btn.addEventListener("click", (e) => {
  updateScore(player2, player1);
});

resetBtn.addEventListener("click", (e) => {
  reset();
});

function reset() {
  isGameOver = false;
  player1.count = 0;
  player2.count = 0;
  player1.btn.disabled = false;
  player2.btn.disabled = false;
  player1.score.classList.remove("has-text-success", "has-text-danger");
  player2.score.classList.remove("has-text-success", "has-text-danger");
  player1.score.textContent = "0";
  player2.score.textContent = "0";
}
