//console.log("Hi");

//let getPlayerChoice = prompt("Rock, Paper, or Scissors? Choose wisely!");


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random () *3);
    switch (computerChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break; 
    }
}

let compChoice = getComputerChoice();

function winner(getPlayerChoice, compChoice) {
    if (getPlayerChoice == compChoice) {
        return "Tie!!!";
    }
    else if (
        (getPlayerChoice == "Rock" && compChoice == "Scissors") ||
        (getPlayerChoice == "Scissors" && compChoice == "Paper") ||
        (getPlayerChoice == "Paper" && compChoice == "Rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}


function round(getPlayerChoice, compChoice) {
    const result = winner(getPlayerChoice, compChoice);
    if (result == "Tie!!!") {
        return "It's a tie!"
    } else if (result == "Player") {
        return `You win! ${getPlayerChoice} beats ${compChoice}`
    } else {
        return `You lose! ${compChoice} beats ${getPlayerChoice}`
    }
}


function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome you scrub");
    for(let i = 0; i < 5; i++) {
        getPlayerChoice = prompt("Rock, Paper, or Scissors? Choose wisely! It's case-sensitive");
        compChoice = getComputerChoice();
        console.log(round(getPlayerChoice, compChoice));
        console.log("===================================");
        if (winner(getPlayerChoice, compChoice) == "Player") {
            scorePlayer++;
        } else if (winner(getPlayerChoice, compChoice) == "Computer") {
            scoreComputer++;
        }
    }
    console.log ("Game Over Suckas");
    if (scorePlayer > scoreComputer) {
        console.log("Player was the winner");
    }
    else if ( scoreComputer > scorePlayer) {
        console.log("Computer WINSSSS");
    } else {
        console.log("Boringggg, We have a tie....");
    }
}

game();