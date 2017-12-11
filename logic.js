var inquirer = require("inquirer");
var game = require("./game.js");


// Create an instance from game.js
var hangman = new game();

// initialize game function
function startHangman() {
    // call newGame function from game.js
    hangman.newGame();
    // call gamePrompt function for inquirer prompt
    gamePrompt();
}

// inquirer prompt function / input validation
function gamePrompt() {
    console.log(hangman.word.showWord());
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Enter one of Donald Trump's most frequently used words:",
        // Validate User input
        validate: function(value) {
            var correctInput = /[a-z]/i;
            // The test() method tests for a match in a string.
            if (value.length === 1 && correctInput.test(value)) {
                return true;
            } else {
                return "Letters only";
            }
        }
    }]).then(function(answer) {
        var userGuess = answer.userGuess.toLowerCase();
        if (hangman.lettersUsed.indexOf(userGuess) === -1) {
            hangman.lettersUsed.push(userGuess);
            var correct = hangman.word.checkAlphabetInput(userGuess);

            if (correct) {
                hangman.outcome("correct");
            } else {
                hangman.lives--;
                hangman.outcome("wrong");
            }
        } else {
            hangman.outcome("same");
        }


        var updateWins = hangman.word.showWord() === hangman.word.joinWord();

        if (updateWins) {
            hangman.wins++;
            console.log("You Won! You can now join the White House.");
            console.log("Answer: " + hangman.word.joinWord());
        } else if (hangman.lives > 0) {
            gamePrompt();
        } else {
            hangman.loss++;
            console.log("You Lost! Please follow Donald Trump on Twitter and try again.");
            console.log("The correct answer was: " + hangman.word.joinWord());
        }
    });
}

// call function to initialize game
startHangman();