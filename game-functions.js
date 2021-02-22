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
  board[position] = marker;
  cells[position].textContent = marker;
  cells[position].style.cursor = "default";
}

function checkWinner(board) {
  for (let i = 0; i <= 6; i += 3) {
    if (
      board[i] === board[i + 1] &&
      board[i] === board[i + 2] &&
      board[i] !== ""
    ) {
      return true;
    }
  }

  for (let i = 0; i <= 2; i++) {
    if (
      board[i] === board[i + 3] &&
      board[i] === board[i + 6] &&
      board[i] !== ""
    ) {
      return true;
    }
  }

  return (
    (board[0] === board[4] && board[0] === board[8] && board[0] !== "") ||
    (board[6] === board[4] && board[6] === board[2] && board[6] !== "")
  );
}

// Main functions
startButton.addEventListener("click", startGame);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameIsRunning) {
      writeMarker(marker, cell.value);
    }
  });
});
