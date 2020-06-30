<!--created by Anson zhang on June 30 2020.-->

let numberOfSquares = 6;
let colors = generateRandomColor(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberOfSquares = 3;
  colors = generateRandomColor(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // let some square disappear or appear in web console
  // document.querySelectorAll(".square")[2].style.display = "none"
  // document.querySelectorAll(".square")[2].style.display = "block"
})

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  colors = generateRandomColor(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function () {
  // generate all new colors
  colors = generateRandomColor(numberOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    // grab color of clicked square
    let clickedColor = this.style.background;
    // compare color to pickedColor
    console.log(clickedColor,pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Paly Again?";
      // change each color to pickedColor
      changeColors(clickedColor);
      h1.style.background = pickedColor;
    } else {
     this.style.background = "#232323";
     messageDisplay.textContent = "Try again";
    }
  })
}

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