# Hangman - JS Constructor Style

---

### Description
A game of hangman playable in the terminal making use of npm packages, constructors and exports.

---

### Purpose 
This application is a simple little game of hangman, only playable in the terminal of node with the use of the Inquirer Package. It is a bonus homework assignment which was optional but seemed like a chance to practice working with JavaScript, NodeJS and more specifically the use of constructor functions in seperate files to help simplify code and achieve more complex functionality. Really, the purpose is to have fun, both making the app and playing it! :)

I decided to relive some of my youth by making use of 32 different sega genisis video game titles as the words to be guessed. I resisted using a number of titles that included numbers, any series of games and a number of titles named after movies or shows. There are a few exceptions where I just had too many good memories to resist.

--- 

### Overview

The application consists of several files, linked together using export modules. This allows for a fairly complex series of objects within an array of objects, with method functions layered throughout. In retrospect, I could have used even more dinstinct variable names to alleviate some confusion when attempting to debug but it went fairly smoothly all the same. The main logic is in the index where the game is executed and it uses a series of functions each with individually tailored console log inputs to give the user a smooth experience. Many if blocks were utilized throughout the main body of logic to ensure proper flow of play for the user, with layers of input validation.

---

### Usage

Due to the heavy use of specific console logs and the aid of the Inquirer package, the gameplay is very linear and the user is prompted at each step of play. Upon using node to run the index.js file, the user will be shown the first round of play with the blank spaces corresponding to the word(s) that are trying to be guessed. The user need only enter a letter and hit enter to proceed through gameplay, or to select yes or no when prompted if they would like to play again. At any time the user can type in 'Quit' or 'Score' (not case-sensitive) to either exit the application or to see a printout of their current wins/losses.

--- 

### Demo of Play

Here is a video clip of me showcasing the game's functionality. 
 * [Screencastify Demonstration](https://drive.google.com/file/d/1571RUkvkvaQotlRypb63Ld3KZH7zmkbD/view)

This game can also be enjoyed in the terminal if you have an environment to run NodeJS and are willing to install the npm package of [Inquirer](https://www.npmjs.com/package/inquirer). Simply copy the letter.js, word.js and index.js files to your machine, initialize npm and intall inquirer package before opening your terminal and inputting 'node index.js' before enjoying some hangman!

---

### Technologies
This application makes use of the following technologies:

1. Javascript
2. NodeJS
3. GitHub
4. npmJS Packages
    * Inquirer

---

### Credits
This application was developed by me, Max Patten, and I made use of skills and references taught to and provided to me by the UCSD Extension Full Stack Coding Bootcamp. The description of its intended functionality were provided to me by the Bootcamp along with a rough outline of how the initial constructor functions should be structured, though I had to add to each to reach desired functionality. There was no guideline for the main logic or any content of the index.js.

Kudos to my wife Lydia for helping test if I had missed any user validation for inputs.