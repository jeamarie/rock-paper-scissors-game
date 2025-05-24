console.log("Hello, World!");

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

console.log(getComputerChoice());