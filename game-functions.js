// Global variables
const startButton = document.querySelector("h2#start-btn");
const singlePlayerDiv = document.querySelector("div#single-player-div");
const multiPlayerDiv = document.querySelector("div#multi-player-div");
const cells = applyValueToCells(
  Array.from(document.querySelectorAll("div.cell"))
);
const resultTxt = document.querySelector("h2#result-txt");
const turn = document.querySelector("h3#turn-txt");
const playAgainBtn = document.querySelector("button#reset-btn");
const xWins = document.querySelector("span#x-victories");
const oWins = document.querySelector("span#o-victories");
let gameIsRunning = false;
let board = ["", "", "", "", "", "", "", "", ""];
let marker = "X";

// Functions
function startGame() {
  hideOptions();
  showInfo();
  cells = clearBoard();

  gameIsRunning = true;
  board = ["", "", "", "", "", "", "", "", ""];
  marker = "X";

  for (let cell of cells) {
    cell.style.cursor = "pointer";
  }
}

function clearBoard() {
  for (let cell of cells) {
    cell.textContent = "";
  }

  return cells;
}

function hideOptions() {
  singlePlayerDiv.classList.add("hide");
  multiPlayerDiv.classList.add("hide");
  startButton.classList.add("hide");
}

function showInfo() {
  turn.classList.remove("hide");
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

function checkFullBoard(board) {
  return !board.includes("");
}

function changePlayer(currentMarker) {
  if (currentMarker === "X") {
    return "O";
  }

  return "X";
}

function cellIsEmpty(position) {
  return board[position] === "";
}

function writeTurn(currentMarker) {
  turn.textContent = `${currentMarker} plays`;
}

function winnerMessage(marker) {
  turn.textContent = `${marker} won!`;
}

function drawMessage() {
  turn.textContent = "Board is full! It's a draw";
}

function finishGame() {
  gameIsRunning = false;
  playAgainBtn.classList.remove("hide");

  for (let cell of cells) {
    cell.style.cursor = "default";
  }
}

function changeVictories(winnerMarker) {
  if (winnerMarker === "X") {
    xWins.textContent = Number(xWins.textContent) + 1;
  } else {
    oWins.textContent = Number(oWins.textContent) + 1;
  }
}

function hideTurnText() {
  turn.classList.add("hide");
}

// Main functions
startButton.addEventListener("click", startGame);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameIsRunning) {
      console.log(board);

      if (cellIsEmpty(cell.value)) {
        writeMarker(marker, cell.value);
      }

      if (checkWinner(board)) {
        winnerMessage(marker);
        finishGame();
        changeVictories(marker);

        playAgainBtn.addEventListener("click", function () {
          hideTurnText();
          startGame();
        });
      } else if (checkFullBoard(board)) {
        drawMessage();
        finishGame();

        playAgainBtn.addEventListener("click", function () {
          hideTurnText();
          startGame();
        });
      } else {
        marker = changePlayer(marker);
        writeTurn(marker);
      }
    }
  });
});
