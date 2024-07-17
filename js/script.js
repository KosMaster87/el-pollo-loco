"use strict";

// ------------------------------------------------------------------------
// HTML manager
// ------------------------------------------------------------------------
function startGame() {
  document.getElementById("startLayerForCanvas").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  // initGame();
}

function gameOver() {
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "block";
  clearAllIntervals();
}

function winningGame() {
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display =
    "block";
  clearAllIntervals();
}

function restart() {
  document.getElementById("gameOverLayerForCanvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display =
    "none";
  initGame();
}

// ------------------------------------------------------------------------
// PopUp Event
// ------------------------------------------------------------------------
/**
 * Open the "instruction PopUp".
 */
function openInstructionPopUpSelf() {
  let popUp = document.getElementById("instructionPopUpSelf");

  if (popUp.style.display == "block") {
    popUp.style.display = "none";
    document.removeEventListener("click", closeInstructionPopUpSelf_outside);
  } else {
    popUp.style.display = "block";
    document.addEventListener("click", closeInstructionPopUpSelf_outside);
  }
}

/**
 * Close the "instruction PopUp" with an eventlistener and remove the eventlistener.
 */
function closeInstructionPopUpSelf_outside(event) {
  let popUp = document.getElementById("instructionPopUpSelf");
  let instructionBtn = document.getElementById("instructionPopUpButton");

  if (!popUp.contains(event.target) && event.target !== instructionBtn) {
    popUp.style.display = "none";
    document.removeEventListener("click", closeInstructionPopUpSelf_outside);
  }
}

// ------------------------------------------------------------------------
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}
