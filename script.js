// global variables
let computerScore = 0;
let humanScore = 0;

// function for randomizing the computer's choice of weapon
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "rock";
    } else if (computerChoice == 1) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}

// console.log(getComputerChoice());

// function for getting the human's choice of weapon
function getHumanChoice() {
    let humanChoice = prompt("choose your weapon:");
    return humanChoice;
}

// console.log(getHumanChoice());

// function for a round of play
function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "paper")) {
        return "it's a tie...";
    } else if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
        return `you win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `you lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(`human = ${humanScore}, computer = ${computerScore}`);