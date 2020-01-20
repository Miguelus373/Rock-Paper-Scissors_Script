// Variables
const general = document.querySelector('#general');
const buttons = document.querySelector('#buttons');
const results = document.querySelector('#results');
const start = document.querySelector('#start');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const reset = document.querySelector('#reset');
const cpuRock = document.querySelector('.cpuRock');

let playerScore = 0;
let computerScore = 0;
let vs;

let playerScoreBoard = document.createElement('p');
playerScoreBoard.classList.add('playerScore');
results.appendChild(playerScoreBoard);

let cpuScoreBoard = document.createElement('p');
cpuScoreBoard.classList.add('cpuScore');
results.appendChild(cpuScoreBoard);

start.addEventListener('click', function () {
    startGame();
});

rock.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        
        playRound('Rock', computerPlay());
        score();
        matchWinner();      
    }
});

paper.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        
        playRound('Paper', computerPlay());
        score();
        matchWinner();
    }
});

scissors.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        
        playRound('Scissors', computerPlay());
        score();
        matchWinner();
    }   
});

reset.addEventListener('click', () => {
    
    playerScore = 0;
    computerScore = 0;  

    playerScoreBoard.textContent = "Your wins: " + playerScore;
    cpuScoreBoard.textContent = "Cpu wins: " + computerScore;

    document.getElementById('title').textContent = "Can you beat the computer?"
    document.getElementById('reset').style.visibility = "hidden";
    document.getElementById("cpuRock").style.scale = 1;
    document.getElementById("cpuPaper").style.scale = 1;
    document.getElementById("cpuScissors").style.scale = 1;
    document.getElementById('buttons').style.scale = 1;

})

function startGame() {
    
    document.getElementById("buttons").style.visibility = "visible";
    document.getElementById("border").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rules").style.visibility = "hidden";
    
    document.getElementById("title").textContent = "Can you beat the computer?"
    
    playerScoreBoard.textContent = "Your wins: " + playerScore;
    cpuScoreBoard.textContent = "Cpu wins: " + computerScore;
    
}

// Randomly gives computer's selection
function computerPlay() { 
        let select = ["Rock", "Paper", "Scissors"]
        let random = select[Math.floor(Math.random() * 3)];

        if (random == "Rock") {
            document.getElementById("cpuRock").style.scale = 1000;
            document.getElementById("cpuPaper").style.scale = 1;
            document.getElementById("cpuScissors").style.scale = 1;
            return(random)
        } else if (random == "Paper") {
            document.getElementById("cpuRock").style.scale = 1;
            document.getElementById("cpuPaper").style.scale = 1000;
            document.getElementById("cpuScissors").style.scale = 1;
            return(random)
        } else if (random == "Scissors") {
            document.getElementById("cpuRock").style.scale = 1;
            document.getElementById("cpuPaper").style.scale = 1;
            document.getElementById("cpuScissors").style.scale = 1000;
            return(random)
        }
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

    playerScoreBoard.textContent = "Your wins: " + playerScore;
    cpuScoreBoard.textContent = "Cpu wins: " + computerScore;

}
// Gives a winner according to scores
function matchWinner() {
    if (playerScore == 5 || computerScore == 5) {
        if (computerScore > playerScore) {
            
            document.getElementById('title').textContent = "The match is over. Cpu won this match!";
        } else if (playerScore > computerScore) {
            document.getElementById('title').textContent = "The match is over. You won this match!"
        } 
        document.getElementById('reset').style.visibility = "visible";
        document.getElementById('buttons').style.scale = 0.001;
    }
}