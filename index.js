var inquirer = require("inquirer");
var Word = require("./Word");

const words = ["Battletoads", "Ecco the Dolphin", "Streets of Rage", "Mortal Kombat", "Beyond Oasis", "Jurassic Park", "Sonic the Hedgehog", "NBA Jam", "Sonic and Knuckles", "Cool Spot", "Double Dragon", "Michael Jackson Moonwalker", "Lion King", "Altered Beast", "Zombies Ate My Neighbors", "Toejam and Earl", "Earthworm Jim", "Street Fighter", "Shinobi", "Rocket Knight Adventures", "Golden Axe", "Phantasy Star", "ClayFighter", "Shining Force", "Shadowrun", "Road Rash", "Blades of Vengeance", "Dune the Battle for Arrakis", "Sword of Vermilion", "Skitchin", "Prince of Persia", "Galaxy Force"]

const usedWords = [];

const divider = "\n --------------------------------------------------- \n";
const spacer = "\r\n\r\n\r\n";
const clearText = spacer+spacer+spacer+spacer+spacer+spacer+spacer+spacer+spacer+spacer;
let word;
let guesses;
let won = 0;
let lost = 0;

function wordPicker() {
    let randomVal = Math.floor(Math.random() * words.length);
    randomWord = words[randomVal];
    let mover = words.splice(randomVal, 1);
    usedWords.push(mover);
    return randomWord;
}



//gameplay block
var round = function () {
    let trigger = true
    for (let i = 0; i < word.lettersReference.length; i++) {
        if (!word.letters[i].guessed) {
            trigger = false;
        }
    }
    if (guesses < 1) {
        console.log(clearText + divider + "You ran out of guesses, better luck next time!" + divider);
        lost++;
        console.log("You've won " + won + " rounds... \n ...and lost "+ lost+ " rounds." + divider)
        playAgain();
    } else if (trigger) {
        console.log(clearText + divider + "Nicely done! You guessed the word correctly." + divider)
        won++;
        console.log("You've won " + won + " rounds... \n ...and lost "+ lost+ " rounds." + divider)
        playAgain();
    }
    else {
        // console.log(divider + spacer + word.display() + spacer + divider )
        console.log(divider + word.display() + divider + "\n  You have " + guesses + " guesses remaining..." + divider)
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "What letter would you like to guess??? (Or type quit to exit game)"
            }
        ]).then(function (user) {
           
            if (user.guess.toLowerCase() === "quit") {
                console.log(clearText +"Thanks for playing, goodbye!")
                return;
            }else if (user.guess.length > 1 || user.guess.length === 0){
                console.log(clearText +"You typed in " + user.guess.length + " characters")
                console.log("Please only enter one letter!")
                round();
                return;
            } 
            let flag = false;
            word.userGuess(user.guess);
            for (let i = 0; i < word.lettersReference.length; i++){
                if (word.letters[i].letter.toLowerCase() === user.guess) {
                    flag = true;
                }
            }
            if (flag) {
                console.log(clearText + "You guessed: "+ user.guess.toUpperCase() + divider + "Nice! That was one of the letters");
                round();
            } else {
                guesses--;
                console.log(clearText + "You guessed: "+ user.guess.toUpperCase() + divider + "Oops, that wasn't one of the letters!");
                round();
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}

function playAgain() {
    inquirer.prompt([
        {
            type: "list",
            name: "input",
            choices: ["Yes", "No"],
            message: "Would you like to play another round?"
        }
    ]).then(function (user) {
        if (user.input === "Yes") {
            gamePlay();
        } else {
            console.log("Suit yourself... see you next time!")
            return;
        }
    }).catch(function (err) {
        console.log(err);
    });
}

function gamePlay() {
    console.log(clearText + divider + "Welcome to Constructor-Hangman!\n");
    word = new Word(wordPicker());
    word.buildWord();
    word.userGuess(" ");
    guesses = 5;
    round()

};

gamePlay();




// console.log(random);

// let arr = [1,2,3,4,5,6];
// anew = arr.splice(3, 1);

// console.log(arr, anew)
// console.log(wordPicker());
// console.log(randomWord)
// wordPicker();
// console.log(randomWord)
// wordPicker();
// console.log(randomWord)
// wordPicker();
// console.log(randomWord)
// wordPicker();
// console.log(usedWords)
// console.log(words)
