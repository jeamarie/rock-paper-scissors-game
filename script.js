console.log("Hello, World!");

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

console.log(getComputerChoice());