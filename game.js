var word = require("./word.js");
var hangmanWords = ["weak", "loser", "huge", "fake", "millions", "billions", "Wall"];

function game() {
    this.wins = 0;
    this.loss = 0;
    this.lives = 0;
    this.lettersUsed = [];
    this.word;

    this.newGame = function() {
        this.lives = 5;
        this.lettersUsed = [];
        this.word = this.randomWord();
    };

    this.randomWord = function() {
        var random = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
        return new word(random);
    };

    this.outcome = function(string) {
        switch (string) {
            case "correct":
                console.log("Way to go, you sure know your president!");
                break;
            case "wrong":
                console.log("Keep Trying, you have", this.lives + " guesses left");
                break;
            case "same":
                console.log("This letter has already been used");
                break;
            default:
                console.log("error")
        }
    }

}

module.exports = game;