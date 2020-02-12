/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
* At each position of the grid there is either a space or a "#" character.
* The characters should form a chessboard.
*/

for (var i = 0; i < 8; i++) {
	stoca = "";
  if (i % 2) {
    for (var x = 0; x < 4; x++) {
		stoca += " #";
		
	}
	
  } else {
    for (var y = 0; y < 4; y++) {
		stoca += "# ";   
		
	}
	
  }
  console.log(stoca);
}
