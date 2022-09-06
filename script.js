const plChoice = document.querySelector('#player-choice');
const pcChoice = document.querySelector('#computer-choice');
const roundResult = document.querySelector('#round-result');
const plScore = document.querySelector('#player-score');
const pcScore = document.querySelector('#computer-score');
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');

rockBtn.addEventListener("click", () => {
    playRound('rock', computerTurn());
})

paperBtn.addEventListener("click", () => {
    playRound('paper', computerTurn());
})

scissorsBtn.addEventListener("click", () => {
    playRound('scissors', computerTurn());
})



let playerScore = 0;
let computerScore = 0;
function computerTurn() {
    let variables = ['rock', 'paper', 'scissors'];
    return variables[Math.floor(Math.random() * variables.length)];
}

function playRound(playerChoice, computerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        if (playerChoice == 'rock') {
            plChoice.className = 'fa-regular fa-hand-back-fist';
        }
        else if (playerChoice == 'paper') {
            plChoice.className = 'fa-regular fa-hand';
        }
        else if (playerChoice == 'scissors') {
            plChoice.className = 'fa-regular fa-hand-scissors';
        }
        if (computerChoice == 'rock') {
            pcChoice.className = 'fa-regular fa-hand-back-fist';
        }
        else if (computerChoice == 'paper') {
            pcChoice.className = 'fa-regular fa-hand';
        }
        else if (computerChoice == 'scissors') {
            pcChoice.className = 'fa-regular fa-hand-scissors';
        }
        if (playerChoice == 'rock' && computerChoice == 'scissors') {
            roundResult.textContent = "YOU WIN!";
            playerScore++;
            plScore.textContent = playerScore;
        }
        else if (playerChoice == 'rock' && computerChoice == 'paper') {
            roundResult.textContent = "YOU LOSE!";
            computerScore++;
            pcScore.textContent = computerScore;
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock') {
            roundResult.textContent = "YOU WIN!";
            playerScore++;
            plScore.textContent = playerScore;
        }
        else if (playerChoice == 'paper' && computerChoice == 'scissors') {
            roundResult.textContent = "YOU LOSE!";
            computerScore++;
            pcScore.textContent = computerScore;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'paper') {
            roundResult.textContent = "YOU WIN!";
            playerScore++;
            plScore.textContent = playerScore;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'rock') {
            roundResult.textContent = "YOU LOSE!";
            computerScore++;
            pcScore.textContent = computerScore;
        }
        else if (playerChoice == computerChoice) {
            roundResult.textContent = "TIE!";
        }
        if (roundResult.textContent == 'YOU WIN!') {
            roundResult.style.cssText = 'color: rgb(0, 255, 42)';
        }
        else if (roundResult.textContent == "YOU LOSE!") {
            roundResult.style.cssText = 'color: red';
        }
        else if (roundResult.textContent == "TIE!") {
            roundResult.style.cssText = 'color: yellow';
        }
        if (playerScore == 5 || computerScore == 5) {
            plScore.textContent = playerScore;
            pcScore.textContent = computerScore;
            popup();
        }
    }
}

function popup() {
    let popup = document.querySelector('.popup');
    popup.classList.toggle('active');
    const restartButton = document.querySelector('#restart-button');
    const result = document.querySelector('#game-result');
    const endGame = document.querySelector('.popup.active');
    if (playerScore == 5) {
        result.textContent = "YOU WIN!";
        endGame.style.cssText = "background-color: green";
    }
    else if (computerScore == 5) {
        result.textContent = "YOU LOSE!";
        endGame.style.cssText = "background-color: red";
    }
    restartButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        plScore.textContent = playerScore;
        pcScore.textContent = computerScore;
        roundResult.textContent = "";
        pcChoice.className = "";
        plChoice.className = "";
    })
}






