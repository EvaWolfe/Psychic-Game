computer has to randomly choose a letter
user has to be able to type the letter they want to pick
keep track of wins 
keep track of losses
keep track of the letters guessed

tell the computer what letters it can choose

make sure that the letters are not case sensitive

write the letter the computer chooses to the console that way you can make sure that it's working. 



var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getRndLetter {
	var i = Math.floor(Math.random() * 26)
	return letters[i]
}

var hold = getRndLetter