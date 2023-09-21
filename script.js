import { colors, buttons, board, currentColor } from "./header.js";

let gridSize;
let color;
let click = false;

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
      if (color === undefined) {
        currentColor.style.cssText = "background-color: black";
        color = "black";
        console.log(color);
      }
      if (gridSize != e.target.getAttribute("value")) {
        // populates board only if you selected a different grid size
        gridSize = e.target.getAttribute("value");
        removeSquares();
        populateBoard(gridSize);
      }
    });
  });
  // for selecting the color
  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      color = e.target.getAttribute("value");
      currentColor.style.cssText = `background-color: ${color}`;
    });
  });
};

game();
