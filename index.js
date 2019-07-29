	var squareNum = 6;
	var colors = [];
	var chosenColor;
	var squares = document.querySelectorAll(".square");
	var displayColor = document.getElementById("displayColor");
	var message = document.getElementById("message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var modeButtons = document.querySelectorAll(".mode");

	initialize();

	function setupButtons() {
		for(var k = 0; k < modeButtons.length; ++k){
			modeButtons[k].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? squareNum = 3: squareNum = 6;
				reset();
			});
		}
	}

	function setupSquares() {
		for(var k = 0; k < squares.length; k++){
			squares[k].style.backgroundColor = colors[k];

			squares[k].addEventListener("click", function() {
				var clickedColor = this.style.backgroundColor;

				if(clickedColor === chosenColor){
					message.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					assignColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
				}
				else{
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again";
				}
			});
		}
	}

	function initialize(){
		setupButtons();
		setupSquares();
		reset();
	}



	function reset() {
		colors = generateColors(squareNum);
		chosenColor = selectColor();
		displayColor.textContent = chosenColor;
		message.textContent = "";
		resetButton.textContent = "New Colors";
		for(var k = 0; k < squares.length; k++){
			if(colors[k]){
				squares[k].style.backgroundColor = colors[k];
				squares[k].style.display = "block";
			}
			else {
				squares[k].style.display = "none";
			}
		}
		h1.style.backgroundColor = "steelblue";
	}

	resetButton.addEventListener("click", function(){
		reset();
	});


	function assignColors(color){
		for(var k = 0; k < squares.length; k++){
			squares[k].style.backgroundColor = color;
		}
	}

	function selectColor(){
		var num = Math.floor(Math.random() * colors.length);
		return colors[num];
	}

	function generateColors(num){
		var arr = [];

		for(var k = 1; k <= num; ++k){
			arr.push(randomColor());
		}

		return arr;
	}

	function randomColor(){
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);

		return "rgb(" + red + ", " + green + ", " + blue + ")";
	}