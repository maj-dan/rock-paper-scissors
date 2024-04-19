
//Run 5 rounds of the game
function playGame() {
    let playerScore = 0;
    for (let i = 0; i < 5; i++){
        //if player win, output message "Player +1!" and add 1 to player score
        //if computer win, output message "Computer +1!" dec 1 to player score
        //if it's a tie, output message "Tie!"
        playerScore += playRound(getPlayerChoice(), getComputerChoice());
    }
    //if player score is greater than 0, output message "Player win!"
    //if player score is lesser than 0, output message "Computer win!"
    //if it's 0, output message "It's a tie!"
    if (playerScore > 0) {
        console.log("Player win!");
    } else if (playerScore < 0) {
        console.log("Computer win!");
    } else {
        console.log("It's a tie!");
    }
}

//Get computer choice
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


//Compare player and computer choice
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
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

//Ask player for an choice (rock, paper or scissors)
//if player choice is valid, store it, else ask for choice again
function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Enter Rock, Paper or Scissors:");
    } while (playerChoice.toUpperCase()!== "ROCK" && playerChoice.toUpperCase()!== "PAPER" && playerChoice.toUpperCase()!== "SCISSORS");
    return playerChoice;
}