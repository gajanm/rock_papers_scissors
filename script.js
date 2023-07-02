const array = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*3);
    return array[randomIndex];
}

const computerSelection = getComputerChoice()



function playerRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result = 0;
    if ((playerSelection == "scissor" && computerSelection =="scissor") || (playerSelection == "rock" && computerSelection =="rock") || (playerSelection == "paper" && computerSelection =="paper")){
        result = 1;
    }
    else if((playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock")){
        result = 2;
    }
    else{
        result = 3;
    }
    return result;

}







function game(){
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i<5; i++){
        let p = prompt("What do you choose?");
        let k = playerRound(p, computerSelection);
        if (k == 2){
            playerWins++;
            console.log("You won the " + i + "st round");
        }
        else if(k == 3){
            computerWins++;
            console.log("The computer won the " + i + "st round");
        }
        else{
            console.log("You and the computer tied in the " + i + "st round")
        }
    }

    if (playerWins>computerWins){
        return ("You won the game winning " + playerWins + " rounds");
    }
    else if(computerWins>playerWins){
        return ("The computer won the game winning " + computerWins + " rounds");
    }
    else if (computerWins == playerWins){
        return ("You and the computer tied after 5 rounds")
    }

} 


console.log(game());
