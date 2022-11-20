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


let scorePlayer = 0;
let scoreComputer = 0;


function round(getPlayerChoice, compChoice) {
    const result = winner(getPlayerChoice, compChoice);
    if (result == "Tie!!!") {
        const p = document.createElement("p")
        p.innerText = "It's a tie!" + "\n" + "Player Score: " + scorePlayer + " Computer Score: " + scoreComputer;
        outcomeDiv.appendChild(p)
    } else if (result == "Player") {
        const p = document.createElement("p")
        scorePlayer++;
        p.innerText = `You win! ${getPlayerChoice} beats ${compChoice}`+ "\n" + "Player Score: " + scorePlayer + " Computer Score: " + scoreComputer;
        outcomeDiv.appendChild(p)
    } else {
        const p = document.createElement("p")
        scoreComputer++;
        p.innerText = `You lose! ${compChoice} beats ${getPlayerChoice}`+ "\n" + "Player Score: " + scorePlayer + " Computer Score: " + scoreComputer;
        outcomeDiv.appendChild(p)
    }
    end ();
}

function end () { 
if (scorePlayer === 5) {
    const pwinner = document.createElement("p")
    pwinner.innerText = "Player was the winner";
    outcomeDiv.appendChild(pwinner)
    rockButton.setAttribute("disabled", 1);
    paperButton.setAttribute("disabled", 1);
    scissorsButton.setAttribute("disabled", 1);
} else if ( scoreComputer === 5) {
    const pwinner = document.createElement("p")
    pwinner.innerText = "Computer WINSSSS";
    outcomeDiv.appendChild(pwinner)
    rockButton.setAttribute("disabled", 1);
    paperButton.setAttribute("disabled", 1);
    scissorsButton.setAttribute("disabled", 1);
} else {
    return
}
}

function endGame() {
    // reset both score to 0
    scorePlayer = 0;
    scoreComputer = 0;
  
    // reenable all the RPS buttons so that user can continue to play
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
    round(getPlayerChoice, compChoice);
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

/*function game(getPlayerChoice, compChoice) {
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
        };
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

game(); */