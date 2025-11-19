const cells = document.querySelectorAll("#grid td")

let turn = 0;
// turn is even => x's turn
// turn is odd 	=> o's turn

cells.forEach((cell, index) => {
	
	cell.addEventListener("click", () => {
		
		console.log("Clicked cell nr: ", index);
		
		const img = cell.querySelector("img");
		
		if( turn % 2 == 0 && img.src.endsWith("blank.jpg") ){
			
			img.src = "x.jpg";
			turn++;
			
		}
		
		else if( turn % 2 == 1 && img.src.endsWith("blank.jpg") ){
			
			img.src = "o.jpg";
			turn++;
			
		}
		
	});
	
});

