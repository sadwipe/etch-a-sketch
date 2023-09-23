import { colors, buttons, board, currentColor } from "./header.js";

let gridSize;
let selectedColor;
let isDrawing = false;

// creates the squares using the value of the button you press.
function populateBoard(input) {
  board.style.gridTemplateRows = `repeat(${input}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  for (let i = 0; i < input * input; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    board.appendChild(square);
  }
}

// if another button is pressed, it removes the current squares
function removeSquares() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

// select color & change "current color" background
function selectColor(e) {
  selectedColor = e.target.getAttribute("value");
  currentColor.style.cssText = `background-color: ${selectedColor}`;
}

function selectGrid(e) {
  if (selectedColor === undefined) {
    currentColor.style.cssText = "background-color: black";
    selectedColor = "black";
  }
  if (gridSize != e.target.getAttribute("value")) {
    // populates board only if you selected a different grid size
    gridSize = e.target.getAttribute("value");
    removeSquares();
    populateBoard(gridSize);
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        isDrawing = true;
      });
      square.addEventListener("mouseup", () => {
        isDrawing = false;
      });
      square.addEventListener("mouseenter", () => {
        if (isDrawing) {
          square.style.cssText = `background-color: ${selectedColor}`;
        }
      });
    });
  }
}

const game = () => {
  // for selecting the color
  colors.forEach((colorButton) => {
    colorButton.addEventListener("click", (e) => {
      selectColor(e);
    });
  });
  // grid buttons
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      selectGrid(e);
    });
  });
};

game();
