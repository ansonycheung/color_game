<!--created by Anson zhang on June 30 2020.-->

let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");


init();

function init() {
  // mode buttons event listener
  setupModeButtons();
  // squares event listener
  setSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
      // figure out how many squares to show
      // pick new colors
      // pick a new pickedColor
      // update page to reflect changes
      reset();
    })
  }
}

function setSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
      // grab color of clicked square
      let clickedColor = this.style.background;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        // change each color to pickedColor
        changeColors(clickedColor);
        h1.style.background = pickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
      }
    })
  }
}

function reset(){
  // generate all new colors
  colors = generateRandomColor(numberOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for(let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
})

function generateRandomColor(number) {
  // make an array of color
  let array = [];
  // repeat number times
  for (let i = 0; i < number; i++) {
    // get random color and push into array
    array.push(randomColor());
  }
  // return that array
  return array;
}

function randomColor() {
  // pick a "red" from 0 -255
  let red = Math.floor(Math.random() * 256);
  // pick a "green" from 0 -255
  let green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 -255
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  let randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber];
}