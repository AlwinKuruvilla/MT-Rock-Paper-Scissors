let wins = 0;
let losses = 0;
let ties = 0;

function PickCompChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS"
    }
}

function DecideWinner(validChoice, compChoice) {
    if (validChoice === compChoice) {
        ties++;
        return "Tie";
    } else if (validChoice === "ROCK" && compChoice === "SCISSORS" ||
        validChoice === "SCISSORS" && compChoice === "PAPER" ||
        validChoice === "PAPER" && compChoice === "ROCK" ) {
        wins++;
        return "You Won!";
    } else {
        losses++;
        return "The Computer Won!";
    }
}

function VerifyChoice(playerChoice) {
    playerChoice = playerChoice.trim().toUpperCase()
    if(playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
        return playerChoice;
    } else return "ROCK";
}

function DisplayScores() {
    return "Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties
}

function ResetScores() {
    wins = 0;
    losses = 0;
    ties = 0;
}

function playGame() {
    let numOfRounds = prompt("How many rounds would you like to play?");

    for (let i = 1; i <= numOfRounds; i++) {
        let playerChoice = prompt("Round " + i + " of " + numOfRounds + "\nPlease enter your choice: (ROCK, PAPER, SCISSORS)");
        let validChoice = VerifyChoice(playerChoice);
        let compChoice = PickCompChoice();
        alert("You chose " + validChoice + ". The computer chose " + compChoice + ".");
        alert(DecideWinner(validChoice, compChoice) + "\n" + DisplayScores());
    }

    alert("GAME OVER\nYour final score is: \n" + DisplayScores());
    ResetScores();
}