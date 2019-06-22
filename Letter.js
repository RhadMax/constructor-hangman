function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.compare = function () {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    };
    this.isGuessed = function (guess) {
        if (guess === this.letter.toLowerCase()) {
            this.guessed = true;
        }
        if (this.letter === " ") {
            this.guessed = true
        }
    }
};

// var a = new Letter("a");
// console.log(a.compare());
// a.guessed("a");
// console.log(a.compare());

module.exports = Letter;