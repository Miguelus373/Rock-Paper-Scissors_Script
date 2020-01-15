// Variables
const general = document.querySelector('#general')
const buttons = document.querySelector('#buttons')
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const reset = document.querySelector('.reset')

let playerScore = 0;
let computerScore = 0;
let vs;

let div = document.createElement('div');
    div.classList.add('results')

let competition = document.createElement('p');
    competition.classList.add('vs')

let resultsPara = document.createElement('p');
    resultsPara.classList.add('round')

let win = document.createElement('p');
    win.classList.add('win');

let winner = document.createElement('p');
    winner.classList.add('winner');

rock.addEventListener('click', function () {
    dataLog()
});

paper.addEventListener('click', function () {
    dataLog()
});

scissors.addEventListener('click', function () {
    dataLog()
});

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    
    competition.textContent = "";
    resultsPara.textContent = "";
    win.textContent = "";
    winner.textContent = "";
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

//Logs all the results
function dataLog() {
    if (playerScore < 5 && computerScore < 5) {
        resultsPara.textContent = playRound("Rock", computerPlay());
        win.textContent = score();
        winner.textContent = matchWinner();
    }    
}

div.appendChild(competition);
div.appendChild(resultsPara);
div.appendChild(win);
div.appendChild(winner);
general.appendChild(div);