let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
setUpModeButtons();
setUpSquares();
}

function setUpModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			this.classList.add("selected");
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
	
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else if (this.textContent === "Hard") {
				numSquares = 6;
			} else {
				numSquares = 12;
			}
			reset();
		});
}
}

function setUpSquares() {
	for(let i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			let clickedColor = this.style.backgroundColor;
	
	
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}

function reset() {
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// change colors of squares
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
};


resetButton.addEventListener("click", function() {
	reset();
	})

function changeColors(color) {
	//loop through all squares
	for(let i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length); 
	return colors[random]; // picks random color from color variable

}

function generateRandomColors(num) {
  // make an array
  let arr = [];

  for(let i = 0; i < num; i++) {

  arr.push(randomColor());
  }
// return that array
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}