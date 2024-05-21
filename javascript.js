const choices = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function getHumanChoice(){
    return prompt("Enter your choice:");
}

function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        console.log("You loose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors")
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        console.log("You loose! Scissors beat paper");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        console.log("You loose! Rock beats scissors");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beat paper");
        humanScore++;
    }
    else{
        console.log("It's a tie!");
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        console.log("You won the game!");
    }
    else if (computerScore > humanScore){
        console.log("You lost the game!");
    }
    else{
        console.log("It's a tie!");
    }
}

playGame();