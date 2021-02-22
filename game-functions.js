// Global variables
const startButton = document.querySelector("h2#start-btn");
const singlePlayerDiv = document.querySelector("div#single-player-div");
const multiPlayerDiv = document.querySelector("div#multi-player-div");
const cells = [
  document.querySelector("div#cell-0"),
  document.querySelector("div#cell-1"),
  document.querySelector("div#cell-2"),
  document.querySelector("div#cell-3"),
  document.querySelector("div#cell-4"),
  document.querySelector("div#cell-5"),
  document.querySelector("div#cell-6"),
  document.querySelector("div#cell-7"),
  document.querySelector("div#cell-8"),
];
let gameIsRunning = false;
let board = ["", "", "", "", "", "", "", "", ""];

// Functions
function startGame() {
  hideOptions();
  gameIsRunning = true;

  for (let cell of cells) {
    cell.style.cursor = "pointer";
  }
}

function hideOptions() {
  singlePlayerDiv.classList.add("hide");
  multiPlayerDiv.classList.add("hide");
  startButton.classList.add("hide");
}

// Main functions
startButton.addEventListener("click", startGame);
