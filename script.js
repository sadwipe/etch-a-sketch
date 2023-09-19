import { colors, buttons, board } from "./header.js";

let gridSize;
let color;

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

// if other button is pressed, it removes the current squares
function removeSquares() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

const game = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (gridSize != e.target.getAttribute("value")) {
        // populates board only if you selected a different grid size
        gridSize = e.target.getAttribute("value");
        removeSquares();
        populateBoard(gridSize);
      }
    });
  });
};

game();
