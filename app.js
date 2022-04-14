const score = document.querySelector("#scoreDisplayed");
let player1Count = 0;
let player2Count = 0;
const number = document.querySelector("#number");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resetBtn = document.querySelector("#reset");

player1.addEventListener("click", (e) => {
  let winningScore = parseInt(number.value);
  if (player1Count !== winningScore) {
    player1Count++;
    score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
  }

  if (player1Count === winningScore) {
    score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
    setTimeout(() => {
      alert("Player 1 wins!");
      reset();
    }, 200);
  }
});

player2.addEventListener("click", (e) => {
  let winningScore = parseInt(number.value);
  if (player2Count !== winningScore) {
    player2Count++;
    score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
  }

  if (player2Count === winningScore) {
    score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
    setTimeout(() => {
      alert("Player 2 wins!");
      reset();
    }, 200);
  }
});
resetBtn.addEventListener("click", (e) => {
  reset();
});

function reset() {
  player1Count = 0;
  player2Count = 0;
  number.value = "";
  score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
}
