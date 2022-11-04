
/*
  
        // const getPlayerChoice = prompt("Rock, Paper, or Scissors? Choose wisely!");
        // let playerScore = "Player Score: " + 0 ;
        // let computerScore = "Computer Score: " + 0 ;



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
                    return "Scissor";
                    break; 
            }
        }


        function battle(getPlayerChoice, compChoice) {
            let playerScore = "Player Score: " + 0 ;
        let computerScore = "Computer Score: " + 0 ;
            if (getPlayerChoice == "Rock") {
                if (compChoice == "Rock") {
                    return "It's a tie!" + "Rock can't beat Rock" + "\n" + playerScore + " " + computerScore; 
                } else if (getComputerChoice() == "Paper") {
                    return "You lose!" + "Rock loses to Paper" + "\n" + playerScore + " " + computerScore;
                } else if (getComputerChoice() == "Scissor") {
                    return "You win!" + "Rock beats Scissor" + "\n" + playerScore+ + " " + computerScore;
                }
            }
            else if (getPlayerChoice == "Paper") {
                if (compChoice == "Paper") {
                    return "It's a tie! Paper can't beat Paper" + "\n" + playerScore + " " + computerScore;
                } else if (compChoice == "Rock") {
                    return "You win! Paper beats Rock" + "\n" + [playerScore+1] + " " + computerScore;
                } else if (compChoice == "Scissor") {
                    return "You lose! Paper loses Scissor" + "\n" + playerScore + " " + [computerScore+1];
                }
            }
            else if (getPlayerChoice == "Scissor") {
                if (compChoice == "Scissor") {
                    return "It's a tie! Scissor can't beat Scissor" + "\n" + playerScore + " " + computerScore;
                } else if (compChoice == "Paper") {
                    return "You win! Scissor beats Paper" + "\n" + [playerScore+1] + " " + computerScore;
                } else if (compChoice == "Scissor") {
                    return "You lose! Scissor lose Rock" + "\n" + playerScore + " " + [computerScore+1];
                }
            }
            else {
                return "Pick the right choices!";
            }
        }


        // console.log(battle(getPlayerChoice, getComputerChoice));

        function game() {
            // let playerScore = "Player Score: " + 0 ;
        // let computerScore = "Computer Score: " + 0 ;
            for (let i = 0; i < 5; i++) {
                const getPlayerChoice = prompt("Rock, Paper, or Scissors? Choose wisely!");
                const compChoice = getComputerChoice();
                battle(getPlayerChoice, compChoice);
                console.log(battle(getPlayerChoice, compChoice));
                if(battle(getPlayerChoice, compChoice) == "You win!") {
                    playerScore++;
                } else if (battle(getPlayerChoice, compChoice) == "You lose!") {
                    computerScore++;
                } else {
                    console.log("Tie.");
                }
            }
        }

        game()

        // console.log(battle(getPlayerChoice, getComputerChoice));

                
                






                // console.log(game());
                


        
                /* function sample() {
                    for (let i = 0; i < 6; i++) {
                    // console.log(i);
                    }
                } 

                console.log(sample()); */
   
