const array = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*3);
    return array[randomIndex];
}





function playerRound(playerSelection, computerSelection){
    
    
    let result = 0;
    if ((playerSelection == "scissor" && computerSelection =="scissor") || (playerSelection == "rock" && computerSelection =="rock") || (playerSelection == "paper" && computerSelection =="paper")){
        result = "You tied";
    }
    else if((playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock")){
        result = "You won";
    }
    else{
        result = "The computer won"
    }
    return result;

}




const updateResults = document.querySelector(".update .right");
const updatePlayerScore = document.querySelector(".update .left .score .player");
const updateComputerScore = document.querySelector(".update .left .score .computer")




function game(){
    
    let tracker = "";
    
    
        let rock = document.querySelector("#rock");
        rock.addEventListener("click", () => {
                let x = "rock";
                let computerSelection = getComputerChoice()
                tracker = (playerRound(x, computerSelection))
                scoreUpdate(tracker);
                
        } )
        ;
        

        let scissor = document.querySelector("#scissor");
            scissor.addEventListener("click", () => {
                let x = "scissor";
                let computerSelection = getComputerChoice()
                tracker = (playerRound(x, computerSelection));
                scoreUpdate(tracker);
            } );

        let paper = document.querySelector("#paper");
            paper.addEventListener("click", () => {
                let x = "paper";
                let computerSelection = getComputerChoice()
                tracker = (playerRound(x, computerSelection));
                scoreUpdate(tracker);
            } )
        
        
        
    
    }


        

let playerWins = 0;
let computerWins = 0;
let rounds = 0;

function scoreUpdate(tracker){
    
    
    if (playerWins <5 && computerWins <5){
    if (tracker == "You won"){
        playerWins+=1;
        rounds++;
        updateResults.textContent = ("You won in round " + rounds);
        updatePlayerScore.textContent = playerWins;
        
        }
    if(tracker == "The computer won"){
        computerWins+=1;
        rounds++;
        updateResults.textContent = ("The computer won in round " + rounds);
        updateComputerScore.textContent = computerWins;
    }
    if(tracker == "You tied"){
        rounds++;
        updateResults.textContent = ("You and the computer tied in round " + rounds)
       }
    }

    if(playerWins == 5){
        updateResults.textContent = "You beat the computer by winning 5 rounds"
    }

    if(computerWins == 5){
        updateResults.textContent = "The computer beat the computer by winning 5 rounds"
    }
    }


   


           
        
/*
        const scissor = document.querySelector("#scissor");
        scissor.addEventListener("click", function(e){
            tracker = playerRound("scissor", computerSelection);
            if (tracker == "You won"){
                playerWins++;
                console.log("You won the " + i + "st round");
                }
            else if(tracker == "The computer won"){
                computerWins++;
                console.log("The computer won the " + i + "st round");
            }
            else if(tracker == "You tied"){
                tie++;
                console.log("You and the computer tied in the " + i + "st round")
               }
        })
    }


        const paper = document.querySelector("#paper");
        paper.addEventListener("click", function(e){
            tracker = playerRound("paper", computerSelection);
            if (tracker == "You won"){
                playerWins++;
                console.log("You won the " + i + "st round");
                }
            else if(tracker == "The computer won"){
                computerWins++;
                console.log("The computer won the " + i + "st round");
            }
            else if(tracker == "You tied"){
                tie++;
                console.log("You and the computer tied in the " + i + "st round")
               }

        i++;

        })
        
    
     

    if (playerWins + computerWins + tie == 5){

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
    
}
*/
game();
