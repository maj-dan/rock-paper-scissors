//Create player score and computer score
//Run 5 rounds of the game
    //Ask player for an choice (rock, paper or scissors)
    //if player choice is valid, store it, else ask for choice again
    //Get computer choice
    //Store computer choice
    //Compare player and computer choice
        //if player win, output message "Player +1!" and add 1 to player score
        //if computer win, output message "Computer +1!" add 1 to computer score
        //if it's a tie, output message "Tie!"
//Compare player score and computer score
    //if player score is greater, output message "Player win!"
    //if computer score is greater, output message "Computer win!"
    //if it's equal, output message "It's a tie!"

function getComputerChoice() {
    const selector = Math.floor(Math.random() * 3) + 1;
    switch (selector) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                return "Rock = Rock, Tie!";
            case "PAPER":
                return "Rock < Paper, Computer +1!";
            case "SCISSORS":
                return "Rock > Scissors, Player +1!";
        }
    } else if (playerSelection === "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                return "Paper > Rock, Player +1!";
            case "PAPER":
                return "Paper = Paper, Tie!";
            case "SCISSORS":
                return "Paper < Scissors, Computer +1!";
        }
    } else if (playerSelection === "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                return "Scissors < Rock, Computer +1!";
            case "PAPER":
                return "Scissors > Paper, Player +1!";
            case "SCISSORS":
                return "Scissors = Scissors, Tie!";
        }
    }
}