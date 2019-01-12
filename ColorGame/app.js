var numSquares = 6;
var colors =[];
var pickedColor;


var squares = document.querySelectorAll(".square");
//var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode button listerner
	setupModeButtons();
	//square listener
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares =3;
			}
			else{
				numSquares = 6;
			}
			reset();

		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	//click listener
		squares[i].addEventListener("click", function(){
			//grab clicked color
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				 messageDisplay.textContent = "Correct";
				 resetButton.textContent = "Play Again";
				 changeColor(clickedColor);
				 h1.style.backgroundColor = clickedColor;

			}
			else{
				this.style.backgroundColor= "#232323";
				messageDisplay.textContent = "Try again"
			}
		});

	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color
	 pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent="New Color";
	messageDisplay.textContent="";
	//change the squares
	for(var i=0; i< squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function(){
	reset();
});

//colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//squares[i].style.backgroundColor = colors[i];
	//click listener
	squares[i].addEventListener("click", function(){

	var clickedColor = this.style.backgroundColor;
	if (clickedColor === pickedColor) {
		 messageDisplay.textContent = "Correct";
		 resetButton.textContent = "Play Again";
		 changeColor(clickedColor);
		 h1.style.backgroundColor = clickedColor;

	}
	else{
		this.style.backgroundColor= "#232323";
		messageDisplay.textContent = "Try again";
	}
});

}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randoms = Math.floor(Math.random() * colors.length);
	return colors[randoms];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i< num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// pick red from 0 to 255
	var r = Math.floor(Math.random()* 256);
	// pick green from 0 to 255
	var g = Math.floor(Math.random()* 256);
	// pick blue from 0 to 255
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}