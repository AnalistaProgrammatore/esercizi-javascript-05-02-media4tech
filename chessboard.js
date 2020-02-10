/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
* At each position of the grid there is either a space or a "#" character.
* The characters should form a chessboard.
*/

var stoca = [""];

for (var i = 0; i < 10; i++) {
	stoca = [""];
  if (i % 2) {
    for (var x = 0; x < 10; x++) {
		stoca += " #";
		
	}
	
  } else {
    for (var y = 0; y < 10; y++) {
		stoca += "# ";   
		
	}
	
  }
  console.log(stoca);
}
