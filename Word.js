var Letter = require("./Letter.js");

function Word(newWord) {
    this.lettersReference = newWord.split("");
    this.letters = []
    this.buildWord = function () {
        for (var i = 0; i < this.lettersReference.length; i++) {
            this.letters.push(new Letter(this.lettersReference[i]))
        }
    }
    this.display = function () {
        // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        let displayed = "";
        for (var i = 0; i < this.lettersReference.length; i++) {

            displayed += this.letters[i].compare() + " ";
        }
        return displayed;
    };
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuess = function (guess) {
        for (var i = 0; i < this.lettersReference.length; i++) {
            this.letters[i].isGuessed(guess);
        }
    }
};

module.exports = Word;

// const table = new Word("Jurassic Park");
// table.buildWord();
// console.log(table.letters);
// console.log(table.display());
// table.userGuess("a");
// console.log(table.display());
// table.userGuess("t");
// table.userGuess("j");
// table.userGuess("c");
// table.userGuess("p");
// console.log(table.display());