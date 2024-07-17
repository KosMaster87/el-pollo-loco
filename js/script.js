"use strict";

function startGame() {
  document.getElementById("startLayerForCanvas").style.display = "none"; //schließe startbild
  document.getElementById("canvas").style.display = "block"; //zeige spielbild
  init(); //starte den intervall
}

function gameOver() {
  document.getElementById("canvas").style.display = "none"; //entferne das spielbild
  document.getElementById("progress-bar").style.display = "none"; //entferne das spielbild
  document.getElementById("looseDiv").style.display = "block"; //zeige game over bild
  clearAllIntervals(); //beende den intervall(stoppe das spiel)
}

function winningGame() {
  music.pause();
  document.getElementById("canvas").style.display = "none";
  document.getElementById("progress-bar").style.display = "none";
  document.getElementById("winDiv").style.display = "block";
  clearAllIntervals();
}

function restart() {
  music.pause();
  document.getElementById("looseDiv").style.display = "none";
  document.getElementById("progress-bar").style.display = "none";
  document.getElementById("winDiv").style.display = "none";
  initGame();
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}
