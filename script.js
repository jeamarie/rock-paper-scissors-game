let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let computerScore = 0;
let humanScore = 0;
let round = 0;

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

// function for getting the human's choice of weapon
function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon:").toLowerCase();
    return humanChoice;
}

//function for replaying a round
function playGame() {
 

    // function for a round of play
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            round++;
            return `Round ${round}, Scores = ${humanScore}, ${computerScore}
                It's a draw...`;
        } else if ((humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "rock")) {
            humanScore++;
            round++;
            return `Round ${round}, Scores = ${humanScore}, ${computerScore}
                Nice! Your ${humanChoice} beats the computer's ${computerChoice}.`;
        } else {
            computerScore++;
            round++;
            return `Round ${round}, Scores = ${humanScore}, ${computerScore}
                Uh oh! The computer's ${computerChoice} beats your ${humanChoice}.`;
        }
    }

    console.log(playRound(humanSelection, computerSelection));

    if (round < 5) {
        playGame();
    } else {
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
        };
    }



    // let roundOne = playRound(getHumanChoice(), getComputerChoice());
    // let roundTwo = playRound(getHumanChoice(), getComputerChoice());
    // let roundThree = playRound(getHumanChoice(), getComputerChoice());
    // let roundFour = playRound(getHumanChoice(), getComputerChoice());
    // let roundFive = playRound(getHumanChoice(), getComputerChoice());

    // console.log(roundOne);
    // console.log(roundTwo);
    // console.log(roundThree);
    // console.log(roundFour);
    // console.log(roundFive);

    // if (humanScore > computerScore) {
    //     return `You win!
    //     Your score = ${humanScore}
    //     Computer's score = ${computerScore}`
    // } else if (humanScore < computerScore) {
    //     return `You lose!
    //     Your score = ${humanScore}
    //     Computer's score = ${computerScore}`
    // } else {
    //     return `It's a draw.
    //     Your score = ${humanScore}
    //     Computer's score = ${computerScore}`
    // }

}

playGame();