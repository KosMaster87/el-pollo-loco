"use strict";

function startGame() {
  document.getElementById("startLayerForCanvas").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  init();
}

function gameOver() {
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "block";
  clearAllIntervals();
}

function winningGame() {
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display = "block";
  clearAllIntervals();
}

function restart() {
  document.getElementById("gameOverLayerForCanvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display = "none";
  initGame();
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}
