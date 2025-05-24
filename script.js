let computerScore = 0;
let humanScore = 0;

// function for randomizing the computer's choice
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

// function for getting the human's input
function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon (rock, paper, scissors):").toLowerCase();
    return humanChoice;
}

//main function for the entire game
function playGame() {

    console.log(playRound(getHumanChoice(), getComputerChoice()));
    if ((humanScore < 5) && (computerScore < 5)) {
        playGame();
    } else {
        console.log(endGame());
    }

    // function for one round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {

            return `Your score = ${humanScore}, Opponent's score = ${computerScore}
            It's a draw...`;
        } else if ((humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "rock")) {
            humanScore++;
            return `Your score = ${humanScore}, Opponent's score = ${computerScore}
            Nice! Your ${humanChoice} beat(s) the opponents's ${computerChoice}.`;
        } else {
            computerScore++;
            return `Your score = ${humanScore}, Opponent's score = ${computerScore}
            Uh oh! The opponent's ${computerChoice} beat(s) your ${humanChoice}.`;
        }
    }

    // function that ends the game
    function endGame() {
        if (humanScore > computerScore) {
            return `You win!
            Your score = ${humanScore}
            Opponent's score = ${computerScore}`
        } else if (humanScore < computerScore) {
            return `You lose!
            Your score = ${humanScore}
            Opponent's score = ${computerScore}`
        } else {
            return `It's a draw.
            Your score = ${humanScore}
            Opponent's score = ${computerScore}`
        };
    }

}

playGame();