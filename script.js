const array = ["rock", "paper", "scissor"]

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*3);
    return array[randomIndex];
}





function playerRound(playerSelection, computerSelection){
    
    
    let result = 0;
    if ((playerSelection == "scissor" && computerSelection =="scissor") || (playerSelection == "rock" && computerSelection =="rock") || (playerSelection == "paper" && computerSelection =="paper")){
        result = `You tied. You chose ${playerSelection}. The computer chose ${computerSelection}`;
    }
    else if((playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock")){
        result = `You won. You chose ${playerSelection}. The computer chose ${computerSelection}`;
    }
    else{
        result = `The computer won. You chose ${playerSelection}. The computer chose ${computerSelection}`;
    }
    return result;

}




const updateResults = document.querySelector(".update");



i = 0;
function game(){
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;
    let tracker = "";
    
    if (i<5){
        let rock = document.querySelector("#rock");
        rock.addEventListener("click", () => {
                let x = "rock";
                let computerSelection = getComputerChoice()
                tracker = (playerRound(x, computerSelection))
                i++;
                updateResults.textContent=tracker;
                
        } )
        ;
        

        let scissor = document.querySelector("#scissor");
            scissor.addEventListener("click", () => {
                let x = "scissor";
                let computerSelection = getComputerChoice()
                tracker = (playerRound(x, computerSelection));
                i++;
                updateResults.textContent=tracker;
            } );

        let paper = document.querySelector("#paper");
            paper.addEventListener("click", () => {
                let x = "paper";
                i++;
                let computerSelection = getComputerChoice()
                tracker = (playerRound(x, computerSelection));
                console.log(tracker);
                updateResults.textContent=tracker;
            } )
        
    
    
    }

        
    }


/*  
//}

   
}
/*

        
        
        } )}
        )

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
