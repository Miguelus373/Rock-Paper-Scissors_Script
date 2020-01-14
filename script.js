// Variables
let playerScore = 0;
let computerScore = 0;
let vs;

// Asks the player for his/her selection
function ask() {
        let choice = prompt("Rock, paper or scissors?").toLocaleLowerCase()
        return(choice)
    }

    // Randomly gives computer's selection
function computerPlay() { 
        let select = ["rock", "paper", "scissors"]
        let random = select[Math.floor(Math.random() * 3)];
        return random
    } 

    // Plays a single round and gives the round winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock"){
            vs = "You won, " + playerSelection + " beats " + computerSelection
        
    } else if (playerSelection == computerSelection) {
            vs = "That's a draw"
         
    } else {
            vs = "You lose, " + computerSelection + " beats " + playerSelection
    }
    
    console.log(playerSelection + " vs " + computerSelection)
    return(vs);
}
// Records both scores
function score() {
    if (vs == "You won, rock beats scissors" || 
        vs == "You won, scissors beats paper" || 
        vs == "You won, paper beats rock") {
            playerScore += 1;
    
    } else if (vs == "That's a draw") {
            playerScore += 0;
            computerScore += 0;
    
    } else {
        computerScore += 1;
    }

console.log("Player wins: " + playerScore + 
" | Cpu wins: " + computerScore)
}
// Gives a winner according to scores
function winner() {
    if (computerScore > playerScore) {
       return("The match is over. Cpu won this match!")
   } else if (playerScore > computerScore) {
       return("The match is over. You won this match!")
   } else {
       return("The match is over. We have no winner today")
   }
}

// Plays 5 rounds and gives the match winner at the end
function game() {
   
    for (let i = 0; i < 5; i++) {
        console.log(playRound(ask(), computerPlay()));
        score()
    }
    
   return(winner())
}
//Restarts the game
function reset() {
    let again = prompt("Wanna play again?").toLocaleLowerCase();
    if (again == "yes") {
        playerScore = 0;
        computerScore = 0;
        return(game())
    } else {
        return("Alright then. Bye")
    }
}
console.log(game())
console.log(reset())