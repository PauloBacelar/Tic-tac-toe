// Global variables
const startButton = document.querySelector("h2#start-btn");
const singlePlayerDiv = document.querySelector("div#single-player-div");
const multiPlayerDiv = document.querySelector("div#multi-player-div");
const cells = applyValueToCells(
  Array.from(document.querySelectorAll("div.cell"))
);
let gameIsRunning = false;
let board = ["", "", "", "", "", "", "", "", ""];
let marker = "X";

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

function applyValueToCells(cells) {
  for (let i in cells) {
    cells[i].value = i;
  }

  return cells;
}

function writeMarker(marker, position) {
  cells[position].textContent = marker;
}

// Main functions
startButton.addEventListener("click", startGame);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    writeMarker(marker, cell.value);
  });
});
