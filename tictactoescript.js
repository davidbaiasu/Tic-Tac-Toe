const cells = document.querySelectorAll("#grid td");

const turn_header = document.getElementById("turn");
const turn_span = document.getElementById("turn_span");

const reset_button = document.getElementById("reset_button");

let turn = 0; // % 2 == 0 => X's turn, % 2 == 1 => O's turn
let result = ""
let game_over = false;
let board = ["", "", "", "", "", "", "", "", ""];

const winning_combos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left → bottom-right
    [2, 4, 6]  // diagonal top-right → bottom-left
];

cells.forEach((cell, index) => {
	
	cell.addEventListener("click", () => {
		
		if( game_over == true ){
			return;
		}
		
		console.log("Clicked cell nr: ", index);
		
		const img = cell.querySelector("img");
		
		if( turn % 2 == 0 && img.src.endsWith("blank.jpg") ){
			
			img.src = "x.jpg";
			turn++;
			board[index] = "x";
			
		}
		
		else if( turn % 2 == 1 && img.src.endsWith("blank.jpg") ){
			
			img.src = "o.jpg";
			turn++;
			board[index] = "o";
			
		}
		
		result = checkWinner();
		
		if( result === "x" ){
			
			turn_header.textContent = "!!! X wins !!!"; 
			game_over = true;
			
		}
		
		else if( result === "o" ){
			
			turn_header.textContent = "!!! O wins !!!"; 
			game_over = true;
			
		}
		
		if( turn > 8 ){
			
			showDraw();
			game_over = true;
			
		}
		else{
		
			changeTurn(turn);
		
		}
	});
	
});

reset_button.addEventListener("click", resetGame);

function changeTurn(turn){
	
	if( turn % 2 == 0 ){
		
		turn_span.textContent = "X";
		
	}
	else{
		
		turn_span.textContent = "O";
		
	}
	
}	

function checkWinner(){
	
	for( const combo of winning_combos ){
		
		const [a, b, c] = combo;
		
		if( board[a] != "" && board[a] === board[b] && board[a] === board[c]){
			
			console.log("win");
			return board[a];
		
		}
		
	}
	
	return null;
	
}

function resetGame(){
	
	turn = 0;
	result = "";
	game_over = false;
	board = ["", "", "", "", "", "", "", "", ""];
	
	turn_header.innerHTML = `It's <span id="turn_span">X</span>'s turn!`;
	
	cells.forEach(cell => {
		
        const img = cell.querySelector("img");
        img.src = "blank.jpg";
		
    });
	
}

function showDraw(){
	
	turn_header.textContent = "!!! DRAW !!!"; 
	
}