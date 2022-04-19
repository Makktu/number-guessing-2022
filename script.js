"use strict";

document.onkeypress = function (e) {
    if (e.key === "y" && awaitingPlayer) {
        awaitingPlayer = false;
        gameReset();
    }
    // use e.keyCode
};

const playerMessages = document.querySelector(".higher-lower");

let awaitingPlayer = false;

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
    playerMessages.textContent = "";
    computerNumber = Math.floor(Math.random() * 100) + 1;
    guessesTaken.textContent = `Guesses Taken: ${guessedAlready}`;
    guessesLeft.textContent = `Guesses Remaining: ${guessesToGo}`;
}

function guessSubmitted() {
    let playerGuess = playerGuessBox.value;
    if (+playerGuess % 1 !== 0 || +playerGuess < 1 || +playerGuess > 100) {
        playerMessages.textContent =
            "invalid input - enter numbers between 1 and 100 only";
        return;
    }
    if (+playerGuess < computerNumber || +playerGuess > computerNumber) {
        guessedAlready++;
        guessesToGo--;
        if (+playerGuess < computerNumber)
            playerMessages.textContent = "Higher";
        if (+playerGuess > computerNumber) playerMessages.textContent = "Lower";
        guessesTaken.textContent = `Guesses Taken: ${guessedAlready}`;
        guessesLeft.textContent = `Guesses Remaining: ${guessesToGo}`;
        if (guessedAlready == 10) {
            playerMessages.textContent = "Game over - lose";
            gameReset();
        }
    }

    if (+playerGuess == computerNumber) {
        playerMessages.innerHTML = "You win!<br><br>Play Again? (Y/N)";
        awaitingPlayer = true;
    }
    // check that input is valid - notify if not and return without changing any values

    // check if input = number - notify if so and give option for another game
}
