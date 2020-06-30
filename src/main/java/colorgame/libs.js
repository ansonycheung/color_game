<!--created by Anson zhang on June 30 2020.-->

let colors = generateRandomColor(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

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
      // change each color to pickedColor
      changeColors(clickedColor);
      h1.style.background = pickedColor;
    } else {
     this.style.background = "#232323";
     messageDisplay.textContent = "Try again!";
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