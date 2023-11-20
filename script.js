console.log("*** Welcome to Rock Paper Scissors Game ***");
let choices = ["rock", "paper", "scissors"];
let playerSelection, computerSelection;
let playerScore = 0, computerScore = 0;

const getComputerChoice = () => {
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

function game() {
    for(let i=0; i<5; i++){
        playerSelection = prompt("Enter your choice here: ", "").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore === computerScore){
        return `\nYour Score = ${playerScore}\nComputer Score = ${computerScore}\nIt's a tie!`;
    }
    else if(playerScore > computerScore){
        return `\nYour Score = ${playerScore}\nComputer Score = ${computerScore}\nYou are the Winner!`;
    }
    else{
        return `\nYour Score = ${playerScore}\nComputer Score = ${computerScore}\nComputer is the Winner!`;
    }
}

console.log(game());







