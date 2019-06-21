var inquirer = require("inquirer");
var Word = require("./Word");

const words = ["Battletoads", "Ecco the Dolphin", "Streets of Rage", "Mortal Kombat", "Beyond Oasis", "Jurassic Park", "Sonic the Hedgehog", "NBA Jam", "Sonic and Knuckles", "Cool Spot", "Double Dragon", "Michael Jackson Moonwalker", "Lion King", "Altered Beast", "Zombies Ate My Neighbors", "Toejam and Earl", "Earthworm Jim", "Street Fighter", "Shinobi", "Rocket Knight Adventures", "Golden Axe", "Phantasy Star", "ClayFighter", "Shining Force", "Shadowrun", "Road Rash", "Blades of Vengeance", "Dune the Battle for Arrakis", "Sword of Vermilion", "Skitchin", "Prince of Persia", "Galaxy Force"]

const usedWords = [];

const divider = "\n --------------------------------------------------- \n";
const spacer = "\r\n\r\n\r\n";


function wordPicker() {
    let randomVal = Math.floor(Math.random() * words.length);
    randomWord = words[randomVal];
    let mover = words.splice(randomVal, 1);
    usedWords.push(mover);
    return randomWord;
}



//gameplay block

function gamePlay() {
    console.log(spacer + spacer + spacer + divider + spacer + "Welcome to Constructor-Hangman!\n");
    var word = new Word(wordPicker());
    word.buildWord();
    let guesses = 10;
    round();
    function round() {
        console.log(word.lettersReference.join(""))
        word.userGuess(" ");
        console.log(divider + spacer + word.display() + spacer + "You have " + guesses + " guesses remaining..." + divider)
        inquirer.prompt([

            {
                type: "input",
                name: "guess",
                message: "What letter would you like to guess???"
            }

        ]).then(function (user) {

        });
    }
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
