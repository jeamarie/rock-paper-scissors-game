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
    let humanChoice = prompt("Choose your weapon:").toLowerCase();
    return humanChoice;
}

// console.log(getHumanChoice());

//function for replaying a round
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let roundOne = playRound(getHumanChoice(), getComputerChoice());
    let roundTwo = playRound(getHumanChoice(), getComputerChoice());
    let roundThree = playRound(getHumanChoice(), getComputerChoice());
    let roundFour = playRound(getHumanChoice(), getComputerChoice());
    let roundFive = playRound(getHumanChoice(), getComputerChoice());

    console.log(roundOne);
    console.log(roundTwo);
    console.log(roundThree);
    console.log(roundFour);
    console.log(roundFive);
    if (humanScore > computerScore) {
        return `You win!
        Your score = ${humanScore}
        Computer's score = ${computerScore}`
    } else if (humanScore < computerScore) {
        return `You lose!
        Your score = ${humanScore}
        Computer's score = ${computerScore}`
    } else {
        return `It's a draw.
        Your score = ${humanScore}
        Computer's score = ${computerScore}`
    }

    return `human = ${humanScore}, computer = ${computerScore}`
    // function for a round of play
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return "It's a draw...";
        } else if ((humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "rock")) {
            humanScore++;
            return `Nice! Your ${humanChoice} beats the computer's ${computerChoice}.`;
        } else {
            computerScore++;
            return `Uh oh! The computer's ${computerChoice} beats your ${humanChoice}.`;
        }
    }
}

console.log(playGame());

// console.log(playRound(getHumanChoice(), getComputerChoice()));
// console.log(`human = ${humanScore}, computer = ${computerScore}`);