console.log("*** Welcome to Rock Paper Scissors Game ***");
let choices = ["rock", "paper", "scissors"];
let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){    
    if(playerSelection === computerSelection){
        return `It's a tie`;
    }
    else if( (playerSelection === "rock" && computerSelection ===  "scissors") ||
             (playerSelection === "scissors" && computerSelection === "paper") ||
             (playerSelection === "paper" && computerSelection === "rock")){
        playerScore ++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        computerScore ++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const buttons = document.querySelectorAll('.btn');
const resultBox = document.querySelector('.result-box');

let round = 0;
buttons.forEach(button =>{
    button.addEventListener('click', () => {
        if (round === 5) {
            const winnerBox = document.createElement('div');

            if(playerScore === computerScore){
                winnerBox.textContent = `\nYour Score = ${playerScore}\n      Computer Score = ${computerScore}\nIt's a tie!`;
                resultBox.appendChild(winnerBox);
                round++;
                return;          
            }
            else if(playerScore > computerScore){
                winnerBox.textContent = `\nYour Score = ${playerScore}\nComputer Score = ${computerScore}\nYou are the Winner!`;
                resultBox.appendChild(winnerBox);
                round++;
                return;          
            }
            else{
                winnerBox.textContent = `\nYour Score = ${playerScore}\nComputer Score = ${computerScore}\nComputer is the Winner!`;
                resultBox.appendChild(winnerBox);
                round++;
                return;
            }  
        }
        else if(round > 5){
            return;
        }

        playerSelection = button.value;
        computerSelection = getComputerChoice();

        const currentScoreBox = document.createElement('div');
        currentScoreBox.textContent = playRound(playerSelection, computerSelection);
        resultBox.appendChild(currentScoreBox);

        console.log(`Computer chose ${computerSelection}\nPlayer chose ${playerSelection}`);
        round++;
    });
})





        

















