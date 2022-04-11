const score = document.querySelector("#scoreDisplayed");
let player1Count = 0;
let player2Count = 0;
const number = document.querySelector("#number");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");

player1.addEventListener("click", (e) => {
  player1Count++;
  score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
});

player2.addEventListener("click", (e) => {
  player2Count++;
  score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
});
reset.addEventListener("click", (e) => {
  player1Count = 0;
  player2Count = 0;
  score.innerText = `${player1Count}` + " " + "to" + " " + `${player2Count}`;
});
