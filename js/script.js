const btns = document.querySelectorAll("button");

btns.forEach((btn) => btn.addEventListener("click", playRound));

//Get computer choice
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


//Compare player and computer choice
function playRound(event) {
    computerSelection = getComputerChoice();
    playerSelection = event.target.textContent.toUpperCase();
    if (playerSelection === "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                console.log("Rock = Rock, Tie!");
                return 0;
            case "PAPER":
                console.log("Rock < Paper, Computer +1!");
                return -1;
            case "SCISSORS":
                console.log("Rock > Scissors, Player +1!");
                return 1;
        }
    } else if (playerSelection === "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                console.log("Paper > Rock, Player +1!");
                return 1;
            case "PAPER":
                console.log("Paper = Paper, Tie!");
                return 0;
            case "SCISSORS":
                console.log("Paper < Scissors, Computer +1!");
                return -1;
        }
    } else if (playerSelection === "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                console.log("Scissors < Rock, Computer +1!");
                return -1;
            case "PAPER":
                console.log("Scissors > Paper, Player +1!");
                return 1;
            case "SCISSORS":
                console.log("Scissors = Scissors, Tie!");
                return 0;
        }
    }
}