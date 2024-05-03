const btns = document.querySelectorAll("button");
const display = document.querySelector("div#display");
const score = document.querySelector("#score");

//stored player and computer score in variables so it's possible
//to still show the score of 5 when the game reset
let playerScore = 0;
let computerScore = 0;

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
    //get the selection with the button that player clicked
    //compare all choices in upper case
    playerSelection = event.target.textContent.toUpperCase();
    if (playerSelection === "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                display.textContent = "Rock = Rock, Tie!";
                updateScore(0);
                break;
            case "PAPER":
                display.textContent = "Rock < Paper, Computer +1!";
                updateScore(-1);
                break;
            case "SCISSORS":
                display.textContent = "Rock > Scissors, Player +1!";
                updateScore(1);
                break;
        }
    } else if (playerSelection === "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                display.textContent = "Paper > Rock, Player +1!";
                updateScore(1);
                break;
            case "PAPER":
                display.textContent = "Paper = Paper, Tie!";
                updateScore(0);
                break;
            case "SCISSORS":
                display.textContent = "Paper < Scissors, Computer +1!";
                updateScore(-1);
                break;
        }
    } else if (playerSelection === "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                display.textContent = "Scissors < Rock, Computer +1!";
                updateScore(-1);
                break;
            case "PAPER":
                display.textContent = "Scissors > Paper, Player +1!";
                updateScore(1);
                break;
            case "SCISSORS":
                display.textContent = "Scissors = Scissors, Tie!";
                updateScore(0);
                break;
        }
    }
    //end the game and reset the score
    if (playerScore >= 5 && computerScore < 5){
        display.textContent = "Player won, Congratulations!";
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore < 5 && computerScore >= 5){
        display.textContent = "Oh no, machines are comming for us!"
        playerScore = 0;
        computerScore = 0;
    }
}

function updateScore(roundResult) {
    if (roundResult > 0){
        playerScore += 1;
    }else if (roundResult < 0){
        computerScore += 1;
    }
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}