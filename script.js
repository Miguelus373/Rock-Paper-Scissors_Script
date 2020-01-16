// Variables
const general = document.querySelector('#general')
const buttons = document.querySelector('#buttons')
const results = document.querySelector('#results')
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const reset = document.querySelector('.reset')

let playerScore = 0;
let computerScore = 0;
let vs;

let competition = document.createElement('p');
    competition.classList.add('vs')
    competition.textContent = "Rules are simple:"

let resultsPara = document.createElement('p');
    resultsPara.classList.add('round')
    resultsPara.textContent = "1) Rock beats scissors"

let win = document.createElement('p');
    win.classList.add('win');
    win.textContent = "2) Scissors beat paper"

let winner = document.createElement('p');
    winner.classList.add('winner');
    winner.textContent = "3) Paper beats rock"

rock.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        resultsPara.textContent = playRound("Rock", computerPlay());
        win.textContent = score();
        winner.textContent = matchWinner();
    }
});

paper.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        resultsPara.textContent = playRound("Paper", computerPlay());
        win.textContent = score();
        winner.textContent = matchWinner();
    }
});

scissors.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        resultsPara.textContent = playRound("Scissors", computerPlay());
        win.textContent = score();
        winner.textContent = matchWinner();
    }
});

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    
    competition.textContent = "Rules are simple:"
    resultsPara.textContent = "1) Rock beats scissors";
    win.textContent = "2) Scissors beat paper";
    winner.textContent = "3) Paper beats rock";
})

// Randomly gives computer's selection
function computerPlay() { 
        let select = ["Rock", "Paper", "Scissors"]
        let random = select[Math.floor(Math.random() * 3)];
        return random
    } 

// Plays a single round and gives the round winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Rock"){
            vs = "You won. " + playerSelection + " beats " + computerSelection
        
    } else if (playerSelection == computerSelection) {
            vs = "That's a draw"
         
    } else {
            vs = "You lose " + computerSelection + " beats " + playerSelection
    }
    
    competition.textContent = playerSelection + " vs " + computerSelection;
    return( vs);
}

// Records both scores
function score() {
    if (vs == "You won. Rock beats Scissors" || 
        vs == "You won. Scissors beats Paper" || 
        vs == "You won. Paper beats Rock") {
            playerScore += 1;
    
    } else if (vs == "That's a draw") {
            playerScore += 0;
            computerScore += 0;
    
    } else {
        computerScore += 1;
    }

    return("Player wins: " + playerScore + 
            " | Cpu wins: " + computerScore)
}
// Gives a winner according to scores
function matchWinner() {
    if (playerScore == 5 || computerScore == 5) {
        if (computerScore > playerScore) {
            return("The match is over. Cpu won this match!")
        } else if (playerScore > computerScore) {
            return("The match is over. You won this match!")
        } else {
            return("The match is over. We have no winner today")
        }
}
}

results.appendChild(competition);
results.appendChild(resultsPara);
results.appendChild(win);
results.appendChild(winner);