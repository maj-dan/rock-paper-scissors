const btns = document.querySelectorAll("button");
const display = document.querySelector("div#display");

btns.forEach((btn) => btn.addEventListener("click", playRound));

function getComputerChoice() {
    const selector = Math.floor(Math.random() * 3) + 1;
    switch (selector) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}


function playRound(event) {
    computerSelection = getComputerChoice();
    playerSelection = event.target.textContent.toUpperCase();
    if (playerSelection === "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                display.textContent = "Rock = Rock, Tie!";
                return 0;
            case "PAPER":
                display.textContent = "Rock < Paper, Computer +1!";
                return -1;
            case "SCISSORS":
                display.textContent = "Rock > Scissors, Player +1!";
                return 1;
        }
    } else if (playerSelection === "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                display.textContent = "Paper > Rock, Player +1!";
                return 1;
            case "PAPER":
                display.textContent = "Paper = Paper, Tie!";
                return 0;
            case "SCISSORS":
                display.textContent = "Paper < Scissors, Computer +1!";
                return -1;
        }
    } else if (playerSelection === "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                display.textContent = "Scissors < Rock, Computer +1!";
                return -1;
            case "PAPER":
                display.textContent = "Scissors > Paper, Player +1!";
                return 1;
            case "SCISSORS":
                display.textContent = "Scissors = Scissors, Tie!";
                return 0;
        }
    }
}