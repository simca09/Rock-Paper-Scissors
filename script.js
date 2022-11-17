//console.log("Hi");

//let getPlayerChoice = prompt("Rock, Paper, or Scissors? Choose wisely!");


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random () *3);
    switch (computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break; 
    }
}




const rockButton = document.querySelector(".rock");

const paperButton = document.querySelector(".paper")

const scissorsButton = document.querySelector(".scissors")

const container = document.querySelector(".container")

const outcomeDiv = document.querySelector(".outcome")

const compChoice = getComputerChoice()





function winner(getPlayerChoice, compChoice) {
    if (getPlayerChoice == compChoice) {
        return "Tie!!!";
    }
    else if (
        (getPlayerChoice == "rock" && compChoice == "scissors") ||
        (getPlayerChoice == "scissors" && compChoice == "paper") ||
        (getPlayerChoice == "paper" && compChoice == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}


function rockPlayerSelection() {
    return "rock";
}





function round(getPlayerChoice, compChoice) {
    const result = winner(getPlayerChoice, compChoice);
    if (result == "Tie!!!") {
        const p = document.createElement("p")
        p.innerText = "It's a tie!"
        outcomeDiv.appendChild(p)
    } else if (result == "Player") {
        const p = document.createElement("p")
        p.innerText = `You win! ${getPlayerChoice} beats ${compChoice}`
        outcomeDiv.appendChild(p)
    } else {
        const p = document.createElement("p")
        p.innerText = `You lose! ${compChoice} beats ${getPlayerChoice}`
        outcomeDiv.appendChild(p)
    }
}




function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome you scrub");
    // for(let i = 0; i < 5; i++) {
        // getPlayerChoice = prompt("Rock, Paper, or Scissors? Choose wisely! It's case-sensitive");
        // const getPlayerChoice = onclick;
        // compChoice = getComputerChoice();
        console.log(round(getPlayerChoice, compChoice));
        console.log("===================================");
        if (winner(getPlayerChoice, compChoice) == "Player") {
            scorePlayer++;
        } else if (winner(getPlayerChoice, compChoice) == "Computer") {
            scoreComputer++;
        }
    // }
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

 
rockButton.addEventListener("click", () => {
    const compChoice = getComputerChoice()
    const getPlayerChoice = "rock";
    round(getPlayerChoice, compChoice)
});

paperButton.addEventListener("click", () => {
    const compChoice = getComputerChoice()
    const getPlayerChoice = "paper";
    round(getPlayerChoice, compChoice)
});

scissorsButton.addEventListener("click", () => {
    const compChoice = getComputerChoice()
    const getPlayerChoice = "scissors";
    round(getPlayerChoice, compChoice)
});