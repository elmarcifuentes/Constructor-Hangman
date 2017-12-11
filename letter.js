// Used for each letter in the current word. 
// Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

function Letter(character) {
	
		this.character = character;
		this.placeholder = "_ ";
		this.guess = false;
	
		this.charFunc = function() {
			var char = " ";
			if (this.guess) {
				char = this.character;
			} else {
				char = this.placeholder;
			}
			return char;
		}
	}
	
	module.exports = Letter;