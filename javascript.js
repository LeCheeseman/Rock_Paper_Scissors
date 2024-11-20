const MIN = 1;
const MAX = 9;
let humanScore = 0;
let compScore = 0;
let gamesPlayed = 0;

function getComputerChoice() {
    
    let compRandomNumber = Math.floor(Math.random() * (MAX - MIN)) + 1;

    // We use a number between 1-9 because there are three results
    // so we can distribute them evenly 1-3, 4-6, 7-9.
   
    if (compRandomNumber <= 3) { 
        return "rock";
    } if (compRandomNumber > 3 && compRandomNumber <= 6) { 
        return "paper";
    } 
    return "scissors";
    }


function playRound(choice) {

    checkGameStatus();
    let compChoice = getComputerChoice();

    key = choice + compChoice;

    // key is to access correct part of resultObject.

    if (choice == "rock" && compChoice == "paper") {
        writeResult();
        ++compScore, ++gamesPlayed;
    }
    if (choice == "rock" && compChoice == "scissors") {
        writeResult();
        ++humanScore, ++gamesPlayed;
        }
    if (choice == "rock" && compChoice == "rock") {
        writeResult();
        ++gamesPlayed;
        }
    if (choice == "paper" && compChoice == "rock") {
        writeResult();
        ++humanScore, ++gamesPlayed;
        }
    if (choice == "paper" && compChoice == "scissors") {
        writeResult();
        ++compScore, ++gamesPlayed;
        }
    if (choice == "paper" && compChoice == "paper") {
        writeResult();
        ++gamesPlayed;
        }
    if (choice == "scissors" && compChoice == "rock") {
        writeResult();
        ++compScore, ++gamesPlayed;
        }
    if (choice == "scissors" && compChoice == "paper") {
        writeResult();
        ++humanScore, ++gamesPlayed;
        }
    if (choice == "scissors" && compChoice == "scissors") {
        writeResult();
        ++gamesPlayed;
        }
    }

    function writeResult() { 

        div = document.querySelector("#results");
        playerElement = document.createElement("h3");
        playerElement.textContent = resultsObject[key].player;
        div.appendChild(playerElement);
    
        computerElement = document.createElement("h3");
        computerElement.textContent = resultsObject[key].computer;
        div.appendChild(computerElement);
        
        outcomeElement = document.createElement("h3");
        outcomeElement.textContent = resultsObject[key].outcome;
        div.appendChild(outcomeElement);
    }

    function checkGameStatus() { 

        if (gamesPlayed >= 1) {
            playerElement.remove();
            computerElement.remove();
            outcomeElement.remove();
            gamesPlayed = 0;
            // Delete created elements. 
        }
    }

// function playGame() {
//     for (let i = 1; i < 6; i++) {
//             console.log("Round: " +i)
//             playRound();
//         }
//             console.log("Game Over!")
//             finalScore();
//         }

 function finalScore() {
    console.log('');
    console.log("After five rounds, the scores are...");
    console.log("Player: " +humanScore);
    console.log("Computer: " +compScore);
    if (humanScore > compScore) console.log("You WIN!");
    if (compScore > humanScore) console.log("You LOSE!");
    if (humanScore === compScore) console.log("It's a draw!");
    resetScore();
 }

 function resetScore() {
    // Resetting global variables, so don't use 'let' 
    humanScore = 0;
    compScore = 0;
 }

 // EVENT LISTENERS

const rockButtonPressed = document.querySelector("#rock");

rockButtonPressed.addEventListener("click", (event) => {
    playRound("rock");
    console.log("EV Listener: Rock pressed");
    event.stopPropagation;
});

const scissorButtonPressed = document.querySelector("#scissors");

scissorButtonPressed.addEventListener("click", (event) => {
    playRound("scissors");
    console.log("EV Listener: Scissors pressed");
    event.stopPropagation;
});

const paperButtonPressed = document.querySelector("#paper");

paperButtonPressed.addEventListener("click", (event) => {
    playRound("paper");
    console.log("EV Listener: Paper pressed");
    event.stopPropagation;
});

// RESULTS_OBJECT

resultsObject = {
    "rockscissors": {
        player: "You play... Rock.",
        computer: "Computer plays... Scissors.",
        outcome: "Rock beats Scissors, you WIN!"
    },
    "rockpaper": {
        player: "You play... Rock.",
        computer: "Computer plays... Paper.",
        outcome: "Paper beats Rock, you LOSE!"
    },
    "rockrock": {
        player: "You play... Rock.",
        computer: "Computer plays... Rock.",
        outcome: "Rock and Rock, it's a draw!"
    },
    "scissorsrock": {
        player: "You play... Scissors.",
        computer: "Computer plays... Rock.",
        outcome: "Rock beats Scissors, you Lose!"
    },
    "scissorspaper": {
        player: "You play... Scissors.",
        computer: "Computer plays... Paper.",
        outcome: "Scissors beats Paper, you WIN!"
    },
    "scissorsscissors": {
        player: "You play... Scissors.",
        computer: "Computer plays... Scissors.",
        outcome: "Scissors and Scissors, it's a draw!"
    },
    "paperrock": {
        player: "You play... Paper.",
        computer: "Computer plays... Rock.",
        outcome: "Paper beats Rock, you WIN!"
    },
    "paperscissors": {
        player: "You play... Paper.",
        computer: "Computer plays... Scissors.",
        outcome: "Scissors beats Paper, you WIN!"
    },
    "paperpaper": {
        player: "You play... Paper.",
        computer: "Computer plays... Paper.",
        outcome: "Paper and Paper, it's a draw!"
    },

}
