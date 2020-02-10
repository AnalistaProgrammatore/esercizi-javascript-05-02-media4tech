/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
* At each position of the grid there is either a space or a "#" character.
* The characters should form a chessboard.
*/

var arr = [""];

for (var i = 0; i < 10; i++) {
  if (i % 2) {
    for (var x = 0; x < 10; x++) {
		arr[i] += " #";
	}
	console.log(arr[i]);
	
  } else {
    for (var y = 0; y < 10; y++) {
		arr[i] += "# ";   
	}
	console.log(arr[i]);
 }
