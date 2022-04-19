"use strict";

const playerMessages = document.querySelector(".higher-lower");

const playerGuessBox = document.getElementById("guess");
playerGuessBox.value = "";

let guessedAlready = 0;
let guessesToGo = 10;

let guessesMade = []; // check input later and prevent player guessing numbers already guessed

const guessesTaken = document.querySelector(".guess-taken");
const guessesLeft = document.querySelector(".guess-left");

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", guessSubmitted);

guessesTaken.textContent = `Guesses Taken: ${guessedAlready}`;
guessesLeft.textContent = `Guesses Remaining: ${guessesToGo}`;

let computerNumber = Math.floor(Math.random() * 100) + 1;

function gameReset() {
    guessedAlready = 0;
    guessesToGo = 10;
    guessesMade = [];
    playerGuessBox.value = "";
    computerNumber = Math.floor(Math.random() * 100) + 1;
    guessesTaken.textContent = `Guesses Taken: ${guessedAlready}`;
    guessesLeft.textContent = `Guesses Remaining: ${guessesToGo}`;
}

function guessSubmitted() {
    let playerGuess = playerGuessBox.value;
    if (+playerGuess % 1 !== 0 || +playerGuess < 1 || +playerGuess > 100) {
        console.log("invalid input - enter numbers between 1 and 100 only");
        return;
    }
    if (+playerGuess < computerNumber || +playerGuess > computerNumber) {
        guessedAlready++;
        guessesToGo--;
        if (+playerGuess < computerNumber) console.log("Higher");
        if (+playerGuess > computerNumber) console.log("Lower");
        guessesTaken.textContent = `Guesses Taken: ${guessedAlready}`;
        guessesLeft.textContent = `Guesses Remaining: ${guessesToGo}`;
        if (guessedAlready == 10) {
            console.log("Game over - lose");
            gameReset();
        }
    }

    if (+playerGuess == computerNumber) {
        console.log("You win!");
        gameReset();
    }
    // check that input is valid - notify if not and return without changing any values

    // check if input = number - notify if so and give option for another game
}
