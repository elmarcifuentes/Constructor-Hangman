// create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.

// Require letter.js
var Letter = require('./letter.js');
// RegExr - Matches a character in the range [a-z]. Case insensitive flag "i"
var alphabet = /[a-z]/i;


function word(guess) {
    this.guess = guess;
    this.guessWord = guess.toLowerCase().split('');

    this.builWord = function() {
        var wordArray = [];
        for (var i = 0; i < this.guess.length; i++) {
            // The test() method tests for a match in a string.
            if (alphabet.test(this.guess[i])) {
                wordArray.push(new Letter(this.guess[i].toLowerCase()));
            } else {
                wordArray.push(this.guess[i])
            }
        }
        return wordArray;
    };

    this.displayWord = this.builWord();

    this.checkAlphabetInput = function(letter) {
        var input = false;

        for (var index in this.guessWord) {
            if (letter.toLowerCase() === this.guessWord[index]) {
                this.displayWord[index].guess = true;
                input = true;
            }
        }
        return input;
    };

    this.joinWord = function() {
        return this.guessWord.join('');
    };

    this.showWord = function() {
        var show = '';

        for (var index in this.displayWord) {
            if (alphabet.test(this.displayWord[index])) {
                show += this.displayWord[index].charFunc();
            } else {
                show += this.displayWord[index];
            }
        }
        return show;
    }
}

module.exports = word;